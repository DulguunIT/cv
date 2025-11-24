//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе
var activePlayer = 0;

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

// roll dice button дарахад event ажиллах ба шоо шидэх эвэнт байна буюу голын шооны зураг хөдөлнө.
document.querySelector(".btn-roll").addEventListener("click", function () {
    //1 - 6 доторх санамсаргүй тоо generates
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // буусан тоо нь нэгээс ялгаатай тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else {

        scores[activePlayer] += roundScore;
        roundScore = 0;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        document.getElementById("current-" + activePlayer).textContent = roundScore;
        // нэг буусан бол тоглогчийн ээлжийг солино
        //Хэрэв идэвхтэй тоглогч нь О байвал 1 болго. Үгүй бол О болго.

        //before changing activePlayer. Remove red dote.
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        activePlayer = activePlayer === 0 ? 1 : 0;
        // Red dot 
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

    }
});
