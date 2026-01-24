/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

import { Dex, toID } from "./battle-dex";

/**
 * String that contains only lowercase alphanumeric characters.
 */
export type ID = string & { __isID: true };

export interface Nature {
	plus?: StatNameExceptHP;
	minus?: StatNameExceptHP;
}

export const BattleNatures: { [k in NatureName]: Nature } = {
	Adamant: {
		plus: 'atk',
		minus: 'spa',
	},
	Bashful: {},
	Bold: {
		plus: 'def',
		minus: 'atk',
	},
	Brave: {
		plus: 'atk',
		minus: 'spe',
	},
	Calm: {
		plus: 'spd',
		minus: 'atk',
	},
	Careful: {
		plus: 'spd',
		minus: 'spa',
	},
	Docile: {},
	Gentle: {
		plus: 'spd',
		minus: 'def',
	},
	Hardy: {},
	Hasty: {
		plus: 'spe',
		minus: 'def',
	},
	Impish: {
		plus: 'def',
		minus: 'spa',
	},
	Jolly: {
		plus: 'spe',
		minus: 'spa',
	},
	Lax: {
		plus: 'def',
		minus: 'spd',
	},
	Lonely: {
		plus: 'atk',
		minus: 'def',
	},
	Mild: {
		plus: 'spa',
		minus: 'def',
	},
	Modest: {
		plus: 'spa',
		minus: 'atk',
	},
	Naive: {
		plus: 'spe',
		minus: 'spd',
	},
	Naughty: {
		plus: 'atk',
		minus: 'spd',
	},
	Quiet: {
		plus: 'spa',
		minus: 'spe',
	},
	Quirky: {},
	Rash: {
		plus: 'spa',
		minus: 'spd',
	},
	Relaxed: {
		plus: 'def',
		minus: 'spe',
	},
	Sassy: {
		plus: 'spd',
		minus: 'spe',
	},
	Serious: {},
	Timid: {
		plus: 'spe',
		minus: 'atk',
	},
};
export const BattleStatIDs: { [k: string]: StatName | undefined } = {
	HP: 'hp',
	hp: 'hp',
	Atk: 'atk',
	atk: 'atk',
	Def: 'def',
	def: 'def',
	SpA: 'spa',
	SAtk: 'spa',
	SpAtk: 'spa',
	spa: 'spa',
	spc: 'spa',
	Spc: 'spa',
	SpD: 'spd',
	SDef: 'spd',
	SpDef: 'spd',
	spd: 'spd',
	Spe: 'spe',
	Spd: 'spe',
	spe: 'spe',
};
/** Stat short names */
export const BattleStatNames = {
	hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
} as const;

export const BattleBaseSpeciesChart = [
	"unown", "burmy", "shellos", "gastrodon", "deerling", "sawsbuck", "vivillon", "flabebe", "floette", "florges", "furfrou", "minior", "alcremie", "tatsugiri",
	"botnyak",
	"pokestarufo", "pokestarbrycenman", "pokestarmt", "pokestarmt2", "pokestartransport", "pokestargiant", "pokestarhumanoid", "pokestarmonster", "pokestarf00", "pokestarf002", "pokestarspirit", "pokestarblackdoor", "pokestarwhitedoor", "pokestarblackbelt",
] as ID[];

