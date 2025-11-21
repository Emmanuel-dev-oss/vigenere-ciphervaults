//Javascript code to implement Vignere Cipher

//This function generates the key in a cylic manner untils it's length isn't equal to the length of original text
function generateKey(str, key) {
    key = key.split("");

    if(str.length == key.length)
        return key.join("");
    else {
        let temp=key.length;
        for (let i = 0; i < (str.length-temp); i++){
            key.push(key[i%((key).length)])
        }
    }
    return key.join("")
}

// Encryption functoin
function cipherText(str, key) {
    let cipher_text = "";

    for (let i = 0; i < str.length; i++) {

        let currentChar = str[i];
        let currentKeyChar = key[i];
        
        // Check if current character is alphabetic
        if (currentChar >= 'A' && currentChar <= 'Z') {
            
            //converting into range 0-25
            let x = (currentChar.charCodeAt(0) + currentKeyChar.charCodeAt(0)) % 26;

            // converts into alphabetis(ASCII)
            x += 'A'.charCodeAt(0);

            cipher_text += String.fromCharCode(x);
        
        } else {
            // Keep non-alphabetic characters as they are
            cipher_text += currentChar;
        }
    }
    return cipher_text;
}     

// Decryption function
function originalText(str, key) {
    let original_text = "";
    
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let currentKeyChar = key[i];
        
        // Check if current character is alphabetic
        if (currentChar >= 'A' && currentChar <= 'Z') {
            
            // converting into range 0-25
            let x = (currentChar.charCodeAt(0) - currentKeyChar.charCodeAt(0) + 26) % 26;

            // converts into alphabetis(ASCII)
            x += 'A'.charCodeAt(0);

            original_text += String.fromCharCode(x);
        
        } else {
            // Keep non-alphabetic characters as they are
            original_text += currentChar;
        }
    }
    return original_text;
}

//This function returns the key for decryption and encryption
function findKey(cipher_text, original_text) {
    let the_key="";

        //Convert into range 0-25
    for (let i = 0; i < cipher_text.length; i++) {
        let cipherChar = cipher_text[i]

        // Handle non-alphabetic characters
        if (cipherChar < 'A' || cipherChar > 'Z') {
            original_text += cipherChar;
            continue; // Don't advance key index for non-alphabetic characters
        }

        let x = (cipherChar.charCodeAt(0) - original_text[i].charCodeAt(0) + 26) % 26;

        // converts into alphabetis(ASCII)
        x+='A'.charCodeAt(0);

        the_key+=String.fromCharCode(x)
    }
    return the_key;
}


//This function will convert the lower case character to UpperCase
function LowerToUpper(s) {
    let str = (s).split("");

    for(let i = 0; i < s.length; i++) {
        if(s[i] == s[i].toLowerCase()) {
            str[i] = s[i].toUpperCase();
        }
    }

    s = str.toString();
    return s;
}


//Driver code
let str = "GEEKS@#FORGEEKS";
let keyword = "AYUSH";

str = str.toUpperCase();
keyword = keyword.toUpperCase();

let key = generateKey(str, keyword);

let cipher_text = cipherText(str, key);

let plaintext = originalText(cipher_text, key);

console.log("Ciphertext:" + cipher_text + "<br><br>");
console.log("Original/Decrypted Text:" + plaintext + "<br>");
console.log("The Key:" + findKey(cipher_text, plaintext) + "<br>");
