import "fmt"
func check(nums []int) bool {
  n := len(nums)
  cnt := 0
  for i := 1 ; i< n ;i++ {
    if nums[i-1] > nums[i] {
        cnt++
    }
  }
  if nums[0] < nums[n-1] {
    cnt++
  }

  return cnt <= 1 
}