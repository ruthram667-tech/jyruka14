import React, { useState } from 'react';
import {
  Inbox,
  Mail,
  Building,
  Calendar,
  DollarSign,
  Clock,
  Trash2,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  UserCheck,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { useInquiries } from '../../context/InquiryContext';
import { useEmployees } from '../../context/EmployeeContext';
import { Inquiry } from '../../types';

interface InquiriesViewProps {
  onNavigateToAssignments?: () => void;
}

export const InquiriesView: React.FC<InquiriesViewProps> = ({ onNavigateToAssignments }) => {
  const { inquiries, updateInquiryStatus, deleteInquiry } = useInquiries();
  const { employees, assignWork } = useEmployees();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [assigningEmpId, setAssigningEmpId] = useState('');
  const [assignSuccessMsg, setAssignSuccessMsg] = useState<string | null>(null);

  const filtered = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === 'All' || inq.status === filterStatus;
    const matchesSearch =
      inq.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.clientEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (inq.companyName && inq.companyName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      inq.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleQuickAssign = (inq: Inquiry) => {
    if (!assigningEmpId) return;
    const employee = employees.find((e) => e.id === assigningEmpId);
    if (!employee) return;

    assignWork({
      title: `Client Request: ${inq.serviceCategory} for ${inq.clientName}`,
      description: inq.message,
      assignedToEmployeeId: employee.id,
      assignedToEmployeeName: employee.name,
      clientRequestId: inq.id,
      clientName: inq.companyName ? `${inq.clientName} (${inq.companyName})` : inq.clientName,
      priority: inq.priority || 'High',
      status: 'In Progress',
      dueDate: inq.timeline || new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
      tags: [inq.serviceCategory.split(' ')[0], 'Client Request']
    });

    updateInquiryStatus(inq.id, 'Converted');
    setAssignSuccessMsg(`Successfully assigned project to ${employee.name}!`);
    setTimeout(() => setAssignSuccessMsg(null), 4000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Client Inquiries & Discovery Requests
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Inbound leads submitted via the public contact form and sprint booking widgets.
          </p>
        </div>
        <div className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
          Total Leads: <strong className="text-white">{inquiries.length}</strong> ({inquiries.filter(i => i.status === 'New').length} new)
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by client name, email, company, or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['All', 'New', 'Under Review', 'Contacted', 'Converted'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                filterStatus === status
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-sm font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Main List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inquiries Table / Cards (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-400 text-sm">
              No inquiries found matching your filters.
            </div>
          ) : (
            filtered.map((inq) => {
              const isSelected = selectedInquiry?.id === inq.id;
              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">
                          {inq.clientName}
                        </h3>
                        {inq.companyName && (
                          <span className="text-xs text-zinc-400">
                            • {inq.companyName}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-amber-400 font-semibold mt-0.5">
                        {inq.serviceCategory}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={inq.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          updateInquiryStatus(inq.id, e.target.value as Inquiry['status'])
                        }
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border focus:outline-none transition-colors ${
                          inq.status === 'New'
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                            : inq.status === 'Under Review'
                            ? 'bg-zinc-800 border-zinc-700 text-zinc-300'
                            : inq.status === 'Contacted'
                            ? 'bg-amber-950/60 border-amber-800/60 text-amber-300'
                            : 'bg-zinc-800 border-zinc-700 text-zinc-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Converted">Converted</option>
                        <option value="Archived">Archived</option>
                      </select>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteInquiry(inq.id);
                          if (selectedInquiry?.id === inq.id) setSelectedInquiry(null);
                        }}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    {inq.message}
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1 text-zinc-300">
                      <Mail className="w-3 h-3 text-amber-400" />
                      {inq.clientEmail}
                    </span>
                    <span className="flex items-center gap-1 text-amber-300">
                      <DollarSign className="w-3 h-3 text-amber-400" />
                      {inq.budgetRange}
                    </span>
                    <span>Received: {inq.createdAt}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Detail Panel (1 col) */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 sticky top-4 h-fit space-y-5 shadow-xl shadow-black/30">
          {selectedInquiry ? (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                  Lead Details
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {selectedInquiry.clientName}
                </h3>
                {selectedInquiry.companyName && (
                  <p className="text-xs text-zinc-400">{selectedInquiry.companyName}</p>
                )}
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-zinc-400 block mb-0.5">Email Address:</span>
                  <a
                    href={`mailto:${selectedInquiry.clientEmail}`}
                    className="text-amber-400 hover:underline font-medium"
                  >
                    {selectedInquiry.clientEmail}
                  </a>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-0.5">Service Requested:</span>
                  <span className="font-semibold text-white">{selectedInquiry.serviceCategory}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-zinc-400 block mb-0.5">Budget:</span>
                    <span className="font-semibold text-amber-400">{selectedInquiry.budgetRange}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block mb-0.5">Timeline:</span>
                    <span className="font-semibold text-white">{selectedInquiry.timeline}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">Full Client Message:</span>
                  <div className="p-3.5 rounded-xl bg-black border border-zinc-800 text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {selectedInquiry.message}
                  </div>
                </div>

                {/* Assign to Employee Action Box */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-amber-500/30 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Assign Project to Employee</span>
                  </div>

                  {assignSuccessMsg ? (
                    <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{assignSuccessMsg}</span>
                    </div>
                  ) : (
                    <>
                      <select
                        value={assigningEmpId}
                        onChange={(e) => setAssigningEmpId(e.target.value)}
                        className="w-full bg-black border border-zinc-800 text-xs text-white rounded-lg p-2 focus:outline-none focus:border-amber-500"
                      >
                        <option value="">Select Employee to take this work...</option>
                        {employees.map((emp) => (
                          <option key={emp.id} value={emp.id}>
                            {emp.name} ({emp.role})
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        disabled={!assigningEmpId}
                        onClick={() => handleQuickAssign(selectedInquiry)}
                        className="w-full py-2 rounded-lg bg-amber-500 hover:bg-yellow-400 disabled:opacity-40 text-black font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Allocate Project & Create Assignment</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`mailto:${selectedInquiry.clientEmail}?subject=${encodeURIComponent(`Jyruka Squad Kickoff: ${selectedInquiry.serviceCategory}`)}`}
                  className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs text-center transition-colors border border-zinc-700 flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-zinc-500 text-xs">
              <Inbox className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
              Select an inquiry on the left to review full details and send quick responses.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
