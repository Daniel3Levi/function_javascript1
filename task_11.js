import { l } from "./utils.js";


/*
get string -> return 3 lower chars
*/






const get_max_3_chars = (str) => {

    let arr_chars = str.split('');
    let max_char_1 = "";
    let max_char_2 = "";
    let max_char_3 = "";
    let current_char = "";


    for (let i=0; i<arr_chars.length; i++){

        current_char = arr_chars[i];

        
        l("__________________")
        l("i loop = " + (i + 1))
        l("current_char = " + current_char)
        l("max_char_1 = " + max_char_1)
        l("max_char_2 = " + max_char_2)
        l("max_char_3 = " + max_char_3)

        if (max_char_1 == ""){ 
            max_char_1 = current_char; 
        }else if (max_char_2 == ""){ 
            max_char_2 = current_char; 
        } else if (max_char_3 == ""){
            max_char_3 = current_char;
        } else if (current_char > max_char_1 || current_char > max_char_2 || current_char > max_char_3) 
                if (max_char_1 < max_char_2 && max_char_1 < max_char_3){
                    max_char_1 = current_char;
                } else if (max_char_2 < max_char_3) {
                    max_char_2 = current_char;
                }else {
                    max_char_3 = current_char;
                }
        l("max_char_1 = " + max_char_1)
        l("max_char_2 = " + max_char_2)
        l("max_char_2 = " + max_char_3)
    };
    
    return max_char_1 + ', ' + max_char_2 + ', ' + max_char_3;    

};

let s_result = get_max_3_chars('1254309')
l("=================")
console.log(s_result);


