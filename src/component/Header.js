const NAVLINK = [
    { id: 1, menu: "COMPANY", link: "/" },
    { id: 2, menu: "WORK", link: "/" },
    { id: 3, menu: "ESTIMATE", link: "/" },
    { id: 4, menu: "PR", link: "/" },
]

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <h1>
                    <a href="/">
                        MIDAS
                    </a>
                </h1>
                <nav className="Gnb">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menu}</a>
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