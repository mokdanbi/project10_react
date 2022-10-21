import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="ft_top">
                <div className="container">
                    <dl className="left">
                        <dd><a href="#!">온라인견적의뢰</a></dd>
                        <dd><a href="#!">메일보내기</a></dd>
                        <dt><a href="tel:02-557-8982">상담전화 02-557-8982</a></dt>
                    </dl>
                    <ul className="right">
                        <li><a href="#!"><GrFacebook /></a></li>
                        <li><a href="#!"><GrInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <div className="ft_bottom">
                <div className="container">
                    <p>서울특별시 강남구 역삼로 17길 60 3층 (주) 엠아이디에이에스</p>
                    <strong>COPYRIGHT 2009 MIDAS. ALL Rights Reserved.</strong>
                </div>
            </div>
        </footer>
    )
}

export default Footer;