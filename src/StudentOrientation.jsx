import { useState } from 'react';

const accountNumber = '3333145183720';
const kakaoId = 'hypno119';
const schoolAddress = '경기도 부천시 원미구 신흥로 199 트리플타워 C동 308호';
const schoolMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(schoolAddress)}`;

function Section({ title, className = '', children }) {
  return (
    <section className={`student-card ${className}`.trim()} aria-labelledby={title.replace(/\s/g, '-')}>
      <h2 id={title.replace(/\s/g, '-')}>{title}</h2>
      {children}
    </section>
  );
}

function Toast({ message }) {
  return (
    <div className="student-toast" role="status" aria-live="polite">
      {message}
    </div>
  );
}

export default function StudentOrientation() {
  const [toast, setToast] = useState('');

  async function copyText(value, message) {
    try {
      await navigator.clipboard.writeText(value);
      setToast(message);
      window.setTimeout(() => setToast(''), 2200);
    } catch {
      setToast('복사에 실패했습니다. 직접 선택해 복사해 주세요.');
      window.setTimeout(() => setToast(''), 2600);
    }
  }

  return (
    <main className="student-orientation" aria-labelledby="student-page-title">
      <header className="student-hero">
        <div className="student-hero-inner">
          <p className="student-kicker">K-DOULA PROFESSIONAL EDUCATION</p>
          <h1 id="student-page-title">K-DOULA<br />산전·산후관리 전문교육</h1>
          <p className="student-subtitle">7주 교육을 시작합니다 🌿</p>
          <div className="student-welcome">
            <p>안녕하세요🙏<br />K-DOULA 산전·산후관리 전문교육에<br />함께하게 되신 것을 진심으로 환영합니다.</p>
            <p>상담을 통해 교육과정이 최종 확정되었습니다.</p>
            <p>앞으로 7주 동안 매주 월요일,<br />이론과 실습을 통해 임신으로 변화하는 여성의 몸을 이해하고<br />산전관리부터 출산, 산후회복까지 연결하여 배우게 됩니다.</p>
            <p>첫 수업 전 아래 내용을 꼭 확인해 주세요.</p>
          </div>
        </div>
      </header>

      <div className="student-content">
        <Section title="교육 일정">
          <dl className="student-info-grid">
            <div><dt>교육과정</dt><dd>K-DOULA 산전·산후관리 전문교육</dd></div>
            <div><dt>교육기간</dt><dd>매주 월요일 · 총 7주 과정</dd></div>
            <div className="student-highlight-box"><dt>교육시간</dt><dd><strong>오전 9:30</strong> ~ 오후 4:30</dd></div>
            <div><dt>교육형태</dt><dd>이론 + 실습</dd></div>
          </dl>
        </Section>

        <Section title="강사진">
          <dl className="student-teachers">
            <div><dt>강사</dt><dd>김옥선</dd></div>
            <div><dt>보조강사</dt><dd>정진아</dd></div>
          </dl>
          <p>7주 동안 이론과 실습을 연결하여<br />임산부의 신체 변화를 이해하고,<br />실제 현장에서 안전하고 전문적으로 적용할 수 있도록<br />함께하겠습니다.</p>
        </Section>

        <Section title="교안 안내">
          <p>교육 교안은 매주 수업 당일 배포합니다.</p>
          <p>각 주차의 교육 내용에 맞추어 제공되므로<br />별도의 교재를 미리 준비하지 않으셔도 됩니다.</p>
          <p>7주차 평가가 있으므로<br />매주 제공되는 교안은 교육 종료 시까지 잘 보관해 주세요.</p>
        </Section>

        <Section title="교육 준비물">
          <ul className="student-checklist">
            <li>필기도구</li>
            <li>실습하기 편안한 간편복장</li>
            <li>스웨디시 마사지용 오일</li>
          </ul>
          <p className="student-note">※ 교육 교안은 수업 당일 제공됩니다.</p>
        </Section>

        <Section title="교육비 및 결제 안내" className="student-payment-card">
          <p className="student-price">2,800,000원</p>
          <p>교육비는 교육 시작 전 사전 입금을 원칙으로 합니다.</p>
          <div className="student-account">
            <p className="student-label">계좌이체</p>
            <p>카카오뱅크<br /><strong>3333-14-5183720</strong><br />예금주 | 김옥선</p>
            <button type="button" onClick={() => copyText(accountNumber, '계좌번호가 복사되었습니다.')}>계좌번호 복사</button>
          </div>
          <div className="student-muted-block">
            <p className="student-label">카드결제</p>
            <p>카드결제를 원하시는 경우<br />첫 수업 당일 교육 시작 전 결제해 주세요.</p>
          </div>
          <p className="student-note">※ 카드결제 시 부가가치세(VAT)는 별도입니다.<br />※ 자격증 발급비는 교육비에 포함되어 있지 않습니다.</p>
        </Section>

        <Section title="수료 · 평가 안내">
          <p>K-DOULA 교육은 단순히 교육시간을 이수하는 것에 그치지 않고,<br />교육과정에서 학습한 내용을 이해하고<br />실제 적용할 수 있는지를 확인하는 평가과정을 운영합니다.</p>
          <p className="student-important">7주차에는 수료를 위한 평가가 진행됩니다.</p>
          <div className="student-evaluation">
            <article><span>01</span><h3>이론평가</h3><p>교육과정에서 학습한 임신·출산 및<br />산전·산후관리 관련 이론을 평가합니다.</p></article>
            <article><span>02</span><h3>실기평가</h3><p>교육과정에서 습득한<br />산전·산후관리 실기 및 현장 적용 능력을 평가합니다.</p></article>
          </div>
          <p>교육과정을 이수하고<br />소정의 자격검정 기준을 충족한 경우<br />자격증 발급을 신청할 수 있습니다.</p>
        </Section>

        <section className="certificate-card" aria-labelledby="certificate-title">
          <p className="certificate-kicker">CERTIFICATE OF QUALIFICATION</p>
          <h2 id="certificate-title">민간자격증 발급 안내</h2>
          <p>K-DOULA 교육과정을 이수하고<br />자격검정에 합격한 수강생 중<br />자격증 발급을 희망하는 분은<br />한국여성둘라전문가협회 민간자격증을 신청할 수 있습니다.</p>
          <dl className="certificate-info">
            <div><dt>자격명</dt><dd>K-Tasil</dd></div>
            <div><dt>등급</dt><dd>Level 1 (1급)</dd></div>
            <div><dt>세부분야</dt><dd>산전·산후</dd></div>
            <div><dt>민간자격 등록번호</dt><dd>2024-003669</dd></div>
            <div><dt>주무부처</dt><dd>보건복지부</dd></div>
            <div><dt>자격관리·발급기관</dt><dd>한국여성둘라전문가협회</dd></div>
          </dl>
          <div className="certificate-fee"><span>자격증 발급비</span><strong>100,000원 / 별도</strong></div>
          <p>자격증 발급은<br />교육과정 이수 및 자격검정 합격 후,<br />발급을 희망하는 수강생에 한하여 신청합니다.</p>
          <p>교육비 2,800,000원에는<br />자격증 발급비가 포함되어 있지 않습니다.</p>
          <div className="certificate-legal">
            <p>본 자격은 「자격기본법」에 따라 등록된 민간자격입니다.</p>
            <p>등록민간자격은 국가가 직접 발급하는<br />국가자격과는 구분됩니다.</p>
          </div>
        </section>

        <Section title="교육장소">
          <p className="student-place-name">라둘라스 임산부전문관리센터</p>
          <address>경기도 부천시 원미구 신흥로 199<br />트리플타워 C동 308호</address>
          <p>건물에 도착하신 후<br />트리플타워 C동을 확인하시고,<br />엘리베이터를 이용해<br />3층 308호 라둘라스로 오시면 됩니다.</p>
          {/* 정확한 교육장 지도 URL이 제공되면 아래 href를 해당 URL로 교체하세요. 현재는 주소 검색 링크입니다. */}
          <a className="student-action-button" href={schoolMapUrl} target="_blank" rel="noreferrer">교육장 위치보기</a>
        </Section>

        <Section title="지하철 이용 안내">
          <p>지하철 7호선 신중동역을 이용하시면 편리합니다.</p>
          <p>신중동역에서 하차 후<br />트리플타워까지 도보로 이동할 수 있습니다.</p>
          <p>지도 앱에서</p>
          <div className="student-search-terms">
            <span>트리플타워 C동</span>
            <span>경기도 부천시 원미구 신흥로 199</span>
          </div>
          <p>을 검색하도록 안내합니다.</p>
        </Section>

        <Section title="주차 안내">
          <p>차량을 이용하시는 분은<br />미관광장 공영주차장을 이용해 주세요.</p>
          <p className="student-place-name">미관광장 공영주차장</p>
          <address>경기도 부천시 원미구 중동로262번길 102</address>
          <p>주차 후 교육장인<br />트리플타워 C동 308호 라둘라스로 이동해 주세요.</p>
          <a className="student-action-button student-parking-button" href="https://naver.me/GuCzmjwh" target="_blank" rel="noreferrer">🚗 주차장 위치보기</a>
        </Section>

        <Section title="첫 수업 당일">
          <p>교육은 오전 9:30에 시작합니다.</p>
          <p>원활한 교육 진행을 위해<br />오전 9:20까지 도착해 주세요.</p>
          <p>첫 수업부터 이론과 실습이 함께 진행될 수 있으므로<br />움직임이 편안한 복장으로 참석해 주세요.</p>
          <div className="student-time-pair" aria-label="첫 수업 당일 시간 안내">
            <div><span>09:20</span><strong>도착</strong></div>
            <div><span>09:30</span><strong>교육 시작</strong></div>
          </div>
        </Section>

        <Section title="앞으로 함께할 7주" className="student-philosophy">
          <p>K-DOULA 산전·산후관리 전문교육은<br />단순히 마사지 테크닉을 익히는 과정에 머물지 않습니다.</p>
          <p>임신으로 변화하는 여성의 몸을 이해하고,<br />골반과 척추, 근육과 인대,<br />순환과 림프, 골반저,<br />호흡과 움직임을 서로 연결하여 배우게 됩니다.</p>
          <div className="student-flow">산전관리 → 출산 → 산후회복</div>
          <blockquote><p>Structure determines function.</p><cite>구조는 기능에 영향을 미칩니다.</cite></blockquote>
          <p>7주 후에는 단순히 새로운 테크닉 몇 가지를 익힌 것이 아니라,</p>
          <p className="student-quote">“임산부의 몸을 이해하고 바라보는 관점이 달라지는 교육”</p>
          <p>이 되기를 바랍니다.</p>
          <p>7주 동안 함께 배우고, 실습하고, 성장하겠습니다.</p>
          <p>첫 수업에서 반갑게 뵙겠습니다. 🌿</p>
        </Section>

        <Section title="교육 관련 문의" className="student-contact-card">
          <p>교육 일정, 준비물, 교육비 및 수강과 관련하여<br />궁금한 사항은 편하게 문의해 주세요.</p>
          <dl className="student-contact-list">
            <div><dt>전화</dt><dd><a href="tel:01094874667">010-9487-4667</a></dd></div>
            <div><dt>카카오톡 ID</dt><dd>{kakaoId}</dd></div>
          </dl>
          <div className="student-contact-actions">
            <a href="tel:01094874667">📞 전화 문의</a>
            <button type="button" onClick={() => copyText(kakaoId, '카카오톡 ID가 복사되었습니다.')}>카카오톡 ID 복사</button>
          </div>
        </Section>
      </div>

      <nav className="student-quick-actions" aria-label="빠른 실행">
        <a href="tel:01094874667">전화 문의</a>
        <a href="https://naver.me/GuCzmjwh" target="_blank" rel="noreferrer">주차장</a>
        <a href={schoolMapUrl} target="_blank" rel="noreferrer">교육장</a>
      </nav>

      <footer className="student-footer">
        <p>한국여성둘라전문가협회 · K-DOULA</p>
        <p>임신은 축복, 출산은 축제 🌿</p>
      </footer>

      {toast && <Toast message={toast} />}
    </main>
  );
}
