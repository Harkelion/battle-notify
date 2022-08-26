module.exports = [
  // Enrage Added
  //   {
  //     type: "Added",
  //     target: "MyBoss",
  //     abnormalities: 8888888,
  //     message: "Enrage {duration}",
  //   },
  //   // Enrage Expiring, notify at 12 and 6 seconds remaining
  //   {
  //     type: "Expiring",
  //     target: "MyBoss",
  //     abnormalities: 8888888,
  //     message: "Enrage {duration}",
  //     time_remaining: [12, 6],
  //   },
  //   // Enrage Removed, show next enrage %
  //   {
  //     type: "Removed",
  //     target: "MyBoss",
  //     abnormalities: 8888888,
  //     message: "Enrage Ended - Next {nextEnrage}",
  //   },

  // Contagion Added
  {
    type: "Added",
    target: "MyBoss",
    abnormalities: [701700, 701701],
    message: "{icon}{alert} {duration}",
  },
  /*
	// Contagion Expiring, notify 6 seconds remaining
	{
		type: 'Expiring',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: 'Contagion {duration}',
		time_remaining: 6
	},
	// Contagion Removed
	{
		type: 'Removed',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: 'Contagion Ended'
	},
*/

  // Hurricane Added
  {
    type: "Added",
    target: "MyBoss",
    abnormalities: 60010,
    message: "Hurricane {duration}",
  },
  /*
	// Hurricane Expiring, notify at 6 seconds remaining
	{
		type: 'Expiring',
		target: 'MyBoss',
		abnormalities: 60010,
		message: 'Hurricane {duration}',
		time_remaining: 6
	},
	// Hurricane Removed
	{
		type: 'Removed',
		target: 'MyBoss',
		abnormalities: 60010,
		message: 'Hurricane Ended'
	},
*/

  // Adrenaline Rush  Added
  {
    type: "Added",
    target: "Self",
    abnormalities: [200701, 200700],
    message: "{icon} {duration}",
  },
  /*
/*
	// Adrenaline Rush  Expiring, notify at 6 seconds remaining
	{
		type: 'Expiring',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: 'Adrenaline Rush {duration}',
		time_remaining: 6
	},
	// Adrenaline Rush Removed
	{
		type: 'Removed',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: 'Adrenaline Rush Ended'
	},
	*/
  // Mystic Shield Added (Thrall)
  {
    type: "Added",
    target: "Self",
    abnormalities: [702001, 701606],
    message: "{icon} {duration}",
  },
  // Mystic Shield (Thrall) Soon Expired
  {
    type: "Expiring",
    target: "Self",
    abnormalities: [702001, 701606],
    message: "{icon}{alert} {duration}",
    time_remaining: 5,
  },
  // Mystic Shield (Thrall) Expired
  // {
  //   type: "Removed",
  //   target: "Self",
  //   abnormalities: [702001, 701606],
  //   message: "{red} Mystic Shield Expired {duration}",
  // },
  // Priest Shield Added (Kaia)
  {
    type: "Added",
    target: "Self",
    abnormalities: [800300, 800302, 800303, 800304],
    message: "{icon} {duration}",
  },
  // Priest Shield (Kaia) Soon Expired
  {
    type: "Expiring",
    target: "Self",
    abnormalities: [800300, 800302, 800303, 800304],
    message: "{icon}{alert} {duration}",
    time_remaining: 5,
  },
  //Priest Shield (Kaia) Expired
  // {
  //   type: "Removed",
  //   target: "Self",
  //   abnormalities: [800300, 800302, 800303, 800304],
  //   message: "{red} Priest Shield Expired {duration}",
  // },
  // Mystic Wrath Added
  {
    type: "Added",
    target: "Self",
    abnormalities: [702004],
    message: "{icon} {duration}",
  },
  // Priest Edict Added
  {
    type: "Added",
    target: "Self",
    abnormalities: [805800],
    message: "{icon} {duration}",
  },

  //Pet buff
  {
    type: "Expiring",
    target: "Self",
    abnormalities: [
      13000, 13001, 13002, 13003, 13004, 13005, 13006, 13007, 13008, 13009,
      13010, 13011, 13012, 13013, 13014, 13015, 13016, 13017, 13018, 13019,
      13020, 13021, 13022, 13023, 13024, 13025, 13026, 13027, 13028, 13029,
      13030, 13031, 13032, 13033, 13034, 13035, 13036, 13037,
    ],
    message: "Pet bond skill is about to expire.",
    time_remaining: 5,
  },

  // Missing Battle Solution / Nostrum
  {
    type: "MissingDuringCombat",
    target: "Self",
    abnormalities: [4030, 4031, 4020, 4021],
    message: "Missing {icon}",
    rewarn_timeout: 15,
  },
  /*
	// Vergos Aggro Debuff
   {
		type: 'AddedOrRefreshed',
		target: 'PartyIncludingSelf',
		abnormalities: 950023,
		message: '{name} has {stacks} stack(s)',
		required_stacks: 1
	},

	// Vergos Aggro Debuff Expire
   {
		type: 'Removed',
		target: 'PartyIncludingSelf',
		abnormalities: 950023,
		message: '{name}\'s stacks expired'
	},

	// Bahaar Laser
	{
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 90442502,
		message: 'LASER on {name}!'
	},

	// SoH; Sea Stun
	{
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 30209101,
		message: 'Stun DoT inc on {name}!'
	},

	// SoH; Sea Fear
	{
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 30209102,
		message: 'Fear wave inc on {name}!'
	},

	// CKG; Garden Target
	{
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 32060024,
		message: '{icon} on {name}'
	},

	// CKG; Lumikan Immunity
	{
		type: 'Added',
		target: 'Self',
		abnormalities: [31040003, 32040003],
		message: '{icon} {duration}'
	},

	// CKG; Lumikan HM Target
	{
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 32040007,
		message: '{icon} on {name}'
	},
*/
];
