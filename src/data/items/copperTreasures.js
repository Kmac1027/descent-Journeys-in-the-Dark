export const copperTreasures =
//weapons
{
  dragontooth_hammer: {
    treasure: 'copper',
    name: 'Dragontooth Hammer',
    type: 'melee',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 1,
        amount: 1,
        text: '+1 Damage'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: 'addPierce',
          amount: 2,
          text: 'Pierce 2'
        }
      },
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 0,
      green: 1
    },
    hands: 2,
    cost: 250,
    img_path: 'images/items/copperTreasures/dragontooth_hammer.jpg',
  },
  bone_blade: {
    treasure: 'copper',
    name: 'Bone Blade',
    type: 'melee',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 1,
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
      other: false
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 0,
      green: 1
    },
    hands: 1,
    cost: 250,
    img_path: 'images/items/copperTreasures/bone_blade.jpg',
  },
  dwarven_fire_bombs: {
    treasure: 'copper',
    name: 'Dwarven Fire Bombs',
    type: 'ranged',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 1,
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
      blue: 1,
      white: 0,
      yellow: 0,
      green: 1
    },
    hands: 1,
    cost: 250,
    img_path: 'images/items/copperTreasures/dwarven_fire_bombs.jpg',
  },
  great_bow: {
    treasure: 'copper',
    name: 'Great Bow',
    type: 'ranged',
    rune: false,
    surge: {
      1: {
        type: 'addRange',
        cost: 1,
        amount: 1,
        text: '+1 Range'
      },
      2: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: 'addPierce',
          amount: 2,
          text: 'Pierce 2'
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
    cost: 250,
    img_path: 'images/items/copperTreasures/great_bow.jpg',
  },
  pacify: {
    treasure: 'copper',
    name: 'Pacify',
    type: 'magic',
    rune: true,
    surge: {
      1: {
        type: 'addDamage',
        cost: 2,
        amount: 1,
        text: '+1 Damage'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: 'Place 1 stun token on the target if you deal at least 1 wound to it (after armor is deducted)'
      }
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 1,
      green: 0
    },
    hands: 2,
    cost: 250,
    img_path: 'images/items/copperTreasures/pacify.jpg',
  },
  crystalize: {
    treasure: 'copper',
    name: 'Crystalize',
    type: 'magic',
    rune: true,
    surge: {
      1: {
        type: 'addPierce',
        cost: 1,
        amount: 2,
        text: 'Pierce 2'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 0,
      green: 1
    },
    hands: 2,
    cost: 250,
    img_path: 'images/items/copperTreasures/crystalize.jpg',
  },
  staff_of_punishment: {
    treasure: 'copper',
    name: 'Staff of Punishment',
    type: 'magic',
    rune: false,
    surge: {
      1: {
        type: 'addDamage',
        cost: 1,
        amount: 1,
        text: '+1 Damage'
      },
      2: {
        type: 'addRange',
        cost: 1,
        amount: 1,
        text: '+1 Range'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 0,
      green: 1
    },
    hands: 2,
    cost: 250,
    img_path: 'images/items/copperTreasures/staff_of_punishment.jpg',
  },
  bane: {
    treasure: 'copper',
    name: 'Bane',
    type: 'magic',
    rune: true,
    surge: {
      1: {
        type: 'addBlast',
        cost: 2,
        amount: 1,
        text: 'Blast 1'
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 0,
      green: 1
    },
    hands: 2,
    cost: 250,
    img_path: 'images/items/copperTreasures/bane.jpg',
  },

  //Armor
  plate_mail: {
    treasure: 'copper',
    name: 'Plate Mail',
    type: 'armor',
    armor: 3,
    surge: false,
    special_abilities: {
      speedReduce: 3,
      equipRunes: false,
      text: 'your base speed is reduced to 3. You cannot equip runes',
    },
    cost: 250,
    img_path: 'images/items/copperTreasures/plate_mail.jpg',
  },
  cloak_of_deception: {
    treasure: 'copper',
    name: 'Cloak of Desception',
    type: 'armor',
    armor: 1,
    surge: false,
    special_abilities: {
      speedReduce: false,
      equipRunes: true,
      text: 'When you suffer 1 or more wounds, roll 1 power die for each wound suffered. Cancel 1 wound for each blank you roll.',
    },
    cost: 250,
    img_path: 'images/items/copperTreasures/cloak_of_deception.jpg',
  },

  //shields
  crystal_shield: {
    treasure: 'copper',
    name: 'Crystal Shield',
    type: 'shield',
    rune: false,
    surge: false,
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: '',
          amount: 0,
          text: 'Exhaust to cancel 2 wound being dalt to you. You cannot use this item to cancel wounds dealt by attacks that ignore armor.'
        }
      }
    },
    combat_dice: false,
    hands: 1,
    cost: 250,
    img_path: 'images/items/copperTreasures/crystal_shield.jpg',
  },
  crystal_shield_2: {
    treasure: 'copper',
    name: 'Crystal Shield',
    type: 'shield',
    rune: false,
    surge: false,
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: '',
          amount: 0,
          text: 'Exhaust to cancel 2 wound being dalt to you. You cannot use this item to cancel wounds dealt by attacks that ignore armor.'
        }
      }

    },
    combat_dice: false,
    hands: 1,
    cost: 250,
    img_path: 'images/items/copperTreasures/crystal_shield.jpg',
  },

  //Others
  belt_of_strength: {
    treasure: 'copper',
    name: 'Belt of Strength',
    type: 'other',
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          onlyFor: 'melee',
          type: 'addDamage',
          amount: 1,
          text: 'When Making a Melee attack, you gain +1 Damage'
        }
      }
    },
    combat_dice: false,
    hands: 0,
    cost: 250,
    img_path: 'images/items/copperTreasures/belt_of_strength.jpg',
  },
  mana_weave: {
    treasure: 'copper',
    name: 'Mana Weave',
    type: 'other',
    rune: true,
    surge: false,
    special_abilities: {
      other: {
        1: {
          onlyFor: 'magic',
          type: 'addSurge',
          amount: 1,
          text: 'When Making a Magic attack, you gain +1 Surge'
        }
      }
    },
    combat_dice: false,
    hands: 0,
    cost: 250,
    img_path: 'images/items/copperTreasures/mana_weave.jpg',
  },
  minor_healing: {
    treasure: 'copper',
    name: 'Minor Healing',
    type: 'other',
    rune: true,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: '',
          amount: 0,
          text: 'Spend 1 movement point and 1 fatigue to heal 1 wound to yourself or an adjacent figure. You may use this ability multiple times, paying its cost each time'
        }
      }
    },
    combat_dice: false,
    hands: 0,
    cost: 250,
    img_path: 'images/items/copperTreasures/minor_healing.jpg',
  },
  ring_of_quickness: {
    treasure: 'copper',
    name: 'Ring of Quickness',
    type: 'other',
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: '',
          amount: 0,
          text: 'You gain 1 extra movment point during your turn(even if you would normally receive no movement points)'
        }
      }
    },
    combat_dice: false,
    hands: 0,
    cost: 250,
    img_path: 'images/items/copperTreasures/ring_of_quickness.jpg',
  },
  crystal_of_tival: {
    treasure: 'copper',
    name: 'Crystal of Tival',
    type: 'other',
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: '',
          amount: 0,
          text: 'Discard after equipping at the start of your turn to revocer 6 wounds and restore your fatigue to its maximum value'
        }
      }
    },
    combat_dice: false,
    hands: 0,
    cost: 250,
    img_path: 'images/items/copperTreasures/crystal_of_tival.jpg',
  },
  crystal_of_tival_2: {
    treasure: 'copper',
    name: 'Crystal of Tival',
    type: 'other',
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: '',
          amount: 0,
          text: 'Discard after equipping at the start of your turn to revocer 6 wounds and restore your fatigue to its maximum value'
        }
      }
    },
    combat_dice: false,
    hands: 0,
    cost: 250,
    img_path: 'images/items/copperTreasures/crystal_of_tival.jpg',
  },

  //treasure cache
  treasure_cache_gold: {
    treasure: 'copper',
    name: 'Treasure Cache',
    type: 'treasure_cache',
    effect: 'Receive 50 coins and draw another card from this deck',
    cost: 250,
    img_path: 'images/items/copperTreasures/treasure_cache_gold.jpg'
  },
  treasure_cache_gold_2: {
    treasure: 'copper',
    name: 'Treasure Cache',
    type: 'treasure_cache',
    effect: 'Receive 50 coins and draw another card from this deck',
    cost: 250,
    img_path: 'images/items/copperTreasures/treasure_cache_gold.jpg'
  },
  treasure_cache_healing_potion: {
    treasure: 'copper',
    name: 'Treasure Cache',
    type: 'treasure_cache',
    effect: 'Receive 1 healing potion and draw another card from this deck',
    cost: 250,
    img_path: 'images/items/copperTreasures/treasure_cache_healing_potion.jpg'
  },
  treasure_cache_vitality_potion: {
    treasure: 'copper',
    name: 'Treasure Cache',
    type: 'treasure_cache',
    effect: 'Receive 1 vitality potion and draw another card from this deck',
    cost: 250,
    img_path: 'images/items/copperTreasures/treasure_cache_vitality_potion.jpg'
  },
}

// export function findFunction(passedInFunction,) {
//   for (let key in copperTreasures) {
//     if (passedInFunction === copperTreasures[key]) {

//     }
//   }
// }