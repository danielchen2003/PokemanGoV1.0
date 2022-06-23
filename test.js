// let pokemanData = [500, 100];
// let [player1, AIPlyaer] = pokemanData;
let pokemanDataobj = { hp: 500, hp02: 100 };
let { hp, hp02 } = pokemanDataobj;

const attack = function (player1, AIPlyaer) {
  player1 -= 50;
  AIPlyaer -= 30;
  return { player1, AIPlyaer };
};

// pokemanData = attack(player1, AIPlyaer);

console.log(attack(hp, hp02));
// attack();
// console.log(hp);
// console.log(hp02);
// console.log(pokemanDataobj);

// attack();

// attack();

// console.log(player1);
// console.log(AIPlyaer);
