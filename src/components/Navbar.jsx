function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>{props.heading}</h1>
      </div>
    </nav>
  );
}

export default Navbar;
