import "../styles/player.css";
import Shop, {
  shopItemsArray,
  health_potion,
  vitality_potion,
  copperTreasureArray,
  silverTreasureArray,
  goldTreasureArray,
} from "./Shop";
import { copperTreasures } from "../data/items/copperTreasures";
import { silverTreasures } from "../data/items/silverTreasures";
import { goldTreasures } from "../data/items/goldTreasures";
import { relics } from "../data/items/relics";
import Overlord from "./Overlord";
import SkillFunctions from "./SkillFunctions";
import DiceRoll from "./Dice";
import Potions, { potionsArray } from "./Potions";
import Bag, { bagArray } from "./Bag";
import Teleport from "./Teleport";
import Conditions from "./Conditions";
import RandomTreasure from "./RandomTreasure";
import JumpScreen from "./JumpScreen";
import { useState, useEffect } from "react";
import { heroData } from "../data/heroData.js";
// import { monsterData } from '../data/monsterData.js';
import { shopItemData } from "../data/items/shopItems";
import { heroToken, disableMovment } from "../player_actions/movement";
import { attack, attackType } from "../player_actions/attack";
import {
  targetClicked,
  mousePos,
  correctedPosition,
  attackTargetClicked,
  selectedTarget,
} from "../player_actions/mouseClick";
import RunBattleadvance from "./RunBattleAdvance";

