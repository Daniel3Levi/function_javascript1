import { l } from "./utils.js";
// create new version with for loop that create new string
/*
get string, n_pos -> return all chars from n_pos to n_pos - 1 [abcde,3 -> cdeab] 
*/

const get_all_chars_from_pos = (str,pos) => {

    pos--; //??
    str = str.split('');
    l(str);

    for (let i=0; i<pos; i++){
        let shift_char = str.shift();
        str.push(shift_char);
    }
    str = str.join('');
    return str;
};

let result = get_all_chars_from_pos("1234567",3); // nielida
l(result);