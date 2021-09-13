//html의 type이 button인 input태그를 Id를 통해 가져오는 코드 -> 버튼을 이용하여 배경색 변경
let btn = document.getElementById("colorbtn");
//html의 body를 가져오는 코드, body의 background를 바꾸면, 배경색이 바뀐다.
let body = document.querySelector("body");

//button을 누름에 따라 배경색을 배열안의 color들로 바꾸게 하는 변수 i
let i = 0;

//html의 onClick와 같이 button을 클릭할 경우 EventListener로 배경색을 바꾸는 코드
//btn.addEventListener('click', changeBackgroundColor);

//배경색을 바꾸는 함수
function changeBackgroundColor(){
  //버튼을 누름에 따라 변경하는 색깔배열
  const colors = ["red", "blue", "green", "yellow", "purple", "sky", "white", "black"];

  //i가 잘 돌아가는지 보기 위함
  console.log(i);
  //body의 style=background를 colors배열의 i번째 색상으로 변경 -> i는 +1을 하여 다음 색상 준비
  body.style.background=colors[i++];
  //만약, i가 colors배열의 길이보다 크거나 같은 경우 다시 i를 0으로 초기화
  if(i>=colors.length){i = 0;}
}