class Solution {
public:
    int countGoodSubstrings(string s) {
       map<char , int >st;
        int ans = 0;
        int j = 0 ;
        for(int i = 0 ; i < s.size();i++){
            st[s[i]]++;
            while(j <= i && st[s[i]] > 1){
                st[s[j]]--;
                if(st[s[j]] == 0){
                    st.erase(s[j]);
                }
                j++;
            }
            ans += st.size() >= 3;
            
        }
        return ans;
    }
};