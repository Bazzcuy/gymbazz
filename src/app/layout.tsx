import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GYMBAZZ | Premium Fitness & Performance Gym",
  description: "Join GYMBAZZ, the most elite gym experience in town. State-of-the-art equipment, professional trainers, and a community dedicated to excellence.",
  keywords: ["gym", "fitness", "workout", "bodybuilding", "personal training", "GYMBAZZ", "health"],
  openGraph: {
    title: "GYMBAZZ | Premium Fitness & Performance Gym",
    description: "Unleash your potential at GYMBAZZ. The future of fitness starts here.",
    type: "website",
    locale: "en_US",
    siteName: "GYMBAZZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
