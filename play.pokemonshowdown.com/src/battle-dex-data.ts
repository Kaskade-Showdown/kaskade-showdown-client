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
	raichumegax: 1272 + 6,
	raichumegay: 1272 + 7,
	clefablemega: 1272 + 8,
	alakazammega: 1272 + 9,
	victreebelmega: 1272 + 10,
	slowbromega: 1272 + 11,
	gengarmega: 1272 + 12,
	kangaskhanmega: 1272 + 13,
	starmiemega: 1272 + 14,
	pinsirmega: 1272 + 15,
	gyaradosmega: 1272 + 16,
	aerodactylmega: 1272 + 17,
	dragonitemega: 1272 + 18,
	mewtwomegax: 1272 + 19,
	mewtwomegay: 1272 + 20,
	meganiummega: 1272 + 21,
	feraligatrmega: 1272 + 22,
	ampharosmega: 1272 + 23,
	steelixmega: 1272 + 24,
	scizormega: 1272 + 25,
	heracrossmega: 1272 + 26,
	skarmorymega: 1272 + 27,
	houndoommega: 1272 + 28,
	tyranitarmega: 1272 + 29,
	sceptilemega: 1272 + 30,
	blazikenmega: 1272 + 31,
	swampertmega: 1272 + 32,
	gardevoirmega: 1272 + 33,
	sableyemega: 1272 + 34,
	mawilemega: 1272 + 35,
	aggronmega: 1272 + 36,
	medichammega: 1272 + 37,
	manectricmega: 1272 + 38,
	sharpedomega: 1272 + 39,
	cameruptmega: 1272 + 40,
	altariamega: 1272 + 41,
	banettemega: 1272 + 42,
	chimechomega: 1272 + 43,
	absolmega: 1272 + 44,
	absolmegaz: 1272 + 45,
	glaliemega: 1272 + 46,
	salamencemega: 1272 + 47,
	metagrossmega: 1272 + 48,
	latiasmega: 1272 + 49,
	latiosmega: 1272 + 50,
	kyogreprimal: 1272 + 51,
	groudonprimal: 1272 + 52,
	rayquazamega: 1272 + 53,
	staraptormega: 1272 + 54,
	lopunnymega: 1272 + 55,
	garchompmega: 1272 + 56,
	garchompmegaz: 1272 + 57,
	lucariomega: 1272 + 58,
	lucariomegaz: 1272 + 59,
	abomasnowmega: 1272 + 60,
	gallademega: 1272 + 61,
	froslassmega: 1272 + 62,
	heatranmega: 1272 + 63,
	darkraimega: 1272 + 64,
	emboarmega: 1272 + 65,
	excadrillmega: 1272 + 66,
	audinomega: 1272 + 67,
	scolipedemega: 1272 + 68,
	scraftymega: 1272 + 69,
	eelektrossmega: 1272 + 70,
	chandeluremega: 1272 + 71,
	golurkmega: 1272 + 72,
	chesnaughtmega: 1272 + 73,
	delphoxmega: 1272 + 74,
	greninjamega: 1272 + 75,
	pyroarmega: 1272 + 76,
	floettemega: 1272 + 77,
	meowsticmega: 1272 + 78,
	malamarmega: 1272 + 79,
	barbaraclemega: 1272 + 80,
	dragalgemega: 1272 + 81,
	hawluchamega: 1272 + 82,
	zygardemega: 1272 + 83,
	dianciemega: 1272 + 84,
	crabominablemega: 1272 + 85,
	golisopodmega: 1272 + 86,
	drampamega: 1272 + 87,
	magearnamega: 1272 + 88,
	magearnaoriginalmega: 1272 + 89,
	zeraoramega: 1272 + 90,
	falinksmega: 1272 + 91,
	scovillainmega: 1272 + 92,
	glimmoramega: 1272 + 93,
	tatsugiricurlymega: 1272 + 94,
	tatsugiridroopymega: 1272 + 95,
	tatsugiristretchymega: 1272 + 96,
	baxcaliburmega: 1272 + 97,

	// G-max
	venusaurgmax: 1380 + 0,
	charizardgmax: 1380 + 1,
	blastoisegmax: 1380 + 2,
	butterfreegmax: 1380 + 3,
	pikachugmax: 1380 + 4,
	meowthgmax: 1380 + 5,
	machampgmax: 1380 + 6,
	gengargmax: 1380 + 7,
	kinglergmax: 1380 + 8,
	laprasgmax: 1380 + 9,
	eeveegmax: 1380 + 10,
	snorlaxgmax: 1380 + 11,
	garbodorgmax: 1380 + 12,
	melmetalgmax: 1380 + 13,
	rillaboomgmax: 1380 + 14,
	cinderacegmax: 1380 + 15,
	inteleongmax: 1380 + 16,
	corviknightgmax: 1380 + 17,
	orbeetlegmax: 1380 + 18,
	drednawgmax: 1380 + 19,
	coalossalgmax: 1380 + 20,
	flapplegmax: 1380 + 21,
	appletungmax: 1380 + 22,
	sandacondagmax: 1380 + 23,
	toxtricitygmax: 1380 + 24,
	centiskorchgmax: 1380 + 25,
	hatterenegmax: 1380 + 26,
	grimmsnarlgmax: 1380 + 27,
	alcremiegmax: 1380 + 28,
	copperajahgmax: 1380 + 29,
	duraludongmax: 1380 + 30,
	eternatuseternamax: 1380 + 31,
	urshifugmax: 1380 + 32,
	urshifurapidstrikegmax: 1380 + 33,

	/////////////////////////////////////
	// Misc. forms
	// Gen 1
	venusaurf: 1416 + 0,
	butterfreef: 1416 + 1,
	rattataf: 1416 + 2,
	raticatef: 1416 + 3,
	raticatekaskadef: 1416 + 4,
	pikachuf: 1416 + 5,
	pikachucosplay: 1416 + 6,
	pikachurockstar: 1416 + 7,
	pikachubelle: 1416 + 8,
	pikachupopstar: 1416 + 9,
	pikachuphd: 1416 + 10,
	pikachulibre: 1416 + 11,
	pikachupartner: 1416 + 12,
	pikachuhoenn: 1416 + 13,
	pikachusinnoh: 1416 + 14,
	pikachuunova: 1416 + 15,
	pikachukalos: 1416 + 16,
	pikachualola: 1416 + 17,
	pikachuoriginal: 1416 + 18,
	pikachuworld: 1416 + 19,
	pikachustarter: 1416 + 20,
	pikachustarterf: 1416 + 21,
	raichuf: 1416 + 22,
	zubatf: 1416 + 23,
	golbatf: 1416 + 24,
	gloomf: 1416 + 25,
	vileplumef: 1416 + 26,
	kadabraf: 1416 + 27,
	alakazamf: 1416 + 28,
	doduof: 1416 + 29,
	dodriof: 1416 + 30,
	hypnof: 1416 + 31,
	rhyhornf: 1416 + 32,
	rhydonf: 1416 + 33,
	goldeenf: 1416 + 34,
	seakingf: 1416 + 35,
	scytherf: 1416 + 36,
	taurospaldeablaze: 1416 + 37,
	taurospaldeaaqua: 1416 + 38,
	magikarpf: 1416 + 39,
	gyaradosf: 1416 + 40,
	eeveef: 1416 + 41,
	eeveestart: 1416 + 42,
	eeveestarterf: 1416 + 43,
	// Gen 2
	meganiumf: 1460 + 0,
	ledybaf: 1460 + 1,
	ledian: 1460 + 2,
	pichuspikyeared: 1460 + 3,
	xatuf: 1460 + 4,
	sudowoodof: 1460 + 5,
	politoedf: 1460 + 6,
	aipomf: 1460 + 7,
	wooperf: 1460 + 8,
	quagsiref: 1460 + 9,
	murkrowf: 1460 + 10,
	unownb: 1460 + 11,
	unownc: 1460 + 12,
	unownd: 1460 + 13,
	unowne: 1460 + 14,
	unownf: 1460 + 15,
	unowng: 1460 + 16,
	unownh: 1460 + 17,
	unowni: 1460 + 18,
	unownj: 1460 + 19,
	unownk: 1460 + 20,
	unownl: 1460 + 21,
	unownm: 1460 + 22,
	unownn: 1460 + 23,
	unowno: 1460 + 24,
	unownp: 1460 + 25,
	unownq: 1460 + 26,
	unownr: 1460 + 27,
	unowns: 1460 + 28,
	unownt: 1460 + 29,
	unownu: 1460 + 30,
	unownv: 1460 + 31,
	unownw: 1460 + 32,
	unownx: 1460 + 33,
	unowny: 1460 + 34,
	unownz: 1460 + 35,
	unownexclamation: 1460 + 36,
	unownquestion: 1460 + 37,
	wobbuffetf: 1460 + 38,
	girafarigf: 1460 + 39,
	gligarf: 1460 + 40,
	steelixf: 1460 + 41,
	scizorf: 1460 + 42,
	heracrossf: 1460 + 43,
	sneaself: 1460 + 44,
	sneaselhisuif: 1460 + 45,
	ursaringf: 1460 + 46,
	piloswinef: 1460 + 47,
	octilleryf: 1460 + 48,
	houndoomf: 1460 + 49,
	donphanf: 1460 + 50,
	lugiashadow: 1460 + 51,
	// Gen 3
	torchicf: 1512 + 0,
	combuskenf: 1512 + 1,
	blazikenf: 1512 + 2,
	beautiflyf: 1512 + 3,
	dustoxf: 1512 + 4,
	ludicolof: 1512 + 5,
	nuzleaff: 1512 + 6,
	shiftryf: 1512 + 7,
	medititef: 1512 + 8,
	medichamf: 1512 + 9,
	roseliaf: 1512 + 10,
	gulpinf: 1512 + 11,
	swalotf: 1512 + 12,
	numelf: 1512 + 13,
	cameruptf: 1512 + 14,
	cacturnef: 1512 + 15,
	miloticf: 1512 + 16,
	castformsunny: 1512 + 17,
	castformrainy: 1512 + 18,
	castformsnowy: 1512 + 19,
	castformshady: 1512 + 20,
	castformsandy: 1512 + 21,
	castformdusty: 1512 + 22,
	castformallergy: 1512 + 23,
	castformswarmy: 1512 + 24,
	castformsmoggy: 1512 + 25,
	castformlovely: 1512 + 26,
	castformgutsy: 1512 + 27,
	castformspooky: 1512 + 28,
	castformzenny: 1512 + 29,
	castformsorcery: 1512 + 30,
	castformzappy: 1512 + 31,
	castformwindy: 1512 + 32,
	castformwhirly: 1512 + 33,
	relicanthf: 1512 + 34,
	deoxysattack: 1512 + 35,
	deoxysdefense: 1512 + 36,
	deoxysspeed: 1512 + 37,
	// Gen 4
	starlyf: 1550 + 0,
	staraviaf: 1550 + 1,
	staraptorf: 1550 + 2,
	bidooff: 1550 + 3,
	bibarelf: 1550 + 4,
	kricketotf: 1550 + 5,
	kricketunef: 1550 + 6,
	shinxf: 1550 + 7,
	shinxkaskadef: 1550 + 8,
	luxiof: 1550 + 9,
	luxiokaskadef: 1550 + 10,
	luxrayf: 1550 + 11,
	luxraykaskadef: 1550 + 12,
	roseradef: 1550 + 13,
	burmysandy: 1550 + 14,
	burmytrash: 1550 + 15,
	wormadamsandy: 1550 + 16,
	wormadamtrash: 1550 + 17,
	combeef: 1550 + 18,
	pachirisuf: 1550 + 19,
	buizelf: 1550 + 20,
	floatzelf: 1550 + 21,
	cherrimsunshine: 1550 + 22,
	shelloseast: 1550 + 23,
	gastrodoneast: 1550 + 24,
	ambipomf: 1550 + 25,
	ambipomkaskadef: 1550 + 26,
	giblef: 1550 + 27,
	gabitef: 1550 + 28,
	garchompf: 1550 + 29,
	hippopotasf: 1550 + 30,
	hippowdonf: 1550 + 31,
	croagunkf: 1550 + 32,
	toxicroakf: 1550 + 33,
	finneonf: 1550 + 34,
	lumineonf: 1550 + 35,
	snoverf: 1550 + 36,
	snoverlowland: 1550 + 37,
	snoverlowlandf: 1550 + 38,
	abomasnowf: 1550 + 39,
	abomasnowlowland: 1550 + 40,
	abomasnowlowlandf: 1550 + 41,
	weavilef: 1550 + 42,
	rhyperiorf: 1550 + 43,
	tangrowthf: 1550 + 44,
	mamoswinef: 1550 + 45,
	rotomheat: 1550 + 46,
	rotomwash: 1550 + 47,
	rotomfrost: 1550 + 48,
	rotomfan: 1550 + 49,
	rotommow: 1550 + 50,
	rotomjunk: 1550 + 51,
	rotomsway: 1550 + 52,
	rotombrawl: 1550 + 53,
	rotomweb: 1550 + 54,
	rotomsol: 1550 + 55,
	dialgaorigin: 1550 + 56,
	palkiaorigin: 1550 + 57,
	giratinaorigin: 1550 + 58,
	shayminsky: 1550 + 59,
	arceusfighting: 1550 + 60,
	arceusflying: 1550 + 61,
	arceuspoison: 1550 + 62,
	arceusground: 1550 + 63,
	arceusrock: 1550 + 64,
	arceusbug: 1550 + 65,
	arceusghost: 1550 + 66,
	arceussteel: 1550 + 67,
	arceusfire: 1550 + 68,
	arceuswater: 1550 + 69,
	arceusgrass: 1550 + 70,
	arceuselectric: 1550 + 71,
	arceuspsychic: 1550 + 72,
	arceusice: 1550 + 73,
	arceusdragon: 1550 + 74,
	arceusdark: 1550 + 75,
	arceusfairy: 1550 + 76,
	// Gen 5
	unfezantf: 1627 + 0,
	basculinbluestriped: 1627 + 1,
	basculinwhitestriped: 1627 + 2,
	darmanitanzen: 1627 + 3,
	darmanitangalarzen: 1627 + 4,
	deerlingsummer: 1627 + 5,
	deerlingautumn: 1627 + 6,
	sawsbucksummer: 1627 + 7,
	sawsbuckautumn: 1627 + 8,
	deerlingwinter: 1627 + 9,
	sawsbuckwinter: 1627 + 10,
	frillishf: 1627 + 11,
	jellicentf: 1627 + 12,
	tornadustherian: 1627 + 13,
	thundurustherian: 1627 + 14,
	landorustherian: 1627 + 15,
	kyuremblack: 1627 + 16,
	kyuremwhite: 1627 + 17,
	keldeoresolute: 1627 + 18,
	meloettapirouette: 1627 + 19,
	genesectdouse: 1627 + 20,
	genesectshock: 1627 + 21,
	genesectburn: 1627 + 22,
	genesectchill: 1627 + 23,
	// Gen 6
	greninjaash: 1651 + 0,
	vivillonpolar: 1651 + 1,
	vivillontundra: 1651 + 2,
	vivilloncontinental: 1651 + 3,
	vivillongarden: 1651 + 4,
	vivillonelegant: 1651 + 5,
	vivillonmeadow: 1651 + 6,
	vivillonmodern: 1651 + 7,
	vivillonmarine: 1651 + 8,
	vivillonarchipelago: 1651 + 9,
	vivillonhighplains: 1651 + 10,
	vivillonsandstorm: 1651 + 11,
	vivillonriver: 1651 + 12,
	vivillonmonsoon: 1651 + 13,
	vivillonsavanna: 1651 + 14,
	vivillonsun: 1651 + 15,
	vivillonocean: 1651 + 16,
	vivillonjungle: 1651 + 17,
	vivillonfancy: 1651 + 18,
	vivillonpokeball: 1651 + 19,
	pyroarf: 1651 + 20,
	flabebeyellow: 1651 + 21,
	flabebeorange: 1651 + 22,
	flabebeblue: 1651 + 23,
	flabebewhite: 1651 + 24,
	floetteyellow: 1651 + 25,
	floetteorange: 1651 + 26,
	floetteblue: 1651 + 27,
	floettewhite: 1651 + 28,
	floetteeternal: 1651 + 29,
	florgesyellow: 1651 + 30,
	florgesorange: 1651 + 31,
	florgesblue: 1651 + 32,
	florgeswhite: 1651 + 33,
	furfrouheart: 1651 + 34,
	furfroustar: 1651 + 35,
	furfroudiamond: 1651 + 36,
	furfroudebutante: 1651 + 37,
	furfroumatron: 1651 + 38,
	furfroudandy: 1651 + 39,
	furfroulareine: 1651 + 40,
	furfroukabuki: 1651 + 41,
	furfroupharaoh: 1651 + 42,
	meowsticf: 1651 + 43,
	aegislashblade: 1651 + 44,
	pumpkaboosmall: 1651 + 45,
	pumpkaboolarge: 1651 + 46,
	pumpkaboosuper: 1651 + 47,
	gourgeistsmall: 1651 + 48,
	gourgeistlarge: 1651 + 49,
	gourgeistsuper: 1651 + 50,
	xerneasneutral: 1651 + 51,
	zygarde10: 1651 + 52,
	zygardecomplete: 1651 + 53,
	hoopaunbound: 1651 + 54,
	// Gen 7
	oricoriopompom: 1706 + 0,
	oricoriopau: 1706 + 1,
	oricoriosensu: 1706 + 2,
	lycanrocmidnight: 1706 + 3,
	lycanrocdusk: 1706 + 4,
	wishiwashischool: 1706 + 5,
	silvallyfighting: 1706 + 6,
	silvallyflying: 1706 + 7,
	silvallypoison: 1706 + 8,
	silvallyground: 1706 + 9,
	silvallyrock: 1706 + 10,
	silvallybug: 1706 + 11,
	silvallyghost: 1706 + 12,
	silvallysteel: 1706 + 13,
	silvallyfire: 1706 + 14,
	silvallywater: 1706 + 15,
	silvallygrass: 1706 + 16,
	silvallyelectric: 1706 + 17,
	silvallypsychic: 1706 + 18,
	silvallyice: 1706 + 19,
	silvallydragon: 1706 + 20,
	silvallydark: 1706 + 21,
	silvallyfairy: 1706 + 22,
	miniormeteor: 1706 + 23,
	miniororange: 1706 + 24,
	minioryellow: 1706 + 25,
	miniorgreen: 1706 + 26,
	miniorblue: 1706 + 27,
	miniorindigo: 1706 + 28,
	miniorviolet: 1706 + 29,
	mimikyubusted: 1706 + 30,
	necrozmaduskmane: 1706 + 31,
	necrozmadawnwings: 1706 + 32,
	necrozmaultra: 1706 + 33,
	magearnaoriginal: 1706 + 34,
	// Gen 8
	cramorantgulping: 1741 + 0,
	cramorantgorging: 1741 + 1,
	toxtricitylowkey: 1741 + 2,
	sinisteaantique: 1741 + 3,
	polteageistantique: 1741 + 4,
	alcremievanillacreamberry: 1741 + 5,
	alcremievanillacreamlove: 1741 + 6,
	alcremievanillacreamstar: 1741 + 7,
	alcremievanillacreamclover: 1741 + 8,
	alcremievanillacreamflower: 1741 + 9,
	alcremievanillacreamribbon: 1741 + 10,
	alcremierubycreamstrawberry: 1741 + 11,
	alcremierubycreamberry: 1741 + 12,
	alcremierubycreamlove: 1741 + 13,
	alcremierubycreamstar: 1741 + 14,
	alcremierubycreamclover: 1741 + 15,
	alcremierubycreamflower: 1741 + 16,
	alcremierubycreamribbon: 1741 + 17,
	alcremiematchacreamstrawberry: 1741 + 18,
	alcremiematchacreamberry: 1741 + 19,
	alcremiematchacreamlove: 1741 + 20,
	alcremiematchacreamstar: 1741 + 21,
	alcremiematchacreamclover: 1741 + 22,
	alcremiematchacreamflower: 1741 + 23,
	alcremiematchacreamribbon: 1741 + 24,
	alcremiemintcreamstrawberry: 1741 + 25,
	alcremiemintcreamberry: 1741 + 26,
	alcremiemintcreamlove: 1741 + 27,
	alcremiemintcreamstar: 1741 + 28,
	alcremiemintcreamclover: 1741 + 29,
	alcremiemintcreamflower: 1741 + 30,
	alcremiemintcreamribbon: 1741 + 31,
	alcremielemoncreamstrawberry: 1741 + 32,
	alcremielemoncreamberry: 1741 + 33,
	alcremielemoncreamlove: 1741 + 34,
	alcremielemoncreamstar: 1741 + 35,
	alcremielemoncreamclover: 1741 + 36,
	alcremielemoncreamflower: 1741 + 37,
	alcremielemoncreamribbon: 1741 + 38,
	alcremiesaltedcreamstrawberry: 1741 + 39,
	alcremiesaltedcreamberry: 1741 + 40,
	alcremiesaltedcreamlove: 1741 + 41,
	alcremiesaltedcreamstar: 1741 + 42,
	alcremiesaltedcreamclover: 1741 + 43,
	alcremiesaltedcreamflower: 1741 + 44,
	alcremiesaltedcreamribbon: 1741 + 45,
	alcremierubyswirlstrawberry: 1741 + 46,
	alcremierubyswirlberry: 1741 + 47,
	alcremierubyswirllove: 1741 + 48,
	alcremierubyswirlstar: 1741 + 49,
	alcremierubyswirlclover: 1741 + 50,
	alcremierubyswirlflower: 1741 + 51,
	alcremierubyswirlribbon: 1741 + 52,
	alcremiecaramelswirlstrawberry: 1741 + 53,
	alcremiecaramelswirlberry: 1741 + 54,
	alcremiecaramelswirllove: 1741 + 55,
	alcremiecaramelswirlstar: 1741 + 56,
	alcremiecaramelswirlclover: 1741 + 57,
	alcremiecaramelswirlflower: 1741 + 58,
	alcremiecaramelswirlribbon: 1741 + 59,
	alcremierainbowswirlstrawberry: 1741 + 60,
	alcremierainbowswirlberry: 1741 + 61,
	alcremierainbowswirllove: 1741 + 62,
	alcremierainbowswirlstar: 1741 + 63,
	alcremierainbowswirlclover: 1741 + 64,
	alcremierainbowswirlflower: 1741 + 65,
	alcremierainbowswirlribbon: 1741 + 66,
	eiscuenoice: 1741 + 67,
	indeedeef: 1741 + 68,
	morpekohangry: 1741 + 69,
	zaciancrowned: 1741 + 70,
	zamazentacrowned: 1741 + 71,
	urshifurapidstrike: 1741 + 72,
	zarudedada: 1741 + 73,
	calyrexice: 1741 + 74,
	calyrexshadow: 1741 + 75,
	ursalunabloodmoon: 1741 + 76,
	basculegionf: 1741 + 77,
	enamorustherian: 1741 + 78,
	// Gen 9
	oinkolognef: 1820 + 0,
	mausholdfour: 1820 + 1,
	squawkabillyblue: 1820 + 2,
	squawkabillyyellow: 1820 + 3,
	squawkabillywhite: 1820 + 4,
	palafinhero: 1820 + 5,
	tatsugiridroopy: 1820 + 6,
	tatsugiristretchy: 1820 + 7,
	dudunsparcethreesegment: 1820 + 8,
	gimmighoulroaming: 1820 + 9,
	koraidonlimited: 1820 + 10,
	miraidonlowpower: 1820 + 11,
	poltchageistartisan: 1820 + 12,
	sinistchamasterpiece: 1820 + 13,
	ogerponwellspring: 1820 + 14,
	ogerponhearthflame: 1820 + 15,
	ogerponcornerstone: 1820 + 16,
	terapagosterastal: 1820 + 17,
	terapagosstellar: 1820 + 18,
	// Gen 10 (swse)
	eecroachswarm: 1839 + 0,
	stackemrockless: 1839 + 1,
	mosskrattidebloom: 1839 + 2,
	catteraxef: 1839 + 3,
	blurruncharged: 1839 + 4,
	droutdry: 1839 + 5,
	auditarf: 1839 + 6,
	oxilleryf: 1839 + 7,
	tamroastf: 1839 + 8,
	weepollenf: 1839 + 9,
	botnyaklr: 1839 + 10,
	botnyaklg: 1839 + 11,
	botnyakdb: 1839 + 12,
	botnyakdr: 1839 + 13,
	botnyakdg: 1839 + 14,
	bearvoyanceawakened: 1839 + 15,

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
	mimikyubustedtotem: 1706 + 30,
	ribombeetotem: 743,
	kommoototem: 784,
	toxtricitylowkeygmax: 1380 + 24,
	ogerpontealtera: 1017,
	ogerponwellspringtera: 1820 + 14,
	ogerponhearthflametera: 1820 + 15,
	ogerponcornerstonetera: 1820 + 16,

	// CAP
	syclant: 1980 + 0,
	revenankh: 1980 + 1,
	pyroak: 1980 + 2,
	fidgit: 1980 + 3,
	stratagem: 1980 + 4,
	arghonaut: 1980 + 5,
	kitsunoh: 1980 + 6,
	cyclohm: 1980 + 7,
	colossoil: 1980 + 8,
	krilowatt: 1980 + 9,
	voodoom: 1980 + 10,
	tomohawk: 1980 + 11,
	necturna: 1980 + 12,
	mollux: 1980 + 13,
	aurumoth: 1980 + 14,
	malaconda: 1980 + 15,
	cawmodore: 1980 + 16,
	volkraken: 1980 + 17,
	plasmanta: 1980 + 18,
	naviathan: 1980 + 19,
	crucibelle: 1980 + 20,
	crucibellemega: 1980 + 21,
	kerfluffle: 1980 + 22,
	pajantom: 1980 + 23,
	jumbao: 1980 + 24,
	caribolt: 1980 + 25,
	smokomodo: 1980 + 26,
	snaelstrom: 1980 + 27,
	equilibra: 1980 + 28,
	astrolotl: 1980 + 29,
	miasmaw: 1980 + 30,
	chromera: 1980 + 31,
	venomicon: 1980 + 32,
	venomiconepilogue: 1980 + 33,
	saharaja: 1980 + 34,
	hemogoblin: 1980 + 35,
	syclar: 1980 + 36,
	embirch: 1980 + 37,
	flarelm: 1980 + 38,
	breezi: 1980 + 39,
	scratchet: 1980 + 40,
	necturine: 1980 + 41,
	cupra: 1980 + 42,
	argalis: 1980 + 43,
	brattler: 1980 + 44,
	cawdet: 1980 + 45,
	volkritter: 1980 + 46,
	snugglow: 1980 + 47,
	floatoy: 1980 + 48,
	caimanoe: 1980 + 49,
	pluffle: 1980 + 50,
	rebble: 1980 + 51,
	tactite: 1980 + 52,
	privatyke: 1980 + 53,
	nohface: 1980 + 54,
	monohm: 1980 + 55,
	duohm: 1980 + 56,
	protowatt: 1980 + 57,
	voodoll: 1980 + 58,
	mumbao: 1980 + 59,
	fawnifer: 1980 + 60,
	electrelk: 1980 + 61,
	smogecko: 1980 + 62,
	smoguana: 1980 + 63,
	swirlpool: 1980 + 64,
	coribalis: 1980 + 65,
	justyke: 1980 + 66,
	solotl: 1980 + 67,
	miasmite: 1980 + 68,
	dorsoil: 1980 + 69,
	saharascal: 1980 + 70,
	ababo: 1980 + 71,
	scattervein: 1980 + 72,
	cresceidon: 1980 + 73,
	chuggalong: 1980 + 74,
	shox: 1980 + 75,
	chuggon: 1980 + 76,
	draggalong: 1980 + 77,
	ramnarok: 1980 + 78,
	ramnarokradiant: 1980 + 79,
};

