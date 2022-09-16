const NAVLINK = [
    { id: 1, menu: "COMPANY", link: "/1" },
    { id: 2, menu: "WORK", link: "/2" },
    { id: 3, menu: "ESTIMATE", link: "/3" },
    { id: 4, menu: "PR", link: "/4" },
]

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <h1>
                    <a href="#">
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