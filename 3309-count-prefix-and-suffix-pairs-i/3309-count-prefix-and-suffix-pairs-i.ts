function countPrefixSuffixPairs(words: string[]): number {
   return words.reduce((result: number, word1: string, i: number) => {
  const matches = words.slice(i+1).reduce((count: number, word2: string, j: number) => {
    if (   word2.startsWith(word1) && word2.endsWith(word1)) {
      return count + 1;
    }
    return count;
  }, 0);
  return result + matches;
}, 0);
};