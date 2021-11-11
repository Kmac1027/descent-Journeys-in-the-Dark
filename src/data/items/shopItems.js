export const shopItemData =
{
  sword: {
    name: 'Sword',
    type: 'melee',
    surge: {
      1: {
        surge_cost: 2,
        ability: '+1 damage'
      }
    },
    special_abilities: {
      off_hand_bonus: '+1 damage',
      other: false,
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 0,
      green: 1
    },
    hands: 1,
    cost: 75,
    img_path: 'images/items/shop/sword.png',
    number_available: 3
  },
  crossbow: {
    name: 'Crossbow',
    type: 'ranged',
    surge: {
      1: {
        surge_cost: 2,
        ability: '+1 damage'
      },
      2: {
        surge_cost: 3,
        ability: '+1 range'
      }
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      red: 0,
      blue: 1,
      white: 0,
      yellow: 0,
      green: 1
    },
    hands: 1,
    cost: 150,
    img_path: 'images/items/shop/crossbow.png',
    number_available: 2
  },
  axe: {
    name: 'Axe',
    type: 'melee',
    surge: {
      1: {
        surge_cost: 1,
        ability: '+1 damage'
      }
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 0,
      green: 1
    },
    hands: 2,
    cost: 100,
    img_path: 'images/items/shop/axe.png',
    number_available: 1
  },
  bow: {
    name: 'Bow',
    type: 'ranged',
    surge: {
      1: {
        surge_cost: 2,
        ability: '+1 range'
      },
      2: {
        surge_cost: 3,
        ability: '+1 damage'
      }
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: 'Pierce 1'
      },
    },
    combat_dice: {
      red: 0,
      blue: 1,
      white: 0,
      yellow: 1,
      green: 0
    },
    hands: 2,
    cost: 75,
    img_path: 'images/items/shop/bow.png',
    number_available: 2
  },
}