export const BattlePokemonIconIndexes: { [id: string]: number } = {
	egg: 1164 + 3,

	// Kaskade
	llampas: 1026 + 0,
	danfluff: 1026 + 1,
	alfalphalops: 1026 + 2,
	therpal: 1026 + 3,
	aspfault: 1026 + 4,
	tarmendoa: 1026 + 5,
	burbwhirl: 1026 + 6,
	spoutlaw: 1026 + 7,
	vaquamael: 1026 + 8,
	chewmunk: 1026 + 9,
	cheekat: 1026 + 10,
	specoey: 1026 + 11,
	opakespiel: 1026 + 12,
	kwaile: 1026 + 13,
	quailert: 1026 + 14,
	quailstion: 1026 + 15,
	sighlo: 1026 + 16,
	cooreds: 1026 + 17,
	probaska: 1026 + 18,
	histameanie: 1026 + 19,
	apheed: 1026 + 20,
	musleafo: 1026 + 21,
	eecroach: 1026 + 22,
	stackem: 1026 + 23,
	clamtrip: 1026 + 24,
	rowviar: 1026 + 25,
	sanook: 1026 + 26,
	cereboral: 1026 + 27,
	bagoul: 1026 + 28,
	tofrug: 1026 + 29,
	kaskazog: 1026 + 30,
	ananot: 1026 + 31,
	ananoop: 1026 + 32,
	mosster: 1026 + 33,
	mosskrat: 1026 + 34,
	catteraxe: 1026 + 35,
	catatomb: 1026 + 36,
	skinka: 1026 + 37,
	dredgen: 1026 + 38,
	stalagen: 1026 + 39,
	chromagen: 1026 + 40,
	aerogen: 1026 + 41,
	caragen: 1026 + 42,
	bludgen: 1026 + 43,
	pathagen: 1026 + 44,
	ectogen: 1026 + 45,
	legen: 1026 + 46,
	enigmeon: 1026 + 47,
	depuray: 1026 + 48,
	desoray: 1026 + 49,
	dirrun: 1026 + 50,
	blurrun: 1026 + 51,
	pudet: 1026 + 52,
	woond: 1026 + 53,
	pramblo: 1026 + 54,
	glashulimp: 1026 + 55,
	drout: 1026 + 56,
	guruchi: 1026 + 57,
	porygonw: 1026 + 58,
	estoe: 1026 + 59,
	perpetua: 1026 + 60,
	tooburm: 1026 + 61,
	detrarc: 1026 + 62,
	qayagus: 1026 + 63,
	auditar: 1026 + 64,
	oxillery: 1026 + 65,
	gneckle: 1026 + 66,
	rabyoose: 1026 + 67,
	mienflux: 1026 + 68,
	avokiddo: 1026 + 69,
	alliguaca: 1026 + 70,
	tamroast: 1026 + 71,
	weepollen: 1026 + 72,
	vitisquash: 1026 + 73,
	dionysseur: 1026 + 74,
	umbralu: 1026 + 75,
	nomobjeka: 1026 + 76,
	kleptarak: 1026 + 77,
	kituff: 1026 + 78,
	beadamup: 1026 + 79,
	rascume: 1026 + 80,
	faebril: 1026 + 81,
	bokshel: 1026 + 82,
	hermirt: 1026 + 83,
	aeradio: 1026 + 84,
	botnyak: 1026 + 85,
	hurchin: 1026 + 86,
	vendrom: 1026 + 87,
	buwuve: 1026 + 88,
	wasgrowl: 1026 + 89,
	worcane: 1026 + 90,
	probat: 1026 + 91,
	jemineye: 1026 + 92,
	oracub: 1026 + 93,
	bearvoyance: 1026 + 94,
	folleming: 1026 + 95,
	drosabell: 1026 + 96,
	yanmage: 1026 + 97,
	bloomage: 1026 + 98,
	obsidious: 1026 + 99,
	mercryni: 1026 + 100,
	meraculisk: 1026 + 101,
	golgre: 1026 + 102,
	prospectre: 1026 + 103,
	skideer: 1026 + 104,
	yuleigh: 1026 + 105,
	feafurr: 1026 + 106,
	vaicear: 1026 + 107,
	phisnooz: 1026 + 108,
	telemac: 1026 + 109,
	macedontus: 1026 + 110,
	crynorawst: 1026 + 111,
	rotomb: 1026 + 112,
	tamunk: 1026 + 113,
	temunk: 1026 + 114,
	manadza: 1026 + 115,
	arctikull: 1026 + 116,
	wicoot: 1026 + 117,
	orogon: 1026 + 118,
	orbtholod: 1026 + 119,
	pestalation: 1026 + 120,
	revylon: 1026 + 121,
	leoseace: 1026 + 122,
	lamentu: 1026 + 123,
	endramodai: 1026 + 124,

	/////////////////////////////////////
	// Regional Forms
	// Alola
	rattataalola: 1176 + 0,
	raticatealola: 1176 + 1,
	raichualola: 1176 + 2,
	sandshrewalola: 1176 + 3,
	sandslashalola: 1176 + 4,
	vulpixalola: 1176 + 5,
	ninetalesalola: 1176 + 6,
	diglettalola: 1176 + 7,
	dugtrioalola: 1176 + 8,
	meowthalola: 1176 + 9,
	persianalola: 1176 + 10,
	geodudealola: 1176 + 11,
	graveleralola: 1176 + 12,
	golemalola: 1176 + 13,
	grimeralola: 1176 + 14,
	mukalola: 1176 + 15,
	exeggutoralola: 1176 + 16,
	marowakalola: 1176 + 17,

	// Galar
	meowthgalar: 1194 + 0,
	ponytagalar: 1194 + 1,
	rapidashgalar: 1194 + 2,
	slowpokegalar: 1194 + 3,
	slowbrogalar: 1194 + 4,
	farfetchdgalar: 1194 + 5,
	weezinggalar: 1194 + 6,
	mrmimegalar: 1194 + 7,
	articunogalar: 1194 + 8,
	zapdosgalar: 1194 + 9,
	moltresgalar: 1194 + 10,
	slowkinggalar: 1194 + 11,
	corsolagalar: 1194 + 12,
	zigzagoongalar: 1194 + 13,
	linoonegalar: 1194 + 14,
	darumakagalar: 1194 + 15,
	darmanitangalar: 1194 + 16,
	yamaskgalar: 1194 + 17,
	stunfiskgalar: 1194 + 18,

	// Hisui
	growlithehisui: 1213 + 0,
	arcaninehisui: 1213 + 1,
	voltorbhisui: 1213 + 2,
	electrodehisui: 1213 + 3,
	typhlosionhisui: 1213 + 4,
	qwilfishhisui: 1213 + 5,
	sneaselhisui: 1213 + 6,
	samurotthisui: 1213 + 7,
	lilliganthisui: 1213 + 8,
	zoruahisui: 1213 + 9,
	zoroarkhisui: 1213 + 10,
	braviaryhisui: 1213 + 11,
	sliggoohisui: 1213 + 12,
	goodrahisui: 1213 + 13,
	avalugghisui: 1213 + 14,
	decidueyehisui: 1213 + 15,

	// Paldea
	taurospaldeacombat: 1229 + 0,
	wooperpaldea: 1229 + 1,

	// Kaskade
	raticatekaskade: 1231 + 0,
	bellsproutkaskade: 1231 + 1,
	gastlykaskade: 1231 + 2,
	haunterkaskade: 1231 + 3,
	gengarkaskade: 1231 + 4,
	jynxkaskade: 1231 + 5,
	lapraskaskade: 1231 + 6,
	marillkaskade: 1231 + 7,
	azumarillkaskade: 1231 + 8,
	sudowoodoamazeall: 1231 + 9,
	yanmakaskade: 1231 + 10,
	exploudkaskade: 1231 + 11,
	azurillkaskade: 1231 + 12,
	tropiuskaskade: 1231 + 13,
	bidoofkaskade: 1231 + 14,
	bibarelkaskade: 1231 + 15,
	shinxkaskade: 1231 + 16,
	luxiokaskade: 1231 + 17,
	luxraykaskade: 1231 + 18,
	ambipomkaskade: 1231 + 19,
	drifblimamazeall: 1231 + 20,
	skuntankkaskade: 1231 + 21,
	excadrillkaskade: 1231 + 22,
	gurdurrkaskade: 1231 + 23,
	conkeldurrkaskade: 1231 + 24,
	solosiskaskade: 1231 + 25,
	duosionkaskade: 1231 + 26,
	reunicluskaskade: 1231 + 27,
	golettkaskade: 1231 + 28,
	bunnelbykaskade: 1231 + 29,
	diggersbykaskade: 1231 + 30,
	phantumpkaskade: 1231 + 31,
	trevenantkaskade: 1231 + 32,
	dianciekaskade: 1231 + 33,
	crabominablekaskade: 1231 + 34,
	palossandkaskade: 1231 + 35,
	bruxishkaskade: 1231 + 36,
	dubwoolkaskade: 1231 + 37,

	/////////////////////////////////////
	// Gimmick Forms
	// Mega
	venusaurmega: 1272 + 0,
	charizardmegax: 1272 + 1,
	charizardmegay: 1272 + 2,
	blastoisemega: 1272 + 3,
	beedrillmega: 1272 + 4,
	pidgeotmega: 1272 + 5,
	alakazammega: 1272 + 6,
	slowbromega: 1272 + 7,
	gengarmega: 1272 + 8,
	kangaskhanmega: 1272 + 9,
	pinsirmega: 1272 + 10,
	gyaradosmega: 1272 + 11,
	aerodactylmega: 1272 + 12,
	mewtwomegax: 1272 + 13,
	mewtwomegay: 1272 + 14,
	ampharosmega: 1272 + 15,
	steelixmega: 1272 + 16,
	scizormega: 1272 + 17,
	heracrossmega: 1272 + 18,
	houndoommega: 1272 + 19,
	tyranitarmega: 1272 + 20,
	sceptilemega: 1272 + 21,
	blazikenmega: 1272 + 22,
	swampertmega: 1272 + 23,
	gardevoirmega: 1272 + 24,
	sableyemega: 1272 + 25,
	mawilemega: 1272 + 26,
	aggronmega: 1272 + 27,
	medichammega: 1272 + 28,
	manectricmega: 1272 + 29,
	sharpedomega: 1272 + 30,
	cameruptmega: 1272 + 31,
	altariamega: 1272 + 32,
	banettemega: 1272 + 33,
	absolmega: 1272 + 34,
	glaliemega: 1272 + 35,
	salamencemega: 1272 + 36,
	metagrossmega: 1272 + 37,
	latiasmega: 1272 + 38,
	latiosmega: 1272 + 39,
	kyogreprimal: 1272 + 40,
	groudonprimal: 1272 + 41,
	rayquazamega: 1272 + 42,
	lopunnymega: 1272 + 43,
	garchompmega: 1272 + 44,
	lucariomega: 1272 + 45,
	abomasnowmega: 1272 + 46,
	gallademega: 1272 + 47,
	audinomega: 1272 + 48,
	dianciemega: 1272 + 49,

	// G-max
	venusaurgmax: 1322 + 0,
	charizardgmax: 1322 + 1,
	blastoisegmax: 1322 + 2,
	butterfreegmax: 1322 + 3,
	pikachugmax: 1322 + 4,
	meowthgmax: 1322 + 5,
	machampgmax: 1322 + 6,
	gengargmax: 1322 + 7,
	kinglergmax: 1322 + 8,
	laprasgmax: 1322 + 9,
	eeveegmax: 1322 + 10,
	snorlaxgmax: 1322 + 11,
	garbodorgmax: 1322 + 12,
	melmetalgmax: 1322 + 13,
	rillaboomgmax: 1322 + 14,
	cinderacegmax: 1322 + 15,
	inteleongmax: 1322 + 16,
	corviknightgmax: 1322 + 17,
	orbeetlegmax: 1322 + 18,
	drednawgmax: 1322 + 19,
	coalossalgmax: 1322 + 20,
	flapplegmax: 1322 + 21,
	appletungmax: 1322 + 22,
	sandacondagmax: 1322 + 23,
	toxtricitygmax: 1322 + 24,
	centiskorchgmax: 1322 + 25,
	hatterenegmax: 1322 + 26,
	grimmsnarlgmax: 1322 + 27,
	alcremiegmax: 1322 + 28,
	copperajahgmax: 1322 + 29,
	duraludongmax: 1322 + 30,
	eternatuseternamax: 1322 + 31,
	urshifugmax: 1322 + 32,
	urshifurapidstrikegmax: 1322 + 33,

	/////////////////////////////////////
	// Misc. forms
	// Gen 1
	venusaurf: 1356 + 0,
	butterfreef: 1356 + 1,
	rattataf: 1356 + 2,
	raticatef: 1356 + 3,
	raticatekaskadef: 1356 + 4,
	pikachuf: 1356 + 5,
	pikachucosplay: 1356 + 6,
	pikachurockstar: 1356 + 7,
	pikachubelle: 1356 + 8,
	pikachupopstar: 1356 + 9,
	pikachuphd: 1356 + 10,
	pikachulibre: 1356 + 11,
	pikachupartner: 1356 + 12,
	pikachuhoenn: 1356 + 13,
	pikachusinnoh: 1356 + 14,
	pikachuunova: 1356 + 15,
	pikachukalos: 1356 + 16,
	pikachualola: 1356 + 17,
	pikachuoriginal: 1356 + 18,
	pikachuworld: 1356 + 19,
	pikachustarter: 1356 + 20,
	pikachustarterf: 1356 + 21,
	raichuf: 1356 + 22,
	zubatf: 1356 + 23,
	golbatf: 1356 + 24,
	gloomf: 1356 + 25,
	vileplumef: 1356 + 26,
	kadabraf: 1356 + 27,
	alakazamf: 1356 + 28,
	doduof: 1356 + 29,
	dodriof: 1356 + 30,
	hypnof: 1356 + 31,
	rhyhornf: 1356 + 32,
	rhydonf: 1356 + 33,
	goldeenf: 1356 + 34,
	seakingf: 1356 + 35,
	scytherf: 1356 + 36,
	taurospaldeablaze: 1356 + 37,
	taurospaldeaaqua: 1356 + 38,
	magikarpf: 1356 + 39,
	gyaradosf: 1356 + 40,
	eeveef: 1356 + 41,
	eeveestart: 1356 + 42,
	eeveestarterf: 1356 + 43,

	// Gen 2
	meganiumf: 1400 + 0,
	ledybaf: 1400 + 1,
	ledian: 1400 + 2,
	pichuspikyeared: 1400 + 3,
	xatuf: 1400 + 4,
	sudowoodof: 1400 + 5,
	politoedf: 1400 + 6,
	aipomf: 1400 + 7,
	wooperf: 1400 + 8,
	quagsiref: 1400 + 9,
	murkrowf: 1400 + 10,
	unownb: 1400 + 11,
	unownc: 1400 + 12,
	unownd: 1400 + 13,
	unowne: 1400 + 14,
	unownf: 1400 + 15,
	unowng: 1400 + 16,
	unownh: 1400 + 17,
	unowni: 1400 + 18,
	unownj: 1400 + 19,
	unownk: 1400 + 20,
	unownl: 1400 + 21,
	unownm: 1400 + 22,
	unownn: 1400 + 23,
	unowno: 1400 + 24,
	unownp: 1400 + 25,
	unownq: 1400 + 26,
	unownr: 1400 + 27,
	unowns: 1400 + 28,
	unownt: 1400 + 29,
	unownu: 1400 + 30,
	unownv: 1400 + 31,
	unownw: 1400 + 32,
	unownx: 1400 + 33,
	unowny: 1400 + 34,
	unownz: 1400 + 35,
	unownexclamation: 1400 + 36,
	unownquestion: 1400 + 37,
	wobbuffetf: 1400 + 38,
	girafarigf: 1400 + 39,
	gligarf: 1400 + 40,
	steelixf: 1400 + 41,
	scizorf: 1400 + 42,
	heracrossf: 1400 + 43,
	sneaself: 1400 + 44,
	sneaselhisuif: 1400 + 45,
	ursaringf: 1400 + 46,
	piloswinef: 1400 + 47,
	octilleryf: 1400 + 48,
	houndoomf: 1400 + 49,
	donphanf: 1400 + 50,
	lugiashadow: 1400 + 51,

	// Gen 3
	torchicf: 1452 + 0,
	combuskenf: 1452 + 1,
	blazikenf: 1452 + 2,
	beautiflyf: 1452 + 3,
	dustoxf: 1452 + 4,
	ludicolof: 1452 + 5,
	nuzleaff: 1452 + 6,
	shiftryf: 1452 + 7,
	medititef: 1452 + 8,
	medichamf: 1452 + 9,
	roseliaf: 1452 + 10,
	gulpinf: 1452 + 11,
	swalotf: 1452 + 12,
	numelf: 1452 + 13,
	cameruptf: 1452 + 14,
	cacturnef: 1452 + 15,
	miloticf: 1452 + 16,
	castformsunny: 1452 + 17,
	castformrainy: 1452 + 18,
	castformsnowy: 1452 + 19,
	castformshady: 1452 + 20,
	castformsandy: 1452 + 21,
	castformdusty: 1452 + 22,
	castformallergy: 1452 + 23,
	castformswarmy: 1452 + 24,
	castformsmoggy: 1452 + 25,
	castformlovely: 1452 + 26,
	castformgutsy: 1452 + 27,
	castformspooky: 1452 + 28,
	castformzenny: 1452 + 29,
	castformsorcery: 1452 + 30,
	castformzappy: 1452 + 31,
	castformwindy: 1452 + 32,
	castformwhirly: 1452 + 33,
	relicanthf: 1452 + 34,
	deoxysattack: 1452 + 35,
	deoxysdefense: 1452 + 36,
	deoxysspeed: 1452 + 37,

	// Gen 4
	starlyf: 1490 + 0,
	staraviaf: 1490 + 1,
	staraptorf: 1490 + 2,
	bidooff: 1490 + 3,
	bibarelf: 1490 + 4,
	kricketotf: 1490 + 5,
	kricketunef: 1490 + 6,
	shinxf: 1490 + 7,
	shinxkaskadef: 1490 + 8,
	luxiof: 1490 + 9,
	luxiokaskadef: 1490 + 10,
	luxrayf: 1490 + 11,
	luxraykaskadef: 1490 + 12,
	roseradef: 1490 + 13,
	burmysandy: 1490 + 14,
	burmytrash: 1490 + 15,
	wormadamsandy: 1490 + 16,
	wormadamtrash: 1490 + 17,
	combeef: 1490 + 18,
	pachirisuf: 1490 + 19,
	buizelf: 1490 + 20,
	floatzelf: 1490 + 21,
	cherrimsunshine: 1490 + 22,
	shelloseast: 1490 + 23,
	gastrodoneast: 1490 + 24,
	ambipomf: 1490 + 25,
	ambipomkaskadef: 1490 + 26,
	giblef: 1490 + 27,
	gabitef: 1490 + 28,
	garchompf: 1490 + 29,
	hippopotasf: 1490 + 30,
	hippowdonf: 1490 + 31,
	croagunkf: 1490 + 32,
	toxicroakf: 1490 + 33,
	finneonf: 1490 + 34,
	lumineonf: 1490 + 35,
	snoverf: 1490 + 36,
	snoverlowland: 1490 + 37,
	snoverlowlandf: 1490 + 38,
	abomasnowf: 1490 + 39,
	abomasnowlowland: 1490 + 40,
	abomasnowlowlandf: 1490 + 41,
	weavilef: 1490 + 42,
	rhyperiorf: 1490 + 43,
	tangrowthf: 1490 + 44,
	mamoswinef: 1490 + 45,
	rotomheat: 1490 + 46,
	rotomwash: 1490 + 47,
	rotomfrost: 1490 + 48,
	rotomfan: 1490 + 49,
	rotommow: 1490 + 50,
	rotomjunk: 1490 + 51,
	rotomsway: 1490 + 52,
	rotombrawl: 1490 + 53,
	rotomweb: 1490 + 54,
	rotomsol: 1490 + 55,
	dialgaorigin: 1490 + 56,
	palkiaorigin: 1490 + 57,
	giratinaorigin: 1490 + 58,
	shayminsky: 1490 + 59,
	arceusfighting: 1490 + 60,
	arceusflying: 1490 + 61,
	arceuspoison: 1490 + 62,
	arceusground: 1490 + 63,
	arceusrock: 1490 + 64,
	arceusbug: 1490 + 65,
	arceusghost: 1490 + 66,
	arceussteel: 1490 + 67,
	arceusfire: 1490 + 68,
	arceuswater: 1490 + 69,
	arceusgrass: 1490 + 70,
	arceuselectric: 1490 + 71,
	arceuspsychic: 1490 + 72,
	arceusice: 1490 + 73,
	arceusdragon: 1490 + 74,
	arceusdark: 1490 + 75,
	arceusfairy: 1490 + 76,

	// Gen 5
	unfezantf: 1567 + 0,
	basculinbluestriped: 1567 + 1,
	basculinwhitestriped: 1567 + 2,
	darmanitanzen: 1567 + 3,
	darmanitangalarzen: 1567 + 4,
	deerlingsummer: 1567 + 5,
	deerlingautumn: 1567 + 6,
	sawsbucksummer: 1567 + 7,
	sawsbuckautumn: 1567 + 8,
	deerlingwinter: 1567 + 9,
	sawsbuckwinter: 1567 + 10,
	frillishf: 1567 + 11,
	jellicentf: 1567 + 12,
	tornadustherian: 1567 + 13,
	thundurustherian: 1567 + 14,
	landorustherian: 1567 + 15,
	kyuremblack: 1567 + 16,
	kyuremwhite: 1567 + 17,
	keldeoresolute: 1567 + 18,
	meloettapirouette: 1567 + 19,
	genesectdouse: 1567 + 20,
	genesectshock: 1567 + 21,
	genesectburn: 1567 + 22,
	genesectchill: 1567 + 23,
	greninjaash: 1567 + 24,

	// Gen 6
	vivillonpolar: 1592 + 0,
	vivillontundra: 1592 + 1,
	vivilloncontinental: 1592 + 2,
	vivillongarden: 1592 + 3,
	vivillonelegant: 1592 + 4,
	vivillonmeadow: 1592 + 5,
	vivillonmodern: 1592 + 6,
	vivillonmarine: 1592 + 7,
	vivillonarchipelago: 1592 + 8,
	vivillonhighplains: 1592 + 9,
	vivillonsandstorm: 1592 + 10,
	vivillonriver: 1592 + 11,
	vivillonmonsoon: 1592 + 12,
	vivillonsavanna: 1592 + 13,
	vivillonsun: 1592 + 14,
	vivillonocean: 1592 + 15,
	vivillonjungle: 1592 + 16,
	vivillonfancy: 1592 + 17,
	vivillonpokeball: 1592 + 18,
	pyroarf: 1592 + 19,
	flabebeyellow: 1592 + 20,
	flabebeorange: 1592 + 21,
	flabebeblue: 1592 + 22,
	flabebewhite: 1592 + 23,
	floetteyellow: 1592 + 24,
	floetteorange: 1592 + 25,
	floetteblue: 1592 + 26,
	floettewhite: 1592 + 27,
	floetteeternal: 1592 + 28,
	florgesyellow: 1592 + 29,
	florgesorange: 1592 + 30,
	florgesblue: 1592 + 31,
	florgeswhite: 1592 + 32,
	furfrouheart: 1592 + 33,
	furfroustar: 1592 + 34,
	furfroudiamond: 1592 + 35,
	furfroudebutante: 1592 + 36,
	furfroumatron: 1592 + 37,
	furfroudandy: 1592 + 38,
	furfroulareine: 1592 + 39,
	furfroukabuki: 1592 + 40,
	furfroupharaoh: 1592 + 41,
	meowsticf: 1592 + 42,
	aegislashblade: 1592 + 43,
	pumpkaboosmall: 1592 + 44,
	pumpkaboolarge: 1592 + 45,
	pumpkaboosuper: 1592 + 46,
	gourgeistsmall: 1592 + 47,
	gourgeistlarge: 1592 + 48,
	gourgeistsuper: 1592 + 49,
	xerneasneutral: 1592 + 50,
	zygarde10: 1592 + 51,
	zygardecomplete: 1592 + 52,
	hoopaunbound: 1592 + 53,

	// Gen 7
	oricoriopompom: 1646 + 0,
	oricoriopau: 1646 + 1,
	oricoriosensu: 1646 + 2,
	lycanrocmidnight: 1646 + 3,
	lycanrocdusk: 1646 + 4,
	wishiwashischool: 1646 + 5,
	silvallyfighting: 1646 + 6,
	silvallyflying: 1646 + 7,
	silvallypoison: 1646 + 8,
	silvallyground: 1646 + 9,
	silvallyrock: 1646 + 10,
	silvallybug: 1646 + 11,
	silvallyghost: 1646 + 12,
	silvallysteel: 1646 + 13,
	silvallyfire: 1646 + 14,
	silvallywater: 1646 + 15,
	silvallygrass: 1646 + 16,
	silvallyelectric: 1646 + 17,
	silvallypsychic: 1646 + 18,
	silvallyice: 1646 + 19,
	silvallydragon: 1646 + 20,
	silvallydark: 1646 + 21,
	silvallyfairy: 1646 + 22,
	miniormeteor: 1646 + 23,
	miniororange: 1646 + 24,
	minioryellow: 1646 + 25,
	miniorgreen: 1646 + 26,
	miniorblue: 1646 + 27,
	miniorindigo: 1646 + 28,
	miniorviolet: 1646 + 29,
	mimikyubusted: 1646 + 30,
	necrozmaduskmane: 1646 + 31,
	necrozmadawnwings: 1646 + 32,
	necrozmaultra: 1646 + 33,
	magearnaoriginal: 1646 + 34,

	// Gen 8
	cramorantgulping: 1681 + 0,
	cramorantgorging: 1681 + 1,
	toxtricitylowkey: 1681 + 2,
	sinisteaantique: 1681 + 3,
	polteageistantique: 1681 + 4,
	alcremievanillacreamberry: 1681 + 5,
	alcremievanillacreamlove: 1681 + 6,
	alcremievanillacreamstar: 1681 + 7,
	alcremievanillacreamclover: 1681 + 8,
	alcremievanillacreamflower: 1681 + 9,
	alcremievanillacreamribbon: 1681 + 10,
	alcremierubycreamstrawberry: 1681 + 11,
	alcremierubycreamberry: 1681 + 12,
	alcremierubycreamlove: 1681 + 13,
	alcremierubycreamstar: 1681 + 14,
	alcremierubycreamclover: 1681 + 15,
	alcremierubycreamflower: 1681 + 16,
	alcremierubycreamribbon: 1681 + 17,
	alcremiematchacreamstrawberry: 1681 + 18,
	alcremiematchacreamberry: 1681 + 19,
	alcremiematchacreamlove: 1681 + 20,
	alcremiematchacreamstar: 1681 + 21,
	alcremiematchacreamclover: 1681 + 22,
	alcremiematchacreamflower: 1681 + 23,
	alcremiematchacreamribbon: 1681 + 24,
	alcremiemintcreamstrawberry: 1681 + 25,
	alcremiemintcreamberry: 1681 + 26,
	alcremiemintcreamlove: 1681 + 27,
	alcremiemintcreamstar: 1681 + 28,
	alcremiemintcreamclover: 1681 + 29,
	alcremiemintcreamflower: 1681 + 30,
	alcremiemintcreamribbon: 1681 + 31,
	alcremielemoncreamstrawberry: 1681 + 32,
	alcremielemoncreamberry: 1681 + 33,
	alcremielemoncreamlove: 1681 + 34,
	alcremielemoncreamstar: 1681 + 35,
	alcremielemoncreamclover: 1681 + 36,
	alcremielemoncreamflower: 1681 + 37,
	alcremielemoncreamribbon: 1681 + 38,
	alcremiesaltedcreamstrawberry: 1681 + 39,
	alcremiesaltedcreamberry: 1681 + 40,
	alcremiesaltedcreamlove: 1681 + 41,
	alcremiesaltedcreamstar: 1681 + 42,
	alcremiesaltedcreamclover: 1681 + 43,
	alcremiesaltedcreamflower: 1681 + 44,
	alcremiesaltedcreamribbon: 1681 + 45,
	alcremierubyswirlstrawberry: 1681 + 46,
	alcremierubyswirlberry: 1681 + 47,
	alcremierubyswirllove: 1681 + 48,
	alcremierubyswirlstar: 1681 + 49,
	alcremierubyswirlclover: 1681 + 50,
	alcremierubyswirlflower: 1681 + 51,
	alcremierubyswirlribbon: 1681 + 52,
	alcremiecaramelswirlstrawberry: 1681 + 53,
	alcremiecaramelswirlberry: 1681 + 54,
	alcremiecaramelswirllove: 1681 + 55,
	alcremiecaramelswirlstar: 1681 + 56,
	alcremiecaramelswirlclover: 1681 + 57,
	alcremiecaramelswirlflower: 1681 + 58,
	alcremiecaramelswirlribbon: 1681 + 59,
	alcremierainbowswirlstrawberry: 1681 + 60,
	alcremierainbowswirlberry: 1681 + 61,
	alcremierainbowswirllove: 1681 + 62,
	alcremierainbowswirlstar: 1681 + 63,
	alcremierainbowswirlclover: 1681 + 64,
	alcremierainbowswirlflower: 1681 + 65,
	alcremierainbowswirlribbon: 1681 + 66,
	eiscuenoice: 1681 + 67,
	indeedeef: 1681 + 68,
	morpekohangry: 1681 + 69,
	zaciancrowned: 1681 + 70,
	zamazentacrowned: 1681 + 71,
	urshifurapidstrike: 1681 + 72,
	zarudedada: 1681 + 73,
	calyrexice: 1681 + 74,
	calyrexshadow: 1681 + 75,
	ursalunabloodmoon: 1681 + 76,
	basculegionf: 1681 + 77,
	enamorustherian: 1681 + 78,

	// Gen 9
	oinkolognef: 1760 + 0,
	mausholdfour: 1760 + 1,
	squawkabillyblue: 1760 + 2,
	squawkabillyyellow: 1760 + 3,
	squawkabillywhite: 1760 + 4,
	palafinhero: 1760 + 5,
	tatsugiridroopy: 1760 + 6,
	tatsugiristretchy: 1760 + 7,
	dudunsparcethreesegment: 1760 + 8,
	gimmighoulroaming: 1760 + 9,
	koraidonlimited: 1760 + 10,
	miraidonlowpower: 1760 + 11,
	poltchageistartisan: 1760 + 12,
	sinistchamasterpiece: 1760 + 13,
	ogerponwellspring: 1760 + 14,
	ogerponhearthflame: 1760 + 15,
	ogerponcornerstone: 1760 + 16,
	terapagosterastal: 1760 + 17,
	terapagosstellar: 1760 + 18,

	// Gen 10
	eecroachswarm: 1779 + 0,
	stackemrockless: 1779 + 1,
	mosskrattidebloom: 1779 + 2,
	catteraxef: 1779 + 3,
	blurruncharged: 1779 + 4,
	droutdry: 1779 + 5,
	auditarf: 1779 + 6,
	oxilleryf: 1779 + 7,
	tamroastf: 1779 + 8,
	weepollenf: 1779 + 9,
	botnyaklr: 1779 + 10,
	botnyaklg: 1779 + 11,
	botnyakdb: 1779 + 12,
	botnyakdr: 1779 + 13,
	botnyakdg: 1779 + 14,
	bearvoyanceawakened: 1779 + 15,

	// Alt forms with duplicate icons
	greninjabond: 658,
	gumshoostotem: 735,
	raticatealolatotem: 1176 + 1,
	marowakalolatotem: 1176 + 17,
	araquanidtotem: 752,
	lurantistotem: 754,
	salazzletotem: 758,
	vikavolttotem: 738,
	togedemarutotem: 777,
	mimikyutotem: 778,
	mimikyubustedtotem: 778,
	ribombeetotem: 743,
	kommoototem: 784,
	toxtricitylowkeygmax: 1322 + 24,
	ogerpontealtera: 1017,
	ogerponwellspringtera: 1760 + 14,
	ogerponhearthflametera: 1760 + 15,
	ogerponcornerstonetera: 1760 + 16,

	// CAP
	syclant: 1812 + 0,
	revenankh: 1812 + 1,
	pyroak: 1812 + 2,
	fidgit: 1812 + 3,
	stratagem: 1812 + 4,
	arghonaut: 1812 + 5,
	kitsunoh: 1812 + 6,
	cyclohm: 1812 + 7,
	colossoil: 1812 + 8,
	krilowatt: 1812 + 9,
	voodoom: 1812 + 10,
	tomohawk: 1812 + 11,
	necturna: 1812 + 12,
	mollux: 1812 + 13,
	aurumoth: 1812 + 14,
	malaconda: 1812 + 15,
	cawmodore: 1812 + 16,
	volkraken: 1812 + 17,
	plasmanta: 1812 + 18,
	naviathan: 1812 + 19,
	crucibelle: 1812 + 20,
	crucibellemega: 1812 + 21,
	kerfluffle: 1812 + 22,
	pajantom: 1812 + 23,
	jumbao: 1812 + 24,
	caribolt: 1812 + 25,
	smokomodo: 1812 + 26,
	snaelstrom: 1812 + 27,
	equilibra: 1812 + 28,
	astrolotl: 1812 + 29,
	miasmaw: 1812 + 30,
	chromera: 1812 + 31,
	venomicon: 1812 + 32,
	venomiconepilogue: 1812 + 33,
	saharaja: 1812 + 34,
	hemogoblin: 1812 + 35,
	syclar: 1812 + 36,
	embirch: 1812 + 37,
	flarelm: 1812 + 38,
	breezi: 1812 + 39,
	scratchet: 1812 + 40,
	necturine: 1812 + 41,
	cupra: 1812 + 42,
	argalis: 1812 + 43,
	brattler: 1812 + 44,
	cawdet: 1812 + 45,
	volkritter: 1812 + 46,
	snugglow: 1812 + 47,
	floatoy: 1812 + 48,
	caimanoe: 1812 + 49,
	pluffle: 1812 + 50,
	rebble: 1812 + 51,
	tactite: 1812 + 52,
	privatyke: 1812 + 53,
	nohface: 1812 + 54,
	monohm: 1812 + 55,
	duohm: 1812 + 56,
	protowatt: 1812 + 57,
	voodoll: 1812 + 58,
	mumbao: 1812 + 59,
	fawnifer: 1812 + 60,
	electrelk: 1812 + 61,
	smogecko: 1812 + 62,
	smoguana: 1812 + 63,
	swirlpool: 1812 + 64,
	coribalis: 1812 + 65,
	justyke: 1812 + 66,
	solotl: 1812 + 67,
	miasmite: 1812 + 68,
	dorsoil: 1812 + 69,
	saharascal: 1812 + 70,
	ababo: 1812 + 71,
	scattervein: 1812 + 72,
	cresceidon: 1812 + 73,
	chuggalong: 1812 + 74,
	shox: 1812 + 75,
	chuggon: 1812 + 76,
	draggalong: 1812 + 77,
	ramnarok: 1812 + 78,
	ramnarokradiant: 1812 + 79,
};

