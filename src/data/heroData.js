

export const heroData = {
  steelhorns: {
    name: "Steelhorns",
    max_wounds: 16,
    max_fatigue: 3,
    base_armor: 1,
    speed: 4,
    traits: {
      melee_trait: 3,
      ranged_trait: 0,
      magic_trait: 0,
    },
    hero_ability:
      "Steelhorns can make one MELEE attack when he declares a RUN action. He must move in a straight line and end his movement after making the attack",
    starting_skills: {
      fighting_skill: 3,
      subterfuge_skill: 0,
      spellcasting_skill: 0,
    },
    conquest_value: 3,
    hero_card_img_path: "images/hero_card/steelhorns.jpg",
    token_path: "images/hero_tokens/steelhorns.jpg",
  },
  battlemage_jaes: {
    name: "Battlemage Jaes",
    max_wounds: 12,
    max_fatigue: 3,
    base_armor: 2,
    speed: 4,
    traits: {
      melee_trait: 1,
      ranged_trait: 0,
      magic_trait: 2,
    },
    hero_ability:
      "Battlemage Jaes may equip RUNES even while wearing ARMOR that would ordinarily prevent it",
    starting_skills: {
      fighting_skill: 3,
      subterfuge_skill: 0,
      spellcasting_skill: 0,
    },
    conquest_value: 3,
    hero_card_img_path: "images/hero_card/battlemage_jaes.jpg",
    token_path: "images/hero_tokens/battlemage_jaes.jpg",
  },
  silhouette: {
    name: "Silhouette",
    max_wounds: 12,
    max_fatigue: 5,
    base_armor: 1,
    speed: 5,
    traits: {
      melee_trait: 0,
      ranged_trait: 3,
      magic_trait: 0,
    },
    hero_ability:
      "While Silhouette has a readied order, she may spend 2 fatigue to exchange it for a different order at any time",
    starting_skills: {
      fighting_skill: 0,
      subterfuge_skill: 3,
      spellcasting_skill: 0,
    },
    conquest_value: 3,
    hero_card_img_path: "images/hero_card/silhouette.jpg",
    token_path: "images/hero_tokens/silhouette.jpg",
  },
};