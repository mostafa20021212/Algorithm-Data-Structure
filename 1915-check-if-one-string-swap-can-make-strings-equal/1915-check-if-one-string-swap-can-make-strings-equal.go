func areAlmostEqual(s1 string, s2 string) bool {
   if len(s1 ) != len(s2) {
    return false;
   }
   if s2 == s1 {
    return true;
   }
    diff := make([]int , 0 , 3)
   for i := 0 ; i < len(s1) ;i++ {
        if s1[i] != s2[i] {
            diff = append(diff , i)
        }
        if len(diff) > 2 {return false}
   }
   if len(diff) < 2 {
    return false
   }
    return s1[diff[0]] == s2[diff[1]] && s1[diff[1]] == s2[diff[0]]
}