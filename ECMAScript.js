/* 
document.querySelector(".title").style.backgroundImage = "url('img/wood.png')";
document.querySelector("#ピクトグラム").src="img/pikuto-s.png"
*/


// ボタンを押した回数の変数(確認用)
let number = 1;
// 条件分岐（if）のための変数＋その他
let 変数１ = 1;
let 変数２ = 0;
let 変数４ = 2;
let 変数５ = 1;
let 変数６ = 1;
let 変数７ = -1;
let variable = "a";
let 終了 = 0;
let クリック数 = 1;
let クリック数2 = 0;
let 鍵1 = 1;
let 鍵2 = 1;
let 鍵3 = 1;
let 何秒 = 0;
let カスタムモード = "OFF";
let カスタムHIIT = {"number":0,"type":1};//ブラケット記法(試し)
let HIITカラー = [0,"#ffa763","#ff8c00","#ff5454","#ffac06","#ff8c00","#ff3e20","#ff3e20","#8bc452","#9528f4"]

// メイン変数

let 分;
let 秒;
let ミリ秒;
let stopミリ秒;
let stop秒;
let stop分;
let stopミリ秒2 = 0;
let stop秒2 = 0;
let stop分2 = 0;
let 今の時間;
// SETの初期値
let 今の回数;
let 時間割合;
let 残り時間 = 10;
let 残り回数 = 5;
let 運動時間=[5,5,5,5];
let 休憩時間=[5,5,5,5];
let 回数カウント=[1000,1000,1000,1000];
let セット数=[1,0,0,0];
let 合計セット数 = 1;
let オプション2 = [];let オプション2none = [];
let オプション3 = [];let オプション3none = [];
let オプション4 = [];let オプション4none = [];
let オプション5 = [];let オプション5none = [];
//idの取得の省略
const リセット = document.getElementById("clear");
const ボタン = document.getElementById("btn"); //リセット&スタートボタン
const timer = document.getElementById("timer");
const 回数 = document.getElementById("kazu");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const ms = document.getElementById("millisecond");
const はてな = document.getElementById("hatena");
const ヘルプ = document.getElementById("ヘルプ");
const ヘルプ１ = document.getElementById("help1");
const ヘルプ２ = document.getElementById("help2");
const ヘルプ３ = document.getElementById("help3");
const ヘルプ４ = document.getElementById("help4");
const ヘルプ５ = document.getElementById("help5");
const 暗転 = document.getElementById("anten");
const 回数時間1 = document.getElementById("回数時間");
const 運動1 = document.getElementById("運動");
const 休憩1 = document.getElementById("休憩");
const セット1 = document.getElementById("セット");
const 回数時間2 = document.getElementById("回数時間2");
const 運動2 = document.getElementById("運動2");
const 休憩2 = document.getElementById("休憩2");
const セット2 = document.getElementById("セット2");
const 回数時間3 = document.getElementById("回数時間3");
const 運動3 = document.getElementById("運動3");
const 休憩3 = document.getElementById("休憩3");
const セット3 = document.getElementById("セット3");
const 回数時間4 = document.getElementById("回数時間4");
const 運動4 = document.getElementById("運動4");
const 休憩4 = document.getElementById("休憩4");
const セット4 = document.getElementById("セット4");
const 残り分 = document.getElementById("残り分");
const 残り秒 = document.getElementById("残り秒");
const 残り = document.getElementById("残り");
const HIIT = document.getElementById("バージョン");
const SET1 = document.getElementById("モード1");
const SET2 = document.getElementById("モード2");
const SET3 = document.getElementById("モード3");
const SET4 = document.getElementById("モード4");
const カスタム = document.getElementsByClassName("s");
const グラフ1 = document.getElementById("グラフ1");
const グラフ2 = document.getElementById("グラフ2");
const グラフ3 = document.getElementById("グラフ3");
const グラフ4 = document.getElementById("グラフ4");
const ピクト = document.getElementById("ピクトグラム");
const ルート = document.documentElement;

for(let i=1;i<5;i++){オプション2[i] = document.querySelectorAll(`[name='SET${i}'] .OP2`);オプション2none[i] = document.querySelectorAll(`[name='SET${i}'] .OP2none`);};
for(let i=1;i<5;i++){オプション3[i] = document.querySelectorAll(`[name='SET${i}'] .OP3`);オプション3none[i] = document.querySelectorAll(`[name='SET${i}'] .OP3none`);};
for(let i=1;i<5;i++){オプション4[i] = document.querySelectorAll(`[name='SET${i}'] .OP4`);オプション4none[i] = document.querySelectorAll(`[name='SET${i}'] .OP4none`);};
for(let i=1;i<5;i++){オプション5[i] = document.querySelectorAll(`[name='SET${i}'] .OP5`);オプション5none[i] = document.querySelectorAll(`[name='SET${i}'] .OP5none`);};
// for文でeval関数を避けるための配列のid変数

let 運動 = [運動1,運動2,運動3,運動4];
let 休憩 = [休憩1,休憩2,休憩3,休憩4];
let 回数時間 = [回数時間1,回数時間2,回数時間3,回数時間4];
let セット = [セット1,セット2,セット3,セット4];
let グラフ = [グラフ1,グラフ2,グラフ3,グラフ4];
let SET = [0,SET1,SET2,SET3,SET4];
//初期設定
  for(t=0;t<4;t++){for(i=0,j=0;j<1;i++){if(運動[t].options[i].text === "5秒"){運動[t].options[i].selected = true; j = 1;}}};
  for(t=0;t<4;t++){for(i=0,j=0;j<1;i++){if(休憩[t].options[i].text === "5秒"){休憩[t].options[i].selected = true; j = 1;}}};
