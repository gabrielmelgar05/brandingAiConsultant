import { redirect } from "next/navigation";
import { serverGetMe } from "../../lib/auth";
import Navbar from "../../components/Navbar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const me = await serverGetMe();
  if (!me) redirect("/auth/login");
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="container-md py-6">{children}</main>
    </div>
  );
}
