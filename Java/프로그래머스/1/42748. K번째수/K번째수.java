class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = {};
        answer = new int[commands.length];
        for (int i = 0; i < commands.length; i++) {
            int start = commands[i][0] - 1; // i번째 숫자 시작
            int end = commands[i][1]; // j번째 숫자 끝
            int k = commands[i][2] - 1; // k번째 숫자
            // i번째부터 j번째까지 자르고 정렬
            int[] subArray = new int[end - start];
            for (int j = start; j < end; j++) {
                subArray[j - start] = array[j];
            }
            // 정렬
            java.util.Arrays.sort(subArray);
            // k번째 숫자 찾기
            answer[i] = subArray[k];
        }
        return answer;
    }
}