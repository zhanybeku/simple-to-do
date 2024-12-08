import "@styles/globals.css";

export const metadata = {
  title: "To Do Lists",
  description: "Create and manage to-do lists!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
