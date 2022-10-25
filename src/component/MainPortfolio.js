import { Link } from "react-router-dom";

const PORTFOLIO = [
    { id: 1, title: "Residential", link: "/work" },
    { id: 2, title: "Beauty", link: "/work" },
    { id: 3, title: "Commercial", link: "/work" },
    { id: 4, title: "Business", link: "/work" },
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
                                <Link to={portfolio.link}>
                                    <div className="box">
                                        <div className="b_box"></div>
                                        <img src={process.env.PUBLIC_URL + "/img/pf0" + portfolio.id + ".jpg"} alt="" />
                                    </div>
                                    <div className="tit">
                                        {portfolio.title}
                                    </div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainPortfolio;