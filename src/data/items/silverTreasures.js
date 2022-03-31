export const silverTreasures = {
  serpent_blade: {
    treasure: "silver",
    name: "Servent Blade",
    type: "melee",
    rune: false,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
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
      yellow: 0,
      green: 2,
    },
    hands: 1,
    cost: 500,
    img_path: "images/items/silverTreasures/serpent_blade.jpg",
  },
  flying_death: {
    treasure: "silver",
    name: "Flying Death",
    type: "ranged",
    rune: false,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
      },
      2: {
        type: "addDamage",
        cost: 2,
        amount: 3,
        text: "+3 Damage",
      },
      3: {
        type: "addRange",
        cost: 2,
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
      green: 1,
    },
    hands: 1,
    cost: 500,
    img_path: "images/items/silverTreasures/flying_death.jpg",
  },
  bow_of_bone: {
    treasure: "silver",
    name: "Bow of Bone",
    type: "ranged",
    rune: false,
    surge: {
      1: {
        type: "addRange",
        cost: 1,
        amount: 1,
        text: "+1 Range",
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
          amount: 3,
          text: "Pierce 3",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 1,
      white: 0,
      yellow: 1,
      green: 1,
    },
    hands: 2,
    cost: 500,
    img_path: "images/items/silverTreasures/bow_of_bone.jpg",
  },
  staff_of_fire: {
    treasure: "silver",
    name: "Staff of Fire",
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
      yellow: 1,
      green: 1,
    },
    hands: 2,
    cost: 500,
    img_path: "images/items/silverTreasures/staff_of_fire.jpg",
  },
  petrify: {
    treasure: "silver",
    name: "Petrify",
    type: "magic",
    rune: true,
    surge: {
      1: {
        type: "addDamage",
        cost: 1,
        amount: 1,
        text: "+1 Damage",
      },
      2: {
        type: "addStun",
        cost: 2,
        amount: 1,
        text: "+1 Stun Token",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addStun",
          amount: 1,
          text: "If you deal at least 1 wound to a target (after deducting armor) place 1 stun token on the target",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 2,
      green: 0,
    },
    hands: 2,
    cost: 500,
    img_path: "images/items/silverTreasures/petrify.jpg",
  },
  ice_storm: {
    treasure: "silver",
    name: "Ice Storm",
    type: "magic",
    rune: true,
    surge: {
      1: {
        type: "addBlast",
        cost: 2,
        amount: 1,
        text: "Blast 1",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addBlast",
          amount: 1,
          text: "Blast 1",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 0,
      green: 2,
    },
    hands: 2,
    cost: 500,
    img_path: "images/items/silverTreasures/ice_storm.jpg",
  },
  drain_life: {
    treasure: "silver",
    name: "Drain Life",
    type: "magic",
    rune: true,
    surge: {
      1: {
        type: "addPierce",
        cost: 1,
        amount: 2,
        text: "Pierce 2",
      },
    },
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "addPierce",
          amount: 2,
          text: "Pierce 2",
        },
      },
    },
    combat_dice: {
      red: 0,
      blue: 0,
      white: 1,
      yellow: 1,
      green: 1,
    },
    hands: 2,
    cost: 500,
    img_path: "images/items/silverTreasures/drain_life.jpg",
  },
  //Armor
  golden_armor: {
    treasure: "silver",
    name: "Golden Armor",
    type: "armor",
    armor: 3,
    surge: false,
    special_abilities: {
      speedReduce: 3,
      equipRunes: false,
      text: "your base speed is reduced to 3. You cannot equip runes. You are immune to Grapple and Daze",
      immune: {
        1: "grapple",
        2: "daze",
      },
    },
    cost: 500,
    img_path: "images/items/silverTreasures/golden_armor.jpg",
  },
  cloak_of_mists: {
    treasure: "silver",
    name: "Cloak of Mists",
    type: "armor",
    armor: 1,
    surge: false,
    special_abilities: {
      speedReduce: false,
      equipRunes: true,
      immune: false,
      text: "When you suffer 1 or more wounds, roll 1 power die for each wound suffered. Cancel 1 wound for each surge you roll.",
    },
    cost: 500,
    img_path: "images/items/silverTreasures/cloak_of_mists.jpg",
  },

  //Shields
  shield_of_light: {
    treasure: "silver",
    name: "Shield of Light",
    type: "shield",
    rune: false,
    surge: false,
    special_abilities: {
      off_hand_bonus: false,
      other: {
        1: {
          type: "shield",
          amount: 0,
          text: "Exhaust to cancel 3 wound being dalt to you. You cannot use this item to cancel wounds dealt by attacks that ignore armor.",
        },
      },
    },
    combat_dice: false,
    hands: 1,
    cost: 500,
    img_path: "images/items/silverTreasures/shield_of_light.jpg",
  },

  //Others
  scorpion_helmet: {
    activate: false,
    treasure: "silver",
    name: "Scorpion Helmet",
    type: "other",
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          onlyFor: "ranged",
          type: "addDamage",
          amount: 1,
          text: "When Making a ranged attack, you gain +1 Damage",
        },
        2: {
          onlyFor: "ranged",
          type: "addRange",
          amount: 2,
          text: "When Making a ranged attack, you gain +2 Range",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 500,
    img_path: "images/items/silverTreasures/scorpion_helmet.jpg",
  },
  greater_healing: {
    activate: true,
    treasure: "silver",
    name: "Greater Healing",
    type: "other",
    rune: true,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: "healing",
          amount: 0,
          text: "Spend 1 movement point and 1 fatigue to heal 2 wound to yourself or an adjacent figure. You may use this ability multiple times, paying its cost each time",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 500,
    img_path: "images/items/silverTreasures/greater_healing.jpg",
  },
  amulet_of_healing: {
    activate: false,
    treasure: "silver",
    name: "Amulet of Healing",
    type: "other",
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: "healing",
          amount: 0,
          text: "Discard after equipping at the start of your turn. Restore your wounds and fatigue to their maximum values.",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 500,
    img_path: "images/items/silverTreasures/amulet_of_healing.jpg",
  },
  flute_of_repose: {
    activate: true,
    treasure: "silver",
    name: "Flute of Repose",
    type: "other",
    rune: false,
    surge: false,
    special_abilities: {
      other: {
        1: {
          type: "addStun",
          amount: 1,
          text: "Discard at the end of your turn to place 1 stun token on every monster within 6 spaces of your hero figure",
        },
      },
    },
    combat_dice: false,
    hands: 0,
    cost: 500,
    img_path: "images/items/silverTreasures/flute_of_repose.jpg",
  },

  //treasure cache
  treasure_cache_gold: {
    treasure: "silver",
    name: "Treasure Cache",
    type: "treasure_cache",
    text: "Receive 100 gold and draw another card from this deck",
    gold: 100,
    health_potion: false,
    vitality_potion: false,
    cost: 500,
    img_path: "images/items/silverTreasures/treasure_cache_100_coins.jpg",
  },
  treasure_cache_healing_potion: {
    treasure: "silver",
    name: "Treasure Cache",
    type: "treasure_cache",
    text: "Receive 50 gold and 1 healing potion and draw another card from this deck",
    gold: 50,
    health_potion: true,
    vitality_potion: false,
    cost: 500,
    img_path:
      "images/items/silverTreasures/treasure_cache_50_coins_healing.jpg",
  },
  treasure_cache_vitality_potion: {
    treasure: "silver",
    name: "Treasure Cache",
    type: "treasure_cache",
    text: "Receive 50 gold and 1 vitality potion and draw another card from this deck",
    gold: 50,
    health_potion: false,
    vitality_potion: true,
    cost: 500,
    img_path:
      "images/items/silverTreasures/treasure_cache_50_coins_vitality.jpg",
  },
};