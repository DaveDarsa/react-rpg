# React RPG Game

A dice rolling RPG game written in React.

## Game settings

- game has 2 players, each player has a 6 (or X) sided die, and 20 (or Y) of life points (HP)
- at each turn of the game, 1 player attacks and the other defends
- the attacker rolls the die to define the attack amount
- the defender rolls the die to define the defense amount
- the damage is taken by the defender and is defined as "attack - defense" (if positive)
- the next turn the roles of attacker and defender are switched
- game runs until one of the players is dead (HP = 0)
- game displays the winner

## Basic overview

I decided to use the Context API for storing state about the game config and player config(name,hp)
For styling I used a bit of styled-components.
For testing I used @testing-library

The game starts with a config page that lets the user enter player1 and player2 names along with maximum HP.
We move onto the gamepage which has a HUD, the gamescreen component, and winner component(displays when there's a winner)

**The hud**
Hud displays "hp bars" with their respective names and gets updated after each round ends.

**Gamescreen**
The gamescreen has a Game component(where the actual gameplay happens) and a RoundSummary component(which shows the damage done - if any, at the end of each round)

**Game component**
The Game component displays the currentPlayer(whose turn it is), and it's current turnType(attack,defense). It also keeps track of the attacking players damage and the defending players defense. After both players roll, the damage is calculated in the RoundSummary component and displayed on the screen.
At the end of each turn the attacking and defending player change roles and turns.
At the end of each round, the previous defender becomes the attacker and vice versa.

**winner**
After each round (when both players have played their turns), along with the damage calculation, the winner component checks if the defending player's hp has dropped below or equal to zero, and announcing the winner accordingly.
