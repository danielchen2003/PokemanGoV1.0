// import { electedPokemanName } from "./script.js";
//创造两个obj ，最好用constructor 去创建 把属性输入进去  相互攻击 基于摇骰子判定攻击数值
//进化系统开一个头 还有exp系统 需要加一个血槽 一个箭头 ，谁是active player高亮度
//卡片攻击动画 和防守动画， 卡片颜色补上  第一页加入选中提示和 选中动画
var selectedPokemanName = sessionStorage.getItem("selectedPokemanName");
console.log(selectedPokemanName);
//卡牌加3种特效， 第一种 翻转 进化
//第二种 移动 包括暴击
//第三种shaking 防守
//掉血 不要有延迟， 去掉计时器 ，  roll 加一个cooldown 正在实现
//进化， 颜色补完

// console.log(selectedPokemanName);
const play01El = document.querySelector(".player--0");
const play02El = document.querySelector(".player--1");
const score01El = document.querySelector("#score--0");
const score02El = document.getElementById("score--1");

const current01El = document.querySelector("#current--0");
const current02El = document.querySelector("#current--1");
const dice00 = document.querySelector(".dice--0");
const dice01 = document.querySelector(".dice--1");
const dice02 = document.querySelector(".dice--2");

// const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnNext = document.querySelector(".btn--next");

const insertPlayercard = document.querySelector(".pokemancard--0");
// const insertAIcard = document.querySelector(".pokemancard--1");
const insertAIcard = document.querySelector(".pokemancard--1");
const hp01 = document.querySelector(".hp--01");
const hp02 = document.querySelector(".hp--02");
const delay01 = document.querySelector(".delay--01");
const delay02 = document.querySelector(".delay--02");

//import from scrpt1
// const search = document.querySelector(".search");
// const random = document.querySelector(".random");
// const input = document.querySelector("input");
// const cards = document.querySelector(".cards");
let isWinner = false;
let isPlaying = true;
// score01El.textContent = 0;
// score02El.textContent = 0;
// diceEl.classList.add("hidden");
let score, currentScore, activePlayer, playing;
//try to get data from first page

let pokemanData = [];

const hiddenDice = (ans) => {
  if (ans) {
    dice00.classList.add("hidden");
    dice01.classList.add("hidden");
    dice02.classList.add("hidden");
  } else {
    dice00.classList.remove("hidden");
    dice01.classList.remove("hidden");
    dice02.classList.remove("hidden");
  }
};

const hpreset = () => {
  delay01.style.left = "300px";
  delay01.style.width = "300px";
  delay02.style.left = "300px";
  delay02.style.width = "300px";
  hp01.style.width = "300px";
  hp02.style.width = "300px";
};

const initiInterFace = async () => {
  // score = [0, 0];
  // currentScore = 0;
  // activePlayer = 0;
  // playing = true;
  // play01El.classList.add("player--active");
  // play02El.classList.remove("player--active");
  // play01El.classList.remove("player--winner");
  // play02El.classList.remove("player--winner");
  // current01El.textContent = 0;
  // current02El.textContent = 0;
  // score01El.textContent = 0;
  // score02El.textContent = 0;
  let randomId = generateRandomNumber(0, 912, { round: true, place: 0 });
  hiddenDice(true);
  isWinner = false;
  isPlaying = true;
  hpreset();

  // btnNext.disabled = true;
  pokemanData = [];
  try {
    // const query = input.value.toLowerCase();初始化两张牌
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemanName}`
    );
    console.log(data);
    renderCard(data, insertPlayercard);

    //初始化另外一张牌
    // const { dataofplayer2 } = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${selectedPokemanName}`
    // );

    const dataofAI = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    console.log(dataofAI);
    renderCard(dataofAI.data, insertAIcard);

    // return randomId;
  } catch (error) {
    console.log(error.response);
  }
  return randomId;
  // console.log(data);
};
initiInterFace();

function swichPlayer() {
  play01El.classList.toggle("player--active");
  // console.log("player--active");
  play02El.classList.toggle("player--active");
}

