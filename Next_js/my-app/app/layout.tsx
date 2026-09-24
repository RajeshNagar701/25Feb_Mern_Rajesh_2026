import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>

        <div className="p-5 bg-primary text-white text-center">
          <h1>My First Bootstrap 5 Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        {children}

        <div className="p-4 bg-dark text-white text-center">
          <p>Footer</p>
        </div>

      </body>
    </html>
  );
}
