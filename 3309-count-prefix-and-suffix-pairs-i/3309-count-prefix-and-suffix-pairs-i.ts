function countPrefixSuffixPairs(words: string[]): number {
    return words.reduce((result: number, word1: string, i: number) => {
        return result + words.slice(i + 1).reduce((count: number, word2: string, j: number) => {
            return count + (word2.startsWith(word1) && word2.endsWith(word1) ? 1 : 0)
        }, 0);
    }, 0);
};