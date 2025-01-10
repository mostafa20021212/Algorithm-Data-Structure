function wordSubsets(words1: string[], words2: string[]): string[] {
    const freqWord2 = new Array(26).fill(0);
    for (const word of words2) {
        const temp = new Array(26).fill(0);
        for (const ch of word) {
            temp[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            freqWord2[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = Math.max(
                freqWord2[ch.charCodeAt(0) - 'a'.charCodeAt(0)],
                temp[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
            );
        }
    }

    const result: string[] = [];
    for (const word of words1) {
        const temp = new Array(26).fill(0);
        for (const ch of word) {
            temp[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        if (freqWord2.every((freq, i) => temp[i] >= freq)) {
            result.push(word);
        }
    }

    return result;
}
