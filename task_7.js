

/* 
get string, postion number X [smaller than string length] -> return string
from beginning to postion X
---------------------------------------------------------------------------*/

const str_beginning_to_pos_x = (str, pos) => {

    str = str.substr(0,pos);

    return str;
};
console.log(str_beginning_to_pos_x('daniel', 2));

const str_beginning_to_pos_x_ver2 = (str,pos) => {
    let arr_str = str.split('');

    for (let i=arr_str.length; i>pos; i--){
        console.log(i);
        arr_str.pop(arr_str[i]);
    }
    str = arr_str.join('');
    return str;
}
console.log(str_beginning_to_pos_x_ver2('daniel', 2));

