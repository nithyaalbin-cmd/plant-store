"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/data/getSession";

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({
  children,
}: AdminGuardProps) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const session = await getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      setChecking(false);
    }

    checkSession();
  }, [router]);

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-3xl font-bold text-green-700">
          Checking session...
        </h1>
      </main>
    );
  }

  return <>{children}</>;
}