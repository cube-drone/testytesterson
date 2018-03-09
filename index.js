const slugify = require('slugify');
const {DateTime} = require('luxon');

const fragments = [
    '汤 soup',
    '⭐ star ⭐',
    'herman',
    'bort',
    'todd',
    'jake',
    'finn',
    'ars',
    'barry',
    'ross',
    'arin',
    'danny',
    'suzy',
    'curtis',
    'dan',
    'jenn',
    'jennennifer',
    'pontus',
    'tomtom',
    'nick',
    'jason',
    'jesse',
    'ron',
    'graham',
    'seanna',
    'neil',
    'gunter',
    'thomas',
    'dick',
    'robot',
    'alexis',
    'pubert',
    'olga',
    'alicia',
    'eugene',
    'fluffy',
    'boris',
    'ian',
    'tula',
    'melfrid',
    'cody',
    'john',
    'mike',
    'felicity',
    'erwin',
    'bartholemew',
    'melvin',
    'mackenzie',
    'esmeralda',
    'gil',
    'sasha',
    'barney',
    'shaniqua',
    'boy',
    'baby',
    'uthgherd',
    'keith',
    'missing texture',
    'kimmy',
    'billy bob',
    'gertrude',
    'fred',
    'pillow',
    'brick',
    'hope',
    'jack',
    'boomquisha',
    'janarthanon',
    'sarah',
    'helga',
    'tiny',
    'willy',
    'lawrence',
    'jessica',
    'king',
    'yoshi',
    'ichiro',
    'angus',
    'natasha',
    'elizabreth',
    'meldor',
    'olivia',
    'maverick',
    'beberly',
    'danger',
    'merika',
    'yunique',
    'shakira',
    'beyonce',
    'vejonica',
    'l\'oreal',
    'derfla',
    'phelony',
    'moxie',
    'garden',
    'strawberry',
    'jammy',
    'mazen',
    'prince',
    'd\'artagnan', // Did you know, apostrophes are valid in emails as long as they come before the @ symbol?
    'cameron',
    'blanket',
    'jermajesty',
    'moon unit',
    'alice',
    'lilly',
    'astrid',
    'saga',
    'freja',
    'wilma',
    'stella',
    'molly',
    'leah',
    'ines',
    'sigrid',
    'celine',
    'lykke',
    'joline',
    'amanda',
    'marco',
    'lorenzo',
    'antonio',
    'norberto',
    'diego',
    'luca',
    'giovanni',
    'stefano',
    'mario',
    'luigi',
    'laura',
    'rosa',
    'gianna',
    'pietro',
    'zhang wei',
    'liu wei',
    'li qiang',
    'chardonnay',
    'harry',
    'steve',
    'yolanda',
    'tara',
    'rusty',
    'ivana',
    'littlefinger',
    'daenarys',
    'khal',
    'sansa',
    'cersei',
    'gregor',
    'tyrion',
    'arya',
    'petyr',
    'brienne',
    'robb',
    'hodor',
    'daario',
    'bran',
    'jean luc',
    'james',
    'scotty',
    'pavel',
    'luke',
    'leia',
    'testy',
    'carl',
    'albert',
    'cornelius',
    'timothy',
    'kiko',
    'wilhelm',
    'pierre',
    'tiffany',
    'ben',
    'heather',
    'travis',
    'courteney',
    'tracy',
    'yang',
    'vivian',
    'ryan',
    'shirley',
    'walter',
    'phil',
    'andy',
    'spalding',
    'joao',
    'gabriel',
    'lucas',
    'matheus',
    'victor',
    'luiz',
    'noah',
    'benjamin',
    'sophia',
    'emma',
    'liam',
    'garol',
    'jimothy',
    'jacob',
    'logan',
    'chloe',
    'samuel',
    'jayden',
    'hannah',
    'avery',
    'zoe',
    'madison',
    'carter',
    'felix',
    'leo',
    'charles',
    'aria',
    'grace',
    'scarlett',
    'hunter',
    'dylan',
    'audrey',
    'austin',
    'jaxon',
    'nora',
    'ivy',
    'romy',
    'levi',
    'juliet',
    'parker',
    'victor',
    'piper',
    'sara',
    'cole',
    'ryder',
    'simon',
    'lauren',
    'fyodor',
    'mark',
    'quigley',
    'seymour',
    'chalmers',
    // nonsense
    'squidge',
    'fram',
    'mc',
    'og',
    'gog',
    'clorb',
    'churb',
    'squimp',
    'imple',
    'clarp',
    'flam',
    'shorp',
    'squiff',
    'splarf',
    'erang',
    'copter',
    'boom',
    'topia',
    'mazing',
    'tastic',
    'squim',
    'angle',
    'able',
    'ting',
    'booty',
    'pow',
    'mint',
    'chunk',
    'whong',
    'focky',
    'dongl',
    'cronch',
    //ideophone
    'crunch',
    'boing',
    'swish',
    'thud',
    'twinkle',
    'doki',
    'boom',
    'bang',
    //onomatopoeia
    'moo',
    'quack',
    'woof',
    'meow',
    'oink',
    'chirp',
    'roar',
    'cluck',
    'baa',
    //adjectives
    'bad',
    'good',
    'great',
    'small',
    'ugly',
    'fat',
    'soft',
    'chubby',
    'huge',
    'odd',
    'sad',
    'round',
    'vast',
    'dirty',
    'ripe',
    'broad',
    'damp',
    // rude boys
    'crap',
    'shit',
    'fart',
    'dang',
    'cock',
    // nouns
    'cupcake',
    'cucumber',
    'chicken',
    'pickle',
    'spot',
    'creep',
    'onion',
    'stink',
    'trap',
    'tarp',
    'shop',
    'load',
    'fudge',
    'chimp',
    'blister',
    'poop',
    'bill',
    'bone',
    'bugle',
    'card',
    'cannon',
    'celery',
    'chance',
    'chord',
    'child',
    'cloak',
    'copy',
    'cow',
    'deer',
    'ape',
    'dirt',
    'dog',
    'dragon',
    'drake',
    'drop',
    'drug',
    'duck',
    'edge',
    'elbow',
    'error',
    'fibre',
    'finger',
    'flax',
    'flood',
    'foam',
    'fog',
    'france',
    'fruit',
    'gallon',
    'game',
    'goose',
    'geese',
    'ghost',
    'gold',
    'grease',
    'gym',
    'helmet',
    'hemp',
    'ice',
    'icon',
    'island',
    'jacket',
    'karate',
    'kick',
    'kidney',
    'latex',
    'loaf',
    'lunch',
    'lettuce',
    'mallet',
    'march',
    'organ',
    'panther',
    'panties',
    'undies',
    'pear',
    'pig',
    'pizza',
    'pound',
    'propane',
    'rhythm',
    'rock',
    'roll',
    'saxophone',
    'seagull',
    'spaghetti',
    'spaghett',
    'tuna',
    'umbrella',
    'wig',
    'zipper',
    'britches',
    'mystery',
    'boat',
    'bench',
    'secret',
    'mouse',
    'house',
    'butt',
    'hunter',
    'fisher',
    'hook',
    'bean',
    'harvest',
    'mixer',
    'hand',
    'finger',
    'nose',
    'eye',
    'belly',
    'jean',
    'plan',
    'disk',
    'horse',
    'staple',
    'face',
    'arm',
    'ball',
    'cheek',
    'monkey',
    'shin',
    'button',
    'byte',
    'canyon',
    'dance',
    'crayon',
    'sausage',
    'meat',
    'wad',
    'napkin',
    'device',
    'cape',
    'chair',
    'person',
    'burger',
    'ham',
    'beef',
    'kitten',
    'puppy',
    'book',
    'clamp',
    'cloud',
    'code',
    'coast',
    'coin',
    'space',
    'key',
    'bucket',
    'heart',
    'stapler',
    'mug',
    'bottle',
    'cable',
    'note',
    'lamp',
    'shelf',
    'dong',
    'board',
    'job',
    'knife',
    'thing',
    'phone',
    'sweat',
    'pant',
    'boot',
    'sock',
    'socks',
    'hat',
    'ring',
    'dong',
    'wang',
    'wrap',
    'holder',
    'pen',
    'bag',
    'potato',
    'sword',
    'shield',
    'spear',
    'staff',
    'shaft',
    'slab',
    'grub',
    'song',
    'axe',
    'boat',
    'lamp',
    'club',
    'cage',
    'hole',
    'ass',
    'chump',
    'jerk',
    'foot',
    'spud',
    'cord',
    'light',
    'tree',
    'house',
    'place',
    'bag',
    'grime',
    'sludge',
    'cloth',
    // verbs
    'jump',
    'shart',
    'twirl',
    'spin',
    'smell',
    'slap',
    'smack',
    'poke',
    'prod',
    'drop',
    'punch',
    'grab',
    'throw',
    'slide',
    'dunk',
    'braise',
    'scatter',
    'slide',
    'dice',
    'hurl',
    'buy',
    'toast',
    'align',
    'sell',
    'move',
    'shoop',
    'trade',
    'steal',
    'flip',
    'blast',
    'clean',
    'hide',
    'pinch',
    'grasp',
    'palm',
    'examine',
    'taste',
    'ingest',
    'swallow',
    'snort',
    'juggle',
    'lift',
    'eat',
    'quaff',
    'chug',
    'fear',
    'assemble',
];