export const BattlePokemonIconIndexesLeft: { [id: string]: number } = {
	pikachubelle: 1908 + 0,
	pikachupopstar: 1908 + 1,
	clefairy: 1908 + 2,
	clefable: 1908 + 3,
	jigglypuff: 1908 + 4,
	wigglytuff: 1908 + 5,
	dugtrioalola: 1908 + 6,
	poliwhirl: 1908 + 7,
	poliwrath: 1908 + 8,
	mukalola: 1908 + 9,
	kingler: 1908 + 10,
	croconaw: 1908 + 11,
	cleffa: 1908 + 12,
	igglybuff: 1908 + 13,
	politoed: 1908 + 14,
	unownb: 1908 + 15,
	unownc: 1908 + 16,
	unownd: 1908 + 17,
	unowne: 1908 + 18,
	unownf: 1908 + 19,
	unowng: 1908 + 20,
	unownh: 1908 + 21,
	unownj: 1908 + 22,
	unownk: 1908 + 23,
	unownl: 1908 + 24,
	unownm: 1908 + 25,
	unownn: 1908 + 26,
	unownp: 1908 + 27,
	unownq: 1908 + 28,
	unownquestion: 1908 + 29,
	unownr: 1908 + 30,
	unowns: 1908 + 31,
	unownt: 1908 + 32,
	unownv: 1908 + 33,
	unownz: 1908 + 34,
	sneasel: 1908 + 35,
	teddiursa: 1908 + 36,
	roselia: 1908 + 37,
	zangoose: 1908 + 38,
	seviper: 1908 + 39,
	castformsnowy: 1908 + 40,
	absolmega: 1908 + 41,
	absol: 1908 + 42,
	regirock: 1908 + 43,
	torterra: 1908 + 44,
	budew: 1908 + 45,
	roserade: 1908 + 46,
	magmortar: 1908 + 47,
	togekiss: 1908 + 48,
	rotomwash: 1908 + 49,
	shayminsky: 1908 + 50,
	emboar: 1908 + 51,
	pansear: 1908 + 52,
	simisear: 1908 + 53,
	drilbur: 1908 + 54,
	excadrill: 1908 + 55,
	sawk: 1908 + 56,
	lilligant: 1908 + 57,
	garbodor: 1908 + 58,
	solosis: 1908 + 59,
	vanilluxe: 1908 + 60,
	amoonguss: 1908 + 61,
	klink: 1908 + 62,
	klang: 1908 + 63,
	klinklang: 1908 + 64,
	litwick: 1908 + 65,
	golett: 1908 + 66,
	golurk: 1908 + 67,
	kyuremblack: 1908 + 68,
	kyuremwhite: 1908 + 69,
	kyurem: 1908 + 70,
	keldeoresolute: 1908 + 71,
	meloetta: 1908 + 72,
	greninja: 1908 + 73,
	greninjabond: 1908 + 73,
	greninjaash: 1908 + 74,
	furfroudebutante: 1908 + 75,
	barbaracle: 1908 + 76,
	clauncher: 1908 + 77,
	clawitzer: 1908 + 78,
	sylveon: 1908 + 79,
	klefki: 1908 + 80,
	zygarde: 1908 + 81,
	zygarde10: 1908 + 82,
	zygardecomplete: 1908 + 83,
	dartrix: 1908 + 84,
	steenee: 1908 + 85,
	tsareena: 1908 + 86,
	comfey: 1908 + 87,
	miniormeteor: 1908 + 88,
	minior: 1908 + 89,
	miniororange: 1908 + 90,
	minioryellow: 1908 + 91,
	miniorgreen: 1908 + 92,
	miniorblue: 1908 + 93,
	miniorviolet: 1908 + 94,
	miniorindigo: 1908 + 95,
	dhelmise: 1908 + 96,
	necrozma: 1908 + 97,
	marshadow: 1908 + 98,
	pikachuoriginal: 1908 + 99,
	pikachupartner: 1908 + 100,
	necrozmaduskmane: 1908 + 101,
	necrozmadawnwings: 1908 + 102,
	necrozmaultra: 1908 + 103,
	stakataka: 1908 + 104,
	blacephalon: 1908 + 105,
};

