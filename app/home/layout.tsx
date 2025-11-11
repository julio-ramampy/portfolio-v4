import Header from "../ui/Header";

 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col h-full bg-white-500">
        <Header />
        <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}