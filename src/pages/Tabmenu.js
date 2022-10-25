import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const RESIDENTIAL = [
  { id: 1, title: "기흥 전원주택" },
  { id: 2, title: "주거공간 인테리어" },
  { id: 3, title: "단독주택 인테리어" },
]

const BEAUTY = [
  { id: 1, title: "청담동 미용실" },
  { id: 2, title: "청담 PRIVE'ESPACE" },
  { id: 3, title: "LLOYDBOM" },
]

const COMMERCIAL = [
  { id: 1, title: "hudex" },
  { id: 2, title: "취미실" },
  { id: 3, title: "고운세상피부과" },
]

const BUSINESS = [
  { id: 1, title: "Building" },
  { id: 2, title: "HUUI.M COMPANY" },
  { id: 3, title: "집무실" },
]

export default () => (
  <Tabs>
    <TabList>
      <Tab>주거공간</Tab>
      <Tab>뷰티공간</Tab>
      <Tab>상업공간</Tab>
      <Tab>업무공간</Tab>
    </TabList>
    <TabPanel>
      <div className='fgwrap'>
        {
          RESIDENTIAL.map(res => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work01_0" + res.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {res.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          RESIDENTIAL.map(res => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work01_0" + res.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {res.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          RESIDENTIAL.map(res => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work01_0" + res.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {res.title}
                </div>
              </figure>
            )
          })
        }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='fgwrap'>
        {
          BEAUTY.map(bea => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work02_0" + bea.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {bea.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          BEAUTY.map(bea => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work02_0" + bea.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {bea.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          BEAUTY.map(bea => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work02_0" + bea.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {bea.title}
                </div>
              </figure>
            )
          })
        }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='fgwrap'>
        {
          COMMERCIAL.map(com => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work03_0" + com.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {com.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          COMMERCIAL.map(com => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work03_0" + com.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {com.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          COMMERCIAL.map(com => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work03_0" + com.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {com.title}
                </div>
              </figure>
            )
          })
        }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='fgwrap'>
        {
          BUSINESS.map(bus => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work04_0" + bus.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {bus.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          BUSINESS.map(bus => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work04_0" + bus.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {bus.title}
                </div>
              </figure>
            )
          })
        }
      </div>
      <div className='fgwrap'>
        {
          BUSINESS.map(bus => {
            return (
              <figure>
                <div className='box'>
                  <img src={process.env.PUBLIC_URL + "/img/work04_0" + bus.id + ".jpg"} alt="" />
                </div>
                <div className="tit">
                  {bus.title}
                </div>
              </figure>
            )
          })
        }
      </div>
    </TabPanel>
  </Tabs>
);