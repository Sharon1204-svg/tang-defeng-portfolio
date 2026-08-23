import "./globals.css";

export const metadata = {
  title: "Tang Defeng | Mobility Experience Designer",
  description: "UX Designer focusing on mobility experience, interaction design and automotive HMI.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
