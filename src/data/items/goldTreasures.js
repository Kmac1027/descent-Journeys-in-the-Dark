
export const goldTreasures = {
  frost_axe: {
    treasure: "gold",
    name: "Frost Axe",
    type: "melee",
    rune: false,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
      },
      2: {
        type: "addPierce",
        cost: 1,
        amount: 3,
        text: "Pierce 3",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addSurge",
          amount: 2,
          text: "When making a Melee attack with this weapon, you gain 2 free surges",
        },
      },
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 1,
      green: 2,
    },
    hands: 2,
    cost: 750,
    img_path: "images/items/goldTreasures/frost_axe.jpg",
  },
  rage_blade: {
    treasure: "gold",
    name: "Rage Blade",
    type: "melee",
    rune: false,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 2,
        text: "+2 Damage",
      },
    },
    special_abilities: {
      off_hand_bonus: {
        1: {
          type: "addDamage",
          amount: 2,
          text: "Off Hand Bonus: +2 Damage",
        },
      },
      other: false,
    },
    combat_dice: {
      red: 1,
      blue: 0,
      white: 0,
      yellow: 1,
      green: 2,
    },
    hands: 1,
    cost: 750,
    img_path: "images/items/goldTreasures/rage_blade.jpg",
  },
  scarab_of_death: {
    treasure: "gold",
    name: "Scarab of Death",
    type: "ranged",
    rune: false,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 2,
        text: "+2 Damage",
      },
      2: {
        type: "addRange",
        cost: 1,
        amount: 1,
        text: "+1 Range",
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
      yellow: 1,
      green: 2,
    },
    hands: 1,
    cost: 750,
    img_path: "images/items/goldTreasures/scarab_of_death.jpg",
  },
  elven_bow: {
    treasure: "gold",
    name: "Elven Bow",
    type: "ranged",
    rune: false,
    surge: {
      1: {
        type: "addRange",
        cost: 1,
        amount: 2,
        text: "+2 Range",
      },
      2: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addPierce",
          amount: 4,
          text: "Pierce 4",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 1,
      white: 0,
      yellow: 2,
      green: 1,
    },
    hands: 2,
    cost: 750,
    img_path: "images/items/goldTreasures/elven_bow.jpg",
  },
  staff_of_knowledge: {
    treasure: "gold",
    name: "Staff of Knowledge",
    type: "magic",
    rune: false,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
      },
      2: {
        type: "addRange",
        cost: 1,
        amount: 1,
        text: "+1 Range",
      },
      3: {
        type: "removeThreat",
        cost: 2,
        amount: 1,
        text: "Overlord loses 1 threat token",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addSurge",
          amount: 2,
          text: "When making a Magic attack with this weapon, you gain 2 free surges",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 2,
      green: 1,
    },
    hands: 2,
    cost: 750,
    img_path: "images/items/goldTreasures/staff_of_knowledge.jpg",
  },
  curse_of_rot: {
    treasure: "gold",
    name: "Curse of Rot",
    type: "magic",
    rune: true,
    surge: {
      1: {
        type: "addDamagePierce",
        cost: 1,
        damageAmount: 1,
        pierceAmount: 1,
        text: "+ 1 Damage and Pierce 1",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addPierce",
          amount: 4,
          text: "Pierce 4",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 1,
      green: 2,
    },
    hands: 2,
    cost: 750,
    img_path: "images/items/goldTreasures/curse_of_rot.jpg",
  },
  flame_strike: {
    treasure: "gold",
    name: "Flame Strike",
    type: "magic",
    rune: true,
    surge: {
      1: {
        type: "addBlast",
        cost: 2,
        amount: 1,
        text: "Blast 1",
      },
      2: {
        type: "addBurn",
        cost: 2,
        amount: 1,
        text: "+1 Burn Token",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addBlast",
          amount: 2,
          text: "Blast 2",
        },
        2: {
          type: "addBurn",
          amount: 1,
          text: "Burn",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 1,
      green: 2,
    },
    hands: 2,
    cost: 750,
    img_path: "images/items/goldTreasures/flame_strike.jpg",
  },
  word_of_vaal: {
    treasure: "gold",
    name: "Word of Vaal",
    type: "magic",
    rune: true,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "wordOfVaal",
          amount: 0,
          text: "Attacks with the Word of Vaal affect all enemy figures within 3 spaces of your hero and only misses on a miss result. Place 1 stun token on each target that you deal at least 1 wound to (after armor is deducted)",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 2,
      green: 1,
    },
    hands: 2,
    cost: 750,
    img_path: "images/items/goldTreasures/word_of_vaal.jpg",
  },
  //Armor
  dragon_scale_mail: {
    treasure: "gold",
    name: "Golden Armor",
    type: "armor",
    armor: 4,
    surge: false,
    special_abilities: {
      speedReduce: 3,
      equipRunes: false,
      text: "your base speed is reduced to 3. You cannot equip runes. You are immune to Grapple and Daze",
      immune: {
        1: "bleed",
        2: "burn",
        3: "poison",
      },
    },
    cost: 750,
    img_path: "images/items/goldTreasures/dragon_scale_mail.jpg",
  },
  elven_cloak: {
    treasure: "gold",
    name: "Cloak of Mists",
    type: "armor",
    armor: 2,
    surge: false,
    special_abilities: {
      speedReduce: false,
      equipRunes: true,
      immune: false,
      text: "When you suffer 1 or more wounds, roll 1 power die for each wound suffered. Cancel 1 wound for each Power Enhancment you roll.",
    },
    cost: 750,
    img_path: "images/items/goldTreasures/elven_cloak.jpg",
  },
  //shields
  shield_of_the_warrior: {
    treasure: "gold",
    name: "Shield of the Warrior",
    type: "shield",
    rune: false,
    surge: false,
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "shield",
          amount: 0,
          text: "Exhaust to cancel 4 wound being dalt to you. You cannot use this item to cancel wounds dealt by attacks that ignore armor.",
        },
      },
      wounds_canceled: 4,
    },
    combat_dice: false,
    hands: 1,
    cost: 750,
    img_path: "images/items/goldTreasures/shield_of_the_warrior.jpg",
  },
  //Others
  ring_of_the_arcane: {
    activate: false,
    treasure: "gold",
    name: "Ring of the Arcane",
    type: "other",
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          onlyFor: "magic",
          type: "addRange",
          amount: 2,
          text: "When Making a magic attack, you gain +2 Range",
        },
        2: {
          onlyFor: "magic",
          type: "addDamage",
          amount: 2,
          text: "When Making a magic attack, you gain +2 Damage",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 750,
    img_path: "images/items/goldTreasures/ring_of_the_arcane.jpg",
  },
  jinns_lamp: {
    activate: false,
    treasure: "gold",
    name: `Jinn's Lamp`,
    type: "other",
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: "healing",
          amount: 0,
          text: "Discard after equipping at the start of your turn. You and all adjacent heroes recover 8 wounds and restore your fatigure to its maximum value",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 750,
    img_path: "images/items/goldTreasures/jinns_lamp.jpg",
  },
  deflect: {
    activate: false,
    treasure: "gold",
    name: "Deflect",
    type: "other",
    rune: true,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: "addFear",
          amount: 1,
          text: "You gain Fear 1",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 750,
    img_path: "images/items/goldTreasures/deflect.jpg",
    //treasure cache
    treasure_cache_healing_potion: {
      treasure: "gold",
      name: "Treasure Cache",
      type: "treasure_cache",
      text: "Receive 150 gold and 1 healing potion and draw another card from this deck",
      gold: 150,
      health_potion: true,
      vitality_potion: false,
      cost: 750,
      img_path:
        "images/items/goldTreasures/treasure_cache_150_coins_healing.jpg",
    },
    treasure_cache_vitality_potion: {
      treasure: "gold",
      name: "Treasure Cache",
      type: "treasure_cache",
      text: "Receive 150 gold and 1 vitality potion and draw another card from this deck",
      gold: 150,
      health_potion: false,
      vitality_potion: true,
      cost: 750,
      img_path:
        "images/items/goldTreasures/treasure_cache_150_coins_vitality.jpg",
    },
  },
};