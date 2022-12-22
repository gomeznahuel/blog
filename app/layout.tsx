import HeaderHome from "../components/HeaderHome";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
      <HeaderHome />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-11 px-4 lg:max-w-7xl lg:px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
