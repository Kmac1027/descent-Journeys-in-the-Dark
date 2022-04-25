import { useState, useEffect } from "react";


function HowToPlay({ showHowToPlay, setShowHowToPlay }) {

    function closeHowTOPlayScreen() {
        window.scrollBy(0, -700);
        setShowHowToPlay(false);
    }


    return (
        <div style={{ display: 'flex', justifycontent: 'center' }}>
            <div style={{ width: '25%' }}></div>
            <div style={{ width: '50%' }}>

                Thank you for trying out this Descent: Journeys in the dark 1st edition app
                <br />
                <br />
                <button onClick={closeHowTOPlayScreen}>Close Rules</button>
                <br />
                <h2>PLEASE NOTE</h2>
                <p>For those familiar with Descent: Journeys in the dark 1st edition, you will notice that not all features have been implemented at this time, Skills and Hero Orders are absent, as well as most Hero Skills being changed. The Ready Action is not an option at this time. Transformations and Conditions are also not implemented. Additional Buffs have been granted to the Player due to this being a single player game at this time. The missing game features are planned to be added at another time after the Beta Testing of this stripped down version has ended.</p>
                <br />
                <br />
                <h2> Introduction</h2>
                <p>
                    In Descent: Journeys in the Dark, heroic adventurers delve into the darkness that lies beneath the surface of the earth. There, they fight powerful monsters, recover ancient magics, and search for mighty relics to help them defeat dark powers and evil masters.
                </p>
                <p>
                    In the game, you explore the corridors, chambers, and caverns of the dungeon, gathering equipment and treasure, battling monsters, and working to complete the quest. The overlord marshals and deploys his deadly monsters and treacherous traps to slay the hero before they can finish their quest.
                </p>


                <h2>Starting the Game</h2>
                <p>click the "Play Game" button and choose your hero, then click the button that says "Start game as (Chosen Hero)" and you will start the game</p>
                <p>You start in the town and will have to purchase a weapon of some kind before you can enter the dungeon. you can do this by clicking on the Shop button under the Hero Sheet, this option is available whenever you are in town.</p>
                <p>When you have purchased your weapon, and any other items you would like to purchase, click the button under the Hero Sheet that says "Go To Dungeon" and you will be given a choice of which glyph to enter at... however at the start of the game there will only be one option, other glyphs must be found through out the dungeon in order to teleport back and forth from the town to the dungeon.</p>
                <img src="images/how_to_play/HeroSheetDiagram.png" alt="Hero Sheet Diagram"></img>
                <h3>Actions</h3>
                <p>On the start of the your turn you will have to chose an action to take, either Attack, Run, or Advance</p>
                <p><b>1. Attack Action</b> - Make 3 attacks but you wont get any movement</p>
                <p><b>2. Run Action</b>- you will get tripple your movement speed, but no attacks</p>
                <p><b>3.Advance Action</b> - Make 2 attacks and be able to move your base movement</p>
                <p>After you have completed the Action you chose for your turn, click the end turn button on Top of the Hero Sheet. You may also click this at any time that you would like to end your turn. the Overlord will then move his monsters and attempt to attack you or play traps on you and overall stop you from completing your quest. once the Overlord is done it will be your turn again.</p>
                <br />
                <h3>Attacking</h3>
                <p>To attack, click the attack button underneath the Hero Sheet, it will tell you how many attacks you have left to make. then select the weapon you wish to use and then select the target of the attack, if the target is a valid taget then a green circle will appear over them and the monster info will appear in the dice rollign screen. Simply click on the first dice to roll it, as long as it is not a miss, all the other dice will become available to roll.</p>
                <p><b>Melee Attacks</b> can only be performed when you are adjacent to the monster you wish to attack, unless you have an ability that allows a melee attack to be perfromed from further away, such as the <b>REACH</b> ability</p>
                <p><b>Ranged Attacks</b> are determined by counting the number of spaces between you and the monster you targeted. Your range is determined by the attack roll. If the total rolled range is lower than the required range needed to hit the target, the attack fails and no damage is done unless the player can increase the range to the minimum required range by spending surges, power enhamcements, of fatigue</p>
                <p><b>Magic Attacks</b> are determined the same as ranged attacks, but some monsters may be more effected by magic or more resistant to it</p>

                <h5>Weilding Two Weapons</h5>
                <p>If a hero has two one-handed Melee weapons equipped at once, he may gain the benefits of an Off-Hand Bonus. The weapon the hero does not use to attack adds its off-hand bonus to attacks with the other weapon.
                    <br />
                    Example: A hero has a sword and a dagger equipped and attacks with the sword. The hero’s attack gains the dagger’s offhand bonus, which is one free surge. The hero makes his attack with the sword normally and adds the free surge from the offhand bonus to the result.</p>

                <h3>Item Cards</h3>
                <img src="images/how_to_play/ItemCards.png" alt="Hero Sheet Diagram"></img>
                <p>Item cards are either purchased while in town or found in one of the treasure chests in the dungeon. Each item card represents a piece of equipment that will help the hero on his quest.
                </p>
                <p>
                    <b>Shop and Relic</b> cards are double-sided, while copper,
                    silver, and gold treasure cards have borders of the appropriate color on their backs. Relic cards have a blue text box to differentiate them from other item cards.
                </p>
                <img src="images/how_to_play/RelicCards.png" alt="Hero Sheet Diagram"></img>
                <p>
                    <b>Item Traits:</b> These bolded words tell what sort of an item the card represents (such as Armor or a Shield). If an item is a Weapon, a smaller trait underneath describes what sort of attacks it makes (Melee, Ranged, or Magic).
                    Special Abilities: Any special abilities the item possesses are described in its card
                    text. Special abilities written "lightning bolt symbols" are shorthand for “Spend the number of surges shown to add the listed ability to this attack. You may activate this ability multiple times, paying its cost each time.”
                </p>
                <p>
                    <b>Item Cost:</b> Items available in the shop have their cost in coins listed in the lower left corner of the card.
                    Hand Icons: If an item card has one or two hand icons, they are printed in the lower left corner of the card. Normally, Weapons and Shields will have hand icons printed on their item cards.
                </p>
                <p>Some Weapons may have the <b>BLAST</b> ability, which is an ability that can hit several monsters at once.</p>
                <img src='images/how_to_play/BlastExample.png' alt='Treasure'></img>

                <h3>Treasure</h3>
                <img src='images/how_to_play/CardDiagrams.png' alt='Treasure'></img>
                <p>There are 5 tiers of treasure, 1. Shop items, 2. Copper Treasure, 3. Silver Treasure, 4. Gold Treasure, and 5. Relics. Once you open a Treasure checst of copper, silver, or gold in the dungeon, you will then be able to purchase a random treasure of that type from the shop, with the exception of Relics, which cannot be purchased or sold at the shop</p>
                <p>You may also find piles of Gold in the dungeon. When you stand on the pile of gold the option to pick it up will become available under the Hero Sheet.</p>

                <h3>Dice</h3>
                <img src='images/how_to_play/DieFaceDiagram.png' alt='Dice'></img>
                <p>There are Three main dice, a Melee Die (red), and Ranged Die (blue) and a Magic Die (white). when making an attack you will use the respective die depending on what type of attck it is, Melee, Ranged, or Magic.</p>
                <p>There are also Yellow and Green Dice that add to your Attack Damage, Range, or Surges. Damage is represented on the Die by Hearts, Range are Numbers, and Surges are Lightning Bolts</p>
                <p><b>Power Dice</b> (black) are normally added to rolls because of hero traits or abilities. A hero can purchase additional Power Die at the store for any ability, Melee, Subterfuge, or Magic. However, an attack may never have more than five power dice added to it, no matter the source. Power die simply add enhancments to your roll, usually by adding surges or giving you a choice of adding range or damage.
                </p>

                <h3>Monsters</h3>
                <img src='images/how_to_play/MonsterCardDiagram.png' alt='Dice'></img>
                <p>Monsters are the number one thing the Overlord uses to stop you from completing your quest, as you go through the dungeon you will have to fight or find a way around all the monsters within the dungeon. When you attack a monster its Reference card and statistics are added into the Dice Rolling Screen. When you defeat a monster you gain Gold equal to its value. usually normal Monsters will give 50 gold and Master Monsters will give 100</p>

                <p><b>Master Monsters</b> are tougher versions of the normal monsters found in the dungeon. They are represented in the game by the red border around their token, and their stats are listed in the red area on the monster reference cards. In addition to having enhanced powers.</p>
                <h5>NOTE: Number of Players at this time is only 1</h5>

                <h3>Movement</h3>
                <p>Simply use the arrow keys or W A S D for movement, in addition Q E Z C may be used for diagonal movement</p>
                <p>You may move a number of spaces based on the amount of speed you have</p>
                <p>When you are in the same square as a treasure, potion,item, rune key, or gold, the option to pick them up becomes available under the Hero Sheet</p>
                <p>If you are standing next to a door the option to open it will appear under the Hero Sheet, But do note that for Rune Locked Doors, doors that are RED, BLUE, or Yellow, you will need to correct key to open it.</p>
                <img src='images/how_to_play/movementExample.png' alt='Dice'></img>

                <p>Glyphs of transport are an example of the mighty magics that the heroes are attempting to recover and reactivate. Glyphs allow a hero to move between the glyph and the town. However, glyphs must first be activated before they can be used, An activated glyph will be white, while an unactivated glyph is red. Simply walk over a glyph to activate it. When a glyph is activated the Hero will receive <b>3 Conquest Tokens</b>. To use a glyph simply be standing in the square and the option to move back to town will appear under the Hero Sheet.</p>

                <h3>Hero's Pack and Potion Pack</h3>
                <p>A hero can carry up to three unequipped items in their pack. If you receive an item and hjave no space for it on your character sheet, you will be asked if you would like to stash the item in your pack. if your character sheet and pack are full, you cannot receive any new items, you must open your pack and discard one or more items, or return to town and sell them in the shop.. A hero cannot use an item in their pack until they equip it. In addition to items, a hero can carry any amount of money in his pack. There is no limit on the number of coins a hero may carry.</p>
                <p>Similar to the Hero's Pack, each hero has a <b>Potion Pack</b> that can carry up to three potions. if the potion pack is full, you may also carry potions in your Heros Pack taking up one of the three spaces avalable.</p>

                <h3>Fatigue</h3>
                <p>Fatigue represents extra strain your Hero can take, you may spend a number of fatigue to receive the same number of movement points, or you may spend your fatigue during an attack to add range or damage to your roll, but be warned that once your fatigue is gone it cannot be replaced unless you use a <b>Fatigue Potion</b></p>

                <h3>Wounds</h3>
                <p>Your Wounds, or health, is a representation of how much life you have, the most common way to replenish your health is with a <b>Health Potion</b> which restores three wounds you've taken</p>



                <h3>Conquest Tokens</h3>
                <p>
                    The hero gains and lose conquest tokens as they make their way through the dungeon. As long as they still have at least one conquest token, the game continues. If the hero ever runs out of conquest tokens, the game immediately ends and the overlord wins. Conquest tokens most commonly gained by activating ancient glyphs of teleportation in the Dungeon and lost when a hero dies. Normally, if the hero completes a specific task (such as killing a certain monster) before running out of conquest tokens, they win the game.
                </p>


                <br />
                <button onClick={closeHowTOPlayScreen}>Close Rules</button>
            </div >
            <div style={{ width: '25%' }}></div>
        </div >
    );
}

export default HowToPlay;