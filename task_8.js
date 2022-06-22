import { str_postion_to_end_ver2 } from "./task_5.js";


/*
get string, num_pos, num_skip -> return all chars in string, from num_pos
 to end, skipping num_skip  [get abcdefgh, 2, 3 -> beh]
-----------------------------------------------------------------------------*/

const str_skipping = (str,pos,skip) => {

    console.log(`str: ${str}, pos: ${pos}, skip: ${skip} `);

    let str_new_pos = str_postion_to_end_ver2(str,pos);
    console.log(`from pos: ${str_new_pos}`);
    let str_skip = '';
    
    for (let i=0; i<str_new_pos.length; i+=2){
        str_skip += str_new_pos[i];  
    };
    return str_skip;
};


console.log(str_skipping('danielieliadi',3,2)); 