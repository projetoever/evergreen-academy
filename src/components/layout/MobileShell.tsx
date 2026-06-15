import type { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { BottomNav } from "./BottomNav";

export function MobileShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full app-shell-bg">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-background shadow-xl sm:my-4 sm:min-h-[calc(100vh-2rem)] sm:rounded-3xl sm:overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto pb-28">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
