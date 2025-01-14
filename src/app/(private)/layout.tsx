import type { Metadata } from "next";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "FinMap",
  description: "Mapping your financial journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
