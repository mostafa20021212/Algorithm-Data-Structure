function isPalindrome(x: number): boolean {
     const str = x.toString();
     const temp = [...x.toString()].reverse().join("");
     return str === temp;
};