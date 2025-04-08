class Solution {
public:
    int minimumOperations(vector<int>& nums) {
     int c = 0;
     while(true){
        map<int , int>st;
        int t = 0;
        for(int i : nums)if(++st[i] == 2 )t++;
        if(t == 0)break;
        nums.erase(begin(nums) , begin(nums) + min(3 , (int)size(nums)));
        c++;
     }
     return c;
    }
};