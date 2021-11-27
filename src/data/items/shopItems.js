export const shopItemData =
//weapons
{
  sword: {
    name: 'Sword',
    type: 'melee',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
    },
    special_abilities: {
      off_hand_bonus: {
        1: {
          type: 'addDamage',
          amount: 1,
          text: 'Off Hand Bonus: +1 Damage'
        }
      },
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
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
      2: {
        type: 'addRange',
        cost: 3,
        amound: 1,
        text: '+1 range'
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
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 1,
        amount: 1,
        text: '+1 Damage'
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
    number_available: 2
  },
  bow: {
    name: 'Bow',
    type: 'ranged',
    rune: false,
    surge: {
      1: {
        type: 'addRange',
        cost: 2,
        amount: 1,
        text: '+1 Range'
      },
      2: {
        type: 'addDamage',
        cost: 3,
        amount: 1,
        text: '+1 Damage'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: 'addPierce',
          amount: 1,
          text: 'Pierce 1'
        }
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
  dagger: {
    name: 'Dagger',
    type: 'melee',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
    },
    special_abilities: {
      off_hand_bonus: {
        1: {
          type: 'addSurge',
          amount: 1,
          text: 'Off Hand Bonus: +1 Surge'
        }
      },
      other: false,
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 1,
      green: 0
    },
    hands: 1,
    cost: 25,
    img_path: 'images/items/shop/dagger.png',
    number_available: 2
  },
  immolation: {
    name: 'Immolation',
    type: 'magic',
    rune: true,
    surge: {
      1: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
      2: {
        type: 'addRange',
        cost: 2,
        amount: 1,
        text: '+1 Range'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 0,
      green: 1
    },
    hands: 2,
    cost: 200,
    img_path: 'images/items/shop/immolation.png',
    number_available: 2
  },
  mage_staff: {
    name: 'Mage Staff',
    type: 'magic',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
      2: {
        type: 'addRange',
        cost: 2,
        amount: 1,
        text: '+1 Range'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 1,
      green: 0
    },
    hands: 2,
    cost: 150,
    img_path: 'images/items/shop/mage_staff.png',
    number_available: 3
  },

  //Armor
  leather_armor: {
    name: 'Leather Armor',
    type: 'armor',
    armor: 1,
    surge: false,
    special_abilities: false,
    cost: 50,
    img_path: 'images/items/shop/leather_armor.png',
    number_available: 2
  },
  chain_mail: {
    name: 'Chain Mail',
    type: 'armor',
    armor: 2,
    surge: false,
    special_abilities: {
      speedReduce: 4,
      equipRunes: false,
      text: 'your base speed is reduced to 4. You may not equip runes',
    },
    cost: 100,
    img_path: 'images/items/shop/chain_mail.png',
    number_available: 2
  },
}