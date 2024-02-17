## Instructions
Complete each iteration before reading the next one. 2. It's recommended you perform this kata with a pairing partner and while writing tests.

1. Iteration One:
    - All Characters, when created, have:
        * Health, starting at 1000 
        * Level, starting at 1 
        * May be Alive or Dead, starting Alive (Alive may be a true/false) 
    - Characters can Deal Damage to Characters.
        * Damage is subtracted from Health 
        * When damage received exceeds current Health, Health becomes 0 and the character dies
    - A Character can Heal a Character.
        * Dead characters cannot be healed
        * Healing cannot raise health above 1000

2. Iteration Two:
    - A Character cannot Deal Damage to itself.
    - A Character can only Heal itself. 
    - When dealing damage:
        * If the target is 5 or more Levels above the attacker, Damage is reduced by 50% 
        * If the target is 5 or more levels below the attacker, Damage is increased by 50%

3. Iteration Three:
    - Characters have an attack Max Range. 
    - Melee fighters have a range of 2 meters. 
    - Ranged fighters have a range of 20 meters. 
    - Characters must be in range to deal damage to a target.

```
Retrospective:
    - Are you keeping up with the requirements? Has any iteration been a big challenge?
    - Do you feel good about your design? Is it scalable and easily adapted to new requirements? 
    - Is everything tested? Are you confident in your code?
```

5. Iteration Four:
    - Characters may belong to one or more Factions.
        * Newly created Characters belong to no Faction. 
    - A Character may Join or Leave one or more Factions.
    - Players belonging to the same Faction are considered Allies.
    - Allies cannot Deal Damage to one another.
    - Allies can Heal one another.

6. Iteration Five:
    - Characters can damage non-character things (props).
        * Anything that has Health may be a target
        * These things cannot be Healed and they do not Deal Damage
        * These things do not belong to Factions; they are neutral
        * When reduced to 0 Health, things are Destroyed
        * As an example, you may create a Tree with 2000 Health

```
Retrospective 
    - What problems did you encounter? 
    - What have you learned? Any new technique or pattern? 
    - Share your design with others, and get feedback on different approaches.
```