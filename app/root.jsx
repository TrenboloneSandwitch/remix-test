import { Outlet, LiveReload, Link, Links } from "remix";
import globalStyles from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStyles }];

const Layout = ({ children }) => (
  <>
    <nav className="navbar">
      <Link to="/" className="logo">
        Remix
      </Link>

      <ul className="nav">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
    <div className="container">{children}</div>
  </>
);

const Document = ({ children, title }) => (
  <html lang="cs">
    <head>
      <meta charSet="utf-8" />
      <Links />
      <title>{title ? title : "Remix App Test"}</title>
    </head>
    <body>
      {children}
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
  </html>
);

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