// スタートまたはストップが押された
ボタン.onclick = function () {
  console.log(number);
  number = number + 1;
  // スタートが押された場合
  if (変数１ === 1) {
    if (クリック数 === 1) {//スタート(再開を含まない)時に一度だけ実行
      残り回数 = 運動時間[0] / (回数カウント[0]/1000);
      回数.textContent = 残り回数;合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
      ピクト.src = "img/pikuto-u.png";
      console.log(`合計セット数は${合計セット数}です`);
    }
    変数４ = 2;
    クリック数 = 2;
    ボタン.innerHTML = "stop";
    ボタン.classList.add("off");
    ルート.style.setProperty("--click","none");
    変数１ += 0.1;
    console.log("start");
    暗転.classList.add("antengo");
    Start();

    const StartTime = Date.now();
    // 時間を計測して表示する
    let 時間 = setInterval(function () {
      if (変数４ === 1) {
        clearInterval(時間);
      } else {
          今の時間 = Date.now() - StartTime;
          // start、再開が偶数回目の時間と再開が奇数回目の時間
          if (変数７ === -1 || 変数７ % 2) {
            分        =       Math.floor((今の時間 + stopミリ秒2 + stop秒2 * 1000) / 60000) + stop分2;
            秒        =        Math.floor(((今の時間 + stopミリ秒2 + stop秒2 * 1000) % 60000) / 1000);
            ミリ秒     =      Math.floor((今の時間 + stopミリ秒2) % 1000);
            stopミリ秒 = ミリ秒;
            stop秒    = 秒;
            stop分    = 分;
          } else {
            分 = Math.floor((今の時間 + stopミリ秒 + stop秒 * 1000) / 60000) + stop分;
            秒 = Math.floor(((今の時間 + stopミリ秒 + stop秒 * 1000) % 60000) / 1000);
            ミリ秒 = Math.floor((今の時間 + stopミリ秒) % 1000);
            stopミリ秒2 = ミリ秒;
            stop秒2 = 秒;
            stop分2 = 分;
          }

          m.innerHTML = ("0" + 分).slice(-2);
          s.innerHTML = ("0" + 秒).slice(-2);
          ms.innerHTML = ("00" + ミリ秒).slice(-3);

          // 各SETの設定の違いによる今の回数の不具合の修正
          if (鍵1 === 1 && セット数[0] === 0) {
            鍵3 = 今の回数;
            鍵2 = 分 * 60000 + 秒 * 1000 + ミリ秒;
            鍵1 = 0;
            残り回数 -= 運動時間[0] / (回数カウント[0] / 1000);
          if (セット数[1] > 0) {
            残り回数 += 運動時間[1] / (回数カウント[1] / 1000);
            回数.textContent = 運動時間[1] / (回数カウント[1] / 1000);
            鍵1 = 2;
          } else if (セット数[2] > 0) {
            残り回数 += 運動時間[2] / (回数カウント[2] / 1000);
            回数.textContent = 運動時間[2] / (回数カウント[2] / 1000);
            鍵1 = 3;
          } else if (セット数[3] > 0) {
            残り回数 += 運動時間[3] / (回数カウント[3] / 1000);
            回数.textContent = 運動時間[3] / (回数カウント[3] / 1000);
          }}

          if (セット数[1] === 0 && 鍵1 === 2) {
            鍵3 = 今の回数;
            鍵2 = 分 * 60000 + 秒 * 1000 + ミリ秒;
            鍵1 = 4;
            残り回数 -= 運動時間[1] / (回数カウント[1] / 1000);
          if (セット数[2] > 0) {
            残り回数 += 運動時間[2] / (回数カウント[2] / 1000);
            回数.textContent = 運動時間[2] / (回数カウント[2] / 1000);
            鍵1 = 3;
          } else if (セット数[3] > 0) {
            残り回数 += 運動時間[3] / (回数カウント[3] / 1000);
            回数.textContent = 運動時間[3] / (回数カウント[3] / 1000);
          }}

          if (セット数[2] === 0 && 鍵1 === 3) {
            鍵3 = 今の回数;
            鍵2 = 分 * 60000 + 秒 * 1000 + ミリ秒;
            残り回数 -= 運動時間[2] / (回数カウント[2] / 1000);
            鍵1 = 4;
            残り回数 += 運動時間[3] / (回数カウント[3] / 1000);
            回数.textContent = 運動時間[3] / (回数カウント[3] / 1000);
          }
          // 今の回数を定義
          if (セット数[0] > 0) {
            今の回数 = Math.floor((分 * 60000 + 秒 * 1000 + ミリ秒) / 回数カウント[0]);
          } else if (セット数[1] > 0) {
            今の回数 = 鍵3 + Math.floor((分 * 60000 + 秒 * 1000 + ミリ秒 - 鍵2) / 回数カウント[1]);
          } else if (セット数[2] > 0) {
            今の回数 = 鍵3 + Math.floor((分 * 60000 + 秒 * 1000 + ミリ秒 - 鍵2) / 回数カウント[2]);
          } else if (セット数[3] > 0) {
            今の回数 = 鍵3 + Math.floor((分 * 60000 + 秒 * 1000 + ミリ秒 - 鍵2) / 回数カウント[3]);
          }
          // １秒ごとに残り時間表示
          if (何秒 === "終了"){
          }else if(分 * 60 + 秒 === 何秒){
            if(残り時間-何秒<=0){
              何秒 = "終了"
              残り.innerHTML = "";
              残り秒.innerHTML = "終了";
              残り.classList.add("nokori");
            }else if(残り時間 - 何秒 < 60){
              残り秒.innerHTML = 残り時間-何秒 + "秒";
              残り分.innerHTML = "";
            }else if(残り時間 - 何秒 >= 60){
              if((残り時間-何秒)%60===0){
                残り秒.innerHTML = "";
                残り分.innerHTML = (残り時間-何秒)/60 + "分";
              }else{
                残り秒.innerHTML = (残り時間-何秒)%60+ "秒";
                残り分.innerHTML = Math.floor((残り時間-何秒)/60) + "分";              
              }
            }
            何秒+=1
          }
          // 回数１回ごとに回数を変える
          if (終了 === "終了") {          //←なくても動作するが、何度もclasslist.addやtextcontentを繰り返すとカクカクして表示されるため
          } else if (合計セット数 === 0) {
            ピクト.src = "img/pikuto-g.png";
            回数.classList.remove("kuro");
            回数.classList.add("owari");
            回数.textContent = "Finish!";
            残り.innerHTML = "";
            残り秒.innerHTML = "終了";
            残り.classList.add("nokori");
            STOP();
            終了 = "終了";
          } else if (今の回数 - 変数５ === 0) {       //終了するまで回数時間に設定した値秒後に実行させる
            console.log(残り回数);
            変数５ += 1;
            回数.textContent = Math.floor(残り回数 - 今の回数);
            変数２ += 1;
            console.log(Date.now() - StartTime);
            if (セット数[0] > 0) {
              if (変数２ === 運動時間[0] / (回数カウント[0] / 1000)) {
                残り回数 += 休憩時間[0] / (回数カウント[0] / 1000);
                回数.classList.add("kuro");
                回数.textContent = 休憩時間[0] / (回数カウント[0] / 1000);
                ピクト.src = "img/pikuto-k.png";
              } else if (変数２ ===(運動時間[0] + 休憩時間[0]) / (回数カウント[0] / 1000)) {
                残り回数 += 運動時間[0] / (回数カウント[0] / 1000);
                回数.classList.remove("kuro");
                回数.textContent = 運動時間[0] / (回数カウント[0] / 1000);
                変数２ = 0;
                合計セット数 -= 1;
                セット数[0] -= 1;
                ピクト.src = "img/pikuto-u.png";
              }
            } else if (セット数[1] > 0) {
              // SET1と同じでセット数２が終わるまで繰り返す
              if (変数２ === 運動時間[1] / (回数カウント[1] / 1000)) {
                残り回数 += 休憩時間[1] / (回数カウント[1] / 1000);
                回数.classList.add("kuro");
                回数.textContent = 休憩時間[1] / (回数カウント[1] / 1000);
                ピクト.src = "img/pikuto-k.png";
              } else if (変数２ ===(運動時間[1] + 休憩時間[1]) / (回数カウント[1] / 1000)) {
                残り回数 += 運動時間[1] / (回数カウント[1] / 1000);
                回数.classList.remove("kuro");
                回数.textContent = 運動時間[1] / (回数カウント[1] / 1000);
                変数２ = 0;
                合計セット数 -= 1;
                セット数[1] -= 1;
                ピクト.src = "img/pikuto-u.png";
              }
            } else if (セット数[2] > 0) {
              // SET1と同じでセット数[2]が終わるまで繰り返す
              if (変数２ === 運動時間[2] / (回数カウント[2] / 1000)) {
                残り回数 += 休憩時間[2] / (回数カウント[2] / 1000);
                回数.classList.add("kuro");
                回数.textContent = 休憩時間[2] / (回数カウント[2] / 1000);
                ピクト.src = "img/pikuto-k.png";
              } else if (変数２ ===(運動時間[2] + 休憩時間[2]) / (回数カウント[2] / 1000)) {
                残り回数 += 運動時間[2] / (回数カウント[2] / 1000);
                回数.classList.remove("kuro");
                回数.textContent = 運動時間[2] / (回数カウント[2] / 1000);
                変数２ = 0;
                合計セット数 -= 1;
                セット数[2] -= 1;
                ピクト.src = "img/pikuto-u.png";
              }
            } else if (セット数[3] > 0) {
              // SET1と同じでセット数[3]が終わるまで繰り返す
              if (変数２ === 運動時間[3] / (回数カウント[3] / 1000)) {
                残り回数 += 休憩時間[3] / (回数カウント[3] / 1000);
                回数.classList.add("kuro");
                回数.textContent = 休憩時間[3] / (回数カウント[3] / 1000);
                ピクト.src = "img/pikuto-k.png";
              }else if (変数２ === (運動時間[3] + 休憩時間[3]) / (回数カウント[3] / 1000)) {
                残り回数 += 運動時間[3] / (回数カウント[3] / 1000);
                回数.classList.remove("kuro");
                回数.textContent = 運動時間[3] / (回数カウント[3] / 1000);
                変数２ = 0;
                合計セット数 -= 1;
                セット数[3] -= 1;
                ピクト.src = "img/pikuto-u.png";
              }
            }
          }
      }
    }, 10);//10ms後左(上記の)の関数(アロー関数)を実行、変数"時間"にclearintervalが実行された場合止まる。

    //   ストップが押された場合
  } else if (変数１ === 1.1) {
    Stop();
    //終了時にストップしたいためfunctionで呼び出す
    STOP();
  }
};
// リセットが押された場合
リセット.onclick = function () {
  Reset();
  // 左の表示がstopならstartにする
  if (変数１ === 1.1) {
    変数１ = 1;
    ボタン.innerHTML = "start";
    ボタン.classList.remove("off");
    // 回数の更新を止める
    変数４ = 1;
  }
  // 変数のリセット
  セット数[0] = Number(セット[0].value);
  セット数[1] = Number(セット[1].value);
  セット数[2] = Number(セット[2].value);
  セット数[3] = Number(セット[3].value);
  合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
  クリック数 = 1;
  終了 = "si";
  stopミリ秒2 = 0;  stop秒2 = 0; stop分2 = 0;
  変数２ = 0; 変数５ = 1; 変数６ = 1; 変数７ = -1;
  鍵1 = 1; 鍵2 = 1; 鍵3 = 1;
  if (残り時間 >= 60){
  残り分.innerHTML = Math.floor(残り時間/60) + "分"
      if(残り時間%60 === 0){  残り秒.innerHTML = "";
      }else{  残り秒.innerHTML = (残り時間)%60+ "秒";}
  }else if(残り時間 < 60){
    残り秒.innerHTML = (残り時間)%60+ "秒";
    残り分.innerHTML = "";}
    何秒 = 0;
    残り.innerHTML = "残り"
  // 動作確認
  console.log(number);
  number = number + 1;
  console.log("reset");
  // 回数をリセット
  残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
  回数.textContent = Math.floor(残り回数);
  m.innerHTML = "00".slice(-2);
  s.innerHTML = "00".slice(-2);
  ms.innerHTML = "000".slice(-3);
  // classを元に戻す
  回数.classList.remove("owari");
  if (クリック数2 === 0 && カスタムHIIT["number"]===1){}else{
  暗転.classList.remove("antengo");}
  回数.classList.remove("kuro");
  残り.classList.remove("nokori");
  ルート.style.setProperty("--click","auto");
};

