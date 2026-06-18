import React from 'react';
import { ExternalLink } from 'lucide-react';
import HUDLabel from './HUDLabel';

export default function DemoCredentials({ credentials, liveDemo }) {
  return (
    <div className="mb-16">
      <HUDLabel text="// LIVE DEMO ACCESS" />

      <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 mb-6 font-mono text-sm text-primary hover:underline tracking-wide"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        {liveDemo}
      </a>

      <div className="border border-border overflow-hidden">
        <div className="grid grid-cols-3 bg-muted border-b border-border">
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Role
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground border-x border-border">
            Username
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Password
          </div>
        </div>
        {credentials.map((cred, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b border-border last:border-0 hover:bg-muted transition-colors"
          >
            <div className="px-4 py-3 text-xs text-foreground">{cred.role}</div>
            <div className="px-4 py-3 border-x border-border">
              <span className="font-mono text-xs text-foreground">
                {cred.username}
              </span>
            </div>
            <div className="px-4 py-3">
              <span className="font-mono text-xs text-muted-foreground">
                {cred.password}
              </span>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 border-t border-border bg-muted/50">
          <div className="px-4 py-3 text-xs text-muted-foreground">
            Public Verification
          </div>
          <div className="px-4 py-3 border-x border-border">
            <span className="font-mono text-xs text-muted-foreground italic">
              no login
            </span>
          </div>
          <div className="px-4 py-3">
            <a
              href={`${liveDemo}/verify`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-primary hover:underline break-all"
            >
              /verify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
