"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
    return () => unsub();
  }, []);

  const allowedEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const isAllowed = user?.email ? (allowedEmails.length ? allowedEmails.includes(user.email) : true) : false;

  async function loginWithEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (e: any) {
      setError(e?.message || "Failed to sign in");
    }
  }

  async function logout() {
    await signOut(auth);
  }

  if (checking) {
    return (
      <div className="p-6 text-sm text-gray-600">Checking authentication…</div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md rounded border bg-white p-6 mt-4">
        <h3 className="font-semibold">Admin Access</h3>
        <p className="mt-2 text-sm text-gray-700">Sign in with email and password.</p>
        <form onSubmit={loginWithEmailPassword} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border px-3 py-2"
              placeholder="you@domain.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border px-3 py-2"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Sign in</button>
        </form>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>
    );
  }

  if (!isAllowed) {
    return (
      <div className="mx-auto max-w-md rounded border bg-white p-6">
        <h3 className="font-semibold">Access Denied</h3>
        <p className="mt-2 text-sm text-gray-700">Your account ({user.email}) is not allowed to access admin.</p>
        <button onClick={logout} className="mt-4 rounded bg-gray-200 px-4 py-2">Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">Signed in as {user.email}</p>
        <button onClick={logout} className="rounded bg-gray-200 px-3 py-1 text-sm">Sign out</button>
      </div>
      {children}
    </div>
  );
}