"use client";

import { useState } from "react";
import {
  Inbox,
  PhoneCall,
  HelpCircle,
  Settings,
  BarChart2,
  LogOut,
  Trash2,
  Plus,
  Tag,
  MessageSquare,
} from "lucide-react";
import type { AppDatabase, SessionInquiry, ServiceOffering, SiteSettings, ClientNote } from "@/lib/storage";
import {
  logoutAdmin,
  updateInquiryStatus,
  deleteInquiry,
  saveServiceOffering,
  saveFaq,
  deleteFaq,
  saveClientNote,
  deleteClientNote,
  updateSiteSettings,
  clearAnalytics,
} from "@/app/actions/admin";

interface AdminDashboardClientProps {
  initialDb: AppDatabase;
}

export function AdminDashboardClient({ initialDb }: AdminDashboardClientProps) {
  const [activeTab, setActiveTab] = useState<
    "inbox" | "services" | "faqs" | "notes" | "settings" | "analytics"
  >("inbox");

  const [db, setDb] = useState<AppDatabase>(initialDb);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [serviceFilter, setServiceFilter] = useState<string>("all");

  // Editing states
  const [editingService, setEditingService] = useState<ServiceOffering | null>(null);
  const [editingFaq, setEditingFaq] = useState<{
    id?: string;
    category: "Counselling" | "Voice Sessions" | "Hindi & Local" | "Reiki (Optional)";
    question: string;
    answer: string;
    isVisible: boolean;
  } | null>(null);

  const [editingNote, setEditingNote] = useState<ClientNote | null>(null);
  const [settingsForm, setSettingsForm] = useState<SiteSettings>(db.settings);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Inquiries filter
  const filteredInquiries = db.inquiries.filter((inq) => {
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    const matchesService = serviceFilter === "all" || inq.serviceType === serviceFilter;
    return matchesStatus && matchesService;
  });

  const handleStatusChange = async (
    id: string,
    status: SessionInquiry["status"],
    internalNotes?: string
  ) => {
    await updateInquiryStatus(id, status, internalNotes);
    setDb((prev) => ({
      ...prev,
      inquiries: prev.inquiries.map((i) =>
        i.id === id ? { ...i, status, internalNotes: internalNotes ?? i.internalNotes } : i
      ),
    }));
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this session inquiry?")) return;
    await deleteInquiry(id);
    setDb((prev) => ({
      ...prev,
      inquiries: prev.inquiries.filter((i) => i.id !== id),
    }));
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    await saveServiceOffering(editingService);
    setDb((prev) => ({
      ...prev,
      services: prev.services.map((s) => (s.id === editingService.id ? editingService : s)),
    }));
    setEditingService(null);
  };

  const handleSaveFaqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    await saveFaq(editingFaq);

    if (editingFaq.id) {
      setDb((prev) => ({
        ...prev,
        faqs: prev.faqs.map((f) => (f.id === editingFaq.id ? { ...f, ...editingFaq } : f)),
      }));
    } else {
      const newFaq = {
        ...editingFaq,
        id: `faq-${Date.now()}`,
        order: db.faqs.length + 1,
      };
      setDb((prev) => ({ ...prev, faqs: [...prev.faqs, newFaq] }));
    }
    setEditingFaq(null);
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm("Delete this FAQ entry?")) return;
    await deleteFaq(id);
    setDb((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((f) => f.id !== id),
    }));
  };

  const handleSaveNoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNote) return;
    await saveClientNote(editingNote);
    const existing = db.clientNotes.some((n) => n.id === editingNote.id);
    setDb((prev) => ({
      ...prev,
      clientNotes: existing
        ? prev.clientNotes.map((n) => (n.id === editingNote.id ? editingNote : n))
        : [editingNote, ...prev.clientNotes],
    }));
    setEditingNote(null);
  };

  const handleDeleteNote = async (id: string) => {
    if (!confirm("Delete this client reflection?")) return;
    await deleteClientNote(id);
    setDb((prev) => ({
      ...prev,
      clientNotes: prev.clientNotes.filter((n) => n.id !== id),
    }));
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSiteSettings(settingsForm);
    setDb((prev) => ({ ...prev, settings: settingsForm }));
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  const handleClearAnalytics = async () => {
    if (!confirm("Reset all privacy-first pageviews and service counters?")) return;
    await clearAnalytics();
    setDb((prev) => ({
      ...prev,
      analytics: {
        pageViews: {},
        serviceClicks: {},
        searchQueries: {},
        faqClicks: {},
        recentEvents: [],
      },
    }));
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EDE4] text-[#2D4A3E] text-[11px] font-semibold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Practice Administration Workspace</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2924]">
            Dr. Shivie Gupta — Practice Management
          </h1>
          <p className="text-xs text-[#52635A]">
            Manage voice session inquiries, service durations &amp; INR prices, client FAQs, and practice contact details.
          </p>
        </div>

        <form action={logoutAdmin}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E8E0D2] bg-[#FAF8F5] text-xs font-semibold text-[#52635A] hover:text-red-700 hover:border-red-200 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Lock Admin</span>
          </button>
        </form>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-2 px-2 touch-pan-x">
        <button
          onClick={() => setActiveTab("inbox")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
            activeTab === "inbox"
              ? "bg-[#2D4A3E] text-white shadow-xs"
              : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>Session Requests</span>
          {db.inquiries.filter((i) => i.status === "new").length > 0 && (
            <span className="px-1.5 py-0.2 bg-[#9E4A2A] text-white rounded-full text-[10px]">
              {db.inquiries.filter((i) => i.status === "new").length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("services")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
            activeTab === "services"
              ? "bg-[#2D4A3E] text-white shadow-xs"
              : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
          }`}
        >
          <Tag className="w-4 h-4" />
          <span>Services &amp; Pricing</span>
        </button>

        <button
          onClick={() => setActiveTab("faqs")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
            activeTab === "faqs"
              ? "bg-[#2D4A3E] text-white shadow-xs"
              : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>FAQ Knowledge Base</span>
        </button>

        <button
          onClick={() => setActiveTab("notes")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
            activeTab === "notes"
              ? "bg-[#2D4A3E] text-white shadow-xs"
              : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Client Notes (Optional)</span>
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
            activeTab === "settings"
              ? "bg-[#2D4A3E] text-white shadow-xs"
              : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Contact &amp; Hours</span>
        </button>

        <button
          onClick={() => setActiveTab("analytics")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
            activeTab === "analytics"
              ? "bg-[#2D4A3E] text-white shadow-xs"
              : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span>Local Analytics</span>
        </button>
      </div>

      {/* MODULE 1: SESSION INQUIRIES INBOX */}
      {activeTab === "inbox" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-[#E8E0D2]">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-semibold text-[#1F2924] uppercase tracking-wider">
                Status:
              </span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924] focus:outline-none"
              >
                <option value="all">All ({db.inquiries.length})</option>
                <option value="new">New ({db.inquiries.filter((i) => i.status === "new").length})</option>
                <option value="contacted">Contacted</option>
                <option value="scheduled">Scheduled</option>
                <option value="archived">Archived</option>
              </select>

              <span className="text-xs font-semibold text-[#1F2924] uppercase tracking-wider ml-2">
                Service:
              </span>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924] focus:outline-none"
              >
                <option value="all">All Services</option>
                <option value="Individual Counselling (Voice Call)">Individual Voice</option>
                <option value="Couple Counselling (Voice Call)">Couple Voice</option>
                <option value="Family Counselling (Voice Call)">Family Voice</option>
                <option value="Reiki Healing (Optional)">Reiki Healing</option>
              </select>
            </div>

            <span className="text-xs text-[#52635A]">
              Showing {filteredInquiries.length} of {db.inquiries.length} inquiries
            </span>
          </div>

          <div className="space-y-3">
            {filteredInquiries.length === 0 ? (
              <div className="p-10 rounded-2xl bg-white border border-[#E8E0D2] text-center text-xs text-[#52635A]">
                No session inquiries match this filter.
              </div>
            ) : (
              filteredInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#E8E0D2]/50 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base sm:text-lg font-bold text-[#1F2924]">
                          {inq.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                            inq.status === "new"
                              ? "bg-amber-100 text-amber-800"
                              : inq.status === "scheduled"
                              ? "bg-emerald-100 text-emerald-800"
                              : inq.status === "contacted"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </div>
                      <div className="text-xs text-[#52635A] flex items-center gap-2 mt-0.5 flex-wrap">
                        <a href={`tel:${inq.phone}`} className="text-[#2D4A3E] font-semibold underline">
                          {inq.phone}
                        </a>
                        {inq.email && (
                          <>
                            <span>•</span>
                            <a href={`mailto:${inq.email}`} className="text-[#52635A] underline">
                              {inq.email}
                            </a>
                          </>
                        )}
                        <span>•</span>
                        <span>{new Date(inq.timestamp).toLocaleDateString()}</span>
                        <span>•</span>
                        <span className="text-[#9E4A2A] font-semibold">{inq.serviceType}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        onClick={() => handleStatusChange(inq.id, "new")}
                        className="px-2.5 py-1 rounded-lg text-[11px] border border-[#E8E0D2] hover:bg-[#F2EDE4]"
                      >
                        New
                      </button>
                      <button
                        onClick={() => handleStatusChange(inq.id, "contacted")}
                        className="px-2.5 py-1 rounded-lg text-[11px] border border-[#E8E0D2] hover:bg-[#F2EDE4]"
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => handleStatusChange(inq.id, "scheduled")}
                        className="px-2.5 py-1 rounded-lg text-[11px] border border-[#E8E0D2] hover:bg-[#F2EDE4]"
                      >
                        Scheduled
                      </button>
                      <button
                        onClick={() => handleStatusChange(inq.id, "archived")}
                        className="px-2.5 py-1 rounded-lg text-[11px] border border-[#E8E0D2] hover:bg-[#F2EDE4]"
                      >
                        Archive
                      </button>
                      <button
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2]/50">
                      <strong className="text-[#9E4A2A] block uppercase text-[10px]">
                        Preferred Timing:
                      </strong>
                      <span>{inq.preferredTime}</span>
                    </div>
                    {inq.message && (
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2]/50">
                        <strong className="text-[#2D4A3E] block uppercase text-[10px]">
                          Client Message / Context:
                        </strong>
                        <p className="italic text-[#1F2924]">&ldquo;{inq.message}&rdquo;</p>
                      </div>
                    )}
                  </div>

                  {/* Internal Notes */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      defaultValue={inq.internalNotes || ""}
                      placeholder="Add private therapist note (e.g. called back on 24th, confirmed 6 PM)..."
                      onBlur={(e) => handleStatusChange(inq.id, inq.status, e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                    />
                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=Namaste%20${encodeURIComponent(
                        inq.name
                      )},%20this%20is%20Dr.%20Shivie%20Gupta%20regarding%20your%20voice%20counselling%20inquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shrink-0"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* MODULE 2: SERVICES & SESSION PRICING MANAGER */}
      {activeTab === "services" && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-white border border-[#E8E0D2] text-xs text-[#52635A] flex items-center justify-between">
            <span>
              Manage live session pricing, durations, and service descriptions shown across the site.
            </span>
            <span className="font-semibold text-[#1F2924]">
              {db.services.length} Services Configured
            </span>
          </div>

          {editingService && (
            <form
              onSubmit={handleSaveService}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#2D4A3E]/30 shadow-md space-y-4 animate-in fade-in"
            >
              <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-3">
                <h3 className="font-serif text-lg font-bold text-[#1F2924]">
                  Edit Service: {editingService.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="text-xs text-[#52635A] hover:text-[#1F2924]"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                    Session Fee (INR ₹)
                  </label>
                  <input
                    type="number"
                    value={editingService.priceINR}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        priceINR: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-sm font-bold text-[#2D4A3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                    Duration (Minutes)
                  </label>
                  <input
                    type="number"
                    value={editingService.durationMinutes}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        durationMinutes: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                    Service Badge
                  </label>
                  <select
                    value={editingService.badge}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        badge: e.target.value as "Primary Service" | "Optional Secondary Service",
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                  >
                    <option value="Primary Service">Primary Service</option>
                    <option value="Optional Secondary Service">Optional Secondary Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Tagline / Short Summary
                </label>
                <input
                  type="text"
                  value={editingService.tagline}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      tagline: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Full Overview Description
                </label>
                <textarea
                  rows={3}
                  value={editingService.overview}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      overview: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold hover:bg-[#1E332A] cursor-pointer"
                >
                  Save Service Pricing
                </button>
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2.5 rounded-full border border-[#E8E0D2] text-xs font-medium text-[#52635A]"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {db.services.map((svc) => (
              <div
                key={svc.id}
                className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] text-[#9E4A2A] border border-[#E8E0D2]">
                      {svc.badge}
                    </span>
                    <button
                      onClick={() => setEditingService(svc)}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[#E8E0D2] hover:bg-[#F2EDE4]"
                    >
                      Edit Pricing
                    </button>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1F2924]">{svc.title}</h4>
                  <div className="text-xl font-serif font-bold text-[#2D4A3E]">
                    ₹{svc.priceINR}{" "}
                    <span className="text-xs font-sans text-[#52635A]">/ {svc.durationMinutes} mins</span>
                  </div>
                  <p className="text-xs text-[#52635A] leading-relaxed">{svc.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 3: FAQ KNOWLEDGE BASE MANAGER */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E0D2]">
            <span className="text-xs text-[#52635A]">
              Manage questions displayed on the <strong>Client FAQs (/guide)</strong> accordion.
            </span>
            <button
              onClick={() =>
                setEditingFaq({
                  category: "Counselling",
                  question: "",
                  answer: "",
                  isVisible: true,
                })
              }
              className="px-4 py-2 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold hover:bg-[#1E332A] flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add FAQ</span>
            </button>
          </div>

          {editingFaq && (
            <form
              onSubmit={handleSaveFaqSubmit}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#2D4A3E]/30 shadow-md space-y-4 animate-in fade-in"
            >
              <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-3">
                <h3 className="font-serif text-lg font-bold text-[#1F2924]">
                  {editingFaq.id ? "Edit Question" : "Create New FAQ"}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingFaq(null)}
                  className="text-xs text-[#52635A] hover:text-[#1F2924]"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                    Category
                  </label>
                  <select
                    value={editingFaq.category}
                    onChange={(e) =>
                      setEditingFaq({
                        ...editingFaq,
                        category: e.target.value as "Counselling" | "Voice Sessions" | "Hindi & Local" | "Reiki (Optional)",
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                  >
                    <option value="Voice Sessions">Voice Sessions</option>
                    <option value="Counselling">Counselling</option>
                    <option value="Hindi & Local">Hindi &amp; Local</option>
                    <option value="Reiki (Optional)">Reiki (Optional)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="isVisible"
                    checked={editingFaq.isVisible}
                    onChange={(e) =>
                      setEditingFaq({ ...editingFaq, isVisible: e.target.checked })
                    }
                    className="rounded border-[#E8E0D2] text-[#2D4A3E] focus:ring-[#2D4A3E]"
                  />
                  <label htmlFor="isVisible" className="text-xs font-medium text-[#1F2924]">
                    Visible to Public on /guide
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Question *
                </label>
                <input
                  type="text"
                  required
                  value={editingFaq.question}
                  onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                  placeholder="e.g. Kya phone call par baat karna confidential hota hai?"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D2] bg-white text-xs sm:text-sm text-[#1F2924]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Detailed Answer *
                </label>
                <textarea
                  required
                  rows={4}
                  value={editingFaq.answer}
                  onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                  placeholder="Provide an empathetic explanation grounded in practical confidentiality..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D2] bg-white text-xs sm:text-sm text-[#1F2924]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold hover:bg-[#1E332A] cursor-pointer"
                >
                  Save FAQ Entry
                </button>
                <button
                  type="button"
                  onClick={() => setEditingFaq(null)}
                  className="px-4 py-2.5 rounded-full border border-[#E8E0D2] text-xs font-medium text-[#52635A]"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="space-y-3">
            {db.faqs.map((faq) => (
              <div
                key={faq.id}
                className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#F2EDE4] text-[#9E4A2A]">
                        {faq.category}
                      </span>
                      {!faq.isVisible && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-red-100 text-red-700">
                          Hidden
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#1F2924]">
                      {faq.question}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setEditingFaq(faq)}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[#E8E0D2] hover:bg-[#F2EDE4]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteFaq(faq.id)}
                      className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-[#52635A] leading-relaxed pt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 4: VERIFIED CLIENT NOTES (OPTIONAL) */}
      {activeTab === "notes" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E0D2]">
            <span className="text-xs text-[#52635A]">
              Starts clean and empty. Add only genuine, client-approved reflections with permission.
            </span>
            <button
              onClick={() =>
                setEditingNote({
                  id: `note-${Date.now()}`,
                  clientName: "",
                  location: "Agra, UP",
                  note: "",
                  serviceType: "Individual Voice Counselling",
                  isPublished: true,
                })
              }
              className="px-4 py-2 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold hover:bg-[#1E332A] flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Verified Note</span>
            </button>
          </div>

          {editingNote && (
            <form
              onSubmit={handleSaveNoteSubmit}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#2D4A3E]/30 shadow-md space-y-4 animate-in fade-in"
            >
              <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-3">
                <h3 className="font-serif text-lg font-bold text-[#1F2924]">
                  Add / Edit Client Note
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingNote(null)}
                  className="text-xs text-[#52635A]"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                    Client Name or Initial
                  </label>
                  <input
                    type="text"
                    required
                    value={editingNote.clientName}
                    onChange={(e) =>
                      setEditingNote({ ...editingNote, clientName: e.target.value })
                    }
                    placeholder="e.g. A. K."
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editingNote.location}
                    onChange={(e) =>
                      setEditingNote({ ...editingNote, location: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Verified Client Note
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingNote.note}
                  onChange={(e) => setEditingNote({ ...editingNote, note: e.target.value })}
                  placeholder="Client feedback regarding session clarity, listening presence, or guidance..."
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-white text-xs text-[#1F2924]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold hover:bg-[#1E332A]"
                >
                  Save Note
                </button>
                <button
                  type="button"
                  onClick={() => setEditingNote(null)}
                  className="px-4 py-2.5 rounded-full border border-[#E8E0D2] text-xs font-medium text-[#52635A]"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {db.clientNotes.length === 0 ? (
            <div className="p-10 rounded-2xl bg-white border border-[#E8E0D2] text-center text-xs text-[#52635A]">
              No client notes published yet. This space remains clean and free of fabricated testimonials.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {db.clientNotes.map((note) => (
                <div
                  key={note.id}
                  className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#1F2924]">
                        {note.clientName}
                      </h4>
                      <span className="text-xs text-[#52635A]">
                        {note.location} • {note.serviceType}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-[#1F2924] italic">&ldquo;{note.note}&rdquo;</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MODULE 5: CONTACT & SITE SETTINGS */}
      {activeTab === "settings" && (
        <form onSubmit={handleSaveSettings} className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                  Practice Contact &amp; Hours
                </h3>
                <p className="text-xs text-[#52635A]">
                  Update phone number, calling hours, and non-emergency boundary disclaimers.
                </p>
              </div>
              {settingsSaved && (
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Settings Updated Successfully!
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Practitioner Name
                </label>
                <input
                  type="text"
                  value={settingsForm.practitionerName}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, practitionerName: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  value={settingsForm.experienceYears}
                  onChange={(e) =>
                    setSettingsForm({
                      ...settingsForm,
                      experienceYears: Number(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Direct Phone Number
                </label>
                <input
                  type="text"
                  value={settingsForm.phone}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Calling Hours
                </label>
                <input
                  type="text"
                  value={settingsForm.callingHours}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, callingHours: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                Non-Emergency Healthcare Boundary Disclaimer
              </label>
              <textarea
                rows={3}
                value={settingsForm.disclaimer}
                onChange={(e) =>
                  setSettingsForm({ ...settingsForm, disclaimer: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                Emergency Crisis Notice
              </label>
              <textarea
                rows={3}
                value={settingsForm.emergencyNotice}
                onChange={(e) =>
                  setSettingsForm({ ...settingsForm, emergencyNotice: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-xs text-[#1F2924]"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] cursor-pointer shadow-sm"
            >
              Save Practice Settings
            </button>
          </div>
        </form>
      )}

      {/* MODULE 6: LOCAL PRIVACY-FIRST ANALYTICS */}
      {activeTab === "analytics" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E0D2]">
            <span className="text-xs text-[#52635A]">
              Aggregated local hit counters with zero third-party trackers or ad cookies.
            </span>
            <button
              onClick={handleClearAnalytics}
              className="px-3.5 py-1.5 rounded-full border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold cursor-pointer"
            >
              Reset Counters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
              <h4 className="font-serif text-base font-bold text-[#1F2924] flex items-center justify-between">
                <span>Page Views</span>
                <span className="text-xs font-mono bg-[#F2EDE4] px-2 py-0.5 rounded text-[#2D4A3E]">
                  {Object.values(db.analytics.pageViews).reduce((a, b) => a + b, 0)} total
                </span>
              </h4>
              <div className="space-y-2">
                {Object.entries(db.analytics.pageViews).map(([path, count]) => (
                  <div key={path} className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#52635A]">{path}</span>
                    <span className="font-semibold text-[#1F2924]">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
              <h4 className="font-serif text-base font-bold text-[#1F2924] flex items-center justify-between">
                <span>Top FAQ Searches</span>
                <span className="text-xs text-[#52635A]">Queries</span>
              </h4>
              <div className="space-y-2">
                {Object.entries(db.analytics.searchQueries).length === 0 ? (
                  <p className="text-xs text-[#52635A]">No searches recorded yet.</p>
                ) : (
                  Object.entries(db.analytics.searchQueries)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 8)
                    .map(([query, count]) => (
                      <div key={query} className="flex items-center justify-between text-xs">
                        <span className="italic text-[#9E4A2A]">&ldquo;{query}&rdquo;</span>
                        <span className="font-semibold text-[#1F2924]">{count}</span>
                      </div>
                    ))
                )}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
              <h4 className="font-serif text-base font-bold text-[#1F2924] flex items-center justify-between">
                <span>FAQ Engagement</span>
                <span className="text-xs text-[#52635A]">Clicks</span>
              </h4>
              <div className="space-y-2">
                {Object.entries(db.analytics.faqClicks).length === 0 ? (
                  <p className="text-xs text-[#52635A]">No clicks recorded yet.</p>
                ) : (
                  Object.entries(db.analytics.faqClicks)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 6)
                    .map(([target, count]) => (
                      <div key={target} className="flex items-center justify-between text-xs gap-2">
                        <span className="text-[#52635A] truncate">{target}</span>
                        <span className="font-semibold text-[#1F2924] shrink-0">{count}</span>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
