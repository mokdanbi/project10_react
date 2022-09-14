const IDENTITY = [
    { id: 1, title: "People", content: <div>미다스는 좋은 디자인이란 인간의 본질을 반영한 즉, 그 공간을 사용하는 인간이 어떻게 시간을 보내는가에 더 큰 의미를 두고 인간 중심의 공간을 만들고자 합니다.</div> },
    { id: 2, title: "Creativity", content: <div>획일적이고 일관된 디자인이 아닌 항상 새로운 것에 도전하며 새로운 트랜드 형성에 끊임없이 힘을 쏟아 보다 창의적인 접근으로 앞서갑니다.</div> },
    { id: 3, title: "Partnership", content: <div>클라이언트의 요구를 충족시키고 그것을 뛰어넘기 위한 생각으로 서로의 필요 충문을 만족시켜 서로의 신뢰를 발전시켜가며 파트너쉽을 키워나갈 것입니다.</div> }
]

const MainIdentity = () => {
    return (
        <section className="MainIdentity">
            <div className="container">
                {
                    IDENTITY.map(identity => {
                        return (
                            <figure key={identity.id}>
                                <div className="num">{"0" + identity.id}</div>
                                <div className="tit">{identity.title}</div>
                                <div className="con">{identity.content}</div>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainIdentity;