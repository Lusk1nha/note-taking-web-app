import { Sidebar } from "@/components/sidebar/sidebar";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-appBackground w-full h-screen relative flex">
      <Sidebar />
      {children}
    </div>
  );
}
