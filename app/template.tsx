import Header from "@/components/section/header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
