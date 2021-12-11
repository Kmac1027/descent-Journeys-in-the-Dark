

export class Skeleton {
  constructor(id, x, y) {
    this.id = id;
    this.type = 'normal';
    this.name = 'skeleton';
    this.number_of_players = 5;
    this.max_wounds = 4;
    this.base_armor = 0;
    this.speed = 5;
    this.class = 'ranged';
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 0,
      black: 0
    };
    this.special_abilities = {
      1: {
        type: 'addPierce',
        amount: 1,
        text: 'Pierce 1'
      },
      2: {
        type: 'addRange',
        amount: 1,
        text: '+1 Range'
      },
    };
    this.monster_card_img_path = 'images/monster_card/skeleton.jpg';
    this.token_path = 'images/monster_token/skeleton.png';
    this.money_value = 25;
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
  constructor(id, x, y) {
    this.id = id;
    this.type = 'master';
    this.name = 'masterSkeleton';
    this.number_of_players = 5;
    this.max_wounds = 5;
    this.base_armor = 1;
    this.speed = 5;
    this.class = 'ranged';
    this.dice = {
      red: 0,
      blue: 1,
      white: 0,
      green: 1,
      yellow: 0,
      black: 1
    };
    this.special_abilities = {
      1: {
        type: 'addPierce',
        amount: 2,
        text: 'Pierce 2'
      },
      2: {
        type: 'addRange',
        amount: 2,
        text: '+2 Range'
      },
      3: { type: 'undying' }
    };
    this.monster_card_img_path = 'images/monster_card/skeleton.jpg';
    this.token_path = 'images/monster_token/skeleton_master.png';
    this.money_value = 50;
    this.w = 50;
    this.h = 50;
    this.x = x;
    this.y = y;
    this.canvasSpeed = 5;
    this.dx = 0;
    this.dy = 0;
  }
}