export const BattlePokemonIconIndexesLeft: { [id: string]: number } = {
	pikachubelle: 1860 + 0,
	pikachupopstar: 1860 + 1,
	clefairy: 1860 + 2,
	clefable: 1860 + 3,
	jigglypuff: 1860 + 4,
	wigglytuff: 1860 + 5,
	dugtrioalola: 1860 + 6,
	poliwhirl: 1860 + 7,
	poliwrath: 1860 + 8,
	mukalola: 1860 + 9,
	kingler: 1860 + 10,
	croconaw: 1860 + 11,
	cleffa: 1860 + 12,
	igglybuff: 1860 + 13,
	politoed: 1860 + 14,
	unownb: 1860 + 15,
	unownc: 1860 + 16,
	unownd: 1860 + 17,
	unowne: 1860 + 18,
	unownf: 1860 + 19,
	unowng: 1860 + 20,
	unownh: 1860 + 21,
	unownj: 1860 + 22,
	unownk: 1860 + 23,
	unownl: 1860 + 24,
	unownm: 1860 + 25,
	unownn: 1860 + 26,
	unownp: 1860 + 27,
	unownq: 1860 + 28,
	unownquestion: 1860 + 29,
	unownr: 1860 + 30,
	unowns: 1860 + 31,
	unownt: 1860 + 32,
	unownv: 1860 + 33,
	unownz: 1860 + 34,
	sneasel: 1860 + 35,
	teddiursa: 1860 + 36,
	roselia: 1860 + 37,
	zangoose: 1860 + 38,
	seviper: 1860 + 39,
	castformsnowy: 1860 + 40,
	absolmega: 1860 + 41,
	absol: 1860 + 42,
	regirock: 1860 + 43,
	torterra: 1860 + 44,
	budew: 1860 + 45,
	roserade: 1860 + 46,
	magmortar: 1860 + 47,
	togekiss: 1860 + 48,
	rotomwash: 1860 + 49,
	shayminsky: 1860 + 50,
	emboar: 1860 + 51,
	pansear: 1860 + 52,
	simisear: 1860 + 53,
	drilbur: 1860 + 54,
	excadrill: 1860 + 55,
	sawk: 1860 + 56,
	lilligant: 1860 + 57,
	garbodor: 1860 + 58,
	solosis: 1860 + 59,
	vanilluxe: 1860 + 60,
	amoonguss: 1860 + 61,
	klink: 1860 + 62,
	klang: 1860 + 63,
	klinklang: 1860 + 64,
	litwick: 1860 + 65,
	golett: 1860 + 66,
	golurk: 1860 + 67,
	kyuremblack: 1860 + 68,
	kyuremwhite: 1860 + 69,
	kyurem: 1860 + 70,
	keldeoresolute: 1860 + 71,
	meloetta: 1860 + 72,
	greninja: 1860 + 73,
	greninjabond: 1860 + 73,
	greninjaash: 1860 + 74,
	furfroudebutante: 1860 + 75,
	barbaracle: 1860 + 76,
	clauncher: 1860 + 77,
	clawitzer: 1860 + 78,
	sylveon: 1860 + 79,
	klefki: 1860 + 80,
	zygarde: 1860 + 81,
	zygarde10: 1860 + 82,
	zygardecomplete: 1860 + 83,
	dartrix: 1860 + 84,
	steenee: 1860 + 85,
	tsareena: 1860 + 86,
	comfey: 1860 + 87,
	miniormeteor: 1860 + 88,
	minior: 1860 + 89,
	miniororange: 1860 + 90,
	minioryellow: 1860 + 91,
	miniorgreen: 1860 + 92,
	miniorblue: 1860 + 93,
	miniorviolet: 1860 + 94,
	miniorindigo: 1860 + 95,
	dhelmise: 1860 + 96,
	necrozma: 1860 + 97,
	marshadow: 1860 + 98,
	pikachuoriginal: 1860 + 99,
	pikachupartner: 1860 + 100,
	necrozmaduskmane: 1860 + 101,
	necrozmadawnwings: 1860 + 102,
	necrozmaultra: 1860 + 103,
	stakataka: 1860 + 104,
	blacephalon: 1860 + 105,
};

export const BattleAvatarNumbers: { [k: string]: string } = {
	1: 'lark',
	2: 'robin',
	3: 'wren',
	4: 'jay',
	5: 'tofrug-stack',
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

	readonly megaStone: { [megaEvolves: string]: string };
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

		this.megaStone = data.megaStone || null;
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
