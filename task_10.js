/*
get string -> return max char
----------------------------------------------------------*/

export function get_max_char (str){
    
    let arr_chars = str.split('');
    let max_char = "";
    let current_char = "";

    for (let i=0; i<arr_chars.length; i++){

        current_char = arr_chars[i];

        if(max_char == ""){
            max_char = current_char;
        }else if(current_char > max_char){
            max_char = current_char;
        }
    };
    
    return max_char;
};

console.log(`max char: ${get_max_char('achdaegaa')}`);
