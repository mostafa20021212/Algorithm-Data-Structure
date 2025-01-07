class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        set<string>st;
        for(int i = 0 ; i< words.size();i++){
            for(int j = 0 ; j < words.size();j++){
                if(i != j){
                    if(words[i].find(words[j]) != -1) st.insert(words[j]);
                }
            }
        }
        
         vector<string>ans(begin(st),end(st));
         return ans;
    }
};