export const BattleAvatarNumbers: { [k: string]: string } = {
	1: 'lucas',
	2: 'dawn',
	3: 'youngster-gen4dp',
	4: 'lass-gen4dp',
	5: 'camper',
	6: 'picnicker',
	7: 'bugcatcher-gen4dp',
	8: 'aromalady',
	9: 'twins-gen4dp',
	10: 'hiker-gen4',
	11: 'battlegirl-gen4',
	12: 'fisherman-gen4',
	13: 'cyclist-gen4',
	14: 'cyclistf-gen4',
	15: 'blackbelt-gen4dp',
	16: 'artist-gen4',
	17: 'pokemonbreeder-gen4',
	18: 'pokemonbreederf-gen4',
	19: 'cowgirl',
	20: 'jogger',
	21: 'pokefan-gen4',
	22: 'pokefanf-gen4',
	23: 'pokekid',
	24: 'youngcouple-gen4dp',
	25: 'acetrainer-gen4dp',
	26: 'acetrainerf-gen4dp',
	27: 'waitress-gen4',
	28: 'veteran-gen4',
	29: 'ninjaboy',
	30: 'dragontamer',
	31: 'birdkeeper-gen4dp',
	32: 'doubleteam',
	33: 'richboy-gen4',
	34: 'lady-gen4',
	35: 'gentleman-gen4dp',
	36: 'madame-gen4dp',
	37: 'beauty-gen4dp',
	38: 'collector',
	39: 'policeman-gen4',
	40: 'pokemonranger-gen4',
	41: 'pokemonrangerf-gen4',
	42: 'scientist-gen4dp',
	43: 'swimmer-gen4dp',
	44: 'swimmerf-gen4dp',
	45: 'tuber',
	46: 'tuberf',
	47: 'sailor',
	48: 'sisandbro',
	49: 'ruinmaniac',
	50: 'psychic-gen4',
	51: 'psychicf-gen4',
	52: 'gambler',
	53: 'guitarist-gen4',
	54: 'acetrainersnow',
	55: 'acetrainersnowf',
	56: 'skier',
	57: 'skierf-gen4dp',
	58: 'roughneck-gen4',
	59: 'clown',
	60: 'worker-gen4',
	61: 'schoolkid-gen4dp',
	62: 'schoolkidf-gen4',
	63: 'roark',
	64: 'barry',
	65: 'byron',
	66: 'aaron',
	67: 'bertha',
	68: 'flint',
	69: 'lucian',
	70: 'cynthia-gen4',
	71: 'bellepa',
	72: 'rancher',
	73: 'mars',
	74: 'galacticgrunt',
	75: 'gardenia',
	76: 'crasherwake',
	77: 'maylene',
	78: 'fantina',
	79: 'candice',
	80: 'volkner',
	81: 'parasollady-gen4',
	82: 'waiter-gen4dp',
	83: 'interviewers',
	84: 'cameraman',
	85: 'reporter',
	86: 'idol',
	87: 'cyrus',
	88: 'jupiter',
	89: 'saturn',
	90: 'galacticgruntf',
	91: 'argenta',
	92: 'palmer',
	93: 'thorton',
	94: 'buck',
	95: 'darach-caitlin',
	96: 'marley',
	97: 'mira',
	98: 'cheryl',
	99: 'riley',
	100: 'dahlia',
	101: 'ethan',
	102: 'lyra',
	103: 'twins-gen4',
	104: 'lass-gen4',
	105: 'acetrainer-gen4',
	106: 'acetrainerf-gen4',
	107: 'juggler',
	108: 'sage',
	109: 'li',
	110: 'gentleman-gen4',
	111: 'teacher',
	112: 'beauty',
	113: 'birdkeeper',
	114: 'swimmer-gen4',
	115: 'swimmerf-gen4',
	116: 'kimonogirl',
	117: 'scientist-gen4',
	118: 'acetrainercouple',
	119: 'youngcouple',
	120: 'supernerd',
	121: 'medium',
	122: 'schoolkid-gen4',
	123: 'blackbelt-gen4',
	124: 'pokemaniac',
	125: 'firebreather',
	126: 'burglar',
	127: 'biker-gen4',
	128: 'skierf',
	129: 'boarder',
	130: 'rocketgrunt',
	131: 'rocketgruntf',
	132: 'archer',
	133: 'ariana',
	134: 'proton',
	135: 'petrel',
	136: 'eusine',
	137: 'lucas-gen4pt',
	138: 'dawn-gen4pt',
	139: 'madame-gen4',
	140: 'waiter-gen4',
	141: 'falkner',
	142: 'bugsy',
	143: 'whitney',
	144: 'morty',
	145: 'chuck',
	146: 'jasmine',
	147: 'pryce',
	148: 'clair',
	149: 'will',
	150: 'koga',
	151: 'bruno',
	152: 'karen',
	153: 'lance',
	154: 'brock',
	155: 'misty',
	156: 'ltsurge',
	157: 'erika',
	158: 'janine',
	159: 'sabrina',
	160: 'blaine',
	161: 'blue',
	162: 'red',
	163: 'red',
	164: 'silver',
	165: 'giovanni',
	166: 'unknownf',
	167: 'unknown',
	168: 'unknown',
	169: 'hilbert',
	170: 'hilda',
	171: 'youngster',
	172: 'lass',
	173: 'schoolkid',
	174: 'schoolkidf',
	175: 'smasher',
	176: 'linebacker',
	177: 'waiter',
	178: 'waitress',
	179: 'chili',
	180: 'cilan',
	181: 'cress',
	182: 'nurseryaide',
	183: 'preschoolerf',
	184: 'preschooler',
	185: 'twins',
	186: 'pokemonbreeder',
	187: 'pokemonbreederf',
	188: 'lenora',
	189: 'burgh',
	190: 'elesa',
	191: 'clay',
	192: 'skyla',
	193: 'pokemonranger',
	194: 'pokemonrangerf',
	195: 'worker',
	196: 'backpacker',
	197: 'backpackerf',
	198: 'fisherman',
	199: 'musician',
	200: 'dancer',
	201: 'harlequin',
	202: 'artist',
	203: 'baker',
	204: 'psychic',
	205: 'psychicf',
	206: 'cheren',
	207: 'bianca',
	208: 'plasmagrunt-gen5bw',
	209: 'n',
	210: 'richboy',
	211: 'lady',
	212: 'pilot',
	213: 'workerice',
	214: 'hoopster',
	215: 'scientistf',
	216: 'clerkf',
	217: 'acetrainerf',
	218: 'acetrainer',
	219: 'blackbelt',
	220: 'scientist',
	221: 'striker',
	222: 'brycen',
	223: 'iris',
	224: 'drayden',
	225: 'roughneck',
	226: 'janitor',
	227: 'pokefan',
	228: 'pokefanf',
	229: 'doctor',
	230: 'nurse',
	231: 'hooligans',
	232: 'battlegirl',
	233: 'parasollady',
	234: 'clerk',
	235: 'clerk-boss',
	236: 'backers',
	237: 'backersf',
	238: 'veteran',
	239: 'veteranf',
	240: 'biker',
	241: 'infielder',
	242: 'hiker',
	243: 'madame',
	244: 'gentleman',
	245: 'plasmagruntf-gen5bw',
	246: 'shauntal',
	247: 'marshal',
	248: 'grimsley',
	249: 'caitlin',
	250: 'ghetsis-gen5bw',
	251: 'depotagent',
	252: 'swimmer',
	253: 'swimmerf',
	254: 'policeman',
	255: 'maid',
	256: 'ingo',
	257: 'alder',
	258: 'cyclist',
	259: 'cyclistf',
	260: 'cynthia',
	261: 'emmet',
	262: 'hilbert-wonderlauncher',
	263: 'hilda-wonderlauncher',
	264: 'hugh',
	265: 'rosa',
	266: 'nate',
	267: 'colress',
	268: 'beauty-gen5bw2',
	269: 'ghetsis',
	270: 'plasmagrunt',
	271: 'plasmagruntf',
	272: 'iris-gen5bw2',
	273: 'brycenman',
	274: 'shadowtriad',
	275: 'rood',
	276: 'zinzolin',
	277: 'cheren-gen5bw2',
	278: 'marlon',
	279: 'roxie',
	280: 'roxanne',
	281: 'brawly',
	282: 'wattson',
	283: 'flannery',
	284: 'norman',
	285: 'winona',
	286: 'tate',
	287: 'liza',
	288: 'juan',
	289: 'guitarist',
	290: 'steven',
	291: 'wallace',
	292: 'bellelba',
	293: 'benga',
	294: 'ash',
	'#bw2elesa': 'elesa-gen5bw2',
	'#teamrocket': 'teamrocket',
	'#yellow': 'yellow',
	'#zinnia': 'zinnia',
	'#clemont': 'clemont',
	'#wally': 'wally',
	breeder: 'pokemonbreeder',
	breederf: 'pokemonbreederf',
	'hilbert-dueldisk': 'hilbert-wonderlauncher',
	'hilda-dueldisk': 'hilda-wonderlauncher',
	'nate-dueldisk': 'nate-wonderlauncher',
	'rosa-dueldisk': 'rosa-wonderlauncher',

	1001: '#1001',
	1002: '#1002',
	1003: '#1003',
	1005: '#1005',
	1010: '#1010',
};

