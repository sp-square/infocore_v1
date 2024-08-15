// import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./Navbar";
// import SessionProvider from "./SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await validateRequest();

  // if (!session.user) redirect("/login");

  return (
    // <SessionProvider value={session}>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-5 mx-auto max-w-7xl">{children}</div>
    </div>
    // </SessionProvider>
  );
}
