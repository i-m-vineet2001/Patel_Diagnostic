import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "@/api/apiClient";
import {
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  Package,
  MessageSquare,
  Loader2,
  ShieldAlert,
} from "lucide-react";
import Logo from "@/components/site/Logo";

const typeLabels = {
  book_test: "Book a test",
  package: "Health package",
  home_collection: "Home collection",
  general: "General",
};

export default function Admin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("new");
  const [updating, setUpdating] = useState(null);
const load = async () => {
  const list = await apiClient.get("/inquiries?sort=-created_date&limit=200");
  setItems(list.data);
};

useEffect(() => {
  (async () => {
    try {
      const me = await apiClient.get("/auth/me");
      setUser(me.data);
      if (me.data?.role === "admin") await load();
    } catch {
    } finally {
      setLoading(false);
    }
  })();
}, []);

const mark = async (id, status) => {
  setUpdating(id);
  try {
    await apiClient.put(`/inquiries/${id}`, { status });
    await load();
  } catch {
  } finally {
    setUpdating(null);
  }
};


  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-[#2563EB]" />
      </div>
    );

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <ShieldAlert className="w-12 h-12 text-slate-400" strokeWidth={1.5} />
        <h1 className="text-2xl font-bold text-[#0F172A]">Admins only</h1>
        <p className="text-slate-600">
          You need an admin account to view inquiries.
        </p>
        <Link to="/" className="text-[#2563EB] font-semibold">
          Back to site
        </Link>
      </div>
    );
  }

  const filtered =
    filter === "all" ? items : items.filter((i) => i.status === filter);
const tabs = [
  {
    key: "new",
    label: "New",
    count: items.filter((i) => i.status === "new").length,
  },
  {
    key: "contacted",
    label: "Contacted",
    count: items.filter((i) => i.status === "contacted").length,
  },
  {
    key: "closed",
    label: "Closed",
    count: items.filter((i) => i.status === "closed").length,
  },
  { key: "all", label: "All", count: items.length },
];

{
  tabs.map(({ key, label, count }) => (
    <button
      key={key}
      onClick={() => setFilter(key)}
      className={`h-10 px-4 rounded-lg text-sm font-medium transition-colors ${
        filter === key
          ? "bg-[#0F172A] text-white"
          : "bg-white border border-slate-200 text-slate-600 hover:border-[#2563EB]"
      }`}
    >
      {label} <span className="ml-1 opacity-60">{count}</span>
    </button>
  ));
}


  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="glass border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0F172A]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to site
          </Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#0F172A]">Inquiries</h1>
        <p className="text-slate-600 mt-1">
          All test inquiries submitted through the website.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`h-10 px-4 rounded-lg text-sm font-medium transition-colors ${filter === key ? "bg-[#0F172A] text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-[#2563EB]"}`}
            >
              {label} <span className="ml-1 opacity-60">{count}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          {filtered.length === 0 && (
            <p className="text-slate-500 py-12 text-center">
              No inquiries in this view.
            </p>
          )}
          {filtered.map((i) => (
            <div
              key={i.id}
              className="bg-white rounded-2xl border border-slate-200 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-[#0F172A]">
                      {i.full_name}
                    </h3>
                    <StatusBadge status={i.status} />
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {new Date(i.created_date).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {i.status !== "contacted" && (
                    <button
                      onClick={() => mark(i.id, "contacted")}
                      disabled={updating === i.id}
                      className="h-10 px-4 rounded-lg bg-[#10B981] text-white text-sm font-medium hover:bg-emerald-600 disabled:opacity-60"
                    >
                      Mark contacted
                    </button>
                  )}
                  {i.status !== "closed" && (
                    <button
                      onClick={() => mark(i.id, "closed")}
                      disabled={updating === i.id}
                      className="h-10 px-4 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 disabled:opacity-60"
                    >
                      Close
                    </button>
                  )}
                  {i.status !== "new" && (
                    <button
                      onClick={() => mark(i.id, "new")}
                      disabled={updating === i.id}
                      className="h-10 px-4 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 disabled:opacity-60"
                    >
                      Reopen
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <Info icon={Phone} text={i.phone} />
                <Info icon={Mail} text={i.email || "—"} />
                <Info
                  icon={Package}
                  text={`${typeLabels[i.inquiry_type] || i.inquiry_type}${i.package_name ? " · " + i.package_name : ""}`}
                />
                <Info icon={Calendar} text={i.preferred_date || "No date"} />
              </div>
              {i.message && (
                <div className="mt-4 flex gap-2 text-sm text-slate-600 bg-slate-50 rounded-xl p-4">
                  <MessageSquare className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                  {i.message}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    new: "bg-blue-50 text-[#2563EB]",
    contacted: "bg-emerald-50 text-[#10B981]",
    closed: "bg-slate-100 text-slate-500",
  };

  const style = map[status] || "bg-gray-100 text-gray-500"; // fallback

  return (
    <span
      className={`text-xs font-mono tracking-wider px-2.5 py-1 rounded-full ${style}`}
    >
      {status?.toUpperCase() || "UNKNOWN"}
    </span>
  );
}


function Info({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <Icon className="w-4 h-4 text-slate-400 shrink-0" />
      {text}
    </div>
  );
}