// ヘルプが押された
はてな.addEventListener("click", () => {
  if (変数６ === 2 || ヘルプ.value === "1") {
    変数６ = 1;
    console.log("q");
    console.log("ヘルプ");
    ヘルプ１.classList.remove("Help");
    ヘルプ２.classList.remove("Help");
    ヘルプ３.classList.remove("Help");
    ヘルプ４.classList.remove("Help");
    ヘルプ５.classList.remove("Help");
  } else if (ヘルプ.value === "2") {
    console.log("r");
    console.log("HIIT");
    変数６ = 2;
    ヘルプ１.classList.add("Help");
  } else if (ヘルプ.value === "3") {
    console.log("s");
    console.log("上の数字");
    変数６ = 2;
    ヘルプ２.classList.add("Help");
  } else if (ヘルプ.value === "4") {
    console.log("t");
    console.log("下の数字");
    変数６ = 2;
    ヘルプ３.classList.add("Help");
  } else if (ヘルプ.value === "5") {
    console.log("u");
    console.log("ボタン");
    変数６ = 2;
    ヘルプ４.classList.add("Help");
  } else if (ヘルプ.value === "6") {
    console.log("v");
    console.log("SET");
    変数６ = 2;
    ヘルプ５.classList.add("Help");
  }
});

回数時間[0].addEventListener("change", () => {
  console.log(Number(回数時間[0].value));
    回数カウント[0] = Number(回数時間[0].value *1000);
  残り回数 = 運動時間[0
] / (回数カウント[0] / 1000);
  回数.textContent = 残り回数;
});
運動[0].addEventListener("change", () => {
  console.log(Number(運動[0].value));
  if (Number(運動[0].value) < 6) {
    運動時間[0] = Number(運動[0].value * 10);
  } else {
    運動時間[0] = 60 + Number(運動[0].value - 6) * 30;
  }
  残り回数 = 運動時間[0
] / (回数カウント[0] / 1000);
  回数.textContent = 残り回数;
  時間セット();
});
休憩[0].addEventListener("change", () => {
  console.log(Number(休憩[0].value));
  if (Number(休憩[0].value) < 6) {
    休憩時間[0] = Number(休憩[0].value * 10);
  } else {
    休憩時間[0] = 60 + Number(休憩[0].value - 6) * 30;
  }
  時間セット();
});
セット[0].addEventListener("change", () => {
  console.log(Number(セット[0].value));
  セット数[0] = Number(セット[0].value);
  合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
  時間セット();
});