export function inRange(token, checkPoint) {
  if (
    (token.x - 50 === checkPoint.x && token.y === checkPoint.y) ||
    (token.x + 50 === checkPoint.x && token.y === checkPoint.y) ||
    (token.y - 50 === checkPoint.y && token.x === checkPoint.x) ||
    (token.y + 50 === checkPoint.y && token.x === checkPoint.x) ||
    (token.x + 50 === checkPoint.x && token.y + 50 === checkPoint.y) ||
    (token.x + 50 === checkPoint.x && token.y - 50 === checkPoint.y) ||
    (token.x - 50 === checkPoint.x && token.y + 50 === checkPoint.y) ||
    (token.x - 50 === checkPoint.x && token.y - 50 === checkPoint.y)
  ) {
    return true;
  } else {
    return false;
  }
}
function Player({ chosenHero, chosenQuest, revealAreas, turn, setTurn }) {
  let copper = chosenQuest.tokenPlacement.treasure_chests.copper;
  let silver = chosenQuest.tokenPlacement.treasure_chests.silver;
  let gold = chosenQuest.tokenPlacement.treasure_chests.gold;

  function endTurn() {
    if (turn === "player") {
      setTurn("overlord");
    } else {
      setTurn("player");
    }
    // console.log(turn)
  }

  const [playerOptions, setPlayerOptions] = useState(true);
  useEffect(() => {
    if (turn === "overlord") {
      disableMovment.up = true;
      disableMovment.left = true;
      disableMovment.right = true;
      disableMovment.down = true;
      disableMovment.downRight = true;
      disableMovment.upLeft = true;
      disableMovment.upRight = true;
      disableMovment.downLeft = true;
      setPlayerOptions(false);
    } else if (turn === "player") {
      disableMovment.up = false;
      disableMovment.left = false;
      disableMovment.right = false;
      disableMovment.down = false;
      disableMovment.downRight = false;
      disableMovment.upLeft = false;
      disableMovment.upRight = false;
      disableMovment.downLeft = false;
      setPlayerOptions(true);
      setSpeed(0);
      setNumberOfAttacks(0);
      setShowRunBattleAdvance(true);
      alert('Players Turn');
    }
  }, [turn]);

  const [showRunBattleAdvance, setShowRunBattleAdvance] = useState(true);
  const [threatTokens, setThreatTokens] = useState(10);
  const [currentHealth, setCurrentHealth] = useState(
    heroData[chosenHero].max_wounds
  );

  useEffect(() => {
    if (currentHealth <= 0) {
      alert('You Have Died');
      setLevelConquestTokens(levelConquestTokens - heroConquestValue);
      heroToken.x = chosenQuest.town.x + 50;
      heroToken.y = chosenQuest.town.y + 50;
      setCurrentHealth(heroData[chosenHero].max_wounds);
    }
  }, [currentHealth]);

  const [maxHealth, setMaxHealth] = useState(heroData[chosenHero].max_wounds);
  const [currentFatigue, setCurrentFatigue] = useState(
    heroData[chosenHero].max_fatigue
  );
  const [maxFatigue, setMaxFatigue] = useState(
    heroData[chosenHero].max_fatigue
  );
  const [heroConquestValue, setHeroConquestValue] = useState(
    heroData[chosenHero].conquest_value
  );
  const [levelConquestTokens, setLevelConquestTokens] = useState(
    chosenQuest.startingConquestTokens
  );
  const [currentArmor, setCurrentArmor] = useState(
    heroData[chosenHero].base_armor
  );
  const [baseSpeed, setBaseSpeed] = useState(heroData[chosenHero].speed);
  const [speed, setSpeed] = useState(0);
  const [hasRedRuneKey, setHasRedRuneKey] = useState(false);
  const [hasYellowRuneKey, setHasYellowRuneKey] = useState(false);
  const [hasBlueRuneKey, setHasBlueRuneKey] = useState(false);
  const [condition, setCondition] = useState("Normal");

  useEffect(() => {
    if (speed <= 0) {
      disableMovment.up = true;
      disableMovment.left = true;
      disableMovment.right = true;
      disableMovment.down = true;
      disableMovment.downRight = true;
      disableMovment.upLeft = true;
      disableMovment.upRight = true;
      disableMovment.downLeft = true;
    }
  }, [speed]);

  const [money, setMoney] = useState(chosenQuest.startingMoney);
  // const [money, setMoney] = useState(10000);
  useEffect(() => {
    if (money < 0) {
      setMoney(0);
    }
  }, [money]);

  const [equipRunes, setEquipRunes] = useState(true);
  const [showPotions, setShowPotions] = useState(false);
  const [showBag, setShowBag] = useState(false);

  const [foundCopperTreasure, setFoundCopperTreasure] = useState(false);
  const [foundSilverTreasure, setFoundSilverTreasure] = useState(false);
  const [foundGoldTreasure, setFoundGoldTreasure] = useState(false);

  const [meleePowerDie, setMeleePowerDie] = useState(
    heroData[chosenHero].traits.melee_trait
  );
  const [rangedPowerDie, setRangedPowerDie] = useState(
    heroData[chosenHero].traits.ranged_trait
  );
  const [magicPowerDie, setMagicPowerDie] = useState(
    heroData[chosenHero].traits.magic_trait
  );

  //attack
  const [numberOfAttacks, setNumberOfAttacks] = useState(0);
  const [attackActive, setAttackActive] = useState(false);
  const [weaponCardsActive, setWeaponCardsActive] = useState(false);

  //reveal areas
  const [openDoor, setOpenDoor] = useState(false);
  if (
    heroToken.x === chosenQuest.tokenPlacement.start_area.x &&
    heroToken.y === chosenQuest.tokenPlacement.start_area.y
  ) {
    delete chosenQuest.unexplored.start_area;
  }

  function attackCardsActive() {
    if (numberOfAttacks <= 0 && weaponCardsActive === false
    ) {
      alert('No attacks left');
    } else {
      if (weaponCardsActive === false) {
        setWeaponCardsActive(true);
      } else {
        setWeaponCardsActive(false);
        if (showDice === true) {
          showDiceRoll();
          attackOn();
          chosenQuest.tokenPlacement.marker.x = -100;
          chosenQuest.tokenPlacement.marker.y = -100;
          selectedTarget.id = null;
        }
      }
    }

  }
  function attackOn() {
    if (attackActive === false) {
      setAttackActive(true);
    } else {
      setAttackActive(false);
    }
  }

  useEffect(() => {
    let canvasClick = document.getElementById("canvas");
    document.addEventListener("mousemove", function (e) {
      const rect = canvasClick.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
    });

    if (attackActive === false) {
      canvasClick.removeEventListener("click", attackTargetClicked);
      canvasClick.addEventListener("click", targetClicked);
    } else if (attackActive === true) {
      canvasClick.removeEventListener("click", targetClicked);
      canvasClick.addEventListener("click", attackTargetClicked);
    }
  }, [attackActive]);

  //attacking
  const [selectedWeapon, setSelectedWeapon] = useState({});
  const [offHand, setOffHand] = useState({});

  function attacking(weapon, offHandWeapon) {
    attackType.type = weapon.type;
    if (weapon.surge !== false) {
      for (let key in weapon.surge) {
        if (weapon.surge[key].type === "addBlast") {
          attackType.blast = true;
          break;
        }
      }
    }
    if (weapon.special_abilities !== false) {
      for (let key in weapon.special_abilities) {
        if (weapon.special_abilities[key].type === "addBlast") {
          attackType.blast = true;
          break;
        }
      }
    }
    attackOn();
    setSelectedWeapon(weapon);
    setOffHand(offHandWeapon);
    showDiceRoll();
  }

  const [showDice, setShowDice] = useState(false);
  function showDiceRoll() {
    if (showDice === false) {
      setShowDice(true);
    } else {
      setShowDice(false);
    }
  }

  //weapons and items
  const [weapon1, setWeapon1] = useState(shopItemData.sword);
  const [weapon2, setWeapon2] = useState(shopItemData.crossbow);
  // const [weapon1, setWeapon1] = useState(relics.touch_of_death);
  // const [weapon2, setWeapon2] = useState();
  const [armor, setArmor] = useState(shopItemData.leather_armor);
  const [other1, setOther1] = useState();
  const [other2, setOther2] = useState();

  useEffect(() => {
    if (armor) {
      // console.log('Armor triggered')
      if (armor.special_abilities !== false) {
        if (heroData[chosenHero].speed > armor.special_abilities.speedReduce) {
          setBaseSpeed(armor.special_abilities.speedReduce);
          if (armor.special_abilities.equipRunes === false) {
            // console.log("Equiped Runes set to false");
            setEquipRunes(false);
          }
        }
      } else if (armor.special_abilities === false) {
        setCurrentArmor(heroData[chosenHero].base_armor);
        setBaseSpeed(heroData[chosenHero].speed);
        setEquipRunes(true);
      }
      setCurrentArmor(heroData[chosenHero].base_armor + armor.armor);

    } else if (!armor) {
      setCurrentArmor(heroData[chosenHero].base_armor);
      setBaseSpeed(heroData[chosenHero].speed);
      setEquipRunes(true);
    }
  }, [armor, currentArmor, baseSpeed, speed, other1, other2, chosenHero]);

  useEffect(() => {
    if (other1 && other1.name === "Crystal of Tival") {
      alert(
        `Crystal of Tival Equipt! ${other1.special_abilities.other[1].text}`
      );
      setCurrentHealth((currentHealth) => currentHealth + 6);
      if (currentHealth > maxHealth) {
        setCurrentHealth(maxHealth);
      }
      setCurrentFatigue(maxFatigue);
      setOther1();
    }
    if (other2 && other2.name === "Crystal of Tival") {
      alert(
        `Crystal of Tival Equipt! ${other2.special_abilities.other[1].text}`
      );
      setCurrentHealth((currentHealth) => currentHealth + 6);
      if (currentHealth > maxHealth) {
        setCurrentHealth(maxHealth);
      }
      setCurrentFatigue(maxFatigue);
      setOther2();
    }
    if (other1 && other1.name === "Amulet of Healing") {
      alert(
        `Amulet of Healing Equipt! ${other1.special_abilities.other[1].text}`
      );
      setCurrentHealth(maxHealth);
      setCurrentFatigue(maxFatigue);
      setOther1();
    }
    if (other2 && other2.name === "Amulet of Healing") {
      alert(
        `Amulet of Healing Equipt! ${other1.special_abilities.other[1].text}`
      );
      setCurrentHealth(maxHealth);
      setCurrentFatigue(maxFatigue);
      setOther2();
    }
  }, [other1, other2]);

  //shop and town
  const [showReturnToTown, setShowReturnToTown] = useState(false);
  const [showShop, setShowShop] = useState(false);

  function showShopItems() {
    if (showShop === false) {
      setShowShop(true);
    } else {
      setShowShop(false);
    }
  }

  function sell(item) {
    if (!item) {
      alert("you have no item to sell");
    }
    if (item.treasure === "relic") {
      alert("This item is a relic and cannot be sold");
    } else if (item.treasure !== "relic") {
      if (item.type === "armor") {
        // console.log(item.special_abilities.equipRunes)
        if (item.special_abilities.equipRunes === false) {
          setEquipRunes(true);
        }
      }
      let sellAmount = Math.floor(item.cost / 2);
      let newMoney = money + sellAmount;
      setMoney(newMoney);
      if (
        shopItemsArray.includes(item) === false &&
        item.type !== "potion" &&
        item.treasure === "shop"
      ) {
        shopItemsArray.push(item);
      } else {
        item.number_available += 1;
      }
    }
  }

  function turnOnPotionScreen() {
    if (showPotions === false) {
      setShowPotions(true);
    } else {
      setShowPotions(false);
    }
  }

  function turnOnBagScreen() {
    if (showBag === false) {
      setShowBag(true);
    } else {
      if (bagArray.length > 3) {
        alert("Your Bag is too Full! You Must Discard Something");
      } else if (bagArray.length <= 3) {
        setShowBag(false);
      }
    }
  }

  const [isOnGlyph, setIsOnGlyph] = useState(true);
  const [showPickUpHPButton, setShowPickUpHPButton] = useState(false);
  const [showPickUpVPButton, setShowPickUpVPButton] = useState(false);
  const [pickedUpPotion, setPickedUpPotion] = useState();
  const [potionType, setPotionType] = useState();
  const [showCTbutton, setShowCTButton] = useState(false);
  const [showSTbutton, setShowSTButton] = useState(false);
  const [showGTbutton, setShowGTButton] = useState(false);
  const [treasureChestType, setTreasureChestType] = useState();
  const [showTreasureDiv, setShowTreasureDiv] = useState(false);
  const [randomTreasure, setRandomTreasure] = useState({});
  const [pickedUpChest, setPickedUpChest] = useState();
  const [showTeleport, setShowTeleport] = useState(false);
  const [showOpenVertDoorButton, setShowOpenVertDoorButton] = useState(false);
  const [showOpenHorzDoorButton, setShowOpenHorzDoorButton] = useState(false);
  const [openThisDoor, setOpenThisDoor] = useState();
  const [showPickUpKeyButton, setShowPickUpKeyButton] = useState(false);
  const [pickUpThisKey, setPickUpThisKey] = useState();
  const [showPickUpGoldPileButton, setShowPickUpGoldPileButton] =
    useState(false);
  const [pickUpThisGoldPile, setPickUpThisGoldPile] = useState();
  const [showJumpScreenButton, setShowJumpScreenButton] = useState(false);
  const [showJumpScreen, setShowJumpScreen] = useState(false);

  function pickUpPotion() {
    if (potionsArray.length >= 3) {
      let result = window.confirm(
        "You have no more room for potions, would you like to add it to your bag?"
      );
      if (result === true) {
        if (bagArray >= 3) {
          alert("You have no room in your bag");
        } else {
          if (potionType === "health") {
            bagArray.push(health_potion);
            delete chosenQuest.tokenPlacement.items.health_potions[
              pickedUpPotion
            ];
          } else if (potionType === "vitality") {
            bagArray.push(vitality_potion);
            delete chosenQuest.tokenPlacement.items.vitality_potions[
              pickedUpPotion
            ];
          }
          setShowPickUpHPButton(false);
          setShowPickUpVPButton(false);
        }
      }
    } else {
      if (potionType === "health") {
        potionsArray.push(health_potion);
        delete chosenQuest.tokenPlacement.items.health_potions[pickedUpPotion];
      } else if (potionType === "vitality") {
        potionsArray.push(vitality_potion);
        delete chosenQuest.tokenPlacement.items.vitality_potions[
          pickedUpPotion
        ];
      }
      setShowPickUpVPButton(false);
      setShowPickUpHPButton(false);
    }
  }

  function openTreasureChest(type) {
    if (bagArray.length >= 3) {
      alert("You Have no more room for items in your bag!");
    } else {
      if (type === "copper") {
        setFoundCopperTreasure(true);
        if (copperTreasureArray.length <= 0) {
          alert("You Find 250 Gold Coins");
          setMoney((money) => money + 250);
          delete chosenQuest.tokenPlacement.treasure_chests.copper[
            pickedUpChest
          ];
          setPickedUpChest();
          setShowCTButton(false);
        } else {
          let pickRandomItem = Math.floor(
            Math.random() * (copperTreasureArray.length - 1)
          );
          // console.log(copperTreasureArray[pickRandomItem])
          let randomItem = copperTreasureArray[pickRandomItem];
          setRandomTreasure(randomItem);
          bagArray.push(randomItem);
          copperTreasureArray.splice(
            copperTreasureArray.indexOf(randomItem),
            1
          );
          delete chosenQuest.tokenPlacement.treasure_chests.copper[
            pickedUpChest
          ];
          setPickedUpChest();
          setShowCTButton(false);
          setShowTreasureDiv(true);
        }
      } else if (type === "silver") {
        setFoundSilverTreasure(true);
        if (silverTreasureArray.length <= 0) {
          alert("You Find 500 Gold Coins");
          setMoney((money) => money + 250);
          delete chosenQuest.tokenPlacement.treasure_chests.silver[
            pickedUpChest
          ];
          setPickedUpChest();
          setShowSTButton(false);
        } else {
          let pickRandomItem = Math.floor(
            Math.random() * (silverTreasureArray.length - 1)
          );
          // console.log(silverTreasureArray[pickRandomItem])
          let randomItem = silverTreasureArray[pickRandomItem];
          setRandomTreasure(randomItem);
          bagArray.push(randomItem);
          silverTreasureArray.splice(
            silverTreasureArray.indexOf(randomItem),
            1
          );
          delete chosenQuest.tokenPlacement.treasure_chests.silver[
            pickedUpChest
          ];
          setPickedUpChest();
          setShowSTButton(false);
          setShowTreasureDiv(true);
        }
      } else if (type === "gold") {
        setFoundGoldTreasure(true);
        if (goldTreasureArray.length <= 0) {
          alert("You Find 750 Gold Coins");
          setMoney((money) => money + 250);
          delete chosenQuest.tokenPlacement.treasure_chests.gold[pickedUpChest];
          setPickedUpChest();
          setShowGTButton(false);
        } else {
          let pickRandomItem = Math.floor(
            Math.random() * (goldTreasureArray.length - 1)
          );
          // console.log(goldTreasureArray[pickRandomItem])
          let randomItem = goldTreasureArray[pickRandomItem];
          setRandomTreasure(randomItem);
          bagArray.push(randomItem);
          goldTreasureArray.splice(goldTreasureArray.indexOf(randomItem), 1);
          delete chosenQuest.tokenPlacement.treasure_chests.gold[pickedUpChest];
          setPickedUpChest();
          setShowGTButton(false);
          setShowTreasureDiv(true);
        }
      }
    }
    // setTreasureChestType()
  }

  function returnToTown() {
    if (
      heroToken.x === chosenQuest.town.x + 50 &&
      heroToken.y === chosenQuest.town.y + 50
    ) {
      setShowTeleport(true);
    } else {
      heroToken.x = chosenQuest.town.x + 50;
      heroToken.y = chosenQuest.town.y + 50;
      setShowReturnToTown(false);
      setIsOnGlyph(true);
      setShowCTButton(false);
      setShowSTButton(false);
      setShowGTButton(false);
      setShowPickUpHPButton(false);
      setShowPickUpVPButton(false);
      setShowOpenVertDoorButton(false);
      setShowOpenHorzDoorButton(false);
    }
  }

  function openVertDoor() {
    if (openThisDoor[0] === "normal") {
      delete chosenQuest.tokenPlacement.doors.vertical[openThisDoor[0]][
        openThisDoor[1]
      ];
      setShowOpenVertDoorButton(false);
      disableMovment.right = false;
      disableMovment.left = false;
    } else if (openThisDoor[0] === "red") {
      if (hasRedRuneKey === true) {
        delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
          openThisDoor[1]
        ];
        setShowOpenHorzDoorButton(false);
        disableMovment.right = false;
        disableMovment.left = false;
      } else {
        alert("You do not have the correct Rune Key to open this door");
      }
    } else if (openThisDoor[0] === "yellow") {
      if (hasYellowRuneKey === true) {
        delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
          openThisDoor[1]
        ];
        setShowOpenHorzDoorButton(false);
        disableMovment.right = false;
        disableMovment.left = false;
      } else {
        alert("You do not have the correct Rune Key to open this door");
      }
    } else if (openThisDoor[0] === "blue") {
      if (hasBlueRuneKey === true) {
        delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
          openThisDoor[1]
        ];
        setShowOpenHorzDoorButton(false);
        disableMovment.right = false;
        disableMovment.left = false;
      } else {
        alert("You do not have the correct Rune Key to open this door");
      }
    }
    revealAreas();
  }

  function openHorzDoor() {
    // console.log(openThisDoor[0])
    if (openThisDoor[0] === "normal") {
      delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
        openThisDoor[1]
      ];
      setShowOpenHorzDoorButton(false);
      disableMovment.up = false;
      disableMovment.down = false;
    } else if (openThisDoor[0] === "red") {
      console.log("Red Door");
      console.log(hasRedRuneKey);
      if (hasRedRuneKey === true) {
        delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
          openThisDoor[1]
        ];
        setShowOpenHorzDoorButton(false);
        disableMovment.up = false;
        disableMovment.down = false;
      } else {
        alert("You do not have the correct Rune Key to open this door");
      }
    } else if (openThisDoor[0] === "yellow") {
      if (hasYellowRuneKey === true) {
        delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
          openThisDoor[1]
        ];
        setShowOpenHorzDoorButton(false);
        disableMovment.up = false;
        disableMovment.down = false;
      } else {
        alert("You do not have the correct Rune Key to open this door");
      }
    } else if (openThisDoor[0] === "blue") {
      if (hasBlueRuneKey === true) {
        delete chosenQuest.tokenPlacement.doors.horizontal[openThisDoor[0]][
          openThisDoor[1]
        ];
        setShowOpenHorzDoorButton(false);
        disableMovment.up = false;
        disableMovment.down = false;
      } else {
        alert("You do not have the correct Rune Key to open this door");
      }
    }
    revealAreas();
  }

  function pickUpRuneKey() {
    if (pickUpThisKey === "red") {
      setHasRedRuneKey(true);
      delete chosenQuest.tokenPlacement.rune_keys.red;
    } else if (pickUpThisKey === "yellow") {
      setHasYellowRuneKey(true);
      delete chosenQuest.tokenPlacement.rune_keys.yellow;
    } else if (pickUpThisKey === "blue") {
      setHasBlueRuneKey(true);
      delete chosenQuest.tokenPlacement.rune_keys.blue;
    }
    setShowPickUpKeyButton(false);
  }

  function pickUpGoldPile() {
    alert("YOU FOUND 100 GOLD");
    setMoney((money) => money + 100);
    delete chosenQuest.tokenPlacement.gold_pile[pickUpThisGoldPile];
    setShowPickUpGoldPileButton(false);
  }

  function jumpScreen() {
    setShowJumpScreen(true);
  }
  useEffect(() => {
    let currentPositionX = heroToken.x;
    let currentPositionY = heroToken.y;
    const keyPressMovement = (event) => {
      if (currentPositionX !== heroToken.x || currentPositionY !== heroToken.y) {
        setSpeed(speed => speed - 1);
        currentPositionX = heroToken.x;
        currentPositionY = heroToken.y;
      }
    };
    window.addEventListener("keydown", keyPressMovement);
    return () => {
      window.removeEventListener("keydown", keyPressMovement);
    };
  }, []);



  let teleportArray = [chosenQuest.tokenPlacement.start_area];
  const [port, setPort] = useState(teleportArray);
  useEffect(() => {
    let hps = chosenQuest.tokenPlacement.items.health_potions;
    let vps = chosenQuest.tokenPlacement.items.vitality_potions;
    let glyphs = chosenQuest.tokenPlacement.glyphs;
    let activeGlyphs = chosenQuest.tokenPlacement.activated_glyphs;
    let doorHorz = chosenQuest.tokenPlacement.doors.horizontal;
    let doorVert = chosenQuest.tokenPlacement.doors.vertical;

    const keyPress = (event) => {
      for (let active in activeGlyphs) {
        if (teleportArray.includes(activeGlyphs[active]) === false) {
          teleportArray.push(activeGlyphs[active]);
        }
      }
      setPort(teleportArray);
      for (let i = 0; i < teleportArray.length; i++) {
        if (
          (heroToken.x === teleportArray[i].x &&
            heroToken.y === teleportArray[i].y) ||
          (heroToken.x === chosenQuest.town.x + 50 &&
            heroToken.y === chosenQuest.town.y + 50)
        ) {
          setIsOnGlyph(true);
          break;
        } else {
          setIsOnGlyph(false);
        }
      }
      for (let hp in hps) {
        if (heroToken.x === hps[hp].x && heroToken.y === hps[hp].y) {
          setShowPickUpHPButton(true);
          setPickedUpPotion(hp);
          console.log(pickedUpPotion);
          setPotionType("health");
          break;
        } else {
          setShowPickUpHPButton(false);
        }
      }
      for (let vp in vps) {
        if (heroToken.x === vps[vp].x && heroToken.y === vps[vp].y) {
          setShowPickUpVPButton(true);
          setPickedUpPotion(vp);
          setPotionType("vitality");
          break;
        } else {
          setShowPickUpVPButton(false);
        }
      }
      for (let box in copper) {
        // let chestInRange = inRange(heroToken, copper[box])
        if (heroToken.x === copper[box].x && heroToken.y === copper[box].y) {
          setShowCTButton(true);
          setTreasureChestType("copper");
          setPickedUpChest(box);
          console.log(pickedUpChest);
          break;
        } else {
          setShowCTButton(false);
        }
      }
      for (let box in silver) {
        // let chestInRange = inRange(heroToken, silver[box])
        if (heroToken.x === silver[box].x && heroToken.y === silver[box].y) {
          setShowSTButton(true);
          setTreasureChestType("silver");
          setPickedUpChest(box);
          break;
        } else {
          setShowSTButton(false);
        }
      }
      for (let box in gold) {
        // let chestInRange = inRange(heroToken, gold[box])
        if (heroToken.x === gold[box].x && heroToken.y === gold[box].y) {
          setShowGTButton(true);
          setTreasureChestType("gold");
          setPickedUpChest(box);
          break;
        } else {
          setShowGTButton(false);
        }
      }
      for (let glyph in glyphs) {
        if (
          heroToken.x === glyphs[glyph].x &&
          heroToken.y === glyphs[glyph].y
        ) {
          setLevelConquestTokens(
            (levelConquestTokens) => levelConquestTokens + 3
          );
          chosenQuest.tokenPlacement.activated_glyphs[glyph] = glyphs[glyph];
          teleportArray.push(glyphs[glyph]);
          delete glyphs[glyph];
          setIsOnGlyph(true);
          setTimeout(() => {
            alert("Glyph Activated! you gain 3 Conquest Tokens!");
          }, 200);
        }
      }
      outerLoop: for (let doorType in doorVert) {
        for (let door in doorVert[doorType]) {
          if (
            (heroToken.x === doorVert[doorType][door].x &&
              heroToken.y === doorVert[doorType][door].y + 50) ||
            (heroToken.x === doorVert[doorType][door].x &&
              heroToken.y === doorVert[doorType][door].y + 100) ||
            (heroToken.x === doorVert[doorType][door].x + 50 &&
              heroToken.y === doorVert[doorType][door].y + 50) ||
            (heroToken.x === doorVert[doorType][door].x + 50 &&
              heroToken.y === doorVert[doorType][door].y + 100)
          ) {
            setShowOpenVertDoorButton(true);
            setOpenThisDoor([doorType, door]);
            break outerLoop;
          } else {
            setShowOpenVertDoorButton(false);
          }
        }
      }
      outerLoop: for (let doorType in doorHorz) {
        for (let door in doorHorz[doorType]) {
          if (
            (heroToken.x === doorHorz[doorType][door].x + 50 &&
              heroToken.y === doorHorz[doorType][door].y + 50) ||
            (heroToken.x === doorHorz[doorType][door].x + 100 &&
              heroToken.y === doorHorz[doorType][door].y + 50) ||
            (heroToken.x === doorHorz[doorType][door].x + 50 &&
              heroToken.y === doorHorz[doorType][door].y) ||
            (heroToken.x === doorHorz[doorType][door].x + 100 &&
              heroToken.y === doorHorz[doorType][door].y)
          ) {
            setShowOpenHorzDoorButton(true);
            setOpenThisDoor([doorType, door]);
            break outerLoop;
          } else {
            setShowOpenHorzDoorButton(false);
          }
        }
      }
      let runeKeys = chosenQuest.tokenPlacement.rune_keys;
      for (let key in runeKeys) {
        if (
          heroToken.x === runeKeys[key].x &&
          heroToken.y === runeKeys[key].y
        ) {
          setShowPickUpKeyButton(true);
          setPickUpThisKey(key);
          break;
        } else {
          setShowPickUpKeyButton(false);
        }
      }

      let goldPile = chosenQuest.tokenPlacement.gold_pile;
      for (let pile in goldPile) {
        if (
          heroToken.x === goldPile[pile].x &&
          heroToken.y === goldPile[pile].y
        ) {
          setShowPickUpGoldPileButton(true);
          setPickUpThisGoldPile(pile);
          break;
        } else {
          setShowPickUpGoldPileButton(false);
        }
      }

      let pits = chosenQuest.tokenPlacement.obstacles.pits;
      for (let pit in pits) {
        let nextToPit = inRange(heroToken, pits[pit]);
        if (nextToPit === true) {
          heroToken.w = 50;
          heroToken.h = 50;
          setShowJumpScreenButton(true);
          break;
        } else {
          setShowJumpScreenButton(false);
        }
      }
      for (let pit in pits) {
        if (heroToken.x === pits[pit].x && heroToken.y === pits[pit].y) {
          setShowJumpScreenButton(false);
          disableMovment.up = true;
          disableMovment.left = true;
          disableMovment.right = true;
          disableMovment.down = true;
          disableMovment.downRight = true;
          disableMovment.upLeft = true;
          disableMovment.upRight = true;
          disableMovment.downLeft = true;
          setCurrentHealth((currentHealth) => currentHealth - 1);
          heroToken.w = 30;
          heroToken.h = 30;
          setTimeout(() => {
            alert("You have fallen into a pit and take 1 wound");
          }, 200);
          setTimeout(() => {
            disableMovment.up = false;
            disableMovment.left = false;
            disableMovment.right = false;
            disableMovment.down = false;
            disableMovment.downRight = false;
            disableMovment.upLeft = false;
            disableMovment.upRight = false;
            disableMovment.downLeft = false;
          }, 300);
          break;
        } else {
          heroToken.w = 50;
          heroToken.h = 50;
        }
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, []);

  return (
    <div id="playerScreen">
      <div id="playerContainer">
        <div id="heroCardDiv">
          {turn === "player" ?
            <button
              style={{ height: "20px", width: "100px" }}
              onClick={() => endTurn()}
            >
              End Turn
            </button> : null}
          <br />
          <img
            className="heroCard"
            src={heroData[chosenHero].hero_card_img_path}
            alt={heroData.steelhorns.name}
          />
          <p>Name: {heroData[chosenHero].name}</p>
          <p>Gold: {money} </p>
          <p>Conquest Tokens: {levelConquestTokens}</p>
          <div>
            {playerOptions ? (
              <div>
                {showReturnToTown ? (
                  <div>
                    {showReturnToTown ? (
                      <button
                        height="100px"
                        width="100px"
                        onClick={attackCardsActive}
                      >
                        {turn === "player"
                          ? weaponCardsActive
                            ? "Stop Attack"
                            : `Attacks  ${numberOfAttacks}`
                          : null}
                      </button>
                    ) : null}

                    {weaponCardsActive ? (
                      <p>Select the Weapon you want to use, then your target</p>
                    ) : null}
                  </div>
                ) : (
                  <div>
                    <button
                      height="100px"
                      width="100px"
                      onClick={showShopItems}
                    >
                      shop
                    </button>
                  </div>
                )}
                {isOnGlyph ? (
                  <button height="100px" width="100px" onClick={returnToTown}>
                    {showReturnToTown ? "Go to Town" : "Go to Dungeon"}
                  </button>
                ) : null}
                {showPickUpHPButton || showPickUpVPButton ? (
                  <button height="100px" width="100px" onClick={pickUpPotion}>
                    Pick Up Potion
                  </button>
                ) : null}
                {showCTbutton || showSTbutton || showGTbutton ? (
                  <button
                    height="100px"
                    width="100px"
                    onClick={() => openTreasureChest(treasureChestType)}
                  >
                    Open Treasure Chest
                  </button>
                ) : null}
                {showOpenVertDoorButton ? (
                  <button
                    height="100px"
                    width="100px"
                    onClick={() => openVertDoor()}
                  >
                    Open Door
                  </button>
                ) : null}
                {showOpenHorzDoorButton ? (
                  <button
                    height="100px"
                    width="100px"
                    onClick={() => openHorzDoor()}
                  >
                    Open Door
                  </button>
                ) : null}
                {showPickUpKeyButton ? (
                  <button
                    height="100px"
                    width="100px"
                    onClick={() => pickUpRuneKey()}
                  >
                    Pick up Rune Key
                  </button>
                ) : null}
                {showPickUpGoldPileButton ? (
                  <button
                    height="100px"
                    width="100px"
                    onClick={() => pickUpGoldPile()}
                  >
                    Pick up Gold Pile
                  </button>
                ) : null}
                {showJumpScreenButton ? (
                  <button
                    height="100px"
                    width="100px"
                    onClick={() => jumpScreen()}
                  >
                    Jump
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        <div id="statBlock">
          <div id="stats">
            <h3>Stats</h3>
            <p>
              Health: {currentHealth} / {maxHealth}
            </p>
            <p>
              Fatigue: {currentFatigue} / {maxFatigue}
            </p>
            <p>Armor: {currentArmor}</p>
            <p>
              Speed: {speed}/{baseSpeed}{" "}
            </p>
          </div>
          <div id="traits">
            <h3>Traits</h3>

            <p>Melee Power Die: {meleePowerDie}</p>
            <p>Ranged Power Die: {rangedPowerDie}</p>
            <p>Magic Power Die: {magicPowerDie} </p>
            <p>Condition: {condition}</p>
          </div>
          <div id="heroAbility">
            <h3>Hero Ability:</h3>
            <p>{heroData[chosenHero].hero_ability}</p>
          </div>
        </div>

        <div id="weapons">
          {/* weapon 1 */}
          <div>
            {weaponCardsActive ? (
              <div>
                <p style={{ padding: "5px" }}>Weapon 1</p>
                {weapon1 ? (
                  <input
                    type="image"
                    id="weapon1"
                    className="card"
                    src={weapon1.img_path}
                    alt="Weapon 1"
                    onClick={() => attacking(weapon1, weapon2)}
                  ></input>
                ) : null}
              </div>
            ) : (
              <div>
                <p style={{ padding: "5px" }}>Weapon 1</p>
                {weapon1 ? (
                  <img
                    id="weapon1"
                    className="card"
                    src={weapon1.img_path}
                    alt="Weapon 1"
                  />
                ) : null}
              </div>
            )}
            <div>
              {showShop ? (
                <button
                  onClick={() => {
                    sell(weapon1);
                    weapon1.treasure !== "relic" && setWeapon1();
                  }}
                >
                  Sell
                </button>
              ) : null}
              {showBag ? (
                <button
                  onClick={() => {
                    bagArray.push(weapon1);
                    setWeapon1();
                  }}
                >
                  Store in Bag
                </button>
              ) : null}
            </div>
          </div>

          {/* weapon 2 */}
          <div>
            {weaponCardsActive ? (
              <div>
                <p style={{ padding: "5px" }}>Weapon 2</p>
                {weapon2 ? (
                  <input
                    type="image"
                    id="weapon2"
                    className="card"
                    src={weapon2.img_path}
                    alt="Weapon 2"
                    onClick={() => attacking(weapon2, weapon1)}
                  ></input>
                ) : null}
              </div>
            ) : (
              <div>
                <p style={{ padding: "5px" }}>Weapon 2</p>
                {weapon2 ? (
                  <img
                    id="weapon2"
                    className="card"
                    src={weapon2.img_path}
                    alt="Weapon 2"
                  />
                ) : null}
              </div>
            )}

            <div>
              {showShop ? (
                <button
                  onClick={() => {
                    sell(weapon2);
                    weapon2.treasure !== "relic" && setWeapon2();
                  }}
                >
                  Sell
                </button>
              ) : null}
              {showBag ? (
                <button
                  onClick={() => {
                    bagArray.push(weapon2);
                    setWeapon2();
                  }}
                >
                  Store in Bag
                </button>
              ) : null}
            </div>
          </div>

          {/* armor */}
          <div>
            <p style={{ padding: "5px" }}>Armor</p>
            {armor ? (
              <img className="card" src={armor.img_path} alt={armor.name}></img>
            ) : null}
            <div>
              {showShop ? (
                <button
                  onClick={() => {
                    sell(armor);
                    armor.treasure !== "relic" && setArmor();
                  }}
                >
                  Sell
                </button>
              ) : null}
              {showBag ? (
                <button
                  onClick={() => {
                    bagArray.push(armor);
                    setArmor();
                  }}
                >
                  Store in Bag
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div id="other">
          <div>
            <p style={{ padding: "5px" }}>Other 1</p>
            {other1 ? (
              other1.activate ? (
                <input
                  type="image"
                  className="card"
                  src={other1.img_path}
                  alt={other1.name}
                  onClick={() => console.log(other1)}
                ></input>
              ) : (
                <img
                  className="card"
                  src={other1.img_path}
                  alt={other1.name}
                ></img>
              )
            ) : null}
            <div>
              {showShop ? (
                <button
                  onClick={() => {
                    sell(other1);
                    other1.treasure !== "relic" && setOther1();
                  }}
                >
                  Sell
                </button>
              ) : null}
              {showBag ? (
                <button
                  onClick={() => {
                    bagArray.push(other1);
                    setOther1();
                  }}
                >
                  Store in Bag
                </button>
              ) : null}
            </div>
          </div>
          <div>
            <p style={{ padding: "5px" }}>Other 2</p>
            {other2 ? (
              other2.activate ? (
                <input
                  type="image"
                  className="card"
                  src={other2.img_path}
                  alt={other2.name}
                  onClick={() => console.log(other2)}
                ></input>
              ) : (
                <img
                  className="card"
                  src={other2.img_path}
                  alt={other2.name}
                ></img>
              )
            ) : null}

            <div>
              {showShop ? (
                <button
                  onClick={() => {
                    sell(other2);
                    other1.treasure !== "relic" && setOther1();
                  }}
                >
                  Sell
                </button>
              ) : null}
              {showBag ? (
                <button
                  onClick={() => {
                    bagArray.push(other2);
                    setOther2();
                  }}
                >
                  Store in Bag
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div id="bag">
          <div>
            <p style={{ padding: "5px" }}>Potions:</p>
            <input
              type="image"
              className="card"
              src={"images/health_potion_card.png"}
              alt="Potions"
              onClick={turnOnPotionScreen}
            ></input>
          </div>
          <div>
            <p style={{ padding: "5px" }}>Bag:</p>
            <input
              type="image"
              className="card"
              src={"images/bag_card.png"}
              alt="Item Bag"
              onClick={turnOnBagScreen}
            ></input>
          </div>
        </div>

        <div id="skills">
          <div>
            <p style={{ padding: "5px" }}>Skills 1</p>
            <img
              className="card"
              src={"images/items/shop/leather_armor.png"}
              alt="g"
            ></img>
          </div>
          <div>
            <p style={{ padding: "5px" }}>Skills 2</p>
            <img
              className="card"
              src={"images/items/shop/leather_armor.png"}
              alt="g"
            ></img>
          </div>
          <div>
            <p style={{ padding: "5px" }}>Skills 3</p>
            <img
              className="card"
              src={"images/items/shop/leather_armor.png"}
              alt="g"
            ></img>
          </div>
        </div>
      </div>
      {showShop ? (
        <Shop
          chosenHero={chosenHero}
          weapon1={weapon1}
          setWeapon1={setWeapon1}
          weapon2={weapon2}
          setWeapon2={setWeapon2}
          money={money}
          setMoney={setMoney}
          showShopItems={showShopItems}
          armor={armor}
          setArmor={setArmor}
          equipRunes={equipRunes}
          setEquipRunes={setEquipRunes}
          other1={other1}
          setOther1={setOther1}
          other2={other2}
          setOther2={setOther2}
          magicPowerDie={magicPowerDie}
          setMagicPowerDie={setMagicPowerDie}
          meleePowerDie={meleePowerDie}
          setMeleePowerDie={setMeleePowerDie}
          rangedPowerDie={rangedPowerDie}
          setRangedPowerDie={setRangedPowerDie}
          foundCopperTreasure={foundCopperTreasure}
          foundSilverTreasure={foundSilverTreasure}
          foundGoldTreasure={foundGoldTreasure}
          showTreasureDiv={showTreasureDiv}
          setShowTreasureDiv={setShowTreasureDiv}
          randomTreasure={randomTreasure}
          setRandomTreasure={setRandomTreasure}
        />
      ) : null}

      {showDice ? (
        <DiceRoll
          chosenHero={chosenHero}
          showDiceRoll={showDiceRoll}
          selectedTarget={selectedTarget}
          chosenQuest={chosenQuest}
          weaponCardsActive={weaponCardsActive}
          attack={attack}
          attackOn={attackOn}
          attackCardsActive={attackCardsActive}
          attackActive={attackActive}
          selectedWeapon={selectedWeapon}
          offHand={offHand}
          meleePowerDie={meleePowerDie}
          rangedPowerDie={rangedPowerDie}
          magicPowerDie={magicPowerDie}
          heroToken={heroToken}
          correctedPosition={correctedPosition}
          other1={other1}
          other2={other2}
          attackType={attackType}
          threatTokens={threatTokens}
          setThreatTokens={setThreatTokens}
          numberOfAttacks={numberOfAttacks}
          setNumberOfAttacks={setNumberOfAttacks}
        />
      ) : null}

      {showPotions ? (
        <Potions
          showPotions={showPotions}
          setShowPotions={setShowPotions}
          maxHealth={maxHealth}
          currentHealth={currentHealth}
          setCurrentHealth={setCurrentHealth}
          maxFatigue={maxFatigue}
          currentFatigue={currentFatigue}
          setCurrentFatigue={setCurrentFatigue}
          showShop={showShop}
          sell={sell}
        />
      ) : null}

      {showBag ? (
        <Bag
          showBag={showBag}
          setShowBag={setShowBag}
          showShop={showShop}
          sell={sell}
          equipRunes={equipRunes}
          weapon1={weapon1}
          setWeapon1={setWeapon1}
          weapon2={weapon2}
          setWeapon2={setWeapon2}
          armor={armor}
          setArmor={setArmor}
          other1={other1}
          setOther1={setOther1}
          other2={other2}
          setOther2={setOther2}
          setEquipRunes={setEquipRunes}
          money={money}
          setMoney={setMoney}
          setRandomTreasure={setRandomTreasure}
          setShowTreasureDiv={setShowTreasureDiv}
          hasRedRuneKey={hasRedRuneKey}
          hasYellowRuneKey={hasYellowRuneKey}
          hasBlueRuneKey={hasBlueRuneKey}
        />
      ) : null}

      {showTreasureDiv ? (
        <RandomTreasure
          showTreasureDiv={showTreasureDiv}
          setShowTreasureDiv={setShowTreasureDiv}
          randomTreasure={randomTreasure}
          setRandomTreasure={setRandomTreasure}
          potionsArray={potionsArray}
          money={money}
          setMoney={setMoney}
          copperTreasureArray={copperTreasureArray}
          silverTreasureArray={silverTreasureArray}
          goldTreasureArray={goldTreasureArray}
        />
      ) : null}
      {showTeleport ? (
        <Teleport
          port={port}
          chosenQuest={chosenQuest}
          herotoken={heroToken}
          setShowTeleport={setShowTeleport}
          setShowReturnToTown={setShowReturnToTown}
        />
      ) : null}
      {showJumpScreen ? (
        <JumpScreen
          heroToken={heroToken}
          setShowJumpScreen={setShowJumpScreen}
        />
      ) : null}
      <SkillFunctions />
      <Conditions />
      {turn === "overlord" ? (
        <Overlord
          chosenHero={chosenHero}
          chosenQuest={chosenQuest}
          turn={turn}
          setTurn={setTurn}
          currentArmor={currentArmor}
          currentHealth={currentHealth}
          setCurrentHealth={setCurrentHealth}
        />
      ) : null}
      {showRunBattleAdvance ?
        <RunBattleadvance
          numberOfAttacks={numberOfAttacks}
          setNumberOfAttacks={setNumberOfAttacks}
          baseSpeed={baseSpeed}
          setSpeed={setSpeed}
          speed={speed}
          showRunBattleAdvance={showRunBattleAdvance}
          setShowRunBattleAdvance={setShowRunBattleAdvance} />
        : null}

    </div>
  );
}

export default Player;

// "homepage": "http://Kmac1027.github.io/descent-Journeys-in-the-Dark",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"
