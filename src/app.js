import Database from 'better-sqlite3';
const db = new Database('data.db');

//THIS IS HOW YOU CREATE SQLITE DATA TABLE
const query = `
    CREATE TABLE data (
        id INTEGER PRIMARY KEY,
        decrypt-data STRING NOT NULL UNIQUE
    )
`;

db.exec(query);


const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const replace = (string, index, word) => {
    if(typeof string === 'string' || typeof string === 'number' && index <= string.length && typeof word === 'string' || typeof word === 'number'){
        let arrayfied = [];
        let result = '';
        for(let i = 0; i < string.length; i++){
            arrayfied.push(string[i]);
        };
        arrayfied[index] = word;
        result = arrayfied.join('');
        return result;
        
    }else{  
        console.error("ERROR\nInvalid input.\nUSAGE: replace(string,number,string/number)");
    }
};

// Max length 21 digit
const generateID = (length, bool) => {
    if(typeof length === 'number' && length <=21 && typeof bool === 'boolean' || typeof bool === 'string'){
        let lengthLongDigit = String(Math.floor(Math.random()*10**length));
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let ID = '';
        if(bool===true){
            letters = letters.toLocaleUpperCase();
            let randomLoopTimes = randomRange(5, lengthLongDigit.length)
            for(let i =0; i<randomLoopTimes; i++){
                let randomIndexLetters = Math.floor(Math.random()*letters.length);
                ID = replace(lengthLongDigit, Math.floor(Math.random()*lengthLongDigit.length), letters[randomIndexLetters]);
            };
            return ID;
        }else if(bool === '_'){

        } else if(bool.toLocaleLowerCase() === 'mix'){
            let upperCase = letters.toLocaleUpperCase();

        }
    }else{
        console.error('Invalid input.\nUSAGE: generateID(number,boolean) or generateID(number,"mix")')
    }
};
//console.log(generateID(10,true))

const cryptStringGenerator = (length) => {
    let letters = 'abcdefghijklmnopqrstuvwxyz*&#$%@!';
    let result = '';
    let arrayfied = [];

    if (length > 0) {
        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * letters.length);
            arrayfied.push(letters[random].toUpperCase());
        }
        result = arrayfied.join('');
    } else {
        // Fallback to add a random digit if length is not greater than 0
        result = Math.floor(Math.random() * 10).toString();
    }

    return result;
}


//console.log(test(Math.floor(Math.random()*randomRange(5,10)),true))


class Crypter {
    constructor(string, cryptString, db){
        this._string = string;
        this._cryptString = cryptString;
        this._db = db;
    }
}