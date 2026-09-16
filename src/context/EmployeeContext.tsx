import React, { createContext, useContext, useState, useEffect } from 'react';
import { EmployeeAccount, WorkAssignment } from '../types';
import { INITIAL_EMPLOYEES, INITIAL_WORK_ASSIGNMENTS } from '../data/mockData';

interface EmployeeContextType {
  employees: EmployeeAccount[];
  tasks: WorkAssignment[];
  addEmployee: (emp: Omit<EmployeeAccount, 'id' | 'createdAt'>) => EmployeeAccount;
  updateEmployee: (id: string, updates: Partial<EmployeeAccount>) => void;
  deleteEmployee: (id: string) => void;
  assignWork: (task: Omit<WorkAssignment, 'id' | 'createdAt'>) => WorkAssignment;
  updateTaskStatus: (id: string, status: WorkAssignment['status'], notes?: string) => void;
  deleteTask: (id: string) => void;
  getTasksForEmployee: (employeeId: string) => WorkAssignment[];
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

const EMPLOYEES_KEY = 'jyruka_employees';
const TASKS_KEY = 'jyruka_tasks';

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<EmployeeAccount[]>(() => {
    try {
      const saved = localStorage.getItem(EMPLOYEES_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load employees', e);
    }
    return INITIAL_EMPLOYEES;
  });

  const [tasks, setTasks] = useState<WorkAssignment[]>(() => {
    try {
      const saved = localStorage.getItem(TASKS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load tasks', e);
    }
    return INITIAL_WORK_ASSIGNMENTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(employees));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [employees]);

  useEffect(() => {
    try {
      localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [tasks]);

  const addEmployee = (empData: Omit<EmployeeAccount, 'id' | 'createdAt'>): EmployeeAccount => {
    const newEmployee: EmployeeAccount = {
      ...empData,
      id: `emp-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString().slice(0, 10),
      avatar: empData.avatar || `https://images.unsplash.com/photo-${1535713875002 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=300&q=80`
    };

    setEmployees((prev) => [newEmployee, ...prev]);
    return newEmployee;
  };

  const updateEmployee = (id: string, updates: Partial<EmployeeAccount>) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, ...updates } : emp))
    );
  };

  const deleteEmployee = (id: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const assignWork = (taskData: Omit<WorkAssignment, 'id' | 'createdAt'>): WorkAssignment => {
    const newTask: WorkAssignment = {
      ...taskData,
      id: `task-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };

    setTasks((prev) => [newTask, ...prev]);
    return newTask;
  };

  const updateTaskStatus = (id: string, status: WorkAssignment['status'], notes?: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status,
              deliverableNotes: notes !== undefined ? notes : t.deliverableNotes
            }
          : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const getTasksForEmployee = (employeeId: string) => {
    return tasks.filter((t) => t.assignedToEmployeeId === employeeId);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        tasks,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        assignWork,
        updateTaskStatus,
        deleteTask,
        getTasksForEmployee
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = (): EmployeeContextType => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};
