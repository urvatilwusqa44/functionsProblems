//Question No.1
/*Write a function called sum that takes in two numbers as parameters and returns their sum. */
function sum(a,b) {
    let Add=a+b;
    return Add;
};
const Add=sum(4,6);
console.log("sum="+Add);
//Question No.2
/*write a function called isEven that takes in a number as a parameter and returns true if the number is even
and false if the number is odd */
function isEven(number){
    if(number%2==0)
    {
        console.log("true")
    }
    else
    {
        console.log("false")
    }
    return number;
    
};
console.log(isEven(8));
//Question No.3
/*Write a function called reverseString that takes in a string as a parameter and returns the string
in reverse order */
function reverseString(str){
    let reversed='';
    for(let i=str.length-1;i>=0;i--)
    {
        reversed +=str[i];
    }
    return reversed;

};
const reversed=reverseString("Hello");
console.log("reverse string is="+reversed);
//Alternate method
/*function reverseString(str){
    let string=str.split('').reverse().join('');
    return string;
};
const reversed=reverseString("Hello");
console.log("reverse string ="+reversed);*/
//Question No.4
/*Write a function called calculatoFactorial that takes in a number as a parameter and returns the factorial of that number.
 */
function calculatoFactorial(number){
    let fact=1;
    for(let i=2;i<=number;i++)
    {
        fact=fact*i;
    }
    return fact;

};
const fact=calculatoFactorial(5);
console.log("factorial:"+fact);
//Question No.5
/*Write a function called convertTemperature that takes in a temperature in Celsius as  a parameter and returns the
equivalent temperature in Fahrenheit */
function convertTemperature(celsius){
    const fahrenheit=(celsius*9/5)+32;
    return fahrenheit;
};
const convertedtemp=convertTemperature(25);
console.log("Temperature in Fahrenheit="+convertedtemp);
//Question No.6
/*Write a function called countVowels that takes in a string as a parameter and returns the number of vowels in the string. */
function countVowels(str){
    const vowels="aeiouAEIOU";
    let vowelcount=0;
    for(let i=0;i<str.lenth;i++)
    {
        if(vowels==str[i])
        {
            vowelcount++;
        }
    }
    return vowelcount;
};
const vowelcount=countVowels("orange");
console.log("number of vowels="+vowelcount);


