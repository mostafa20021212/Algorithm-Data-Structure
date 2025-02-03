func longestMonotonicSubarray(nums []int) int {
    mx1 := 1 ; mx2 := 1;
    n := len(nums)
    c := 1 ; c2 := 1 
    for i :=1 ;i < n ;i++ {
        if nums[i] > nums[i-1] {
            c++;
        }else {c = 1}
        if nums[i] < nums[i-1] {
            c2++
        }else {c2 = 1}
        if mx1 < c {
            mx1 = c 
        }
        if mx2 < c2 {
            mx2 = c2
        }
    }
    if mx1 > mx2 {
        return mx1
    }
    return mx2 
}