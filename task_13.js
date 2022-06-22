import { l } from "./utils.js";

/*
 get string, s_chars_list, n_pos > return all chars
 from string except char in n_pos in s_chars_list [gdftasdgfm,eterte,2]
*/


const get_chars_exept_pos = (str,s_chars_list,n_pos)=>{

    s_chars_list = s_chars_list.split('');
    let char = s_chars_list[n_pos - 1];

    while (str.includes(char)){
        str = str.replace(char,"");
    }


    return str;
}

let result = get_chars_exept_pos ("a hello woraaald", "abcdefghijk",1);
l(result);