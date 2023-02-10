import React from 'react';
import '../styles/footer.scss';

function Footer() {
  return (
    <div className="bottom">
      <footer>
        <div class="footerTop">
          <p>
            Sometime you win, <br />
            Sometime you Learn.
          </p>
          <p>
            향은 보이지도, 잡히지도 않지만, 우리에게 수많은 기억과 감정을 각인시키고, 나아가 우리 삶속에서 많은 부분을 결정합니다.
            <br />
            그랑핸드는 이러한 향의 가치를 믿으며, 이를 매개로 한 끊임없는 시도를 통해 향의 일상화를 꿈꿉니다. 그랑핸드는 쉽게 소비되고 <br />
            잊혀질 무언가가 아닌, 보이지 않는 곳에서 뚜렷한 존재감으로 모든 사람들에게 우리의 마음과 온기를 전하고 싶습니다.
          </p>
        </div>
        <div class="footerBottom">
          <ul>
            <li>대표 정준혁</li>
            <li>상호 (유)그랑핸드</li>
            <li>사업자번호 127-88-01898</li>
            <li>통신판매업2020-서울종로-0623</li>
            <li>주소 서울시 종로구 지하문로4길 14-2</li>
            <li>메일 hello@granhand.com</li>
            <li>전화 02-333-6525</li>
            <li>이용약관</li>
            <li>정보관리책임자 정유진</li>
            <li>개인정보처리방침</li>
            <li>호스팅 (주)아임웹</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
