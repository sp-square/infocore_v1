"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`); // certain characters are not allowed in a URL, so we need to escape them using the 'encodeURIComponent' function
  }

  return (
    <form onSubmit={handleSubmit} method="GET" action="/search">
      <div className="relative">
        <Input name="q" placeholder="Search" className="pe-10" />
        <SearchIcon className="absolute transform -translate-y-1/2 right-3 top-1/2 size-5 text-muted-foreground" />
      </div>
    </form>
  );
}
