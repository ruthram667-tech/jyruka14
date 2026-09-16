import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Plus,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Calendar,
  User,
  Search,
  Filter,
  Trash2,
  Sparkles,
  ArrowRight,
  FileText
} from 'lucide-react';
import { useEmployees } from '../../context/EmployeeContext';
import { useInquiries } from '../../context/InquiryContext';
import { WorkAssignment } from '../../types';

export const WorkAssignmentView: React.FC = () => {
  const { employees, tasks, assignWork, updateTaskStatus, deleteTask } = useEmployees();
  const { inquiries } = useInquiries();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Pending' | 'In Progress' | 'Under Review' | 'Completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedEmployeeId, setAssignedEmployeeId] = useState(employees[0]?.id || '');
  const [linkedInquiryId, setLinkedInquiryId] = useState('');
  const [priority, setPriority] = useState<WorkAssignment['priority']>('High');
  const [dueDate, setDueDate] = useState(new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10));
  const [tagsInput, setTagsInput] = useState('Development, IoT');

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = selectedFilter === 'all' || task.status === selectedFilter;
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignedToEmployeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.clientName && task.clientName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !assignedEmployeeId) return;

    const assignedEmp = employees.find((emp) => emp.id === assignedEmployeeId);
    const linkedInq = inquiries.find((inq) => inq.id === linkedInquiryId);

    assignWork({
      title: title.trim(),
      description: description.trim(),
      assignedToEmployeeId: assignedEmployeeId,
      assignedToEmployeeName: assignedEmp?.name || 'Assigned Specialist',
      clientRequestId: linkedInquiryId || undefined,
      clientName: linkedInq ? `${linkedInq.clientName} (${linkedInq.companyName || linkedInq.serviceCategory})` : undefined,
      priority,
      status: 'Pending',
      dueDate,
      tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
    });

    // Reset Form
    setTitle('');
    setDescription('');
    setLinkedInquiryId('');
    setTagsInput('Development, UI');
    setIsModalOpen(false);
  };

  const pendingCount = tasks.filter((t) => t.status === 'Pending').length;
  const inProgressCount = tasks.filter((t) => t.status === 'In Progress').length;
  const completedCount = tasks.filter((t) => t.status === 'Completed').length;

  return (
    <div className="space-y-8">
      {/* Header & Quick Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Task & Work Allocation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Work Assignments
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Assign project tasks and client briefs directly to your created employee accounts.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          id="assign-new-work-btn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-bold text-sm shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Assign New Work</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Pending Assignment</span>
            <div className="text-2xl font-extrabold text-white mt-1">{pendingCount}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Active In Progress</span>
            <div className="text-2xl font-extrabold text-amber-400 mt-1">{inProgressCount}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Briefcase className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Completed Deliverables</span>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">{completedCount}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search task, employee, or client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/60 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {(['all', 'Pending', 'In Progress', 'Under Review', 'Completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-amber-500 text-black font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {tab === 'all' ? 'All Tasks' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTasks.length === 0 ? (
          <div className="col-span-full text-center py-16 bg-zinc-900/40 rounded-2xl border border-dashed border-zinc-800">
            <Briefcase className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-zinc-400">No work assignments found.</p>
            <p className="text-xs text-zinc-600 mt-1">Click "Assign New Work" to allocate tasks to your employees.</p>
          </div>
        ) : (
          filteredTasks.map((task) => {
            const priorityColors = {
              Urgent: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
              High: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
              Medium: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
              Low: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
            };

            const statusColors = {
              Pending: 'bg-zinc-800 text-zinc-300',
              'In Progress': 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
              'Under Review': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
              Completed: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            };

            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl flex flex-col justify-between hover:border-zinc-700 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${priorityColors[task.priority]}`}>
                      {task.priority} Priority
                    </span>

                    <div className="flex items-center gap-2">
                      <select
                        value={task.status}
                        onChange={(e) => updateTaskStatus(task.id, e.target.value as WorkAssignment['status'])}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-xl cursor-pointer focus:outline-none ${statusColors[task.status]}`}
                      >
                        <option value="Pending" className="bg-zinc-900 text-white">Pending</option>
                        <option value="In Progress" className="bg-zinc-900 text-white">In Progress</option>
                        <option value="Under Review" className="bg-zinc-900 text-white">Under Review</option>
                        <option value="Completed" className="bg-zinc-900 text-white">Completed</option>
                      </select>

                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                        title="Delete Assignment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-2">
                    {task.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                    {task.description}
                  </p>

                  {task.clientName && (
                    <div className="mb-4 px-3 py-2 rounded-xl bg-black/40 border border-zinc-800/80 flex items-center gap-2 text-xs text-amber-300">
                      <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">Client: <strong className="text-white">{task.clientName}</strong></span>
                    </div>
                  )}

                  {task.deliverableNotes && (
                    <div className="mb-4 p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300">
                      <span className="font-semibold text-zinc-400 block mb-0.5">Deliverables & Progress Note:</span>
                      {task.deliverableNotes}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">
                      {task.assignedToEmployeeName.charAt(0)}
                    </div>
                    <span className="font-medium text-white">{task.assignedToEmployeeName}</span>
                  </div>

                  <div className="flex items-center gap-1 text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Due {task.dueDate}</span>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Assign Work Modal */}
      <AnimatePresence>
        {isModalOpen && (
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
                    Assign Work to Employee
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Allocate project tasks and deliverables to authorized team members.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-zinc-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateAssignment} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Task Title / Objective *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Implement AWS IoT sensor stream for Hydronix"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Assign To Employee *
                  </label>
                  <select
                    value={assignedEmployeeId}
                    onChange={(e) => setAssignedEmployeeId(e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} — {emp.role} ({emp.department})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Link Client Project Request (Optional)
                  </label>
                  <select
                    value={linkedInquiryId}
                    onChange={(e) => setLinkedInquiryId(e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="">-- Standalone Internal Task --</option>
                    {inquiries.map((inq) => (
                      <option key={inq.id} value={inq.id}>
                        [{inq.clientName}] {inq.serviceCategory} — {inq.budgetRange}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Task Scope & Description
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe specific engineering, design, or writing objectives and expectations..."
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-zinc-300 mb-1">Priority Level</label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value as WorkAssignment['priority'])}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Urgent">Urgent</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-zinc-300 mb-1">Due Date</label>
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-zinc-300 mb-1">
                    Tags (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="IoT, AWS, React, Shaders"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white font-semibold text-xs"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-bold text-xs shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer"
                  >
                    Assign Work
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
