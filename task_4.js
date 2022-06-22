import { random_char_from_str } from "./task_3.js";

/*
 get string, number X -> return X random chars from string 
[allowing duplicated chars]
------------------------------------------------------------*/


const x_rnd_chars_from_str = (str,x) => {
    let x_rnd_chars = '';

    for (let i=0; i<x; i++){
        let rnd_char = random_char_from_str(str);
        x_rnd_chars += rnd_char;
    }
    return x_rnd_chars;
}
console.log(x_rnd_chars_from_str('Daniel', 2));