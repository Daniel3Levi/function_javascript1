import { l } from "./utils.js";
/*
get string, n_pos, n_skip -> return all chars in reverse from n_pos to 0 to n_pos + 1,
skipping n_skip [abcdefghij,6,2 -> fdbjh]
*/


const get_chars_in_reverse_from_pos_in_skip = (str, n_pos, n_skip) => {

    str = str.split('');
    str = str.slice(0,n_pos);
    str = str.reverse();

    let new_str = [];

    for (let i = 0; i<str.length; i+=n_skip){
        let char = str[i];
        new_str.push(char);
    }
    new_str = new_str.join('');
    return new_str;
}

let result = get_chars_in_reverse_from_pos_in_skip("danieli", 5,2); //danie // end 
l(result);