function prefixCount(words: string[], pref: string): number {
    return words.reduce((res : number , str : string)=> res + (str.startsWith(pref) ? 1 : 0),0)
};