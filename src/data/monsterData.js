export class BaneSpider {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "baneSpider";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 4;
    this.base_armor = 1;
    this.speed = 5;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 1,
      yellow: 0,
      black: 0,
    };
    this.special_abilities = {
      // poison
    };
    this.monster_card_img_path = "../images/monster_card/bane_spider.jpg";
    this.token_path = "../images/monster_token/bane_spider.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class MasterBaneSpider {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterBaneSpider";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 6;
    this.speed = 5;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 1,
      yellow: 0,
      black: 1,
    };
    this.special_abilities = {
      // poison
    };
    this.monster_card_img_path = "../images/monster_card/bane_spider.jpg";
    this.token_path = "../images/monster_token/bane_spider_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Beastman {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "beastman";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 4;
    this.base_armor = 2;
    this.speed = 4;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 1,
      yellow: 0,
      black: 0,
    };
    this.special_abilities = {
      1: {
        type: "addDamage",
        amount: 1,
        text: "+1 Damage",
      },
    };
    this.monster_card_img_path = "../images/monster_card/beastman.jpg";
    this.token_path = "../images/monster_token/beastman.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class MasterBeastman {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterBeastman";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 3;
    this.speed = 4;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 1,
      yellow: 0,
      black: 1,
    };
    this.special_abilities = {
      1: {
        type: "addDamage",
        amount: 2,
        text: "+2 Damage",
      },
      2: {
        type: "Command",
      },
    };
    this.monster_card_img_path = "../images/monster_card/beastman.jpg";
    this.token_path = "../images/monster_token/beastman_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Demon {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "demon";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 11;
    this.base_armor = 4;
    this.speed = 3;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 1,
      yellow: 2,
      black: 0,
    };
    this.special_abilities = {
      //Sorcery3
      1: {
        type: "addDamage",
        amount: 2,
        text: "+2 Damage",
      },
      // aura
      // fear1
    };
    this.monster_card_img_path = "../images/monster_card/demon.jpg";
    this.token_path = "../images/monster_token/demon.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterDemon {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterDemon";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 12;
    this.base_armor = 5;
    this.speed = 3;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 1,
      yellow: 2,
      black: 1,
    };
    this.special_abilities = {
      //Sorcery3
      1: {
        type: "addDamage",
        amount: 3,
        text: "+3 Damage",
      },
      // aura
      // fear2
    };
    this.monster_card_img_path = "../images/monster_card/demon.jpg";
    this.token_path = "../images/monster_token/demon_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Dragon {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "dragon";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 11;
    this.base_armor = 3;
    this.speed = 4;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 2,
      black: 0,
    };
    this.special_abilities = {
      //  burn, breath
      1: {
        type: "addPierce",
        amount: 5,
        text: "Pierce 5",
      },
    };
    this.monster_card_img_path = "../images/monster_card/dragon.jpg";
    this.token_path = "../images/monster_token/dragon.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterDragon {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterDragon";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 12;
    this.base_armor = 4;
    this.speed = 4;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 2,
      black: 1,
    };
    this.special_abilities = {
      //  burn, breath, fear1
      1: {
        type: "addPierce",
        amount: 5,
        text: "Pierce 5",
      },
    };
    this.monster_card_img_path = "../images/monster_card/dragon.jpg";
    this.token_path = "../images/monster_token/dragon_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class Giant {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "giant";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 11;
    this.base_armor = 5;
    this.speed = 3;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 2,
      yellow: 1,
      black: 0,
    };
    this.special_abilities = {
      //  1 reach
      //  2 stun
    };
    this.monster_card_img_path = "../images/monster_card/giant.jpg";
    this.token_path = "../images/monster_token/giant.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterGiant {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterGiant";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 12;
    this.base_armor = 6;
    this.speed = 3;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 2,
      yellow: 1,
      black: 1,
    };
    this.special_abilities = {
      // reach
      // stun 
      // sweep
    };
    this.monster_card_img_path = "../images/monster_card/giant.jpg";
    this.token_path = "../images/monster_token/giant_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class HellHound {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "hellHound";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 1;
    this.speed = 4;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 0,
      yellow: 1,
      black: 0,
    };
    this.special_abilities = {
      // breath
      1: {
        type: "addPierce",
        amount: 3,
        text: "Pierce 3",
      },
    };
    this.monster_card_img_path = "../images/monster_card/hell_hound.jpg";
    this.token_path = "../images/monster_token/hellhound.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterHellHound {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterHellHound";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 6;
    this.base_armor = 2;
    this.speed = 4;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 0,
      yellow: 1,
      black: 1,
    };
    this.special_abilities = {
      // breath, aura
      1: {
        type: "addPierce",
        amount: 4,
        text: "Pierce 4",
      },
    };
    this.monster_card_img_path = "../images/monster_card/hell_hound.jpg";
    this.token_path = "../images/monster_token/hellhound_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Manticore {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "manticore";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 7;
    this.base_armor = 2;
    this.speed = 4;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 1,
      black: 0,
    };
    this.special_abilities = {
      //quickshot
      1: {
        type: "addPierce",
        amount: 2,
        text: "Pierce 2",
      },
    };
    this.monster_card_img_path = "../images/monster_card/manticore.jpg";
    this.token_path = "../images/monster_token/manticore.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class MasterManticore {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterManticore";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 8;
    this.base_armor = 3;
    this.speed = 4;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 1,
      black: 1,
    };
    this.special_abilities = {
      //quickshot, poison
      1: {
        type: "addPierce",
        amount: 3,
        text: "Pierce 3",
      },
    };
    this.monster_card_img_path = "../images/monster_card/manticore.jpg";
    this.token_path = "../images/monster_token/manticore_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Naga {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "naga";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 7;
    this.base_armor = 3;
    this.speed = 3;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 1,
      yellow: 1,
      black: 0,
    };
    this.special_abilities = {
      //sorcery1, grapple
      1: {
        type: "addDamage",
        amount: 1,
        text: "Damage +1",
      },

    };
    this.monster_card_img_path = "../images/monster_card/naga.jpg";
    this.token_path = "../images/monster_token/naga.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class MasterNaga {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterNaga";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 8;
    this.base_armor = 4;
    this.speed = 3;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 1,
      yellow: 1,
      black: 1,
    };
    this.special_abilities = {
      //sorcery2, grapple, command
      1: {
        type: "addDamage",
        amount: 2,
        text: "Damage +2",
      },

    };
    this.monster_card_img_path = "../images/monster_card/naga.jpg";
    this.token_path = "../images/monster_token/naga_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Ogre {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "ogre";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 7;
    this.base_armor = 4;
    this.speed = 3;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 2,
      yellow: 0,
      black: 0,
    };
    this.special_abilities = {
      //knockback
    };
    this.monster_card_img_path = "../images/monster_card/ogre.jpg";
    this.token_path = "../images/monster_token/ogre.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterOgre {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterOgre";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 8;
    this.base_armor = 5;
    this.speed = 3;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 2,
      yellow: 0,
      black: 1,
    };
    this.special_abilities = {
      //knockback, undying
    };
    this.monster_card_img_path = "../images/monster_card/ogre.jpg";
    this.token_path = "../images/monster_token/ogre_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Razorwing {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "razorwing";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 3;
    this.speed = 6;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 0,
      yellow: 1,
      black: 0,
    };
    this.special_abilities = {
      //fly
    };
    this.monster_card_img_path = "../images/monster_card/razorwing.jpg";
    this.token_path = "../images/monster_token/razorwing.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterRazorwing {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterRazorwing";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 6;
    this.base_armor = 4;
    this.speed = 6;
    this.class = "melee";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 1,
      blue: 0,
      white: 0,
      green: 0,
      yellow: 1,
      black: 1,
    };
    this.special_abilities = {
      //fly, stun
    };
    this.monster_card_img_path = "../images/monster_card/razorwing.jpg";
    this.token_path = "../images/monster_token/razorwing_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class Skeleton {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "skeleton";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 4;
    this.base_armor = 0;
    this.speed = 5;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 0,
      black: 0,
    };
    this.special_abilities = {
      1: {
        type: "addPierce",
        amount: 1,
        text: "Pierce 1",
      },
      2: {
        type: "addRange",
        amount: 1,
        text: "+1 Range",
      },
    };
    this.monster_card_img_path = "../images/monster_card/skeleton.jpg";
    this.token_path = "../images/monster_token/skeleton.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterSkeleton {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterSkeleton";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 1;
    this.speed = 5;
    this.class = "ranged";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 0,
      black: 1,
    };
    this.special_abilities = {
      1: {
        type: "addPierce",
        amount: 2,
        text: "Pierce 2",
      },
      2: {
        type: "addRange",
        amount: 2,
        text: "+2 Range",
      },
      3: { type: "undying" },
    };
    this.monster_card_img_path = "../images/monster_card/skeleton.jpg";
    this.token_path = "../images/monster_token/skeleton_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}

