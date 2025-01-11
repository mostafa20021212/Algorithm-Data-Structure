const LENGTH = 26;
const OFFSET = 97; // ASCII a

function canConstruct(s: string, k: number): boolean {
    // Base cases
    if (s.length <= k) {
        return s.length == k;
    }
    if (k >= LENGTH) {
        return true;
    }

    // Count frequencies
    const freqs = new Uint32Array(LENGTH);
    for (let i = 0; i < s.length; ++i) {
        ++freqs[s.charCodeAt(i) - OFFSET];
    }

    // Count unpaired letters
    for (let i = 0; i < LENGTH; ++i) {
        k -= freqs[i] & 1;
    }

    // Return output
    return k >= 0;
};