回数時間[1].addEventListener("change", () => {
  console.log(Number(回数時間[1].value));
    回数カウント[1] = Number(回数時間[1].value *1000);
});
運動[1].addEventListener("change", () => {
  console.log(Number(運動[1].value));
  if (Number(運動[1].value) < 6) {
    運動時間[1] = Number(運動[1].value * 10);
  } else {
    運動時間[1] = 60 + Number(運動[1].value - 6) * 30;
  }
  時間セット();
});

休憩[1].addEventListener("change", () => {
  console.log(Number(休憩[1].value));
  if (Number(休憩[1].value) < 6) {
    休憩時間[1] = Number(休憩[1].value * 10);
  } else {
    休憩時間[1] = 60 + Number(休憩[1].value - 6) * 30;
  }
  時間セット();
});
セット[1].addEventListener("change", () => {
  console.log(Number(セット[1].value));
  セット数[1] = Number(セット[1].value);
  合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
  時間セット();
});


回数時間[2].addEventListener("change", () => {
  console.log(Number(回数時間[2].value));
    回数カウント[2] = Number(回数時間[2].value *1000);
});
運動[2].addEventListener("change", () => {
  console.log(Number(運動[2].value));
  if (Number(運動[2].value) < 6) {
    運動時間[2] = Number(運動[2].value * 10);
  } else {
    運動時間[2] = 60 + Number(運動[2].value - 6) * 30;
  }
  時間セット();
});
休憩[2].addEventListener("change", () => {
  console.log(Number(休憩[2].value));
  if (Number(休憩[2].value) < 6) {
    休憩時間[2] = Number(休憩[2].value * 10);
  } else {
    休憩時間[2] = 60 + Number(休憩[2].value - 6) * 30;
  }
  時間セット();
});
セット[2].addEventListener("change", () => {
  console.log(Number(セット[2].value));
  セット数[2] = Number(セット[2].value);
  合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
  時間セット();
});


