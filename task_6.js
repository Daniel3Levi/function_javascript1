
/*
 get string, postion number X [smaller than string length] 
 -> return string from postion X + 2 to end of string
--------------------------------------------------------------------------------*/


const str_from_pos_2_to_end = (str,pos) => {
  
    pos +=2;
    str = str.slice(pos);
    return str;
}
console.log(str_from_pos_2_to_end('daniel', 2));
