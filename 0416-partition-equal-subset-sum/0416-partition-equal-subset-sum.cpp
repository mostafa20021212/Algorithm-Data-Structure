class Solution {
public:

    bool dfs(int ans , vector<int>&nums , int i ,   vector<vector<int>>&dp){
        if(ans == 0)return true;
        if(i == size(nums)){
            return ans == 0;
        }
    
        if(dp[i][ans] != -1)return dp[i][ans];

        return dp[i][ans] =  dfs(ans , nums,i +1 , dp ) || (ans >= nums[i] ? dfs(ans - nums[i] , nums , i +1 , dp): false );
      
        
    }
    bool canPartition(vector<int>& nums) {
        int sum = 0;
        for(int i : nums){
            sum+=i;
        }
        if(sum % 2 != 0)return false;
        int ans = sum / 2;
        vector<vector<int>>dp(size(nums) , vector<int>(ans+1 , -1));
        return dfs(ans, nums , 0  ,dp);
    }
};