import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIVA Explorer",
  description: "A contemplative 3D Explorer honoring Lord Siva.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