// current2 = 0;
// btnHold.addEventListener("click", function () {
//   if (playing) {
//     score[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       score[activePlayer];
//     if (score[activePlayer] >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add("player--winner");
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove("player--active");
//     } else {
//       swichPlayer();
//     }
//   }
// });

// btnNew.addEventListener("click", init);

//===============================================import from script1
// insertPlayercard;
//
// if (!neighbour) return;

// // AJAX call country 2
// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener('load', function () {
//   const data2 = JSON.parse(this.responseText);
//   console.log(data2);

//   renderCountry(data2, 'neighbour');
// });

function generateRandomNumber(
  min = 0,
  max = 10,
  options = { round: false, place: null }
) {
  if (min > max) throw new Error("min cannot be greater than max");

  let randomNum = Math.random() * (max - min) + min;
  const { round, place } = options;

  if (round && typeof place === "number") {
    if (options.place > 20) throw new Error("Place must be between 0 & 20");
    randomNum = +randomNum.toFixed(options.place);
  }
  return randomNum;
}

// const totalHP = [];

function getPokemonAttributes(data) {
  // 4 random moves if more than 4
  const { height, name, weight } = data;
  const hp = data.stats[0].base_stat;
  const atk = data.stats[1].base_stat;
  const def = data.stats[2].base_stat;
  const spatk = data.stats[3].base_stat;
  const spdef = data.stats[4].base_stat;
  const spd = data.stats[5].base_stat;
  const type1 = data.types[0].type.name;
  const image = data.sprites.other["official-artwork"].front_default;
  // get evolutiondata
  const species = data.species.url;
  console.log(`${species} this is species`);

  const callspecies = async (species) => {
    const speciesData = await axios.get(`${species}`);

    // console.log("success");
    // console.log(
    //   JSON.stringify(speciesData.data.evolution_chain.url),
    //   `this is speciesdata`
    // );

    // let x = JSON.parse(JSON.stringify(speciesData.data.evolution_chain.url));
    // console.log(x, "testingJSON");

    const evolutionChian = speciesData.data.evolution_chain.url;
    console.log(`${evolutionChian}: this is evolutionChian`);
    const evlutionOfthePokeman = await axios.get(`${evolutionChian}`);

    let y = JSON.parse(
      JSON.stringify(
        evlutionOfthePokeman.data.chain.evolves_to[0].evolves_to[0].species.name
      )
    );
    setTimeout(console.log(y), 1000);

    //已经可以打印出来leiqiu了 !y 那么没变化
  };
  callspecies(species);

  let type2 = null;
  let ability = null;
  const moves = [];
  pokemanData.push([hp, atk, def, spd, name, hp]);
  // totalHP.push(hp);

  // sets type2 if one is available
  if (data.types[1]) type2 = data.types[1].type.name;

  // chooses random ability if multiple are available
  if (data.abilities.length > 1) {
    const max = data.abilities.length - 1;
    const random = generateRandomNumber(0, max, { round: true, place: 0 });
    ability = data.abilities[random].ability.name;
  } else {
    ability = data.abilities[0].ability.name;
  }

  // choose 4 randoms move if we have more than four moves to choose from
  // will not allow duplicate moves
  // else add all the moves
  if (data.moves.length > 4) {
    while (moves.length < 4) {
      const max = data.moves.length - 1;
      const random = generateRandomNumber(0, max, { round: true, place: 0 });
      const move = data.moves[random].move.name;

      if (!moves.includes(move)) moves.push(move);
    }
  } else {
    for (let i = 0; i < data.moves.length; i++) {
      const { move } = data.moves[i];
      moves.push(move.name);
    }
  }

  return {
    height,
    name,
    weight,
    hp,
    atk,
    def,
    spatk,
    spdef,
    spd,
    type1,
    type2,
    image,
    ability,
    moves,
  };
}
// console.log(`Battledata: ${pokemanData}`);
function capitalize(str) {
  if (str.length === 0 || typeof str !== "string") return str;

  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function formatWord(str) {
  if (typeof str !== "string") return str;

  return str
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}

//i want export this variable later to second page

function generatePokemonHTML(attributes) {
  const moves = attributes.moves
    .map((move) => {
      return `<div class="pokemon__move">${formatWord(move)}</div>`;
    })
    .join("");
  const {
    type1,
    type2,
    name,
    image,
    ability,
    hp,
    atk,
    def,
    spdef,
    spatk,
    spd,
    weight,
    height,
  } = attributes;
  const multiType = `${formatWord(type1)} / ${formatWord(type2)}`;
  const types = !type2 ? formatWord(type1) : multiType;

  const html = `
      <article class="pokemon pokemon__${type1}">
      <div class="pokemon__inner">
        <header class="pokemon__title">
          <!-- name -->
          <h1 class="pokemon__name">${formatWord(name)}</h1>
          <!-- type -->
          <div class="pokemon__type">${types}</div>
        </header>
        <!-- image -->
        <div class="pokemon__image">
          <img src="${image}" alt="">
        </div>
        <!-- ability -->
        <div class="pokemon__ability">
          Ability - ${formatWord(ability)}
        </div>
        <!-- Main -->
        <div class="pokemon__info">
          <!-- Stats -->
          <div class="pokemon__stats">
            <!-- HP -->
            <div class="pokemon__stat-type">HP</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--hp">${hp}</div>
            <!-- ATT -->
            <div class="pokemon__stat-type">ATK</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--atk">${atk}</div>
            <!-- DEF -->
            <div class="pokemon__stat-type">DEF</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--def">${def}</div>
            <!-- SP. ATK -->
            <div class="pokemon__stat-type">SP. ATK</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--spdef">${spdef}</div>
            <!--SP. DEF -->
            <div class="pokemon__stat-type">SP. DEF</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--spatk">${spatk}</div>
            <!-- SPD -->
            <div class="pokemon__stat-type">SPD</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--spd">${spd}</div>
          </div>
          <!-- Moves -->
          <div class="pokemon__moves">
            ${moves}
          </div>
        </div>
        <!-- Extras -->
        <div class="pokemon__extras">
          <!-- Weight ft -->
          <div class="pokemon__weight">
            Weight - ${weight}
          </div>
          <!-- Height ft -->
          <div class="pokemon__height">
            Height - ${height}
          </div>
        </div>
      </div>
    </article>
  `;

  return html;
}

function renderCard(data, root) {
  const attributes = getPokemonAttributes(data);
  console.log(`${data} this is data`);
  const html = generatePokemonHTML(attributes);
  root.innerHTML = html;
}

//=== battle start
// 血槽= 攻击力 - 防御力 必须大于等于0 并且  如果🎲  = 18 就是暴击 3倍攻击力
// 如果🎲  = 3-6 就是miss 0倍攻击力
// 7-12 攻击力 1.0
//  13-17  1.5
//每一场战斗的结果
// function checkRoundresult() {}
const pokemanAction = document.querySelector(".pokemanActions");
function fightRound(attacker, defender, dice) {
  // if (dice > 18 || dice < 3) return error;
  let attackValue = 0;
  if (dice >= 18) {
    attackValue = Math.round(Math.max(attacker[1] * 2.5 - defender[2], 1)); //can't make demage <0  capitalize(
    defender[0] -= attackValue;
    pokemanAction.textContent += `${capitalize(
      attacker[4]
    )} Hitting the vitals, generating critical attack (${attackValue} demage \n`;
    console.log(defender[0]);
  } else if (dice <= 6) {
    pokemanAction.textContent += `${capitalize(
      attacker[4]
    )} missed his attack Made 0 demage ${capitalize(
      attacker[4]
    )} pretends nothing happened \n`;
  } else if (dice >= 7 && dice <= 12) {
    defender[0] -= attackValue;
    attackValue = Math.round(Math.max(attacker[1] * 0.8 - defender[2], 1));
    pokemanAction.textContent += `${capitalize(
      attacker[4]
    )} Made ${attackValue} demage to ${capitalize(defender[4])} \n`;
    console.log(defender[0]);
  } else {
    attackValue = Math.round(Math.max(attacker[1] * 1.1 - defender[2], 1));
    defender[0] -= attackValue;

    pokemanAction.textContent += `${capitalize(
      attacker[4]
    )} Made ${attackValue} demage to ${capitalize(defender[4])} \n`;
    console.log(defender[0]);
  }
}

//一开始有hidden
function rolldice() {
  const diceNumber__00 = generateRandomNumber(1, 6, {
    round: true,
    place: 0,
  });
  // dice00.img.classList.remove("hidden");
  dice00.src = `./dice/dice-${diceNumber__00}.png`;
  const diceNumber__01 = generateRandomNumber(1, 6, {
    round: true,
    place: 0,
  });
  // dice01.img.classList.remove("hidden");
  dice01.src = `./dice/dice-${diceNumber__01}.png`;
  const diceNumber__02 = generateRandomNumber(1, 6, {
    round: true,
    place: 0,
  });
  // dice02.img.classList.remove("hidden");
  dice02.src = `./dice/dice-${diceNumber__02}.png`;
  let diceresult = diceNumber__00 + diceNumber__01 + diceNumber__02;
  console.log(diceresult);
  return diceresult;
}
const endingimg = document.querySelector(".endingPic");
//Battle Start  卡在异步函数很久 最后用settimeout解决  之后变一下promise
// async function startBattle() {

// setTimeout((endingimg.style.display = "block"), 4000);

// setTimeout((endingimg.style.display = "none"), 3000);

// console.log(Array.isArray(dataOfPokeman));
// }

function hpBar(defenderdata, defenderHPBar) {
  let HP = Number((defenderdata[0] / defenderdata[5]) * 50).toFixed(2);
  console.log(HP);
  HP = Math.max(HP, 0);
  setTimeout(function () {
    defenderHPBar.style.width = `${HP}%`; //currenthealth, totalHealth
    // hpDelay.style.width = `${HP}%`;
    // hpDelay.style.left = 0;

    defenderHPBar.firstElementChild.style.width = `${HP}%`;
    defenderHPBar.firstElementChild.style.left = `${HP}%`;
  }, 700);
}

function battleWinnerCheck(player1, AIplayer) {
  if (player1[0] <= 0 || AIplayer[0] <= 0) {
    if (player1[0] > AIplayer[0]) {
      console.log(
        `Winner of this Game is Player1 and his Pokeman +  ${capitalize(
          player1[4]
        )}}`
      );
      isPlaying = false;
      isWinner = true;
      hiddenDice(true);

      // setTimeout(loadLosePic(), 1000);
    } else {
      console.log(
        `Winner of this Game is AIplayer and his Pokeman:" + ${capitalize(
          AIplayer[4]
        )}`
      );
      isPlaying = false;
      isWinner = false;
      setTimeout(loadLosePic(endingimg), 1000);

      hiddenDice(true);
    }
  }
}

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

//加listener
// btnRoll.addEventListener("click", function rolldice() => {
// })
// ;
// let totalHealthOfAIPlayer;
// function addCDRollBtn(isPlaying) {
//   isPlaying = false;
//   setTimeout((isPlaying = true), 3000);
// }
function player01Round() {
  const [player1, AIPlyaer] = pokemanData;
  let diceResult = rolldice();
  moveCard01.classList.remove("attackerCard--01");
  moveLeftCard();

  console.log("move1");
  setTimeout(() => console.log("step1"), shakingCard(moveCard02), 500);
  console.log("step2");
  // await wait(3);

  fightRound(player1, AIPlyaer, diceResult);
  hpBar(AIPlyaer, hp02);
  setTimeout(swichPlayer, 1400);
  console.log("step3");
  console.log(`player1: ${player1}`);
  console.log(`player2: ${AIPlyaer}`);
}

function player02Round() {
  const [player1, AIPlyaer] = pokemanData;
  let diceResult = rolldice();
  moveRightCard();
  setTimeout(shakingCard(moveCard01), 500);
  fightRound(AIPlyaer, player1, diceResult);

  hpBar(player1, hp01);
  setTimeout(swichPlayer, 1400);

  console.log(`player1: ${player1}`);
  console.log(`player2: ${AIPlyaer}`);
}

let btncooldown = true;
btnRoll.addEventListener("click", async () => {
  pokemanAction.textContent = "";
  if (isPlaying) {
    if (btncooldown) {
      btncooldown = false; // add cd to btnRoll qestion??? 1st
      // console.log(isPlaying);
      setTimeout(() => (btncooldown = true), 4000);
      try {
        const [player1, AIPlyaer] = pokemanData;
        console.log(player1, AIPlyaer);
        if (player1[0] > 0 || AIPlyaer[0] > 0) {
          if (player1[3] >= AIPlyaer[3]) {
            //check who's spd faster
            hiddenDice(false);
            player01Round();
            // swichPlayer();

            // setTimeout(1000);

            await wait(3);
            player02Round();

            //1 骰子并显示
            //2 攻击 防守特效
            //3 攻击回合处理数据
            //4.显示血量
            //5. 交换玩家
            //当前血量/ 总血量 防守方血量变化
            // setTimeout(() => alert("It's turn to player2"), 1900);

            //  防守方血量变化 hpBar(AIPlyaer[0], totalHealthOfAIPlayer, hp01);
          } else {
            swichPlayer();
            hiddenDice(false);

            player02Round();
            // swichPlayer();

            // setTimeout(1000);
            await wait(3);

            player01Round();
          }
        }

        battleWinnerCheck(player1, AIPlyaer);

        // btnNext.disabled = true;

        // player1[0] > AIPlyaer[0] ?
      } catch (err) {
        console.error(err);
      }
      // if (playing) {
      //   let diceNumber = Math.trunc(Math.random() * 6) + 1;
      //   diceEl.classList.remove("hidden");
      //   diceEl.src = `./dice/dice-${diceNumber}.png`;
      //   if (diceNumber !== 1) {
      //     currentScore += diceNumber;
      //     // current01El.textContent = currentscore;
      //     // console.log(activePlayer);
      //     document.getElementById(`current--${activePlayer}`).textContent =
      //       currentScore;
      //   } else {
      //     ;
    }
  }
});
// const hpDelay = document.getElementById("delay");
// contoal hp system

// function winnerCheck() {
//
//     document.getElementById("hp").style.width = 0;

//

const loadLosePic = async function (endingimg) {
  try {
    // Load image 1
    await wait(3);
    img.style.display = "block";
    await wait(4);
    img.style.display = "none";

    // Load image 1
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
//   loadLosePic(endingimg);
// }

btnNext.addEventListener("click", async function nextgame() {
  console.log(isWinner);
  console.log(isPlaying);
  if (isWinner === true) {
    insertPlayercard.firstElementChild.remove();
    insertAIcard.firstElementChild.remove();
    try {
      await initiInterFace();
    } catch (err) {
      console.log(err);
    }
  }
});

const moveCard01 = document.querySelector(".pokemancard--0");
const moveCard02 = document.querySelector(".pokemancard--1");
// const shakingCard = document.querySelector(".defendershaking");

moveCard01.addEventListener("click", moveLeftCard);
moveCard02.addEventListener("click", moveRightCard);

function moveLeftCard() {
  moveCard01.classList.toggle("attackerCard--01");
  setTimeout(() => moveCard01.classList.remove("attackerCard--01"), 660);
}

function moveRightCard() {
  moveCard02.classList.toggle("attackerCard--02");
  setTimeout(() => moveCard02.classList.remove("attackerCard--02"), 660);
}

function shakingCard(carddiv) {
  carddiv.classList.add("defendershaking");
  setTimeout(() => carddiv.classList.remove("defendershaking"), 660);
}

// function evolutionsystem(){

// }