回数時間[3].addEventListener("change", () => {
  console.log(Number(回数時間[3].value));
    回数カウント[3] = Number(回数時間[3].value *1000);
});
運動[3].addEventListener("change", () => {
  console.log(Number(運動[3].value));
  if (Number(運動[3].value) < 6) {
    運動時間[3] = Number(運動[3].value * 10);
  } else {
    運動時間[3] = 60 + Number(運動[3].value - 6) * 30;
  }
  時間セット();
});
休憩[3].addEventListener("change", () => {
  console.log(Number(休憩[3].value));
  if (Number(休憩[3].value) < 6) {
    休憩時間[3] = Number(休憩[3].value * 10);
  } else {
    休憩時間[3] = 60 + Number(休憩[3].value - 6) * 30;
}
時間セット();
});
セット[3].addEventListener("change", () => {
  console.log(Number(セット[3].value));
  セット数[3] = Number(セット[3].value);
  合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
  時間セット();
});



HIIT.addEventListener("change", () => {
  // 運動.options[7].innerHTML = "1";
  // 運動.options[7].value = "10";
  if(HIIT.value==="1"){   カスタムHIIT["number"] = 0;   カスタムHIIT["type"] = 1; 暗転.classList.remove("antengo");
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let t=0;t<4;t++){                   for(let i=0,j=0;j<1;i++){if (運動[t].options[i].text === "5秒"){ 運動[t].options[i].selected = true; j+=1; 運動時間[t]=5;}}}
    for(let t=0;t<4;t++){                   for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === "5秒"){ 休憩[t].options[i].selected = true; j+=1; 休憩時間[t]=5;}}}
    for(let t=0;t<4;t++){                   for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === "1秒"){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=1000;}}}
    for(let t=0,p=1;t<4;t++){if(t>0){p=0};  for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}}
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "";
    残り秒.innerHTML = "10秒";  
    ルート.style.setProperty("--mordcolor",HIITカラー[1]);
  }else if(HIIT.value==="2"){   カスタムHIIT["number"] = 1; カスタムHIIT["type"] = 2;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let t=0,p=20;t<4;t++){if(t>0){p=5} for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p}秒`){ 運動[t].options[i].selected = true; j+=1; 運動時間[t] = p;}}}
    for(let t=0,p=10;t<4;t++){if(t>0){p=5} for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p}秒`){ 休憩[t].options[i].selected = true; j+=1; 休憩時間[t] = p;}}}
    for(let t=0,p=2.5;t<4;t++){if(t>0){p=1}for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1; 回数カウント[t] = p*1000;}}}
    for(let t=0,p=8;t<4;t++){if(t>0){p=0}  for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1; セット数[t] = p;}}}
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "4分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[2]);
    } 
  }else if(HIIT.value==="3"){   カスタムHIIT["number"]= 1;  カスタムHIIT["type"] = 3;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let p=10,t=0;t<4;t++){if(t===1){p=40;}else if(t>1){p=5;};  for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p}秒`){ 運動[t].options[i].selected = true; j+=1; 運動時間[t]=p;}}}
    for(let p=5,t=0;t<4;t++){if(t===1){p=20;}else{p=5;};           for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p}秒`){ 休憩[t].options[i].selected = true; j+=1;休憩時間[t]=p;}}}
    for(let p=2.5,t=0;t<4;t++){if(t>1){p=1;};                      for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=p*1000;}}}
    for(let p=8,t=0;t<4;t++){if(t===1){p=5;}else if(t>1){p=0;};    for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}}
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "7分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[3]);
    }
  }else if(HIIT.value==="4"){   カスタムHIIT["number"]= 1;  カスタムHIIT["type"] = 4;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let p=10,t=0;t<4;t++){if(t===1){p=20;}else if(t===2){p=40;}else if(t===3){p=5}  for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p}秒`){ 運動[t].options[i].selected = true; j+=1; 運動時間[t]=p;}}}
    for(let p=5,t=0;t<4;t++){if(t===1){p=10;}else if(t===2){p=20;}else if(t===3){p=5}   for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p}秒`){ 休憩[t].options[i].selected = true; j+=1;休憩時間[t]=p;}}}
    for(let p=2.5,t=0;t<4;t++){if(t===3){p=1;};                                         for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=p*1000;}}}
    for(let p=4,t=0;t<4;t++){if(t===3){p=0;};                                           for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}}
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "7分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[4]);
    }
  }else if(HIIT.value==="5"){   カスタムHIIT["number"] = 1; カスタムHIIT["type"] = 5;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let p=20,t=0;t<4;t++){if(t===1){p=40;}else if(t>1){p=5;};  for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p}秒`){ 運動[t].options[i].selected = true; j+=1; 運動時間[t]=p;}}};
    for(let p=15,t=0;t<4;t++){if(t===1){p=30;}else if(t>1){p=5;};  for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p}秒`){ 休憩[t].options[i].selected = true; j+=1;休憩時間[t]=p;}}};
    for(let p=2.5,t=0;t<4;t++){if(t>1){p=1;};                      for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=p*1000;}}};
    for(let p=6,t=0;t<4;t++){if(t===1){p=3;}else if(t>1){p=0;};    for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}};
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "7分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[5]);
    }
  }else if(HIIT.value==="6"){   カスタムHIIT["number"] = 1; カスタムHIIT["type"] = 6;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let p=40,t=0;t<4;t++){if(t>0){p=5;};  for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p}秒`){ 運動[t].options[i].selected = true; j+=1; 運動時間[t]=p;}}};
    for(let p=20,t=0;t<4;t++){if(t>0){p=5;};  for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p}秒`){ 休憩[t].options[i].selected = true; j+=1;休憩時間[t]=p;}}};
    for(let p=2.5,t=0;t<4;t++){if(t>0){p=1;};                      for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=p*1000;}}};
    for(let p=7,t=0;t<4;t++){if(t>0){p=0;};    for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}};
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "7分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[6]);
    }
  }else if(HIIT.value==="7"){   カスタムHIIT["number"] = 1; カスタムHIIT["type"] = 7;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let p=120,t=0,z="分";t<4;t++){if(t===1){p=60;}else if(t>1){p=300;z="秒"};  for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p/60+z}`){ 運動[t].options[i].selected = true; j+=1; if(t>1){運動時間[t]=5;}else{運動時間[t]=p;}}}};
    for(let p=1,t=0,z="分";t<4;t++){if(t===1){p=45;z="秒"}else if(t>1){p=5};  for(let i=0,j=0;j<1;i++){console.log(i+"で"+p+z+"です");if(休憩[t].options[i].text === `${p + z}`){ 休憩[t].options[i].selected = true; j+=1;if(t===0){休憩時間[t]=60;}else{休憩時間[t]=p;}}}};
    for(let p=2.5,t=0;t<4;t++){if(t>1){p=1;};                      for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=p*1000;}}};
    for(let p=1,t=0;t<4;t++){if(t===1){p=2;}else if(t>1){p=0};    for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}};
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "6分";
    残り秒.innerHTML = "30秒";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[7]);
    }
  }else if(HIIT.value==="8"){   カスタムHIIT["number"] = 1; カスタムHIIT["type"] = 8;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let t=0;t<4;t++){for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === "5秒"){ 運動[t].options[i].selected = true; j+=1; 運動時間[t] = 5;}}}
    for(let t=0,p=2.5;t<4;t++){if(t>0){p=5} for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p}秒`){ 休憩[t].options[i].selected = true; j+=1; 休憩時間[t] = p;}}}
    for(let t=0,p=2.5;t<4;t++){if(t>0){p=1}for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1; 回数カウント[t] = p*1000;}}}
    for(let t=0,p=32;t<4;t++){if(t>0){p=0}  for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1; セット数[t] = p;}}}
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3];
    残り分.innerHTML = "4分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[8]);
    }
  }else if(HIIT.value==="9"){   カスタムHIIT["number"] = 1; カスタムHIIT["type"] = 9;
    if (カスタムHIIT["type"]!==8){OP1();}else{OP5(1);for(let i=0;i>=0;i++){if(SET[1].options[i].text === "2.5+"){SET[1].options[i].selected = true;i -= i+2;}}for(let i=2;i<5;i++){SET[i].options[0].selected = true;OP1(i);}};
    for(let p=240,t=0,z="分";t<4;t++){if(t>0){p=300;z="秒"};  for(let i=0,j=0;j<1;i++){if(運動[t].options[i].text === `${p/60+z}`){ 運動[t].options[i].selected = true; j+=1; if(t>0){運動時間[t]=5;}else{運動時間[t]=p;}}}};
    for(let p=3,t=0,z="分";t<4;t++){if(t>0){p=5;z="秒"};  for(let i=0,j=0;j<1;i++){if(休憩[t].options[i].text === `${p + z}`){ 休憩[t].options[i].selected = true; j+=1;if(t===0){休憩時間[t]=180;}else{休憩時間[t]=p;}}}};
    for(let p=2.5,t=0;t<4;t++){if(t>0){p=1;};                      for(let i=0,j=0;j<1;i++){if(回数時間[t].options[i].text === `${p}秒`){ 回数時間[t].options[i].selected = true; j+=1;回数カウント[t]=p*1000;}}};
    for(let p=4,t=0;t<4;t++){if(t>0){p=0;};    for(let i=0,j=0;j<1;i++){if(セット[t].options[i].text === `${p}`){ セット[t].options[i].selected = true; j+=1;セット数[t]=p;}}};
    残り回数 = 運動時間[0] / (回数カウント[0] / 1000);
    回数.textContent = 残り回数;
    残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
    合計セット数 = セット数[0] + セット数[1] + セット数[2] + セット数[3]; 
    残り分.innerHTML = "28分";
    残り秒.innerHTML = "";
    if (クリック数2===0){
      暗転.classList.add("antengo");
      ルート.style.setProperty("--mordcolor",HIITカラー[9]);
    }
  }
  setchart();
  ルート.style.setProperty("--speed",`${残り時間}s`)
})


