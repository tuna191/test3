// lấy thẻ container
// tạo biến squares vs gia trị tùy ý
// lặp qua tất cả giá trị squares
// đoạn sau hơi khó nói :)
// appendchild nối phần tử  vd a.appendChild(b)--> nối phần tử con(b) vào cha(a);

// lấy thẻ container
const container = document.querySelector(".container");

// tạo square 
const squares = 200;

// lặp qua tất cả các giá trị của squares

for(var i=0;i < squares ; i++){
	const square = document.createElement("div")// tạo biến square đồng thời tạo phần tử div cho biến vừa tạo
	// add thẻ square bên css

	square.classList.add("square");

	// xử lý sự kiện 
	// 1- khi mouseover vao 
	square.addEventListener("mouseover",() => setColor(square));

	// 2- khi mouseout
	square.addEventListener("mouseout",() => removeColor(square));
	// chèn thẻ square vào container
	container.appendChild(square);
}

// định nghĩa hàm setcolor
 function setColor(element){
	// tạo biến màu
	const color = randomColor();

	// đặt style background cho square
	element.style.background = color;


 }

 // định nghĩa hàm removeColor
 function removeColor(element){
	element.style.background = '#1d1d1d'; 
 }

 // định nghĩa hàm random
 function randomColor(){
	 var letter ='0123456789ABCDEF'
	 var color ='#'

	 // tạo vòng lặp lặp quá 6 phần tử của mã màu hex
	 for(var i =0 ;i<6;i++){
		 color+=letter[Math.floor(Math.random() * 16)];
	 }
	 return color;
 }




// const container = document.querySelector('.container')
// const SQUARES = 200

// for (let i = 0; i < SQUARES; i++) {
// 	const square = document.createElement('div')//?
// 	square.classList.add('square')

// 	square.addEventListener('mouseover', () => setColor(square))

// 	square.addEventListener('mouseout', () => removeColor(square))

// 	container.appendChild(square)//?
// }

// function setColor(element) {
// 	const color = generateRandomColor()//?
// 	element.style.background = color
// 	element.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`
// }

// function removeColor(element) {
// 	element.style.background = '#1d1d1d'
// 	element.style.boxShadow = '0 0 2px #000'
// }

// function generateRandomColor() {
// 	let letters = '0123456789ABCDEF'
// 	let color = '#'
// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)]
// 	}
// 	return color
// }
