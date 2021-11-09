export const shopItems = {
  sword: {
    name: 'Sword',
    weapon_type: 'melee',
    surge: { 2: '+1 damage' },
    special_abilities: {
      off_hand_bonus: '+1 damage',
      other: false,
    },
    combat_dice: {
      red: 1,
      green: 1
    },
    hands: 1,
    cost: 75,
    img_path: 'images/items/shop/sword.png'
  },
  crossbow: {
    name: 'Crossbow',
    weapon_type: 'ranged',
    surge: {
      2: '+1 damage',
      3: '+1 range'
    },
    special_abilities: {
      off_hand_bonus: false,
      other: false,
    },
    combat_dice: {
      blue: 1,
      green: 1
    },
    hands: 1,
    cost: 150,
    img_path: 'images/items/shop/crossbow.jpeg'
  }
}