export type StatName = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';
export type NatureName = 'Adamant' | 'Bashful' | 'Bold' | 'Brave' | 'Calm' | 'Careful' | 'Docile' | 'Gentle' |
	'Hardy' | 'Hasty' | 'Impish' | 'Jolly' | 'Lax' | 'Lonely' | 'Mild' | 'Modest' | 'Naive' | 'Naughty' |
	'Quiet' | 'Quirky' | 'Rash' | 'Relaxed' | 'Sassy' | 'Serious' | 'Timid';
export type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
export type TypeName = 'Normal' | 'Fighting' | 'Flying' | 'Poison' | 'Ground' | 'Rock' | 'Bug' | 'Ghost' | 'Steel' |
	'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Ice' | 'Dragon' | 'Dark' | 'Fairy' | 'Stellar' | '???';
export type StatusName = 'par' | 'psn' | 'frz' | 'slp' | 'brn' | 'fst';
export type BoostStatName = 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'evasion' | 'accuracy' | 'spc';
export type GenderName = 'M' | 'F' | 'N';

export interface Effect {
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly effectType: 'Item' | 'Move' | 'Ability' | 'Species' | 'PureEffect';
	/**
	 * Do we have data on this item/move/ability/species?
	 * WARNING: Always false if the relevant data files aren't loaded.
	 */
	readonly exists: boolean;
}