カスタム[0].addEventListener("click",()=>{ // [0]にするのはclasssで取得する値はidとはちがう(classはidと違い別々の要素にも同じclassを指定できる)ので(※classはリスト,配列になっている)正しい値を指定するため
if(クリック数2===0){クリック数2=1;
  ルート.style.setProperty("--mordcolor2","#81ff7de6 ")
  document.getElementById("カスタムモード").innerHTML = "ON";
  暗転.classList.remove("antengo");
  ルート.style.setProperty("--mordcolor","#ffa763");
}else{クリック数2=0;
  ルート.style.setProperty("--mordcolor2","#ff644ce6 ")
  document.getElementById("カスタムモード").innerHTML = "OFF";
  ルート.style.setProperty("--mordcolor",HIITカラー[(カスタムHIIT["type"])]);
  if(カスタムHIIT["number"]===1){
    暗転.classList.add("antengo");
  }
}})




SET1.addEventListener("change",()=>{
  if(SET1.value == 0 || SET1.value == 1){   //メモ    '==='ではなく'=='を使うことでSET1.valueの値が文字列でもNumberと同じように数値に変換される。
    OP1(1);
  }else if(SET1.value == 2){
    OP2(1);
  }else if(SET1.value == 3){
    OP3(1);
  }else if(SET1.value == 4){
    OP4(1);
  }else if(SET1.value == 5){
    OP5(1);
  }
})
SET2.addEventListener("change",()=>{
  if(SET2.value == 0 || SET2.value == 1){
    OP1(2);
  }else if(SET2.value == 2){
    OP2(2);
  }else if(SET2.value == 3){
    OP3(2);
  }else if(SET2.value == 4){
    OP4(2);
  }else if(SET2.value == 5){
    OP5(2);
  }
})
SET3.addEventListener("change",()=>{
  if(SET3.value == 0 || SET3.value == 1){
    OP1(3);
  }else if(SET3.value == 2){
    OP2(3);
  }else if(SET3.value == 3){
    OP3(3);
  }else if(SET3.value == 4){
    OP4(3);
  }else if(SET3.value == 5){
    OP5(3);
  }
})
SET4.addEventListener("change",()=>{
  if(SET4.value == 0 || SET4.value == 1){
    OP1(4);
  }else if(SET4.value == 2){
    OP2(4);
  }else if(SET4.value == 3){
    OP3(4);
  }else if(SET4.value == 4){
    OP4(4);
  }else if(SET4.value == 5){
    OP5(4);
  }
})
let svw;  let グラフu = [0,0,0,0]; let グラフk = [0,0,0,0];
function setchart(){
  svw = Math.floor(70/残り時間*10000)/10000;
  for (let t=0;t<4;t++){
    グラフ[t].innerHTML = "";
    for (let i=セット数[t];i>0;i--){
      ルート.style.setProperty(`--set${t+1}u`,`${svw*運動時間[t]}vw`);
      ルート.style.setProperty(`--set${t+1}k`,`${svw*休憩時間[t]}vw`);
      グラフk[t] = document.createElement("div");
      グラフk[t].className =`グラフ${t+1}2`;
      グラフu[t] = document.createElement("div");
      グラフu[t].className =`グラフ${t+1}1`;
      console.log(svw);
      グラフ[t].insertBefore(グラフk[t],グラフ[t].firstChild)
      グラフ[t].insertBefore(グラフu[t],グラフ[t].firstChild)
    }
  }
}
setchart();
 //上に書く文を少なくしてプログラムの可読性を高めるため+省略
