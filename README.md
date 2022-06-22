Tasks:

1. get number X -> return random number between 1 to X

2. get number X larger than 10 -> return random number between 5 to X

3. get string -> return random char from string 

4. get string, number X -> return X random chars from string [allowing duplicated chars]

5. get string, postion number X [smaller than string length] -> return string from 
postion X to end of string

6. get string, postion number X [smaller than string length] -> return string from postion X + 2 to end of string

7. get string, postion number X [smaller than string length] -> return string from beginning to postion X

8. get string, num_pos, num_skip -> return all chars in string, from num_pos to end, skipping num_skip  [get abcdefgh, 2, 3 -> beh]

9. get string , c_max_char -> return all chars smaller than c_max_char

10. get string -> return max char

11. get string -> return 3 lower chars

12. get string, c_char -> return all chars except from c_char + 3 [a=d  v=y]

13. get string, s_chars_list, n_pos > return all chars from string except char in n_pos in s_chars_list [gdftasdgfm,eterte,2]

14. get string, n_pos -> return all chars from n_pos to n_pos - 1 [abcde,3 -> cdeab]

15. get string, n_pos -> return all chars from n_pos to 0 in reverse [abcde, 3 -> cba]

16. get string, n_pos, n_skip -> return all chars in reverse from n_pos to 0 to n_pos + 1, skipping n_skip [abcdefghij,6,2 -> fdbjh]

17. get string, n_loops -> return string * n_loops + each loop skip on first/last n_loop [abcdefgh,3 -> abcdefghbcdefgcdef] - 1 for loop only 

18. get string, n_loops -> return string * n_loops + each loop skip on first/last n_loop + each 2 loop, return string in revers [abcdefgh,4 -> abcdefghgfedcbcdefed] - 1 for loop only 