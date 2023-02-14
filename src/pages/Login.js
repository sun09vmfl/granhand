import '../styles/login.scss';

function Login() {
  return (
    <div>
      <div className="login">
        <div className="inputForm">
          <input className="log" title="이메일" type="text" name="uid" value="" placeholder="이메일" />
          <input className="log" title="비밀번호" name="passwd" type="password" value="" placeholder="비밀번호" autocomplete="off" />
          <div className="check">
            <label className="form-label">
              <input type="checkbox" class="ie" name="auto_login" data-type="use" value="ok" checked="checked" />
              <span className="agree_tit">로그인상태유지</span>
            </label>
          </div>
          <div className="button">
            <button>로그인</button>
          </div>
          <div className="join">
            <button className="joinbutton">회원가입</button>
            <button className="searchbutton">아이디 · 비밀번호 찾기</button>
          </div>
          <div className="or">
            <div className="border"></div>
            <p>또는</p>
            <div className="border"></div>
          </div>
          <div className="button">
            <button className="kakao">카카오로 시작하기</button>
          </div>
          <div className="or">
            <div className="border"></div>
            <p>또는</p>
            <div className="border"></div>
          </div>
          <div className="button">
            <button className="notMem">비회원 주문배송 조회</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
