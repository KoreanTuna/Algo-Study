import java.util.*;

class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;

        int maxWidth = 0;
        int maxHeight = 0;

        for(int[] size : sizes){
            // 가로와 세로를 비교하여 큰 값을 maxWidth, 작은 값을 maxHeight에 저장
            int width = Math.max(size[0], size[1]);
            int height = Math.min(size[0], size[1]);

            // 최대 가로 길이와 최대 세로 길이를 업데이트
            maxWidth = Math.max(maxWidth, width);
            maxHeight = Math.max(maxHeight, height);
        }

        // 최종 지갑의 크기 계산
        answer = maxWidth * maxHeight;
        return answer;
    }
}