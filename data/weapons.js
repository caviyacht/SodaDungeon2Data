const weapons = [
  {
    name: "bottle",
    itemId: "1",
    stats: ["atk=1"]
  },
  {
    name: "wooden_sword",
    itemId: "3",
    stats: ["atk=2", "crit_chance=1", "crit_bonus=10"]
  },
  {
    name: "iron_sword",
    itemId: "12",
    stats: ["atk=7", "crit_chance=30", "crit_bonus=35"]
  },
  {
    name: "rusty_sword",
    itemId: "57",
    stats: ["atk=3", "crit_chance=10", "crit_bonus=75"]
  },
  {
    name: "bone_club",
    itemId: "64",
    stats: ["atk=6"]
  },
  {
    name: "mace",
    itemId: "65",
    stats: ["atk=4", "crit_chance=15", "crit_bonus=50"]
  },
  {
    name: "meaty_club",
    itemId: "88",
    stats: ["atk=8", "hp_regen=2"]
  },
  {
    name: "butcher_knife",
    itemId: "89",
    stats: ["atk=4", "crit_chance=40", "crit_bonus=70"]
  },
  {
    name: "iron_fist",
    itemId: "90",
    stats: ["atk=9"]
  },
  {
    name: "mini_glove",
    itemId: "91",
    stats: ["atk=5", "crit_chance=30", "crit_bonus=100"]
  },
  {
    name: "aphotic_blade",
    itemId: "99",
    stats: ["atk=5", "crit_chance=40", "crit_bonus=50"],
    isUnique: true
  },
  {
    name: "frying_pan",
    itemId: "102",
    stats: ["atk=10", "chance_for_food=25", "chance_to_burn=10"]
  },
  {
    name: "saber",
    itemId: "103",
    stats: ["atk=8", "crit_chance=30", "crit_bonus=50", "evade=20"]
  },
  {
    name: "knuckle_blade",
    itemId: "104",
    stats: ["atk=10", "crit_chance=20", "crit_bonus=50"]
  },
  {
    name: "infected_edge",
    itemId: "106",
    stats: ["atk=12", "crit_chance=20", "crit_bonus=40", "chance_to_psn=100"]
  },
  {
    name: "assassins_dagger",
    itemId: "110",
    stats: ["atk=7", "crit_chance=30", "crit_bonus=125"]
  },
  {
    name: "skull_blade",
    itemId: "120",
    stats: ["atk=15", "crit_chance=25", "crit_bonus=75", "dmg_reduction=10"],
    skills: ["skull_bash"]
  },
  {
    name: "blade_of_virtue",
    itemId: "123",
    stats: ["atk=25", "crit_chance=15", "crit_bonus=70", "dmg_reflection=15"]
  },
  {
    name: "mop",
    itemId: "131",
    stats: ["atk=1"],
    isUnique: true
  },
  {
    name: "wooden_staff",
    itemId: "132",
    stats: ["atk=2", "magic_boost=5"]
  },
  {
    name: "ancient_axe",
    itemId: "135",
    stats: ["atk=35", "crit_chance=20", "crit_bonus=80"],
    slots: ["gem_1"]
  },
  {
    name: "splendid_staff",
    itemId: "136",
    stats: ["atk=20", "magic_boost=10"]
  },
  {
    name: "gantus_blade",
    itemId: "139",
    stats: ["atk=40", "crit_chance=30", "crit_bonus=85"],
    flags: ["prevents_speed_down"]
  },
  {
    name: "staff_of_awareness",
    itemId: "140",
    stats: ["atk=15", "magic_boost=10", "item_find=10"]
  },
  {
    name: "staff_of_choosing",
    itemId: "145",
    stats: ["atk=40", "magic_boost=10"],
    slots: ["gem_1"]
  },
  {
    name: "royal_sword",
    itemId: "146",
    stats: ["atk=50", "crit_chance=15", "crit_bonus=130"],
    slots: ["gem_1"]
  },
  {
    name: "staff_of_greed",
    itemId: "151",
    stats: ["atk=30", "magic_boost=10", "gold_find=15"]
  },
  {
    name: "buzz_blade",
    itemId: "152",
    stats: ["atk=75", "crit_chance=5", "crit_bonus=135", "chance_to_stun=10"]
  },
  {
    name: "keybringer",
    itemId: "155",
    stats: ["atk=99", "crit_chance=40", "crit_bonus=80", "chance_for_dungeon_keys=20"]
  },
  {
    name: "grand_scepter",
    itemId: "156",
    stats: ["atk=50", "magic_boost=30"],
    slots: ["gem_1"]
  },
  {
    name: "soul_guardian",
    itemId: "157",
    stats: ["atk=150", "crit_chance=10", "crit_bonus=150"],
    slots: ["gem_1"]
  },
  {
    name: "glass_warden",
    itemId: "168",
    stats: ["atk=10", "crit_chance=1", "crit_bonus=200"],
    skills: ["judgement"]
  },
  {
    name: "gold_sword",
    itemId: "169",
    stats: ["atk=50", "gold_find=15", "item_find=10"]
  },
  {
    name: "essence_reaver",
    itemId: "170",
    stats: ["atk=100", "crit_chance=15", "crit_bonus=125"],
    slots: ["gem_1"]
  },
  {
    name: "fork",
    itemId: "172",
    stats: ["atk=15", "crit_chance=35", "crit_bonus=115"]
  },
  {
    name: "spoon",
    itemId: "173",
    stats: ["atk=15", "dmg_reflection=100"]
  },
  {
    name: "iron_skillet",
    itemId: "178",
    stats: ["atk=20", "chance_for_food=33", "chance_to_burn=25"],
    isUnique: true
  },
  {
    name: "ganalar",
    itemId: "180",
    stats: ["atk=35", "magic_boost=60", "evade=10", "dmg_reduction=10"],
    isUnique: true
  }
];