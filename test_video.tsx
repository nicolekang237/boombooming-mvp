export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        /*
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

        ▩ 뉴스피드 이외의 장소에서 독립적으로 동영상을 띄울 때 사용되는 페이지.

        ▩ 공통으로 쓰이는 레이아웃, 헤더, 푸터 등을 제외하고 오직 이 페이지에서만 쓰이는 스타일은 이곳에만 기재.

        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        */

        /* ■ Normalize - PD1000 style
        ---------------------------------------------------------------------- */
        html{width:100%;height:100%;margin:0;padding:0;font-size:14px;font-weight:400;font-family:Arial, sans-serif;text-size-adjust:none;word-break: keep-all;}
        div, span, button, textarea, input, dl ,dt, dd, ul ,ol, li, h1, h2, h3, h4, h5, form, fieldset, p, img, iframe, table, tbody, tfoot, thead, tr, th, td, a{margin:0;padding:0;border:0;box-sizing:border-box;white-space:normal;}
        body{width:100%;height:100%;margin:0;padding:0;background-color: #333c4d;}
        li{list-style:none;}
        input, select, button, textarea, optgroup{margin:0;outline:none;font:inherit;color:inherit;text-decoration:none;}
        textarea{resize:none;}
        button{padding-bottom:1px;text-align:center;cursor:pointer;background:transparent;}
        button, span, a{display:inline-block;vertical-align:top;}
        a{cursor:pointer;}
        a:link, a:visited, a:hover, a:focus, a:active{color:inherit;text-decoration:none;outline:none;}
        img{border:0;}


        /* ■ Web fonts basic - 페이지 구성에 반드시 필요한 기본 폰트
        ---------------------------------------------------------------------- */
        /* NEXON Lv1 Gothic */
        @font-face {
            font-family: 'NEXONLv1Gothic';
            src: url('https://boombooming.netlify.app/assets/fonts/NEXONLv1Gothic-100.woff2') format('woff2');
            font-weight: 100;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'NEXONLv1Gothic';
            src: url('https://boombooming.netlify.app/assets/fonts/NEXONLv1Gothic-400.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'NEXONLv1Gothic';
            src: url('https://boombooming.netlify.app/assets/fonts/NEXONLv1Gothic-700.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
        }


        /* ■ Main Layout
        ---------------------------------------------------------------------- */
        /* All */
        .app__container {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            min-width: 320px;
            height: 100vh;
            margin: 0 auto;
            font-family: 'NEXONLv1Gothic';
            font-weight: 400;
            line-height: 1;
            color: #eeeeee;
            background-size: cover;
            overflow: hidden;
        }

        .app__container_type_basic {
            /* */
        }

        .app__container_type_newsfeed {
            /* */
        }

        .app__bg_dark {
            background-image: url(https://boombooming.netlify.app/assets/images/bg_main_dark.png);
            background-size: 430px;
        }

        .app__bg_chat {
            background-image: url(https://boombooming.netlify.app/assets/images/bg_main_chat.png);
            background-size: 430px;
            background-position: center bottom;
        }

        .app__bg_chatroom {
            background-image: url(https://boombooming.netlify.app/assets/images/bg_main_chatroom.png);
            background-size: 430px;
            background-position: center bottom;
        }


        /* Header */
        .header {
            position: relative;
            width: 100%;
            background-position: center top;
            background-repeat: repeat-x;
            background-size: cover;
            flex-shrink: 0;
            z-index: 1;

            padding-top: 50px;
        }


        /* Footer */
        .footer {
            position: relative;
            width: 100%;
            flex-shrink: 0;
            z-index: 1;
        }

        .header__type_newsfeed {
            position: absolute;
            top: 0;
            left: 0;
        }

        .footer__type_basic {
            border-top: 1px solid #444444;
            box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.7);
            background-color: #000000;
        }

        .footer__type_newsfeed {
            position: absolute;
            bottom: 0;
            left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 1);
            backdrop-filter: blur(6px); /* 이 아래에 있는 이미지나 동영상이 Blur 되어 보임 */
        }


        /* Top Bar */
        .header__bg_transparent {
            background-color: rgba(0, 0, 0, 0.6);
        }

        .header__bg_red { /* 벵경 패턴 이미지 - Red */
            background-image: url(https://boombooming.netlify.app/assets/images/bg_top_banner_red.png);
            background-size: 430px;
        }

        .header__bg_purple { /* 벵경 패턴 이미지 - Purple */
            background-image: url(https://boombooming.netlify.app/assets/images/bg_top_banner_purple.png);
            background-size: 430px;
        }

        .header__bg_green { /* 벵경 패턴 이미지 - Purple */
            background-image: url(https://boombooming.netlify.app/assets/images/bg_top_banner_green.png);
            background-size: 430px;
        }


        /* Main Container */
        .main__container {
            position: relative;
            width: 100%;
            flex: 1; /* 남은 공간을 모두 차지 */
        }

        .main__container_type_basic {
            overflow-y: scroll;
        }

        .main__container_type_newsfeed {
            height: 100vh;
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            /* 스크롤바 숨기기 */
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }

        /* 웹킷 브라우저 스크롤바 숨기기 */
        .main__container_type_newsfeed::-webkit-scrollbar {
            display: none;
        }

        .main__container_type_basic .main__content_wrapper {
            width: 100%;
            min-height: 100%;
        }

        .main__container_type_chatroom .main__content_wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }


        /* Tool Bar */
        .toolbar {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 60px;
            padding: 6px 0;
        }

        .btnbox__toolbar {
            position: relative;
            width: 60px;
            height: 42px;
        }

        .btnbox__badge {
            position: absolute;
            top: -8px;
            right: -2px;
            width: auto;
            padding: 2px 6px 3px 6px;
            border-radius: 10px;
            border: 1px solid #3ee38c;
            font-size: 12px;
            background-color: #07944a;
        }


        /* ■ Content
        ---------------------------------------------------------------------- */
        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            height: 50px;
            padding: 0 10px;
        }

        .topbar .btn {
            flex-shrink: 0;
        }

        .iconbox__topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4px;
            min-width: 42px;
            height: 100%;
        }


        /* ■ Card
        ---------------------------------------------------------------------- */
        .card__container {
            position: relative;
            width: 100%;
            height: 100%;
            scroll-snap-align: start;
        }

        .panel__gradient { /* 텍스트 가독성을 위한 그래디언트 배경 */
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            pointer-events: none;
        }

        .gradient__type_a {
            height: 220px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.8) 75%, rgba(0, 0, 0, 0.8) 100%);
        }

        .gradient__type_b {
            height: 160px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 68%, rgba(0, 0, 0, 0.6) 100%);
        }

        .card__option_wrapper { /* 상위 부모 */
            position: absolute;
            top: 100px;
            bottom: 80px;
            right: 10px;
        }

        .card__option_inner { /* 아이템을 싸고 있는 부모 Container */
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end; /* 아이템들을 가로 중앙에 정렬 (선택 사항) */
            flex-wrap: wrap-reverse;
            gap: 6px;
            height: 100%;
            max-width: 50px; /* 아이템의 너비에 맞게 조정 (선택 사항) */
        }

        .btnbox__card_option { /* Items */
            flex-shrink: 0;
            width: 50px; /* 아이템의 너비를 고정 */
            height: 62px; /* 아이템의 높이를 고정 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
        }

        .card__option--text {
            font-size: 13px;
            text-shadow: 1px 0 1px #000000, 0 1px 1px #000000, -1px 0 1px #000000, 0 -1px 1px #000000;
        }

        .card__user_wrapper {
            position: absolute;
            bottom: 80px;
            left: 16px;
            right: 70px;
            overflow: hidden;
        }

        .user__wrapper_description {
            margin-top: 14px;
            white-space: nowrap;
        }

        .user__wrapper_views { /* 동영상 조회수 표시 영역 */
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 10px;
        }

        .views__iconbox {
            display: flex;
            align-items: center;
            margin-top: 1.5px;
        }


        @media (max-height: 767px) and (orientation: landscape) {
            .card__option_inner {
                flex-direction: row; /* 아이템들을 가로로 정렬 */
                justify-content: flex-end; /* 오른쪽 끝에 정렬 */
                align-items: center; /* 세로 중앙 정렬 (선택 사항) */
                flex-wrap: wrap; /* 필요 시 줄바꿈 */
                height: auto;
                bottom: 80px;
                right: 10px;
            }

            .card__option_inner { /* 아이템을 싸고 있는 부모 Container */
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end; /* 아이템들을 가로 중앙에 정렬 (선택 사항) */
                flex-wrap: wrap-reverse;
                gap: 6px;
                height: 100%;
                max-width: 50px; /* 아이템의 너비에 맞게 조정 (선택 사항) */
            }

            .btnbox__card_option {
                display: inline-flex;
                margin: 0 8px;
            }
        }


        /* ■ Components
        ---------------------------------------------------------------------- */
        /* Common */
        .title__main {
            font-size: 16px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            flex: 1;
        }

        .title__main_name {
            font-weight: 700;
        }

        .title__main_text {
            white-space: nowrap;
            opacity: 0.8;
        }

        .logo__main {
            width: 46px;
            object-fit: contain;
            flex-shrink: 0;
        }


        /* Avatar */
        .avatar {
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
        }

        .avatar__column {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }

        .avatar__row {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .avatar__name {
            line-height: 1.3;
            overflow: hidden;
        }

        .avatar__name_sub {
            font-size: 13px;
            opacity: 0.7;
        }

        .avatar__column .avatar__name {
            max-height: 50px; /* 이름 3줄까지 보임 */
            font-size: 13px;
            text-align: center;
        }

        .avatar__row .avatar__name {
            max-height: 36px; /* 이름이 2줄까지 보임 */
            font-size: 14px;
            white-space: nowrap;
        }

        .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .avatar__size_max {
            position: absolute;
            bottom: -63px;
            left: 30px;
            width: 126px;
            height: 126px;
            border: 2px solid #eeeeee;
        }

        .avatar__size_big {
            width: 70px;
            height: 70px;
            border: 2px solid #999999;
        }

        .avatar__size_medium {
            width: 54px;
            height: 54px;
            border: 2px solid #999999;
        }

        .avatar__size_small {
            width: 38px;
            height: 38px;
            border: 2px solid #999999;
        }

        .avatar__size_tiny {
            width: 32px;
            height: 32px;
            border: 2px solid #999999;
        }


        /* Button */
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn__full {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 100%;
        }

        .btn__circle {
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.7);
        }

        .btn__size_medium {
            width: 42px;
            min-height: 42px;
        }

        .btn__size_small {
            width: 34px;
            min-height: 34px;
        }

        .btn__text {
            width: 100%;
            font-size: 11px;
            text-align: center;
            opacity: 0.7;
        }


        /* Ratings */
        .ratings__container {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .ratings__stars {
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .ratings__score {
            font-size: 16px;
        }

        .btnbox__play_video {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 26%;
            max-width: 100px;
            aspect-ratio: 1 / 1;
        }


        /* Video */
        .main__video_wrapper {
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }

        .btnbox__play_video button {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #ffffff;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
            background-size: cover;
            overflow: hidden;
        }


        /* ■ Status
        ---------------------------------------------------------------------- */
        .scroll__x {
            overflow-y: hidden;
            overflow-x: scroll;
        }
        `
      }} />

      <div className="app__container app__bg_dark app__container_type_newsfeed">
        {/* Header */}
        <header className="header header__bg_transparent header__type_newsfeed">
          <div className="topbar">
            <button className="btn btn__size_medium" onClick={() => window.history.back()}>
              <img src="https://boombooming.netlify.app/assets/images/icon_arrow_back_32dp_bold.svg" width="32" height="32" alt="뒤로가기" />
            </button>

            <div className="title__main">
            </div>

            <div className="iconbox__topbar">
              <button className="btn btn__size_medium">
                <img src="https://boombooming.netlify.app/assets/images/icon_search_32dp.svg" width="26" height="26" alt="검색" />
              </button>

              <button className="btn btn__size_medium">
                <img src="https://boombooming.netlify.app/assets/images/icon_refresh_32dp.svg" width="26" height="26" alt="새로고침" />
              </button>

              <button className="btn btn__size_medium">
                <img src="https://boombooming.netlify.app/assets/images/icon_notifications_32dp.svg" width="24" height="24" alt="알림" />
              </button>

              <button className="btn btn__size_medium">
                <img src="https://boombooming.netlify.app/assets/images/icon_rate_review_32dp.svg" width="22" height="22" alt="리뷰" />
              </button>
            </div>
          </div>        
        </header>

        {/* Main Content */}
        <main className="main__container main__container_type_newsfeed">
          <div className="main__content_wrapper" style={{height: '100%', overflow: 'hidden'}}>
            <div className="card__container">
              <video className="main__video_wrapper" muted autoPlay loop poster="썸네일_이미지_주소.jpg">
                <source src="https://boombooming.netlify.app/assets/data/sample_vod_3.mp4" type="video/mp4" />
                죄송합니다. 귀하의 브라우저는 비디오 태그를 지원하지 않습니다.
              </video>

              <div className="panel__gradient gradient__type_a"></div>

              <div className="btnbox__play_video">
                <button style={{backgroundImage: 'url(https://boombooming.netlify.app/assets/images/bg_play_button.png)'}}></button>
              </div>

              <div className="card__user_wrapper">
                <div className="user__wrapper_avatar avatar__row">
                  <div className="avatar avatar__size_small">
                    <img src="https://boombooming.netlify.app/assets/images/sample_avatar_1.png" alt="사용자 아바타" />
                  </div>
                  
                  <div className="avatar__name">
                    Whitney Johns
                    <div className="avatar__name_sub">Influencer, Google</div>
                  </div>
                </div>

                <div className="user__wrapper_description">
                  패션 모델 인터뷰용 화보 모음
                </div>

                <div className="user__wrapper_views">
                  <div className="views__iconbox">
                    <img src="https://boombooming.netlify.app/assets/images/icon_visibility_32dp.svg" width="16" height="16" alt="조회수" />
                  </div>

                  <div className="views__count">6225</div>
                </div>
              </div>

              <div className="card__option_wrapper">
                <div className="card__option_inner">
                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_favorite_32dp.svg" width="24" height="24" style={{marginTop: '2px'}} alt="좋아요" />
                    </button>
                    <div className="card__option--text">128</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium" style={{backgroundColor: '#ff5379'}}>
                      <img src="https://boombooming.netlify.app/assets/images/icon_favorite_32dp_fill.svg" width="24" height="24" style={{marginTop: '2px'}} alt="좋아요 활성" />
                    </button>
                    <div className="card__option--text">128</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_chat_32dp.svg" width="22" height="22" alt="댓글" />
                    </button>
                    <div className="card__option--text">6</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_ratings_32dp_white.svg" width="20" height="20" alt="평점" />
                    </button>
                    <div className="card__option--text">부밍지수</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_add_bookmark_32dp.svg" width="24" height="24" alt="북마크" />
                    </button>
                    <div className="card__option--text">보관</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium" style={{backgroundColor: '#ff5379'}}>
                      <img src="https://boombooming.netlify.app/assets/images/icon_add_bookmark_32dp.svg" width="24" height="24" alt="북마크 활성" />
                    </button>
                    <div className="card__option--text">보관</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_share_32dp.svg" width="22" height="22" alt="공유" />
                    </button>
                    <div className="card__option--text">공유</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_settings_32dp.svg" width="24" height="24" alt="설정" />
                    </button>
                    <div className="card__option--text">설정</div>
                  </div>

                  <div className="btnbox__card_option">
                    <button className="btn btn__circle btn__size_medium">
                      <img src="https://boombooming.netlify.app/assets/images/icon_campaign_32dp.svg" width="26" height="26" alt="신고" />
                    </button>
                    <div className="card__option--text">신고</div>
                  </div>
                </div>
              </div>                
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer footer__type_newsfeed">
          <div className="toolbar">
            <div className="btnbox__toolbar">
              <button className="btn__full" onClick={() => window.location.href='./home.html'}>
                <img src="https://boombooming.netlify.app/assets/images/icon_home_32dp.svg" width="28" height="28" alt="홈" />
                <div className="btn__text">홈</div>
              </button>
            </div>

            <div className="btnbox__toolbar">
              <button className="btn__full" onClick={() => window.location.href='./chat.html'}>
                <img src="https://boombooming.netlify.app/assets/images/icon_chat_32dp.svg" width="26" height="26" style={{marginTop: '2px'}} alt="대화" />
                <div className="btn__text">대화</div>
              </button>
            </div>

            <div className="btnbox__toolbar">
              <button className="btn__full">
                <img src="https://boombooming.netlify.app/assets/images/icon_add_32dp.svg" width="28" height="28" alt="업로드" />
                <div className="btn__text">업로드</div>
              </button>
              <div className="btnbox__badge">필수</div>
            </div>

            <div className="btnbox__toolbar">
              <button className="btn__full" onClick={() => window.location.href='./mysuite.html'}>
                <img src="https://boombooming.netlify.app/assets/images/icon_person_32dp.svg" width="29" height="29" alt="My Suite" />
                <div className="btn__text">My Suite</div>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}