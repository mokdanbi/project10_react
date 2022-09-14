const PORTFOLIO = [
    { id: 1, title: "residential", link: "/1" },
    { id: 2, title: "beauty", link: "/2" },
    { id: 3, title: "commercial", link: "/3" },
    { id: 4, title: "business", link: "/4" },
]

const MainPortfolio = () => {
    return (
        <section className="MainPortfolio">
            <div className="container">
                {
                    PORTFOLIO.map(portfolio => {
                        return (
                            <figure key={portfolio.id}>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + "/img/pf0" + portfolio.id + ".jpg"} alt="" />
                                </div>
                                <div className="tit">
                                    {portfolio.title}
                                </div>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainPortfolio;