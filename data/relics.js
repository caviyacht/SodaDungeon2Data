const relics = [
  {
    name: "hp",
    type: "stat",
    relicId: "1", 
    collectionId: "1",
    stats: ["hp=5"]
  },
  {
    name: "atk",
    type: "stat",
    relicId: "2", 
    collectionId: "1", 
    stats: ["atk=2"]
  },
  {
    name: "mp",
    type: "stat",
    relicId: "3", 
    collectionId: "1", 
    stats: ["mp=3"]
  },
  {
    name: "gold_find",
    type: "stat",
    scope: "party",
    relicId: "7", 
    collectionId: "1", 
    stats: ["gold_find=1"]
  },
  {
    name: "crit_chance",
    type: "stat",
    relicId: "8", 
    collectionId: "1", 
    maxLevel: 250, 
    stats: ["crit_chance=0.1"]
  },
  { 
    name: "crit_bonus",
    type: "stat",
    relicId: "11", 
    collectionId: "1", 
    maxLevel: 250, 
    stats: ["crit_bonus=0.5"]
  },
  { 
    name: "essence_find",
    type: "stat",
    scope: "party",
    relicId: "12", 
    collectionId: "1", 
    maxLevel: 100, 
    stats: ["essence_find=0.2"]
  },
  { 
    name: "hp_regen",
    type: "stat",
    relicId: "13", 
    collectionId: "1", 
    maxLevel: 100, 
    stats: ["hp_regen=1"]
  },
  { 
    name: "phys_boost",
    type: "stat",
    relicId: "14", 
    collectionId: "1", 
    stats: ["phys_boost=0.25"]
  },
  { 
    name: "magic_boost",
    type: "stat",
    relicId: "15", 
    collectionId: "1", 
    stats: ["magic_boost=0.2"]
  },
  { 
    name: "chance_for_dungeon_keys",
    type: "stat",
    scope: "party",
    relicId: "4", 
    collectionId: "2", 
    maxLevel: 300, 
    stats: ["chance_for_dungeon_keys=0.2"]
  },
  { 
    name: "mastery_xp_boost",
    type: "stat",
    scope: "party",
    relicId: "5", 
    collectionId: "2", 
    maxLevel: 100, 
    stats: ["mastery_xp_boost=0.1"]
  },
  { 
    name: "ore_find",
    type: "stat",
    scope: "party",
    relicId: "6", 
    collectionId: "2", 
    maxLevel: 100, 
    stats: ["ore_find=0.1"]
  },
  { 
    name: "status_resist",
    type: "stat",
    relicId: "9", 
    collectionId: "2", 
    maxLevel: 52, 
    stats: ["status_resist=0.25"]
  },
  { 
    name: "dmg_reflection",
    type: "stat",
    relicId: "10", 
    collectionId: "2", 
    maxLevel: 100, 
    stats: ["dmg_reflection=0.2"]
  },
  { 
    name: "soda_junkie",
    type: "class",
    relicId: "100", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "carpenter",
    type: "class",
    relicId: "101", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "miner",
    type: "class",
    relicId: "102", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "nurse",
    type: "class",
    relicId: "103", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "psychic",
    type: "class",
    relicId: "104", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "thief",
    type: "class",
    relicId: "105", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "huntress",
    type: "class",
    relicId: "106", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "darkmage",
    type: "class",
    relicId: "107", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "dual_wield",
    type: "class",
    relicId: "108", 
    collectionId: "3", 
    stats: ["hp=2", "mp=0", "atk=2"]
  },
  { 
    name: "dark_lord",
    type: "class",
    relicId: "109", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  { 
    name: "chef",
    type: "class",
    relicId: "110", 
    collectionId: "3", 
    stats: ["hp=2", "mp=0", "atk=2"]
  },
  { 
    name: "wizard",
    type: "class",
    relicId: "111", 
    collectionId: "3", 
    stats: ["hp=2", "mp=2", "atk=2"]
  },
  {
    name: "blacksmith",
    type: "class",
    relicId: "112",
    collectionId: "3",
    stats: ["hp=2", "mp=2", "atk=2"]
  }
];