const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const method = (options.method || "GET").toUpperCase();
  const fetchOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  if (method === "GET" && fetchOptions.cache === undefined && fetchOptions.next === undefined) {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `API error: ${res.status}`);
  }

  return res.json();
}

export async function getJobs(params = {}) {
  const query = new URLSearchParams();
  if (params.search) query.set("search", params.search);
  if (params.category) query.set("category", params.category);
  if (params.location) query.set("location", params.location);
  const qs = query.toString();
  return fetchAPI(`/jobs${qs ? `?${qs}` : ""}`);
}

export async function getJobById(id) {
  return fetchAPI(`/jobs/${id}`);
}

export async function getCategories() {
  return fetchAPI("/categories");
}

export async function submitApplication(data) {
  return fetchAPI("/applications", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
