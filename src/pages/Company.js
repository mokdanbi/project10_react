import React from 'react';
import '../css/Company.scss';

const Company = () => {
  return (
    <div className="subpage">
      <div className="subtitle subcompany">
        <h2>MIDAS INTERIOR</h2>
      </div>
      <div className="subcontent">
        <div className="about">
          <strong>About MIDAS</strong>
          <p>MIDAS는 ‘창조적인 공간 디자인’과 ‘고객감동’을 경영 이념삼아 고객에게 편안하고 아름다운 공간 디자인으로 프리미어 서비스를 해 드리고 있습니다.<br /> MIDAS는 상업공간, 주거공간, 업무공간에 이르기까지 토털 인테리어 전문 그룹으로서 인테리어 관련 원스톱 솔루션을 제공합니다.<br /> MIDAS의 가치와 비전에 공감하며 고객과 더욱 다가가기 위해 최선의 노력을 다하겠습니다.</p>
        </div>
        <div className="business">
          <strong>Business</strong>
          <ul>
            <li>
              <b>Interior</b>
              <p>주거공간, 상업공간, 업무공간, 의료공간 등을 하고 있으며 고객의 다양한 라이프 스타일에 맞추어 드리겠습니다.</p>
            </li>
            <li>
              <b>Remodeling</b>
              <p>노후화 및 설비류의 기능향상과 전문가들의 진단 후 안전하고 경제적, 기능적, 쾌적성, 미적으로 새로운 모습으로 표현하고자 합니다.</p>
            </li>
            <li>
              <b>Architecture</b>
              <p>자연과 인간의 조화를 생각하며 아름답고 풍요로운 공간을 만들고자 합니다.</p>
            </li>
          </ul>
          <ul>
            <li>
              <b>Furniture</b>
              <p>가구는 인테리어를 구성하는 중요한 요소일 뿐 아니라 공간의 성격도 표현합니다. 전문가의 감성과 감각으로 고객의 생활의 미와 편의를 도모하는 동시에 다양한 스타일을 표현하고자 합니다.</p>
            </li>
            <li>
              <b>Display</b>
              <p>공간의 성격에 따라 조형적인면과 전시효과를 극대화 시켜 공간의 구성, 소품 하나 하나까지 치밀한 계획과 설계로부터 배려를 함으로서 전체적인 균형과 시각화를 표현하고자 합니다.</p>
            </li>
            <li>
              <b>Exhibition</b>
              <p>전시의 기능 목적으로 PR, 판매, 박람회, 쇼룸등 다양한 방법으로 표현하고자 합니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Company