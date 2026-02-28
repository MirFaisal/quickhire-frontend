"use client";

import { useState } from "react";

export default function ApplyForm({ jobId, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_note: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_BASE}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: jobId,
          ...formData,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to submit application");
      }

      setStatus("success");
      setMessage("Application submitted successfully! We'll be in touch.");
      setFormData({ name: "", email: "", resume_link: "", cover_note: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-neutral-20 bg-white p-8">
      <h2 className="mb-2 text-xl font-semibold text-neutral-100">Apply for this position</h2>
      <p className="mb-6 text-base text-neutral-60">
        Fill in the form below to apply for <strong>{jobTitle}</strong>
      </p>

      {/* Status Alert */}
      {status && (
        <div
          className={`mb-6 rounded-lg p-4 text-sm font-medium ${
            status === "success"
              ? "border border-accent-green/30 bg-accent-green/10 text-accent-green"
              : "border border-accent-red/30 bg-accent-red/10 text-accent-red"
          }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-100">
            Full Name <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-neutral-20 px-4 py-3 text-base text-neutral-100 outline-none transition placeholder:text-neutral-40 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-100">
            Email Address <span className="text-accent-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-neutral-20 px-4 py-3 text-base text-neutral-100 outline-none transition placeholder:text-neutral-40 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Resume Link */}
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-100">
            Resume Link <span className="text-accent-red">*</span>
          </label>
          <input
            type="url"
            name="resume_link"
            required
            value={formData.resume_link}
            onChange={handleChange}
            placeholder="https://drive.google.com/your-resume"
            className="w-full rounded-lg border border-neutral-20 px-4 py-3 text-base text-neutral-100 outline-none transition placeholder:text-neutral-40 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Cover Note */}
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-100">
            Cover Note <span className="text-sm font-normal text-neutral-40">(Optional)</span>
          </label>
          <textarea
            name="cover_note"
            rows={4}
            value={formData.cover_note}
            onChange={handleChange}
            placeholder="Tell us why you're a great fit for this role..."
            className="w-full resize-none rounded-lg border border-neutral-20 px-4 py-3 text-base text-neutral-100 outline-none transition placeholder:text-neutral-40 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-sm bg-primary py-4 text-base font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </div>
  );
}
