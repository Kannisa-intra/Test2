function changeBackground() {
    document.body.style.backgroundColor = "#D3D3D3";
}

function ClickToAlert() {
    alert("สำเร็จ");
}

const hoverbox = document.getElementById("box");
hoverbox.onmouseover = function () {
    hoverbox.style.backgroundColor = "red";
};
hoverbox.onmouseout = function () {
    hoverbox.style.backgroundColor = "";
};

const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
textInput.onkeyup = function () {
    textOutput.textContent = "คุณพิมพ์: " + textInput.value;
};

const eventButton = document.getElementById("eventButton");
const TextEvent = document.getElementById("ByeEvent");
eventButton.addEventListener("click", function () {
    TextEvent.textContent = "บายๆ";
});

const myForm = document.getElementById("myForm");
const message = document.getElementById("Message");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();


    if (!email.includes("@") || !email.endsWith(".com")) {
        message.textContent = "อีเมลไม่ถูกต้อง";
        message.style.color = "red";
    } else {
        message.textContent = `อีเมลถูกต้อง ชื่อ ${fname} ${lname}, อีเมล: ${email}`;
        message.style.color = "green";
    }
});

function calculateArea() {
    const radius = document.getElementById("radius").value;
    const resultArea = document.getElementById("resultArea");
    if(radius === "" || isNaN(radius)){
        resultArea.textContent = "กรุณากรอกค่ารัศมีเป็นตัวเลข";
        resultArea.style.color = "red";
    }else{
        const area = Math.PI * Math.pow(radius, 2);
        resultArea.textContent = "พื้นที่วงกลม: " + area.toFixed(2);
        resultArea.style.color = "green";
    }
}


function calculateAge() {
    const Yourage = document.getElementById("age").value;
    const resultAge = document.getElementById("resultAge");

    // ตรวจสอบว่ากรอกอายุเป็นตัวเลขหรือไม่
    if (Yourage === "" || isNaN(Yourage)) {
        resultAge.textContent = "กรุณากรอกอายุเป็นตัวเลข";
        resultAge.style.color = "red";
    } else {
        // ตรวจสอบช่วงอายุ
        if (Yourage <= 15) {
            resultAge.textContent = "เด็ก";
        } else if (Yourage >= 16 && Yourage <= 25) {
            resultAge.textContent = "วัยรุ่น";
        } else {
            resultAge.textContent = "ผู้ใหญ่";
        }
    }
}

function calculateNumber() {
    const Num = document.getElementById("Number").value;
    const resultNum = document.getElementById("resultNumber");

    if(Num === "" || isNaN(Num)){
        resultNum.textContent = "กรุณากรอกตัวเลข";
    }else{
        if(Num % 2 === 0){
            resultNum.textContent = "เลขคู่";
        }else{
            resultNum.textContent = "เลขคี่";
        }
    }
}

function showNumber(){
    const resultShow = document.getElementById("resultshowNumber");
    for (let i = 1; i <= 10; i++) {
        resultShow.textContent += i + " ";
    }
    showNumber.innerHTML = resultShow;
}

function StartLoop(){
    const resultLoop = document.getElementById("resultLoop");
    let input = '';
    let result = '';
    while(input != 'exit'){
        input = prompt('กรุณากรอกข้อมูล (exit เพื่อออก) :');
        if(input != 'exit'){
            result += "คุณพิมพ์" + input + "<br>";
        }
    }
    resultLoop.innerHTML = result;
}

function RandomNumber(){
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log('จำนวน :',arr.length, 'รายการ');
    return arr;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function StartBubbleSort(){
    let  randomArr = RandomNumber();
    const beforeSort = document.getElementById("beforeSort");
    beforeSort.innerHTML = randomArr;
    
    let sort = bubbleSort([...randomArr]);
    const afterSort = document.getElementById("afterSort");
    afterSort.innerHTML = bubbleSort(randomArr);

}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calculateFactorial(){
    const resultFactorial = document.getElementById("factorialResult");
    const num = document.getElementById("factorial").value;
    try{
        
    if(num === "" || isNaN(num)){
        resultFactorial.textContent = "กรุณากรอกตัวเลข";
    }else{
        resultFactorial.textContent = "ค่า Factorial ของ " + num + " คือ " + factorial(num);
    }
    }catch(error){
        resultFactorial.textContent = error.message;
    }
}

function calculateFibonacci(){
    const resultFibonacci = document.getElementById("fibonacciResult");
    const num = document.getElementById("fibonacci").value;

    try{
        if(num === "" || isNaN(num)){
            resultFibonacci.textContent = "กรุณากรอกตัวเลข";
        }else{
            resultFibonacci.textContent = "ค่า Fibonacci ของ " + num + " คือ " + fibonacci(num);
        }
    }catch(error){
        resultFibonacci.textContent = error.message;
    }
    
}