export class PureEffect implements Effect {
	readonly effectType = 'PureEffect';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;
	constructor(id: ID, name: string) {
		this.id = id;
		this.name = name;
		this.gen = 0;
		this.exists = false;
	}
}

export class Item implements Effect {
	// effect
	readonly effectType = 'Item';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly spritenum: number;
	readonly desc: string;
	readonly shortDesc: string;

	readonly megaStone: string;
	readonly megaEvolves: string;
	readonly zMove: string | true | null;
	readonly zMoveType: TypeName | '';
	readonly zMoveFrom: string;
	readonly zMoveUser: readonly string[] | null;
	readonly onPlate: TypeName;
	readonly onMemory: TypeName;
	readonly onDrive: TypeName;
	readonly fling: any;
	readonly naturalGift: { basePower: number, type: TypeName };
	readonly isPokeball: boolean;
	readonly itemUser?: readonly string[];

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.num = data.num || 0;
		this.spritenum = data.spritenum || 0;
		this.desc = data.desc || data.shortDesc || '';
		this.shortDesc = data.shortDesc || this.desc;

		this.megaStone = data.megaStone || '';
		this.megaEvolves = data.megaEvolves || '';
		this.zMove = data.zMove || null;
		this.zMoveType = data.zMoveType || '';
		this.zMoveFrom = data.zMoveFrom || '';
		this.zMoveUser = data.zMoveUser || null;
		this.onPlate = data.onPlate || '';
		this.onMemory = data.onMemory || '';
		this.onDrive = data.onDrive || '';
		this.fling = data.fling || null;
		this.naturalGift = data.naturalGift || null;
		this.isPokeball = !!data.isPokeball;
		this.itemUser = data.itemUser;

