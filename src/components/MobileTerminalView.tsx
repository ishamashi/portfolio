// components/MobileTerminalView.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileTerminalView = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 600);
    return () => clearInterval(cursorInterval);
  }, []);

  const commands = [
    { cmd: "whoami", output: "Icho Ishamashi - Digital Craftsman [SleepyHead]", isLink: false },
    { cmd: "ls ./forgings", output: "Explore all forged artifacts...", href: "/projects", isLink: true },
    { cmd: "cat ./saga.md", output: "Uncover my full saga...", href: "/about", isLink: true },
    { cmd: "curl contact.me", output: "Dispatch a message...", href: "/contact", isLink: true },
    { cmd: "cat ./inspiration.txt", output: "Eitri, Brokkr, the echoes of Niðavellir's anvils...", isLink: false },
  ];
  const promptUser = "[SleepyHead]";
  const promptHost = "DigitalForge";

  return (
    <div className="fixed inset-0 z-[100] flex h-full w-full flex-col bg-background p-4 font-mono text-xs text-foreground md:hidden">
      <div className="flex-grow overflow-y-auto">
        <p className="text-accent mb-4">Niðavellir Command Interface - Welcome, Wanderer.</p>
        <p>Available commands listed below. Click to execute.</p>
        <p className="mb-2">-----------------------------------------------</p>

        {commands.map((item, index) => (
          <div key={index} className="mb-2">
            <span className="text-accent/80">
              {promptUser}@{promptHost}:~${" "}
            </span>
            {item.isLink ? (
              <Link href={item.href || "#"} className="underline hover:text-accent">
                {item.cmd}
              </Link>
            ) : (
              <span className="cursor-default">{item.cmd}</span> // Buat non-link tidak bisa diklik
            )}
            {(item.isLink || item.cmd === "whoami" || item.cmd === "cat ./inspiration.txt") && <p className="pl-4 text-foreground/70">→ {item.output}</p>}
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center pt-2 border-t border-border/50">
        <span className="text-accent">
          {promptUser}@{promptHost}:~$
        </span>
        <span className={`ml-1 inline-block h-4 w-2 ${showCursor ? "bg-accent" : "bg-transparent"}`}></span>
      </div>
    </div>
  );
};
export default MobileTerminalView;
