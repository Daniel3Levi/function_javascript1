
/*
get string , c_max_char -> return all chars smaller than c_max_char
--------------------------------------------------------------------------*/

const smaller_chars = (str, c_max) => {

    let arr_str = str.split('');
    console.log(arr_str);

    for (let i=0; i<arr_str.length; i++){
        console.log(`${c_max} < ${arr_str[i]} = ${c_max < arr_str[i]} `);

        if (c_max < arr_str[i]){
            arr_str.splice(i,1);
            console.log(arr_str);
        }
        // if (c_max === arr_str[i]){
        //     arr_str.splice(i,1);
        // };s
    }
    str = arr_str.join('');
    return str;

};

console.log(smaller_chars('danielieliadi', 'e'))