const MainAbout = () => {
    return (
        <section className="MainAbout">
            <div className="inner">
                <div className="aboutImg">
                    <img src={process.env.PUBLIC_URL + "/img/smain01.jpg"} alt="" />
                </div>
                <div className="aboutTxt">
                    <h2>About MIDAS</h2>
                    <p>미다스는 ‘창조적인 공간 디자인’과 ‘고객감동’을<br />
                        경영 이념삼아 고객에게 편안하고 아름다운 공간 <br />
                        디자인으로 프리미어 서비스를 해 드리고 있습니다.<br />
                        <br />
                        상업공간, 주거공간, 업무공간에 이르기까지 토털 인테리어 <br />전문 그룹으로서 인테리어 관련 원스톱 솔루션을 제공합니다.<br />
                        <br />
                        미다스의 가치와 비전에 공감하며 고객과 더욱 다가가기 위해 <br />최선의 노력을 다하겠습니다.
                    </p>
                    <a href="#!">Request for quotation</a>
                </div>
            </div>
        </section>
    )
}

export default MainAbout;