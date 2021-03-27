const characters = [
  {
    name: "soda_junkie",
    stats: ["hp=10", "atk=1", "mp=5", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: [],
    masteryRewards: [
      { name: "level_4", stats: ["hp=2"] },
      { name: "level_9", stats: ["evade=1"] },
      { name: "level_15", stats: ["evade=3"] },
      { name: "level_18", stats: ["evade=1"] },
      { name: "level_19", stats: ["evade=1"] },
      { name: "level_24", stats: ["evade=2"] },
      { name: "level_25", skills: ["burp"] },
      { name: "level_50", relics: ["soda_junkie"] }
    ]
  },
  {
    name: "carpenter",
    stats: ["hp=13", "atk=1", "mp=10", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["swift_metal", "defend"],
    masteryRewards: [
      { name: "level_15", stats: ["atk_boost=3"] },
      { name: "level_18", stats: ["atk=2"] },
      { name: "level_19", stats: ["atk=2"] },
      { name: "level_23", stats: ["mp=5"] },
      { name: "level_25", skills: ["sharpen"] },
      { name: "level_50", relics: ["carpenter"] }
    ]
  },
  {
    name: "miner",
    stats: ["hp=11", "atk=2", "mp=20", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["pickaxe", "prospector", "defend"],
    masteryRewards: [
      { name: "level_9", stats: ["ore_find=2"] },
      { name: "level_15", stats: ["ore_find=5"] },
      { name: "level_18", stats: ["ore_find=2"] },
      { name: "level_19", stats: ["ore_find=2"] },
      { name: "level_24", stats: ["ore_find=2"] },
      { name: "level_25", skills: ["transmute"] },
      { name: "level_50", relics: ["miner"] }
    ]
  },
  { 
    name: "nurse",
    stats: ["hp=13", "atk=1", "mp=30", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["first_aid", "biohazard", "defend"],
    masteryRewards: [
      { name: "level_9", stats: ["status_resist=2"] },
      { name: "level_15", stats: ["status_resist=5"] },
      { name: "level_18", stats: ["status_resist=2"] },
      { name: "level_19", stats: ["status_resist=2"] },
      { name: "level_24", stats: ["status_resist=2"] },
      { name: "level_25", skills: ["group_heal"] },
      { name: "level_50", relics: ["nurse"] }
    ]
  },
  {
    name: "psychic",
    stats: ["hp=15", "atk=3", "mp=30", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["torment", "magic_master", "defend"],
    masteryRewards: [
      { name: "level_9", stats: ["mp_regen=2"] },
      { name: "level_15", stats: ["mp_regen=5"] },
      { name: "level_17", stats: ["magic_boost=3"] },
      { name: "level_18", stats: ["mp_regen=2"] },
      { name: "level_19", stats: ["magic_boost=3"] },
      { name: "level_24", stats: ["magic_boost=3"] },
      { name: "level_25", skills: ["recharge"] },
      { name: "level_50", relics: ["psychic"] }
    ]
  },
  {
    name: "thief",
    stats: ["hp=17", "atk=2", "mp=20", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["pilfer", "greedy", "defend"],
    masteryRewards: [
      { name: "level_9", stats: ["crit_chance=1"] },
      { name: "level_15", stats: ["crit_chance=3"] },
      { name: "level_18", stats: ["evade=3"] },
      { name: "level_19", stats: ["crit_chance=1"] },
      { name: "level_24", stats: ["evade=3"] },
      { name: "level_25", skills: ["ransack"] },
      { name: "level_50", relics: ["thief"] }
    ]
  },
  {
    name: "huntress",
    stats: ["hp=17", "atk=2", "mp=5", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["soul_bond", "leader", "defend"],
    masteryRewards: [
      { name: "level_9", stats: ["dmg_reflection=2"] },
      { name: "level_15", stats: ["dmg_reflection=5"] },
      { name: "level_18", stats: ["dmg_reflection=3"] },
      { name: "level_19", stats: ["dmg_reflection=3"] },
      { name: "level_24", stats: ["dmg_reflection=3"] },
      { name: "level_25", skills: ["mark"] },
      { name: "level_50", relics: ["huntress"] }
    ]
  },
  {
    name: "darkmage",
    stats: ["hp=19", "atk=3", "mp=30", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["noxin", "magic_master", "defend"],
    masteryRewards: [
      { name: "level_25", skills: ["curse"] },
      { name: "level_50", relics: ["darkmage"] }
    ]
  },
  {
    name: "dual_wield",
    stats: ["hp=20", "atk=5", "mp=0", "spd=100"],
    slots: ["weapon_1", "weapon_2", "armor_1", "accessory_1"],
    skills: ["dual_strike", "dual_wield", "magic_inept"],
    masteryRewards: [
      { name: "level_4", stats: ["atk=2"] },
      { name: "level_8", stats: ["atk=2"] },
      { name: "level_13", stats: ["atk=2"] },
      { name: "level_17", stats: ["atk=2"] },
      { name: "level_25", skills: ["stun"] },
      { name: "level_29", stats: ["atk=5"] },
      { name: "level_50", relics: ["dual_wield"] }
    ]
  },
  {
    name: "dark_lord",
    isUnique: true,
    stats: ["hp=50", "atk=20", "mp=30", "spd=100"],
    slots: ["weapon_1=aphotic_blade", "accessory_1", "accessory_2", "accessory_3"],
    skills: ["shadow_slicer_2", "dark_momentum", "defend"],
    masteryRewards: [
      { name: "level_5", stats: ["atk=1"] },
      { name: "level_10" },
      { name: "level_25", skills: ["dark_savior"] },
      { name: "level_50", relics: ["dark_lord"] }
    ]
  },
  { 
    name: "chef",
    isUnique: true,
    stats: ["hp=25", "atk=0", "mp=0", "spd=150"],
    slots: ["weapon_1=iron_skillet", "armor_1", "accessory_1"],
    skills: ["cook", "party_protection", "independence", "magic_inept"],
    masteryRewards: [
      { name: "level_2", stats: ["gold_find=1"] },
      { name: "level_3", stats: ["item_find=1"] },
      { name: "level_4", meals: ["meal_3"] },
      { name: "level_6", stats: ["chance_for_dungeon_keys=1"] },
      { name: "level_7", stats: ["mastery_xp_boost=1"] },
      { name: "level_8", stats: ["atk=2"] },
      { name: "level_9", meals: ["meal_4"] },
      { name: "level_11", stats: ["gold_find=2"] },
      { name: "level_13", stats: ["atk=2"] },
      { name: "level_14", stats: ["item_find=2"] },
      { name: "level_15", meals: ["meal_5"] },
      { name: "level_16", stats: ["mastery_xp_boost=1"] },
      { name: "level_17", stats: ["chance_for_dungeon_keys=1"] },
      { name: "level_20", meals: ["meal_6"] },
      { name: "level_21", stats: ["gold_find=2"] },
      { name: "level_25", meals: ["meal_7"] },
      { name: "level_26", stats: ["gold_find=2"] },
      { name: "level_27", stats: ["item_find=2"] },
      { name: "level_28", stats: ["ore_find=2"] },
      { name: "level_29", stats: ["mastery_xp_boost=2"] },
      { name: "level_30", meals: ["meal_8"] },
      { name: "level_31", stats: ["gold_find=3"] },
      { name: "level_33", stats: ["ore_find=2"] },
      { name: "level_34", stats: ["essence_find=3"] },
      { name: "level_35", meals: ["meal_9"] },
      { name: "level_36", stats: ["gold_find=3"] },
      { name: "level_37", stats: ["essence_find=3"] },
      { name: "level_40", meals: ["meal_10"] },
      { name: "level_41", stats: ["gold_find=5"] },
      { name: "level_45", meals: ["meal_11"] },
      { name: "level_46", stats: ["gold_find=5"] },
      { name: "level_47", stats: ["mastery_xp_boost=3"] },
      { name: "level_48", stats: ["essence_find=5"] },
      { name: "level_49", stats: ["item_find=5"] },
      { name: "level_50", stats: ["chef"] }
    ]
  },
  {
    name: "wizard",
    isUnique: true,
    stats: ["hp=25", "atk=5", "mp=35", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["eviscerate", "precognition", "magic_master", "defend"],
    masteryRewards: [
      { name: "level_15", stats: ["evade=1"] },
      { name: "level_19", stats: ["evade=1"] },
      { name: "level_25", skills: ["foretell"] },
      { name: "level_44", stats: ["evade=2"] },
      { name: "level_45", stats: ["chance_for_dungeon_keys=5"] },
      { name: "level_50", relics: ["wizard"] }
    ]
  },
  {
    name: "blacksmith",
    isUnique: true,
    stats: ["hp=40", "atk=6", "mp=35", "spd=100"],
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["hardy", "taunt", "defend"],
    masteryRewards: [
      { name: "level_25", skills: ["revenge"] },
      { name: "level_50", relics: ["blacksmith"] }
    ]
  }
];