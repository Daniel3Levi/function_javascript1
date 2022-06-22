import { l } from "./utils.js";

/* 
 get string, n_loops -> return string * n_loops + each loop skip
 on first/last n_loop [abcdefgh,3 -> abcdefghbcdefgcdef] - 1 for loop only 
*/


const get_looping_str = (str,n_loop) => {

    str = str.split('');

    for (let i=0; i<n_loop/2; i++){
        str = sh
    }
    return str;
};

let result = get_looping_str("danieli", 3);
l(result);