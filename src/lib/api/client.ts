const BASE_URL = process.env.EXPO_PUBLIC_API_URL!;
const ROOT_PASSWORD = process.env.EXPO_PUBLIC_API_PASSWORD!;

export async function apiClient<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Root-Password': ROOT_PASSWORD,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || `Request failed: ${res.status}`);
  }

  return res.json();
}