function Start(){
  ピクト.classList.add("pikuto");
  ルート.style.setProperty("--animestop","running");
  if(variable==="u"){
    ピクト.src = "img/pikuto-u.png"
  }else if(variable==="k"){
    ピクト.src = "img/pikuto-k.png"
  }
}
function Stop(){
  ルート.style.setProperty("--animestop","paused");
  if (ピクト.src.substr(-12) === "pikuto-u.png"){variable = "u";
  }else if(ピクト.src.substr(-12) === "pikuto-k.png"){variable = "k";}
  else{variable = "g"}
  if(!(variable === "g")){
    ピクト.src = "img/pikuto-s.png"
  }
}
function STOP(){
  変数１ = 1;
  変数４ = 1;
  変数７ += 1;
  ボタン.innerHTML = "start";
  ボタン.classList.remove("off");
  console.log("stop");
  }
function Reset(){
  ピクト.src = "img/pikuto-s.png"
  ピクト.classList.remove("pikuto");
  variable = "u";
}
function 時間セット(){
  残り時間 = (運動時間[0] + 休憩時間[0]) * セット数[0] + (運動時間[1] + 休憩時間[1]) * セット数[1] + (運動時間[2] + 休憩時間[2]) * セット数[2] + (運動時間[3] + 休憩時間[3]) * セット数[3];
  ルート.style.setProperty("--speed",`${残り時間}s`)
  if (残り時間 >= 60){
    残り分.innerHTML = Math.floor(残り時間/60) + "分"
      if(残り時間%60 === 0){  残り秒.innerHTML = "";
      }else{  残り秒.innerHTML = (残り時間)%60+ "秒";}
  }else if(残り時間 < 60){
    残り秒.innerHTML = (残り時間)%60+ "秒";
    残り分.innerHTML = "";}
    setchart();
}

