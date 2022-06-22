

/*
get string, postion number X [smaller than string length] -> return string from 
postion X to end of string
-------------------------------------------------------------------------------*/

const str_postion_to_end = (str,pos) => {
    let arr_str = str.split('');

    for (let i=0; i<pos; i++){
        console.log(i);
        arr_str.shift(arr_str[i]);
    }
    str = arr_str.join('');
    return str;
}

console.log(str_postion_to_end('Daniel', 4));

export function str_postion_to_end_ver2  (str,pos) {
    str = str.slice(pos);
    return str;
}

//console.log(str_postion_to_end_ver2('Daniel', 3));