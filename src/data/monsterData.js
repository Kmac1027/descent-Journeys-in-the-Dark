

export class Skeleton {
  constructor(id, x, y) {
    this.id = id;
    this.type = 'normal';
    this.name = 'skeleton';
    this.number_of_players = 5;
    this.max_wounds = 4;
    this.base_armor = 0;
    this.speed = 5;
    this.class = 'Ranged';
    this.dice = {
      blue: 1,
      green: 1
    };
    this.special_abilities = {
      1: 'pierce',
      2: '+1 range'
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
    this.class = 'Ranged';
    this.dice = {
      blue: 1,
      green: 1,
      black: 1
    };
    this.special_abilities = {
      1: 'pierce 2',
      2: '+2 range',
      3: 'undying'
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
