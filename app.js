//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе
var activePlayer = 1;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, нэгээс зургаа гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector('#score-0').textContent = dice;
// window.document.querySelector('#score-1').innerHTML = "<em> YES </em>";

//Программ эхлэхэд бэлтгье
document.getElementById("score-0").textContent = '0';
window.document.getElementById('score-1').textContent = '0';
// <div class="player-current-score" id="current-0">11</div> 
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Эвэнт гэдэг нь ямар нэгэн үйлдэл хийгдлээ гэж кодонд мэдэгддэг процесс юм. Жишээ нь click, scroll, press mouse
// roll dice button дарахад event ажиллах
document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

});
