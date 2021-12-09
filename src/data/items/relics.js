export let relics =
{
  blade_of_light: {
    treasure: 'relic',
    name: 'Blade of Light',
    type: 'melee',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 1,
        amount: 1,
        text: '+1 Damage'
      },
      2: {
        type: 'addPierce',
        cost: 1,
        amount: 10,
        text: 'Pierce 10'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 2,
      green: 2
    },
    hands: 1,
    cost: 'cannot be sold',
    img_path: 'images/items/relics/blade_of_light.jpg',
  },
  soulbiter: {
    treasure: 'relic',
    name: 'Soulbiter',
    type: 'ranged',
    rune: false,
    surge: {
      1: {
        type: 'doulbeDamage',
        cost: 2,
        amount: false,
        text: 'double the damage dealt by this attack.'
      },

    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      red: 0,
      blue: 1,
      white: 0,
      yellow: 2,
      green: 2
    },
    hands: 1,
    cost: 'cannot be sold',
    img_path: 'images/items/relics/soulbiter.jpg',
  },
  touch_of_death: {
    treasure: 'relic',
    name: 'Touch Of Death',
    type: 'magic',
    rune: true,
    surge: {
      1: {
        type: 'instaKill',
        cost: 3,
        damageAmount: false,
        text: 'instantly kill the target ignoring the Undying ability'
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
      yellow: 2,
      green: 2
    },
    hands: 2,
    cost: 'Cannot be sold',
    img_path: 'images/items/relics/touch_of_death.jpg',
  },
  rune_plate: {
    treasure: 'relic',
    name: 'Rune plate',
    type: 'armor',
    armor: 4,
    surge: false,
    special_abilities: {
      speedReduce: false,
      equipRunes: true,
      text: 'you are immune to Aura, Burn, Fear, Grapple, Knockback, Poison, Stun, and Web',
      immune: {
        1: 'aura',
        2: 'burn',
        3: 'fear',
        4: 'grapple',
        5: 'knockback',
        6: 'poison',
        7: 'stun',
        8: 'web'
      },
    },
    cost: 'Cannot be sold',
    img_path: 'images/items/relics/rune_plate.jpg',
  },
}