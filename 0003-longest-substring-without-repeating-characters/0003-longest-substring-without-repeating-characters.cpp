class Solution {
public:
    int lengthOfLongestSubstring(string s) {
       int maxi = 0 ;
        string ans="";
        for (int i = 0; i<s.size();i++){
           int f = ans.find(s[i]);
           if ( f != -1){
               ans=ans.substr(f+1);  
           }
           ans+=s[i];
           maxi = max(maxi,(int)ans.size());
        }
        return maxi;
       
    }
};