function OP1(set){
  if(set > 0){
    OP2("all",set);OP3("all",set);OP4("all",set);OP5("all",set);
    for(let i=0;i>=0;i++){if(運動[set-1].options[i].text === "5秒"){運動[set-1].options[i].selected =true;運動時間[set-1] = 5;i -= i+2;}};
    for(let i=0;i>=0;i++){if(休憩[set-1].options[i].text === "5秒"){休憩[set-1].options[i].selected =true;休憩時間[set-1] = 5;i -= i+2;}};
    for(let i=0;i>=0;i++){if(回数時間[set-1].options[i].text === "1秒"){回数時間[set-1].options[i].selected =true;回数カウント[set-1] = 1000;i -= i+2;}};
    for(let i=0,p=1;i>=0;i++){if(1<set){p=0;};if(セット[set-1].options[i].text === `${p}`){セット[set-1].options[i].selected =true;セット数[set-1] = p;i -= i+2;}};
    時間セット();
  }else{//HIITの変更の場合
    for(let i=1;i<5;i++){SET[i].options[0].selected = true;OP2("all",i);OP3("all",i);OP4("all",i);OP5("all",i);}
  }
}
function OP2(set,num){
  if(set !== "all"){
    OP3("all",set);OP4("all",set);OP5("all",set);
    for(let i=0;i<オプション2[set].length;i++){オプション2[set][i].classList.add("op2");}
    for(let i=0;i<オプション2none[set].length;i++){オプション2none[set][i].classList.add("op2none");}
    for(let i=0,j=0;j<111;i++){
      if((`00${j}`).slice(-1)==="1"){}else if(回数時間[set-1].options[i].text === "1秒"){回数時間[set-1].options[i].selected = true;回数カウント[set-1] = 1000;j+=1;}
      if(Number((`00${j}`).slice(-2))>=10){}else if(運動[set-1].options[i].text === "3秒"){運動[set-1].options[i].selected = true;運動時間[set-1] = 3;j+=10;}
      if(j >= 100){}else if(休憩[set-1].options[i].text === "3秒"){休憩[set-1].options[i].selected = true;休憩時間[set-1] = 3;j+=100;}
    }
    時間セット();if (set == 1){回数.textContent = "3";};
  }else {//op1などの選択の場合のリセット
    for(let i=0;i<オプション2[num].length;i++){オプション2[num][i].classList.remove("op2");};
    for(let i=0;i<オプション2none[num].length;i++){オプション2none[num][i].classList.remove("op2none");};
  }
}
function OP3(set,num){
  if(set !== "all"){
    OP2("all",set);OP4("all",set);OP5("all",set);
    for(let i=0;i<オプション3[set].length;i++){オプション3[set][i].classList.add("op3");}
    for(let i=0;i<オプション3none[set].length;i++){オプション3none[set][i].classList.add("op3none");}
    for(let i=0,j=0;j<111;i++){
      if((`00${j}`).slice(-1)==="1"){}else if(回数時間[set-1].options[i].text === "1秒"){回数時間[set-1].options[i].selected = true;回数カウント[set-1] = 1000;j+=1;}
      if(Number((`00${j}`).slice(-2))>=10){}else if(運動[set-1].options[i].text === "4秒"){運動[set-1].options[i].selected = true;運動時間[set-1] = 4;j+=10;}
      if(j >= 100){}else if(休憩[set-1].options[i].text === "4秒"){休憩[set-1].options[i].selected = true;休憩時間[set-1] = 4;j+=100;}
    }
    時間セット();if (set == 1){回数.textContent = "4";};
  }else {
    for(let i=0;i<オプション3[num].length;i++){オプション3[num][i].classList.remove("op3");};
    for(let i=0;i<オプション3none[num].length;i++){オプション3none[num][i].classList.remove("op3none");};
  }
}
function OP4(set,num){
  if(set !== "all"){
    OP2("all",set);OP3("all",set);OP5("all",set);
    for(let i=0;i<オプション4[set].length;i++){オプション4[set][i].classList.add("op4");}
    for(let i=0;i<オプション4none[set].length;i++){オプション4none[set][i].classList.add("op4none");}
    for(let i=0,j=0;j<111;i++){
      if((`00${j}`).slice(-1)==="1"){}else if(回数時間[set-1].options[i].text === "1秒"){回数時間[set-1].options[i].selected = true;回数カウント[set-1] = 1000;j+=1;}
      if(Number((`00${j}`).slice(-2))>=10){}else if(運動[set-1].options[i].text === "2秒"){運動[set-1].options[i].selected = true;運動時間[set-1] = 2;j+=10;}
      if(j >= 100){}else if(休憩[set-1].options[i].text === "2秒"){休憩[set-1].options[i].selected = true;休憩時間[set-1] = 2;j+=100;}
    }
    時間セット();if (set == 1){回数.textContent = "2";};
  }else {
    for(let i=0;i<オプション4[num].length;i++){オプション4[num][i].classList.remove("op4");};
    for(let i=0;i<オプション4none[num].length;i++){オプション4none[num][i].classList.remove("op4none");};
  }
}
function OP5(set,num){
  if(set !== "all"){
    OP2("all",set);OP3("all",set);OP4("all",set);
    for(let i=0;i<オプション5[set].length;i++){オプション5[set][i].classList.add("op5");}
    for(let i=0;i<オプション5none[set].length;i++){オプション5none[set][i].classList.add("op5none");}
    for(let i=0,j=0;j<111;i++){
      if((`00${j}`).slice(-1)==="1"){}else if(回数時間[set-1].options[i].text === "2.5秒"){回数時間[set-1].options[i].selected = true;回数カウント[set-1] = 2500;j+=1;}
      if(Number((`00${j}`).slice(-2))>=10){}else if(運動[set-1].options[i].text === "2.5秒"){運動[set-1].options[i].selected = true;運動時間[set-1] = 2.5;j+=10;}
      if(j >= 100){}else if(休憩[set-1].options[i].text === "2.5秒"){休憩[set-1].options[i].selected = true;休憩時間[set-1] = 2.5;j+=100;}
    }
    時間セット();if (set == 1){回数.textContent = "1";};
  }else {
    for(let i=0;i<オプション5[num].length;i++){オプション5[num][i].classList.remove("op5");};
    for(let i=0;i<オプション5none[num].length;i++){オプション5none[num][i].classList.remove("op5none");};
  }
}


// ルート.style.setProperty("--test",`${Number(セット[2].value)}vw`);
// ルート.style.setProperty("--zentai",`${Number(セット[3].value)}vw`);


//メモ欄
//  残り回数＝運動時間/回数時間
//
//50vw/残り時間=１秒当たりの長さvw
//運動時間*１秒当たりの長さ+休憩時間*１秒あたりの長さ*
//
//奇数
//
//optionsに最初に数字を指定しない(for(i=0;i....if(...text === "○○")....options[i]にする)のは数字を最初に指定すると後から数字を変えたりする時に面倒だったり、設定を一つ変えるたびに何度も変えなくてはいけなくなるためテキストが同じだったものを指定している。
//
//
