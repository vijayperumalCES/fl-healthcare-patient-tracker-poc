import AppShell from "@/components/layout/AppShell";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <> <AppShell> {children}</AppShell> </>;
}
export default Layout;