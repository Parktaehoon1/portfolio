$(document).ready(function () {

})

window.onload = function () {
  // 스크롤바 
  // 스크롤바 없애기
  $('html').css('overflow', 'hidden');
  // 1. section 을 저장한다.
  let section = $('.wrap > section');
  // 2. section 이동 속도
  let sectionSpeed = 500;
  // 3. section offset().top Y좌표값(px);
  let sectionPos = [];
  // 4. 화면에 보여지고 있는 번호
  let sectionIndex = 0;
  // 5. 총화면의 개수
  let sectionTotal = section.length;
  // 6. 연속 휠 이벤트 막기(true: 모션중, false: 모션완료)
  let scrollIng = false;

  // 화면의 사이즈가 변하면 100vh 가 달라진다.
  // 화면의 사이즈가 변하면 sectionPos 도 달라져야 한다.
  // sectionPos 는 화면의 각 이동 높이값 px 를 담아둔 것이다.
  function resetSection(){
    // sectionPos 값 넣기
    $.each(section, function(index) {
      // 웹브라우저 상단에서 얼마나 떨어져 있는가?
      let tempY = $(this).offset().top;
      sectionPos[index] = tempY;
    });
  }
  // 한번은 화면을 셋팅한다.
  resetSection();
  $(window).resize(function(){
    // 화면의 각 높이값을 갱신하였다.
    resetSection();
    // 화면의 위치를 맞춘다.
    $('html').scrollTop(sectionPos[sectionIndex]);
  });
  // 마우스 휠 이벤트 체크
  $(window).bind('mousewheel DOMMouseScroll', function (event) {    
    let distance = event.originalEvent.wheelDelta;
    if (distance == null) {
      distance = event.originalEvent.detail * -1;
    }
    // 휠을 이용해서 화면이동을 하지않겠다.
    if(scrollIng == true) {
      return;
    }
    scrollIng = true;
    if (distance < 0) {
      sectionIndex ++;
      if(sectionIndex >= sectionTotal) {
        sectionIndex = sectionTotal - 1;
      }
    } else {
      sectionIndex --;
      if(sectionIndex < 0) {
        sectionIndex = 0;
      }
    }
    // 화면을 이동시킨다.
    $('html').stop().animate({
      scrollTop: sectionPos[sectionIndex]
    }, sectionSpeed, function(){
      // 애니메이션이 완료되었다.
      // 다시 스크롤 이벤트를 받겠다.
      scrollIng = false;
    });
  });


    AOS.init();


    //     $("#wrapper").dotdotdot({
    //         wrapper  : 'div',  /*  콘텐트를 감쌀 요소. */
    //         ellipsis: '... ',  /*  말줄임표를 뭘로 할지 */
    //         wrap  : 'word',    /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
    //         after  : null,     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
    //         watch  : false,    /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
    //         height  : null,     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
    //         tolerance: 0       /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    //       });
    new Swiper(".sw-visual", {
		loop: true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
		speed: 1000,
		pagination: {
			el: '.swiper-pagination'
		}
    });


    // skill 부분 프로그래스바
    

    var bar = new ProgressBar.Line(htmlskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(0.90);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(cssskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.x
          // Default: same as stroke color (options.color)
          color: '#999',
          position: 'absolute',
          fontSize : '13px',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Line(jqueryskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(javascriptskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(photoshopskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(vueskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(displayflex, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(scssskill, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          fontSize : '13px',
          position: 'absolute',
          right: '0',
          top: '227px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
}