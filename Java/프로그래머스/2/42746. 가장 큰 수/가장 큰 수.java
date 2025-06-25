class Solution {
    public String solution(int[] numbers) {
        String answer = "";

        String[] strNumbers = new String[numbers.length];

        for(int i=0; i < numbers.length; i++){
            strNumbers[i] = String.valueOf(numbers[i]);
        }

        /// 정렬
        java.util.Arrays.sort(strNumbers, (a,b)-> (b+a).compareTo(a+b));

        /// 문자열 이어붙히기
        StringBuilder sb = new StringBuilder();
        for(String str:strNumbers){
            sb.append(str);
        }

        answer = sb.toString();
        

        if(answer.charAt(0) == '0') {
            return "0"; 
        }

        return answer;
    }
}