export const monsterData = {
  skeleton: {
    normal: {
      name: 'skeleton',
      number_of_players: 5,
      max_wounds: 4,
      base_armor: 0,
      speed: 5,
      class: 'Ranged',
      dice: {
        blue: 1,
        green: 1
      },
      special_abilities: {
        1: 'pierce',
        2: '+1 range'
      },
      monster_card_img_path: 'images/monster_card/skeleton.jpg',
      token_path: 'images/monster_token/skeleton.png',

    },
    master: {
      name: 'masterSkeleton',
      number_of_players: 5,
      max_wounds: 5,
      base_armor: 1,
      speed: 5,
      class: 'Ranged',
      dice: {
        blue: 1,
        green: 1,
        black: 1
      },
      special_abilities: {
        1: 'pierce 2',
        2: '+2 range',
        3: 'undying'
      },
      monster_card_img_path: 'images/monster_card/skeleton.jpg',
      token_path: 'images/monster_token/skeleton_master.png',
    }
  }
}