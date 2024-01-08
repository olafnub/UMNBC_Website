import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
