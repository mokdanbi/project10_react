import React from 'react'
import '../css/Estimate.scss'

const Estimate = () => {
  return (
    <div className="subpage">
      <div className="subtitle subestimate">
        <h2>ESTIMATE</h2>
      </div>
      <div className="formwrap">
        <div className="formset">
          <div className="tbtitle">
            <h3>신청자 정보</h3>
          </div>
          <form action="">
            <table>
              <tr>
                <td>
                  <label htmlFor="">성함</label>
                  <input type="text" />
                </td>
                <td>
                  <label htmlFor="">연락처</label>
                  <input type="tel" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">이메일</label>
                  <input type="email" />
                </td>
                <td>
                  <label htmlFor="">비밀번호</label>
                  <input type="password" />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <label htmlFor="">주소</label>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="formset">
          <div className="tbtitle">
            <h3>프로젝트 정보</h3>
          </div>
          <form action="">
            <table>
              <tr>
                <td>
                  <label htmlFor="">프로젝트 제목</label>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">의뢰범위 선택</label>
                  <select>
                    <option value="sl01">인테리어</option>
                    <option value="sl02">리모델링</option>
                  </select>
                </td>
                <td>
                  <label htmlFor="">공간분류 선택</label>
                  <select>
                    <option value="sl03">주거공간</option>
                    <option value="sl04">상업공간</option>
                    <option value="sl05">업무공간</option>
                    <option value="sl06">의료공간</option>
                    <option value="sl07">기타</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">건물형태 선택</label>
                  <select>
                    <option value="sl08">상가</option>
                    <option value="sl09">빌딩</option>
                    <option value="sl10">아파트</option>
                    <option value="sl11">단독</option>
                    <option value="sl12">기타</option>
                  </select>
                </td>
                <td>
                  <label htmlFor="">건물평형</label>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">예산</label>
                  <input type="text" />
                </td>
                <td>
                  <label htmlFor="">공사예정일</label>
                  <input type="date" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">파일첨부</label>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="" className='sebu'>세부내용</label>
                  <textarea rows="4" cols="34"></textarea>
                </td>
              </tr>
            </table>
            <input type="submit" className='sm bt' value="프로젝트 의뢰하기" />
            <input type="reset" className='rs bt' value="초기화 하기"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Estimate