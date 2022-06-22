import { l } from "./utils.js";
/*
get string, n_pos -> return all chars from n_pos to 0 in reverse [abcde, 3 -> cba]

new version without array manipulation
*/

const get_reverse_str_from_pos = (str, n_pos) => {

    str = str.split('');
    str = str.slice(n_pos,str.length);
    str = str.reverse();
    str = str.join('');
    
    return str;
};

let result = get_reverse_str_from_pos("danieli",2);
l(result);