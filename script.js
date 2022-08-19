const btnStart = document.querySelector(".btn");
const terminal = document.querySelector(".terminal");

btnStart.addEventListener("click", showLoginUser);

class Hero {
  constructor(name, helt, wepon, power) {
    this.name = name;
    this.helt = helt;
    this.wepon = wepon;
    this.power = power;
  }
}

class Beast {
  constructor(name, helt, magic, power) {
    this.name = name;
    this.helt = helt;
    this.magic = magic;
    this.power = power;
  }
}

// Beast
const beastOne = new Beast("Dragon", 100, "Fire", 6);
const beastTwo = new Beast("Spider", 100, "Bite", 7);

// Heros
const heroOne = new Hero("Prince", 100, "Spear", 5);
const heroTwo = new Hero("King", 100, "Sword", 7);

const time = new Date();
let day = time.getDay();
let month = time.getMonth();
let year = time.getFullYear();
let hour = time.getHours();
let minut = time.getMinutes();

function showTime() {
  var date = new Date();
  var second = date.getSeconds();

  if (hour == 0) {
    hour = 12;
  }

  let time = `${hour < 10 ? "0" + hour : hour}:${
    minut < 10 ? "0" + minut : minut
  }:${second < 10 ? "0" + second : second}`;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();

html = `<p>Last login: ${day < 10 ? "0" + day : day}/${
  month < 10 ? "0" + month : month
}/${year} in ${hour < 10 ? "0" + hour : hour}:${
  minut < 10 ? "0" + minut : minut
}</p>
  <p>by unknown username: $....?</p>
  <p>..?Hero one by name in ${heroOne.name} has ${
  heroOne.wepon
} as a wepon and takse a ${heroOne.power} damage.</p>
  <p>..?Hero one by name in ${heroTwo.name} has ${
  heroTwo.wepon
} as a wepon and takse a ${heroTwo.power} damage.</p>
<p>...the animals you need to take care with is ${beastOne.name} and ${
  beastTwo.name
}
  <p>Description: ${beastOne.name} has ${beastOne.helt} helt and use ${
  beastOne.magic
} as attack witch take ${beastOne.power} of helt</p>
  <p>Description: ${beastTwo.name} has ${beastTwo.helt} helt and use ${
  beastTwo.magic
} as attack witch take ${beastTwo.power} of helt</p>
  <p>be prepared because this can really take a long time and you never know who will win</p>
`;

setTimeout(() => {
  terminal.innerHTML = html;
}, 2000);

let heroOneAttack = 0;
let heroTwoAttact = 0;

let heroOneCounter = 0;
let heroTwoCounter = 0;

let beastOneAttack = 0;
let beastTwoAttack = 0;

let beastOneCounter = 0;
let beastTwoCounter = 0;

function showLoginUser() {
  const interval = setInterval(() => {
    let number = Math.floor(Math.random() * 100) + 1;

    // First battle
    if (number < 50) {
      if (number % 2 === 0) {
        heroOneAttack = beastOne.helt - heroOne.power;
        beastOne.helt = heroOneAttack;
        heroOneCounter++;

        terminal.innerHTML += `<p>${heroOne.name} attack number: ${heroOneCounter}</p>`;
        terminal.innerHTML += `<p>${heroOne.name} is attactking ${beastOne.name}, and gaining attack with ${heroOne.wepon} with taking from ${heroOne.power} helt.Now ${beastOne.name} has ${beastOne.helt}%</p><br/>`;

        if (beastOne.helt < 0 || beastOne.helt == 0) {
          clearInterval(interval);
          terminal.innerHTML += `<p>${heroOne.name} has won the battle.</p> <br/> <p>${heroOne.name} has won the battle.</p> <br/> <p>${heroOne.name} has won the battle.</p>`;
        }
      }

      if (number % 3 === 0) {
        beastOneAttack = heroOne.helt - beastOne.power;
        heroOne.helt = beastOneAttack;
        beastOneCounter++;

        terminal.innerHTML += `<p>${beastOne.name} attack number: ${beastOneCounter}</p>`;
        terminal.innerHTML += `<p>${beastOne.name} is attactking ${heroOne.name}, and gaining attack with ${beastOne.magic} with taking from ${beastOne.power} helt.Now ${heroOne.name} has ${heroOne.helt}%</p><br/>`;

        if (heroOne.helt < 0 || heroOne.helt == 0) {
          clearInterval(interval);
          terminal.innerHTML += `<p>${beastOne.name} has won the battle.</p> <br/> <p>${beastOne.name} has won the battle.</p> <br/> <p>${beastOne.name} has won the battle.</p>`;
        }
      }
    }

    // Secound battle
    if (number >= 50) {
      if (number % 2 === 0) {
        heroTwoAttact = beastTwo.helt - heroTwo.power;
        beastTwo.helt = heroTwoAttact;
        heroTwoCounter++;

        terminal.innerHTML += `<p>${heroTwo.name} attack number: ${heroTwoCounter}</p>`;
        terminal.innerHTML += `<p>${heroTwo.name} is attactking ${beastTwo.name}, and gaining attack with ${heroTwo.wepon} with taking from ${heroTwo.power} helt.Now ${beastTwo.name} has ${beastTwo.helt}%</p><br/>`;

        if (beastTwo.helt < 0 || beastTwo.helt == 0) {
          clearInterval(interval);
          terminal.innerHTML += `<p>${heroTwo.name} has won the battle.</p> <br/> <p>${heroTwo.name} has won the battle.</p> <br/> <p>${heroTwo.name} has won the battle.</p>`;
        }
      }

      if (number % 3 === 0) {
        beastTwoAttack = heroTwo.helt - beastTwo.power;
        heroTwo.helt = beastTwoAttack;
        beastTwoCounter++;

        terminal.innerHTML += `<p>${beastTwo.name} attack number: ${beastTwoCounter}</p>`;
        terminal.innerHTML += `<p>${beastTwo.name} is attactking ${heroTwo.name}, and gaining attack with ${beastTwo.magic} with taking from ${beastTwo.power} helt.Now ${heroTwo.name} has ${heroTwo.helt}%</p><br/>`;

        if (heroTwo.helt < 0 || heroTwo.helt == 0) {
          clearInterval(interval);
          terminal.innerHTML += `<p>${beastTwo.name} has won the battle.</p> <br/> <p>${beastTwo.name} has won the battle.</p> <br/> <p>${beastTwo.name} has won the battle.</p>`;
        }
      }
    }
  }, 1000);
}