const tlds = [
    '.xyz',
    '.blue',
    '.org',
    '.com',
    '.net',
    '.link',
    '.click',
    '.wedding',
    '.sexy',
    '.red',
    '.black',
    '.pics'
];

const choice = (array) => {
    /*
        choose a random element from a list
     */
    if(array.length === 0){
        return null;
    }
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const titleCase = (string_what_to_titlecasify) => {
    /*
        convert a string "like this" into a string "Like This"
    */
    var i, j, str, lowers, uppers;
    str = string_what_to_titlecasify.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    // Certain minor words should be left lowercase unless
    // they are the first or last words in the string
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
        'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0, j = lowers.length; i < j; i++)
        str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
            function(txt) {
                return txt.toLowerCase();
            });

    // Certain words such as initialisms or acronyms should be left uppercase
    uppers = ['Id', 'Tv'];
    for (i = 0, j = uppers.length; i < j; i++)
        str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
            uppers[i].toUpperCase());

    return str;
};

const flipCoin = () => {
    /*
        flip a coin

        this coin is unfairly weighted, on account of it's a little heavier on its face
     */
    return Math.random() > 0.52
};

const fragment = () => {
    /*
        choose a random word fragment like "todd" or "butt"
     */
    return choice(fragments);
};

const tld = () => {
    /*
        choose a random tld
     */
    return choice(tlds);
};

