import { Link } from "react-router-dom";

const NAVLINK = [
  { id: 1, menu: "COMPANY", link: "/company" },
  { id: 2, menu: "WORK", link: "/work" },
  { id: 3, menu: "ESTIMATE", link: "/estimate" },
  { id: 4, menu: "PR", link: "/pr" },
]

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <h1>
          <Link to="/">
            MIDAS
          </Link>
        </h1>
        <nav className="Gnb">
          <ul>
            {
              NAVLINK.map((it, idx) => {
                return (
                  <li key={it.id}>
                    <Link to={it.link}>{it.menu}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;