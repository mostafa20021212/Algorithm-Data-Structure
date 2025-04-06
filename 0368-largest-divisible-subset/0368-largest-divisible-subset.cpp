class Solution {
public:
    vector<int>dp , ans, temp;
    void dfs(vector<int>&nums , int i ){
        if(i == nums.size()){
            if(temp.size() > ans.size()){
                ans = temp;
            }
         
            return ;
        }
       
        if((temp.size() == 0  ||  nums[i] % temp.back() == 0) and  (int)temp.size()+1 > dp[i]){
     
            temp.push_back(nums[i]);
            dp[i] = temp.size();
            dfs(nums ,  i +1);
            temp.pop_back();
        }
        dfs(nums , i +1);
    }
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        dp = vector<int>(size(nums) , -1);
        sort(begin(nums),end(nums));
        dfs(nums , 0 );
        return ans;
    }
};