const slug = () => {
    /*
        create a random slug - like "fragment" but more likely to be safe to use in a URL or email address
     */
    return slugify(fragment())
};

const sentence = () => {
    /*
        create some words all in a row.
     */
    let sentenceLength = 5 + Math.floor(Math.random() * 5);

    return titleCase(fragment()) + " " + Array.from({length: sentenceLength}, (x, i) => fragment()).join(" ") + ".";
};

const lorem = () => {
    /*
        create some words all in a row.
     */
    return Array.from({length: 5}, (x, i) => sentence()).join(" ");
};

const hexarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const hexchar = () => {
    return choice(hexarray);
};

const hexcolor = () => {
    /*
        returns a random six-hex string
        but no "#", you have to add that on your own
     */
    return `${hexchar()}${hexchar()}${hexchar()}${hexchar()}${hexchar()}${hexchar()}`;
};


const name = () => {
    /*
        create a full-ass name, like "Pete Hornburger" or "Todd Wangsack"
     */
    return titleCase(username())
};

const username = () => {
    /*
        create a username with a space in it, like "bort fortfart" or "crispy toolbags"
     */
    return `${fragment()} ${fragment()}${fragment()}`;
};

const email = () => {
    /*
        create an email address
     */
    return `${slug()}${slug()}@${slug().replace("'", "")}${tld()}`;
};

const imageUrl = (width, identifier) => {
    /*
        return a kind of random monster that's not very random at all really
     */
    if(width == null){
        width = 200;
    }
    if(identifier == null){
        identifier = `${slug()}${slug()}${slug()}`;
    }

    return `https://api.adorable.io/avatars/${width}/${identifier}.png`

};

const ip = () => {
    /*
        returns an IPV4 address like "192.12.154.1"
     */
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let fourth = Math.floor(Math.random() * 256);
    return `${first}.${second}.${third}.${fourth}`;
};

const countries = ['CA', 'BY', 'BE', 'MA', 'NO', 'OM', 'SE', 'TV', 'US', 'ZQ', 'ZM', 'GB'];

const country = () => {
    /*
        returns a 2-letter country code like 'CA', or 'BY'
     */
    return choice(countries);
};

const birthdayLuxon = () => {
    /*
        returns a birthday as a Luxon date
     */
    let years_ago = 13 + Math.floor(Math.random() * 40);
    let months_ago = Math.floor(Math.random() * 12);
    let days_ago = Math.floor(Math.random() * 20);
    return DateTime.local().minus({years: years_ago, months: months_ago, days: days_ago})
};

const birthdayISO = () => {
    /*
        returns a birthday as an ISO date
     */
    return birthdayLuxon().toISO();
};

const birthday = () => {
    /*
        returns a birthday as a JS Date
     */
    return birthdayLuxon().toJSDate();
};

const printSomeCrap = () => {
    console.log(username());
    console.log(name());
    console.log(email());
    console.log(lorem());
    console.log(imageUrl());
    console.log(birthdayISO());
    console.log(country());
    console.log(ip());
};

printSomeCrap();

module.exports = {
    choice: choice,
    flipCoin: flipCoin,
    fragment: fragment,
    slug: slug,
    sentence: sentence,
    lorem: lorem,
    tld: tld,
    hexchar: hexchar,
    hexcolor: hexcolor,
    username: username,
    titleCase: titleCase,
    name: name,
    email: email,
    imageUrl: imageUrl,
    ip: ip,
    country: country,
    birthdayLuxon: birthdayLuxon,
    birthdayISO: birthdayISO,
    birthday: birthday,
};