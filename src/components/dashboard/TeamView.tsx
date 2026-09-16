import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users2,
  UserPlus,
  Mail,
  Lock,
  Phone,
  Briefcase,
  Search,
  CheckCircle2,
  ShieldCheck,
  Trash2,
  KeyRound,
  Eye,
  EyeOff,
  Building2,
  Clock
} from 'lucide-react';
import { useEmployees } from '../../context/EmployeeContext';
import { EmployeeAccount } from '../../types';

export const TeamView: React.FC = () => {
  const { employees, tasks, addEmployee, updateEmployee, deleteEmployee } = useEmployees();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [visiblePasswords, setVisiblePasswords] = useState<Record<string, boolean>>({});

  // Add Employee Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('Engineering');
  const [phone, setPhone] = useState('');

  const togglePasswordVisibility = (empId: string) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [empId]: !prev[empId]
    }));
  };

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;

    addEmployee({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
      role: role.trim() || 'Software Specialist',
      department,
      phone: phone.trim() || undefined,
      status: 'Active'
    });

    // Reset Form
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
    setPhone('');
    setIsAddModalOpen(false);
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesDept = deptFilter === 'All' || emp.department === deptFilter;
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const departments = ['All', 'Engineering', 'AI & Data', 'Design & Creative', 'Content & Strategy'];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SuperAdmin Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Employee Accounts & Access
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Create and manage accounts for your team members so they can log in and view assigned work.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          id="add-employee-btn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-bold text-sm shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Employee Account</span>
        </button>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Total Employees</span>
            <div className="text-2xl font-extrabold text-white mt-1">{employees.length}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Users2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Active Staff</span>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">
              {employees.filter((e) => e.status === 'Active').length}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Assigned Deliverables</span>
            <div className="text-2xl font-extrabold text-amber-400 mt-1">{tasks.length}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Briefcase className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search employee by name, email, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setDeptFilter(dept)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                deptFilter === dept
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.length === 0 ? (
          <div className="col-span-full p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-400">
            <Users2 className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No Employee Accounts Registered</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1">
              No employee accounts exist yet. As SuperAdmin, use the "Add Employee Account" button to add team members and assign work.
            </p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black text-xs font-bold transition-colors cursor-pointer"
            >
              Add First Employee
            </button>
          </div>
        ) : (
          filteredEmployees.map((emp) => {
          const empTasks = tasks.filter((t) => t.assignedToEmployeeId === emp.id);
          const activeTasks = empTasks.filter((t) => t.status === 'In Progress' || t.status === 'Pending');
          const isPassVisible = visiblePasswords[emp.id];

          return (
            <div
              key={emp.id}
              className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={emp.avatar}
                      alt={emp.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border border-amber-500/30 shrink-0"
                    />
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {emp.name}
                      </h3>
                      <p className="text-xs text-amber-400 font-medium">{emp.role}</p>
                    </div>
                  </div>

                  <select
                    value={emp.status}
                    onChange={(e) => updateEmployee(emp.id, { status: e.target.value as EmployeeAccount['status'] })}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-xl cursor-pointer focus:outline-none ${
                      emp.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <option value="Active" className="bg-zinc-900 text-white">Active</option>
                    <option value="On Leave" className="bg-zinc-900 text-white">On Leave</option>
                    <option value="Suspended" className="bg-zinc-900 text-white">Suspended</option>
                  </select>
                </div>

                {/* Account Details & Credentials */}
                <div className="space-y-2 mb-4 p-3 rounded-xl bg-black/50 border border-zinc-800/80 text-xs">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-zinc-400" />
                      Login Email:
                    </span>
                    <span className="font-mono font-medium text-white truncate max-w-[170px]">{emp.email}</span>
                  </div>

                  {emp.password && (
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        Password:
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-semibold text-amber-300">
                          {isPassVisible ? emp.password : '••••••••'}
                        </span>
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(emp.id)}
                          className="text-zinc-500 hover:text-white p-0.5"
                          title={isPassVisible ? 'Hide Password' : 'Show Password'}
                        >
                          {isPassVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                      Department:
                    </span>
                    <span className="text-zinc-300 font-medium">{emp.department}</span>
                  </div>

                  {emp.phone && (
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-zinc-400" />
                        Phone:
                      </span>
                      <span className="text-zinc-300">{emp.phone}</span>
                    </div>
                  )}
                </div>

                {/* Assigned Tasks Summary */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-zinc-400 font-semibold">Active Tasks ({activeTasks.length})</span>
                    <span className="text-[11px] text-zinc-500">Total: {empTasks.length}</span>
                  </div>

                  {activeTasks.length === 0 ? (
                    <p className="text-[11px] text-zinc-500 italic">No pending tasks assigned.</p>
                  ) : (
                    <div className="space-y-1.5">
                      {activeTasks.slice(0, 2).map((t) => (
                        <div
                          key={t.id}
                          className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-[11px] text-zinc-300 flex items-center justify-between gap-2"
                        >
                          <span className="truncate">{t.title}</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 shrink-0">
                            {t.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                <span>Joined {emp.createdAt}</span>
                <button
                  onClick={() => deleteEmployee(emp.id)}
                  className="text-zinc-500 hover:text-rose-400 transition-colors p-1"
                  title="Remove Employee Account"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        }))}
      </div>

      {/* Add Employee Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Add Employee & Create Account
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Provide credentials for the employee to access their assigned dashboard.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-zinc-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateEmployee} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Employee Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-zinc-300 mb-1">
                      Login Email ID *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="employee@jyruka.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-zinc-300 mb-1">
                      Account Password *
                    </label>
                    <input
                      type="text"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="e.g. jyruka_emp1"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-zinc-300 mb-1">
                      Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="AI & Data">AI & Data</option>
                      <option value="Design & Creative">Design & Creative</option>
                      <option value="Content & Strategy">Content & Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-zinc-300 mb-1">
                      Designation / Role Title
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. IoT Engineer / UI Designer"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98421 00000"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white font-semibold text-xs"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-bold text-xs shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
