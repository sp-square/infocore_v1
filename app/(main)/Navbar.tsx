import Link from "next/link";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 shadow-sm dark">
      <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-3 mx-auto max-w-7xl">
        <Link href="/" className="text-2xl font-bold text-primary">
          InfoCore
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
