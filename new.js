import { l } from "./utils.js";

const array_sum = (n_total, array_val) => n_total + array_val;

const get_average_numbers = (str) => {
    let nums = [];    
    nums = str.split(',');
    nums = nums.map(Number);

    let sum = nums.reduce(array_sum,0);
 
    let average = 0;
    average = sum / nums.length;


    let result_numbers;
    result_numbers = get_three_numbers(average, nums);
    return result_numbers;
}

const get_three_numbers = (average, arr_nums) => {

    let current_num = 0;

    let num1 = '';
    let num2 = '';
    let num3 = '';

    let differ = 0;
    let differ1 = 0;
    let differ2 = 0;
    let differ3 = 0;

    for (let i = 0; i<arr_nums.length; i++){

        current_num = arr_nums[i];
        differ =  Math.abs(average-current_num);

        if (num1 == ''){
            num1 = current_num;
            differ1 = Math.abs(average-num1);
        }else if (num2 == ''){
            num2 = current_num;
            differ2 =  Math.abs(average-num2);
        }else if (num3 == ''){
            num3 = current_num;
            differ3 = Math.abs(average-num3);
        } else if (differ < differ1 || differ < differ2 || differ < differ3) 
          
            if (differ1 > differ2 && differ1 > differ3){
                    num1  = current_num;
                    differ1 = Math.abs(average-num1);
                } else if (differ2 > differ3) {
                num2 = current_num;
                differ2 =  Math.abs(average-num2);
                }else {
                num3 =current_num;
                differ3 = Math.abs(average-num3);
                }
        }
        return num1 + ", " + num2 + ", " + num3;
}

const result = get_average_numbers ("10,210,3,4");
l(`result: ${result}`);





