		if (!this.gen) {
			if (this.num >= 577) {
				this.gen = 6;
			} else if (this.num >= 537) {
				this.gen = 5;
			} else if (this.num >= 377) {
				this.gen = 4;
			} else {
				this.gen = 3;
			}
		}
	}
}

export interface MoveFlags {
	/** The move has an animation when used on an ally. */
	allyanim?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability. */
	bite?: 1 | 0;
	/** Has no effect on Pokemon with the Bulletproof Ability. */
	bullet?: 1 | 0;
	/** Ignores a target's substitute. */
	bypasssub?: 1 | 0;
	/** The user is unable to make a move between turns. */
	charge?: 1 | 0;
	/** Makes contact. */
	contact?: 1 | 0;
	/** When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move. */
	dance?: 1 | 0;
	/** Thaws the user if executed successfully while the user is frozen. */
	defrost?: 1 | 0;
	/** Can target a Pokemon positioned anywhere in a Triple Battle. */
	distance?: 1 | 0;
	/** Prevented from being executed or selected during Gravity's effect. */
	gravity?: 1 | 0;
	/** Prevented from being executed or selected during Heal Block's effect. */
	heal?: 1 | 0;
	/** Can be copied by Mirror Move. */
	mirror?: 1 | 0;
	/** Prevented from being executed or selected in a Sky Battle. */
	nonsky?: 1 | 0;
	/** Cannot be copied by Sketch */
	nosketch?: 1 | 0;
	/** Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles. */
	powder?: 1 | 0;
	/** Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield. */
	protect?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability. */
	pulse?: 1 | 0;
	/** Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability. */
	punch?: 1 | 0;
	/** If this move is successful, the user must recharge on the following turn and cannot make a move. */
	recharge?: 1 | 0;
	/** Bounced back to the original user by Magic Coat or the Magic Bounce Ability. */
	reflectable?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Sharpness Ability. */
	slicing?: 1 | 0;
	/** Can be stolen from the original user and instead used by another Pokemon using Snatch. */
	snatch?: 1 | 0;
	/** Has no effect on Pokemon with the Soundproof Ability. */
	sound?: 1 | 0;
	/** Activates the effects of the Wind Power and Wind Rider Abilities. */
	wind?: 1 | 0;
}

export type MoveTarget = 'normal' | 'any' | 'adjacentAlly' | 'adjacentFoe' | 'adjacentAllyOrSelf' | // single-target
	'self' | 'randomNormal' | // single-target, automatic
	'allAdjacent' | 'allAdjacentFoes' | // spread
	'allySide' | 'foeSide' | 'all'; // side and field

export class Move implements Effect {
	// effect
	readonly effectType = 'Move';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly basePower: number;
	readonly accuracy: number | true;
	readonly pp: number;
	readonly type: TypeName;
	readonly category: 'Physical' | 'Special' | 'Status';
	readonly priority: number;
	readonly target: MoveTarget;
	readonly pressureTarget: MoveTarget;
	readonly flags: Readonly<MoveFlags>;
	readonly critRatio: number;
	readonly damage?: number | 'level' | false | null;

	readonly desc: string;
	readonly shortDesc: string;
	readonly isNonstandard: string | null;
	readonly isZ: ID;
	readonly zMove?: {
		basePower?: number,
		effect?: string,
		boost?: { [stat in StatName]?: number },
	};
	readonly isMax: boolean | string;
	readonly maxMove: { basePower: number };
	readonly ohko: true | 'Ice' | null;
	readonly recoil: number[] | null;
	readonly heal: number[] | null;
	readonly multihit: number[] | number | null;
	readonly hasCrashDamage: boolean;
	readonly basePowerCallback: boolean;
	readonly noPPBoosts: boolean;
	readonly status: string;
	readonly secondaries: readonly any[] | null;
	readonly num: number;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.basePower = data.basePower || 0;
		this.accuracy = data.accuracy || 0;
		this.pp = data.pp || 1;
		this.type = data.type || '???';
		this.category = data.category || 'Physical';
		this.priority = data.priority || 0;
		this.target = data.target || 'normal';
		this.pressureTarget = data.pressureTarget || this.target;
		this.flags = data.flags || {};
		this.critRatio = data.critRatio === 0 ? 0 : (data.critRatio || 1);
		this.damage = data.damage;

		// TODO: move to text.js
		this.desc = data.desc;
		this.shortDesc = data.shortDesc;
		this.isNonstandard = data.isNonstandard || null;
		this.isZ = data.isZ || '';
		this.zMove = data.zMove || {};
		this.ohko = data.ohko || null;
		this.recoil = data.recoil || null;
		this.heal = data.heal || null;
		this.multihit = data.multihit || null;
		this.hasCrashDamage = data.hasCrashDamage || false;
		this.basePowerCallback = !!data.basePowerCallback;
		this.noPPBoosts = data.noPPBoosts || false;
		this.status = data.status || '';
		this.secondaries = data.secondaries || (data.secondary ? [data.secondary] : null);

		this.isMax = data.isMax || false;
		this.maxMove = data.maxMove || { basePower: 0 };
		if (this.category !== 'Status' && !this.maxMove?.basePower) {
			if (this.isZ || this.isMax) {
				this.maxMove = { basePower: 1 };
			} else if (!this.basePower) {
				this.maxMove = { basePower: 100 };
			} else if (['Fighting', 'Poison'].includes(this.type)) {
				if (this.basePower >= 150) {
					this.maxMove = { basePower: 100 };
				} else if (this.basePower >= 110) {
					this.maxMove = { basePower: 95 };
				} else if (this.basePower >= 75) {
					this.maxMove = { basePower: 90 };
				} else if (this.basePower >= 65) {
					this.maxMove = { basePower: 85 };
				} else if (this.basePower >= 55) {
					this.maxMove = { basePower: 80 };
				} else if (this.basePower >= 45) {
					this.maxMove = { basePower: 75 };
				} else {
					this.maxMove = { basePower: 70 };
				}
			} else {
				if (this.basePower >= 150) {
					this.maxMove = { basePower: 150 };
				} else if (this.basePower >= 110) {
					this.maxMove = { basePower: 140 };
				} else if (this.basePower >= 75) {
					this.maxMove = { basePower: 130 };
				} else if (this.basePower >= 65) {
					this.maxMove = { basePower: 120 };
				} else if (this.basePower >= 55) {
					this.maxMove = { basePower: 110 };
				} else if (this.basePower >= 45) {
					this.maxMove = { basePower: 100 };
				} else {
					this.maxMove = { basePower: 90 };
				}
			}
		}

