/*
* Find the substrings in a given string
* */
function get_sub_strings(str) {
    const str_len = str.length;
    const sub_string_list = [];
    for (let i = 0; i < str_len; i++) {
        let sub_string = '';
        for (let j = i; j < str_len; j++) {
            sub_string = sub_string + str[j];
            sub_string_list.push(sub_string);
        }
    }
    return sub_string_list;
}

console.log(get_sub_strings('abc'));
console.log(get_sub_strings('abcdef'));
console.log(get_sub_strings(''));
console.log(get_sub_strings([1,2,3,4,5]));
