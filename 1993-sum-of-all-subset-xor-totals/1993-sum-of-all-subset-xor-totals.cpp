class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int ans = 0 , n = size(nums);
        for(int i = 0; i < (1 << n ) ; i++){
            int sum = 0;
            for(int j = 0 ; j < n; j++){
                if( (1 << j) & i){
                    sum ^= nums[j];
                }
            }
            ans += sum;
        }
        return ans;
    }
};