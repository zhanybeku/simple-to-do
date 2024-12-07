import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "To Do Lists",
  description: "Create and manage to-do lists!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
