import { random_number } from "./utils.js";

// get string -> return random char from string

export function random_char_from_str (str) {
    let arr_str = str.split('');
    let random_index = random_number(arr_str.length + 1);
    
    return arr_str[random_index];
};

console.log(random_char_from_str('Daniel'));