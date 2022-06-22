// general_function

export function random_number(max) {
    return Math.floor(Math.random() * (max - 1));
  }

  
  export function random_number_max_min(max, min) {
    let rnd = Math.random();
    let num_between = Math.floor(rnd * (max - min) + min);
    console.log(` ${rnd} * (${max} - ${min}) + ${min}`); 

    return num_between;
  }    
 

 
  export function l (msg){

    console.log(msg);
  }; 