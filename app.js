let pokemons = [
  {
    name: "Bulbasaur",
    level: 5,
    type: "Grass",
    hp: 100,
    img: {
      front: "./Sprites/front/front/1.png",
      back: "./Sprites/back/back/1.png", // TODO do this for all pokemons
    },
    skills: [
      {
        name: "shock",
        damage: 10,
        type: "electric",
      },
      {
        name: "lightning bolt",
        damage: 20,
        type: "electric",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Squirtle",
    level: 6,
    type: "Water",
    hp: 100,
    img: {
      front: "./Sprites/front/front/7.png",
      back: "./Sprites/back/back/7.png",
    },
    skills: [
      {
        name: "squirt",
        damage: 10,
        type: "water",
      },
      {
        name: "water blast",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Charmander",
    level: 7,
    type: "Fire",
    hp: 100,
    img: {
      front: "./Sprites/front/front/4.png",
      back: "./Sprites/back/back/4.png",
    },
    skills: [
      {
        name: "blaze",
        damage: 10,
        type: "fire",
      },
      {
        name: "flamethrower",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Caterpie",
    level: 6,
    type: "Bug",
    hp: 100,
    img: {
      front: "./Sprites/front/front/10.png",
      back: "./Sprites/back/back/10.png",
    },
    skills: [
      {
        name: "blaze",
        damage: 10,
        type: "fire",
      },
      {
        name: "water bolt",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Pidgey",
    level: 5,
    type: "Normal",
    hp: 100,
    img: {
      front: "./Sprites/front/front/16.png",
      back: "./Sprites/back/back/16.png",
    },
    skills: [
      {
        name: "blaze",
        damage: 10,
        type: "fire",
      },
      {
        name: "water bolt",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Rattata",
    level: 4,
    type: "Normal",
    hp: 100,
    img: {
      front: "./Sprites/front/front/19.png",
      back: "./Sprites/back/back/19.png",
    },
    skills: [
      {
        name: "blaze",
        damage: 10,
        type: "fire",
      },
      {
        name: "water bolt",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Ekans",
    level: 8,
    type: "Poison",
    hp: 100,
    img: {
      front: "./Sprites/front/front/23.png",
      back: "./Sprites/back/back/23.png",
    },
    skills: [
      {
        name: "blaze",
        damage: 10,
        type: "fire",
      },
      {
        name: "water bolt",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Oddish",
    level: 3,
    type: "Grass",
    hp: 100,
    img: {
      front: "./Sprites/front/front/43.png",
      back: "./Sprites/back/back/43.png",
    },
    skills: [
      {
        name: "blaze",
        damage: 10,
        type: "fire",
      },
      {
        name: "water bolt",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
  {
    name: "Mewtwo",
    level: 15,
    type: "Psychic",
    hp: 100,
    img: {
      front: "./Sprites/front/front/150.png",
      back: "./Sprites/back/back/150.png",
    },
    skills: [
      {
        name: "pressure",
        damage: 5,
        type: "psychic",
      },
      {
        name: "unnerve",
        damage: 15,
        type: "psychic",
      },
      {
        name: "insomnia",
        damage: 10,
        type: "psychic",
      },
    ],
  },
];

let ownedPokemon = [
  {
    name: "Pikachu",
    level: 7,
    type: "electric",
    hp: 100,
    img: {
      front: "./Sprites/front/front/25.png",
      back: "./Sprites/back/back/25.png",
    },
    skills: [
      {
        name: "Thunderbolt",
        damage: 10,
        type: "fire",
      },
      {
        name: "zap",
        damage: 20,
        type: "water",
      },
      {
        name: "punch",
        damage: 5,
        type: "normal",
      },
    ],
  },
];

function walkInGrass() {}
let activeEncounter;
let activeLocal = "";

function setActiveEncounter() {
  //activeEncounter = [];
  let encounterValue = Math.floor(Math.random() * pokemons.length);
  activeEncounter = Object.assign({}, pokemons[encounterValue]);
  console.table(activeEncounter);
}
setInitLocal();
function setInitLocal() {
  // legg inn valgmulighet når den tid kommer
  activeLocal = ownedPokemon[0];
}

//view
function view() {
  document.getElementById("app").innerHTML = /* Html */ `
    <button id="Startfight" onclick = "initFight()">Grass Encounter</button>
    <button>Normal Encounter</button>
    `;
}

view();

function encounterView() {
  document.getElementById("app").innerHTML = /* Html */ `
  
    <div id="gameWindow">
        <div id="enemyEncounter">
            <div id="enemyStats">
                <h3>${activeEncounter.name}</h3>
                <h4>LVL: ${activeEncounter.level}</h4>
                <h4>HP: ${activeEncounter.hp}</h4>
            </div>
            <div id="enemyImg">
                <img src="${activeEncounter.img.front}">
            </div>
        </div>
        
        
        <div id="localEncounter">
            <div id="localImg">
                <img src=${activeLocal.img.back}>
            </div>
            <div id="localStats">
                <h3>${activeLocal.name}</h3>
                <h4>LVL: ${activeLocal.level}</h4>
                <h4>HP: ${activeLocal.hp}</h4>
            </div>
        </div>
    </div>

    <div id="actions"></div>
    <ul id="logWindow"></ul>

    `;
  actionsView();
  displayLog();
}

function actionsView() {
  document.getElementById("actions").innerHTML = /* Html */ `
      <button class="action-btn" id="fight" onclick = "fightView()">FIGHT</button>
      <button class="action-btn" id="invent" onclick = "bagView()">INV</button>
      <button class="action-btn" id="catch" onclick = "catchPokemon()">CATCH</button>
      <button class="action-btn" id="run">RUN</button>
      `;
}

function fightView() {
  document.getElementById("actions").innerHTML = "";
  activeLocal.skills.forEach((skill) => {
    //console.log(skill.name)
    let skillButton = document.createElement("button");
    skillButton.textContent = skill.name;
    skillButton.addEventListener("click", function () {
      if (activeEncounter.hp == 0) {
        view();
      } else {
        skillAttack(
          skill.name,
          skill.damage,
          skill.type,
          activeEncounter,
          activeLocal
        );
        enemyAttack();
      }
    });
    skillButton.classList.add("action-btn");
    skillButton.classList.add(skill.type + "-btn");

    document.getElementById("actions").appendChild(skillButton);
  });
}

let logArray = [];

function skillAttack(name, damage, type, target, attacker) {
  if (target.hp > 0) {
    target.hp -= damage;
  } else target.hp = 0;
  let logContent =
    attacker.name +
    " used " +
    name +
    " for " +
    damage +
    " damage. Type " +
    type;

  logArray.push(logContent);

  encounterView();
}

function enemyAttack() {
  let ranEncounter = Math.floor(Math.random() * activeEncounter.skills.length);
  let enemyUsedSkill = activeEncounter.skills[ranEncounter];

  skillAttack(
    enemyUsedSkill.name,
    enemyUsedSkill.damage,
    enemyUsedSkill.type,
    activeLocal,
    activeEncounter
  );
  if (activeLocal.hp == 0) {
    bagView();
  }
}

function displayLog() {
  logArray.forEach((log) => {
    let logContent = document.createElement("li");
    logContent.textContent = log;
    document.getElementById("logWindow").appendChild(logContent);
  });
}

function catchPokemon() {
  activeEncounter.hp = 100;
  ownedPokemon.push(activeEncounter);
  activeEncounter = "";
  view();
  let lol = pokemons.filter((pokk) => pokk.hp == 100);
  console.log(lol);
}

function initFight() {
  setActiveEncounter();
  encounterView();
}

function bagView() {
  document.getElementById("app").innerHTML = "";
  let inventoryView = document.createElement("div");
  inventoryView.id = "inventory";
  document.getElementById("app").appendChild(inventoryView);
  bagContent();
}

function bagContent() {
  ownedPokemon.forEach((poke) => {
    let pokeContent = document.createElement("div");
    pokeContent.classList.add("inv-element");
    pokeContent.innerHTML = /* html */ `
    <img src="${poke.img.front}">
    <h3>${poke.name}</h3>
    <h4>LVL: ${poke.level}</h4>
    <h4>HP: ${poke.hp}</h4>
    `;
    if (poke.hp > 1) {
      pokeContent.addEventListener("click", function () {
        activeLocal = poke;
        encounterView();
      });
    } else {
      pokeContent.classList.add("inv-element-disabled");
    }
    document.getElementById("inventory").appendChild(pokeContent);
  });

  let closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", encounterView);
  document.getElementById("app").appendChild(closeBtn);
}
