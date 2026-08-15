"use client";

import { useEffect, useState } from "react";

export function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(localStorage.getItem("kt-cookie-ok") !== "1"), []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">We use basic cookies or similar storage for site preferences and future analytics configuration.</p>
        <button
          className="rounded-md bg-navy-950 px-4 py-2 text-sm font-semibold text-white"
          onClick={() => {
            localStorage.setItem("kt-cookie-ok", "1");
            setShow(false);
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
