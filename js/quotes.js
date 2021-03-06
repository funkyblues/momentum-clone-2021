const quotes = [
  {
    quote: "실 엉킨 것은 풀어도, 노 얽힌 것은 못 푼다.",
    author: "속담",
  },
  {
    quote: "폭풍이 지난 뒤에 고요가 온다.",
    author: "속담",
  },
  {
    quote:"인류를 위해 사는 것은 자기의 이름을 위해 사는 것 보다 훌륭한 것이다.",
    author: "바첼 린드세이",
  },
  {
    quote: "고난은 인간의 진가를 증명하는 것이다.",
    author: "에피테토스",
  },
  {
    quote: "가장 높은 곳에 올라가려면, 가장 낮은 곳부터 시작하라",
    author: "푸블릴리우스시루스",
  },
  {
    quote: "정직은 가장 확실한 자본이다.",
    author: "랠프 윌도 에머슨",
  },
  {
    quote: "겸손은 속옷과 같다. 입기는 입되 남에게 보이게는 입지 말라.",
    author: "탈무드",
  },
  {
    quote: "하나의 모범은 천 마디의 논쟁보다 더 가치 있는 것이다.",
    author: "토마스 카알라일",
  }, 
  {
    quote: "작은 도끼라도 찍고 찍으면 큰 참나무는 넘어진다.",
    author: "셰익스피어",
  },
  {
    quote: "사람의 척도는 그가 불행을 얼마나 잘 이겨내는지에 달려있다.",
    author: "프르다크",
  },
  {
    quote: "행복하게 산다는 것은 마음의 평온함을 뜻한다.",
    author: "시세로"
  },
  {
    quote: "우리가 출발한 곳은 선택할 수 없지만 어딜 향해 갈지는 선택할 수 있어.",
    author: "월플라워"
  }, 
  {
    quote: "당신이 할 수 없는 일이 할 수 있는 일에 지장을 주게 하지 마라.",
    author: "존 R. 우든"
  },
  {
    quote: "아예 배우지 않느니보다는 늦으나마 배우는 편이 낫다.",
    author: "클레오 불루스"
  },
  {
    quote: "배는 항구에 있을 때 가장 안전하다. 그러나 그것이 배의 존재 이유는 아니다.",
    author: "요한 볼프강 폰 리테"
  },
  {
    quote: "얻기 어려운 것은 시기요, 놓치기 쉬운 것은 기회이다.",
    author: "조광조"
  }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;