		if (this.category !== 'Status' && !this.isZ && !this.isMax) {
			let basePower = this.basePower;
			this.zMove = {};
			if (Array.isArray(this.multihit)) basePower *= 3;
			if (!basePower) {
				this.zMove.basePower = 100;
			} else if (basePower >= 140) {
				this.zMove.basePower = 200;
			} else if (basePower >= 130) {
				this.zMove.basePower = 195;
			} else if (basePower >= 120) {
				this.zMove.basePower = 190;
			} else if (basePower >= 110) {
				this.zMove.basePower = 185;
			} else if (basePower >= 100) {
				this.zMove.basePower = 180;
			} else if (basePower >= 90) {
				this.zMove.basePower = 175;
			} else if (basePower >= 80) {
				this.zMove.basePower = 160;
			} else if (basePower >= 70) {
				this.zMove.basePower = 140;
			} else if (basePower >= 60) {
				this.zMove.basePower = 120;
			} else {
				this.zMove.basePower = 100;
			}
			if (data.zMove) this.zMove.basePower = data.zMove.basePower;
		}

		this.num = data.num || 0;
		if (!this.gen) {
			if (this.num >= 743) {
				this.gen = 8;
			} else if (this.num >= 622) {
				this.gen = 7;
			} else if (this.num >= 560) {
				this.gen = 6;
			} else if (this.num >= 468) {
				this.gen = 5;
			} else if (this.num >= 355) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 166) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

export interface AbilityFlags {
	/** Can be suppressed by Mold Breaker and related effects */
	breakable?: 1;
	/** Ability can't be suppressed by e.g. Gastro Acid or Neutralizing Gas */
	cantsuppress?: 1;
	/** Role Play fails if target has this Ability */
	failroleplay?: 1;
	/** Skill Swap fails if either the user or target has this Ability */
	failskillswap?: 1;
	/** Entrainment fails if user has this Ability */
	noentrain?: 1;
	/** Receiver and Power of Alchemy will not activate if an ally faints with this Ability */
	noreceiver?: 1;
	/** Trace cannot copy this Ability */
	notrace?: 1;
	/** Disables the Ability if the user is Transformed */
	notransform?: 1;
}

export class Ability implements Effect {
	// effect
	readonly effectType = 'Ability';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly shortDesc: string;
	readonly desc: string;

	readonly rating: number;
	readonly flags: AbilityFlags;
	readonly isNonstandard: boolean;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.num = data.num || 0;
		this.shortDesc = data.shortDesc || data.desc || '';
		this.desc = data.desc || data.shortDesc || '';
		this.rating = data.rating || 1;
		this.flags = data.flags || {};
		this.isNonstandard = !!data.isNonstandard;
		if (!this.gen) {
			if (this.num >= 234) {
				this.gen = 8;
			} else if (this.num >= 192) {
				this.gen = 7;
			} else if (this.num >= 165) {
				this.gen = 6;
			} else if (this.num >= 124) {
				this.gen = 5;
			} else if (this.num >= 77) {
				this.gen = 4;
			} else if (this.num >= 1) {
				this.gen = 3;
			}
		}
	}
}

export class Species implements Effect {
	// effect
	readonly effectType = 'Species';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	// name
	readonly baseSpecies: string;
	readonly forme: string;
	readonly formeid: string;
	readonly spriteid: string;
	readonly baseForme: string;

	// basic data
	readonly num: number;
	readonly types: readonly TypeName[];
	readonly abilities: Readonly<{
		0: string, 1?: string, H?: string, S?: string,
	}>;
	readonly baseStats: Readonly<{
		hp: number, atk: number, def: number, spa: number, spd: number, spe: number,
	}>;
	readonly bst: number;
	readonly weightkg: number;

	// flavor data
	readonly heightm: number;
	readonly gender: GenderName;
	readonly color: string;
	readonly genderRatio: Readonly<{ M: number, F: number }> | null;
	readonly eggGroups: readonly string[];
	readonly tags: readonly string[];

	// format data
	readonly otherFormes: readonly string[] | null;
	readonly cosmeticFormes: readonly string[] | null;
	readonly evos: readonly string[] | null;
	readonly prevo: string;
	readonly evoType: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other' | '';
	readonly evoLevel: number;
	readonly evoMove: string;
	readonly evoItem: string;
	readonly evoCondition: string;
	readonly nfe: boolean;
	readonly requiredItems: readonly string[];
	readonly tier: string;
	readonly isTotem: boolean;
	readonly isMega: boolean;
	readonly isPrimal: boolean;
	readonly canGigantamax: boolean;
	readonly cannotDynamax: boolean;
	readonly requiredTeraType: TypeName;
	readonly battleOnly: string | string[] | undefined;
	readonly isNonstandard: string | null;
	readonly unreleasedHidden: boolean | 'Past';
	readonly changesFrom: string | undefined;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.baseSpecies = data.baseSpecies || name;
		this.forme = data.forme || '';
		const baseId = toID(this.baseSpecies);
		this.formeid = (baseId === this.id ? '' : '-' + toID(this.forme));
		this.spriteid = baseId + this.formeid;
		if (this.spriteid.endsWith('totem')) this.spriteid = this.spriteid.slice(0, -5);
		if (this.spriteid === 'greninja-bond') this.spriteid = 'greninja';
		if (this.spriteid === 'rockruff-dusk') this.spriteid = 'rockruff';
		if (this.spriteid.endsWith('-')) this.spriteid = this.spriteid.slice(0, -1);
		this.baseForme = data.baseForme || '';

		this.num = data.num || 0;
		this.types = data.types || ['???'];
		this.abilities = data.abilities || { 0: "No Ability" };
		this.baseStats = data.baseStats || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
		this.bst = this.baseStats.hp + this.baseStats.atk + this.baseStats.def +
			this.baseStats.spa + this.baseStats.spd + this.baseStats.spe;
		this.weightkg = data.weightkg || 0;

		this.heightm = data.heightm || 0;
		this.gender = data.gender || '';
		this.color = data.color || '';
		this.genderRatio = data.genderRatio || null;
		this.eggGroups = data.eggGroups || [];
		this.tags = data.tags || [];

		this.otherFormes = data.otherFormes || null;
		this.cosmeticFormes = data.cosmeticFormes || null;
		this.evos = data.evos || null;
		this.prevo = data.prevo || '';
		this.evoType = data.evoType || '';
		this.evoLevel = data.evoLevel || 0;
		this.evoMove = data.evoMove || '';
		this.evoItem = data.evoItem || '';
		this.evoCondition = data.evoCondition || '';
		this.nfe = data.nfe || false;
		this.requiredItems = data.requiredItems || (data.requiredItem ? [data.requiredItem] : []);
		this.tier = data.tier || '';

		this.isTotem = false;
		this.isMega = !!(this.forme && ['-mega', '-megax', '-megay'].includes(this.formeid));
		this.isPrimal = !!(this.forme && this.formeid === '-primal');
		this.canGigantamax = !!data.canGigantamax;
		this.cannotDynamax = !!data.cannotDynamax;
		this.requiredTeraType = data.requiredTeraType || '';
		this.battleOnly = data.battleOnly || (this.isMega ? this.baseSpecies : undefined);
		this.isNonstandard = data.isNonstandard || null;
		this.unreleasedHidden = data.unreleasedHidden || false;
		this.changesFrom = data.changesFrom ||
			(this.battleOnly !== this.baseSpecies ? this.battleOnly : this.baseSpecies);
		if (!this.gen) {
			if (this.num >= 906 || this.formeid.startsWith('-paldea')) {
				this.gen = 9;
			} else if (this.num >= 810 || this.formeid.startsWith('-galar') || this.formeid.startsWith('-hisui')) {
				this.gen = 8;
			} else if (this.num >= 722 || this.formeid === '-alola' || this.formeid === '-starter') {
				this.gen = 7;
			} else if (this.isMega || this.isPrimal) {
				this.gen = 6;
				this.battleOnly = this.baseSpecies;
			} else if (this.formeid === '-totem' || this.formeid === '-alolatotem') {
				this.gen = 7;
				this.isTotem = true;
			} else if (this.num >= 650) {
				this.gen = 6;
			} else if (this.num >= 494) {
				this.gen = 5;
			} else if (this.num >= 387) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 152) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

export interface Type extends Effect {
	damageTaken?: Record<Dex.TypeName, Dex.WeaknessType>;
	HPivs?: Partial<Dex.StatsTable>;
	HPdvs?: Partial<Dex.StatsTable>;
}

declare const require: any;
declare const global: any;
if (typeof require === 'function') {
	// in Node
	global.BattleBaseSpeciesChart = BattleBaseSpeciesChart;
	global.BattleNatures = BattleNatures;
	global.PureEffect = PureEffect;
	global.Species = Species;
	global.Ability = Ability;
	global.Item = Item;
	global.Move = Move;
}
