import { l } from "./utils.js";
/*
get string, c_char -> return all chars except from c_char + 3 [a=d  v=y]
*/

const remove_char_from_str = (str, char, skip) => {

    let char_code = char.charCodeAt();
    let new_char = String.fromCharCode(char_code+skip);
    l(new_char);

   while (str.includes(new_char)){
       str =  str.replace(new_char," ");
    }

    return str;
}

let result = remove_char_from_str("hello world", "l", 3);
l(result);