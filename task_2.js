import { random_number_max_min } from "./utils.js";
//get number X larger than 10 -> return random number between 5 to X


const rnd_num = (num) => {
        let rnd_num = random_number_max_min(num,5);
        console.log(rnd_num);

}
rnd_num(12);  