import "./globals.css";
import ClientSessionProvider from "./ClientSessionProvider";

export const metadata = {
  title: "Tracklytics™",
  description: "App con login de Spotify",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientSessionProvider>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}
