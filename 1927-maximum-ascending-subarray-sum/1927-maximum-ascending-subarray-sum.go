func maxAscendingSum(nums []int) int {
    mx := 0 
    n := len(nums);
    sum := nums[0]
    for i := 1  ; i< n ;i++ {
        if nums[i]  <= nums[i-1] {
              mx = max(mx , sum )
            sum = nums[i]
        }else {
        sum += nums[i]
        }
        mx = max(mx , sum )
     }
    return max(sum , mx ) ;
}