export class Sorcerer {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "normal";
    this.name = "sorcerer";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 2;
    this.speed = 4;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 0,
      yellow: 1,
      black: 0,
    };
    this.special_abilities = {
      //sorcery3
      1: {
        type: "addDamage",
        amount: 3,
        text: "damage +3",
      },

    };
    this.monster_card_img_path = "../images/monster_card/sorcerer.jpg";
    this.token_path = "../images/monster_token/sorcerer.png";
    this.money_value = 50;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
export class MasterSorcerer {
  constructor(id, x, y, area) {
    this.id = id;
    this.type = "master";
    this.name = "masterSorcerer";
    this.area = area;
    this.active = false;
    this.number_of_players = 5;
    this.max_wounds = 6;
    this.base_armor = 3;
    this.speed = 4;
    this.class = "magic";
    this.numberOfAttacks = 1;
    this.dice = {
      red: 0,
      blue: 0,
      white: 1,
      green: 0,
      yellow: 1,
      black: 1,
    };
    this.special_abilities = {
      //sorcery4, undying
      1: {
        type: "addDamage",
        amount: 4,
        text: "damage +4",
      },

    };
    this.monster_card_img_path = "../images/monster_card/sorcerer.jpg";
    this.token_path = "../images/monster_token/sorcerer_master.png";
    this.money_value = 100;
    this.boss = false;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
