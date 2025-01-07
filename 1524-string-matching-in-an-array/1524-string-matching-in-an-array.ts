function stringMatching(words: string[]): string[] {
    return  words.filter((w , idx)=>  (words.some((w2 , idx2)=> (w2.includes(w) && idx2 != idx))));
    
};