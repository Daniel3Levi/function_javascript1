import { random_number } from "./utils.js";
// get number X -> return random number between 1 to X

const rnd_num = (max_num) => {
   let rnd_num = 0;
   rnd_num = random_number(max_num);
   return rnd_num;

}

console.log(rnd_num(10));

