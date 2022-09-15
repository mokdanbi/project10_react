const PORTFOLIO = [
    { id: 1, title: "Residential", link: "/1" },
    { id: 2, title: "Beauty", link: "/2" },
    { id: 3, title: "Commercial", link: "/3" },
    { id: 4, title: "Business", link: "/4" },
]

const MainPortfolio = () => {
    return (
        <section className="MainPortfolio">
            <div className="container">
                <p data-split="Port">Port</p>
                <span data-split="folio">folio</span>
                {
                    PORTFOLIO.map(portfolio => {
                        return (
                            <figure key={portfolio.id}>
                                <a href={portfolio.link}>
                                    <div className="box">
                                        <div className="b_box"></div>
                                        <img src={process.env.PUBLIC_URL + "/img/pf0" + portfolio.id + ".jpg"} alt="" />
                                    </div>
                                    <div className="tit">
                                        {portfolio.title}
                                    </div>
                                </a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainPortfolio;