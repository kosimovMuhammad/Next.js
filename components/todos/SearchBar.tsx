"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => onChange(draft), 400);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  return (
    <Input
      value={draft}
      onChange={(event) => setDraft(event.target.value)}
      placeholder="Search..."
      className="max-w-sm"
    />
  );
}
