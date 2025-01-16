function xorAllNums(nums1: number[], nums2: number[]): number {
    let xor1 = 0
    let xor2 = 0

    const { length: n } = nums1
    const { length: m } = nums2

    if (m % 2)
        for (const num of nums1)
            xor1 ^= num

    if (n % 2)
        for (const num of nums2)
            xor2 ^= num

    return xor1 ^ xor2
};