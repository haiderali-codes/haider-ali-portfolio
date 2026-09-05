import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";

export function AppShell({ children }: PropsWithChildren) {
  return <>
    <Header />
    {children}
    <Footer />
    <FloatingContact />
  </>;
}
