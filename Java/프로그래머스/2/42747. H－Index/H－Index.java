
class Solution {
    public int solution(int[] citations) {
        // 논문의 개수
        int paperCount = citations.length;
        
        // H-Index를 계산하기 위한 변수
        int hIndex = 0;

        // 인용횟수 내림차순 정렬
        java.util.Arrays.sort(citations);

        // H-Index 계산
        for (int i = 0; i < paperCount; i++) {
            // 현재 인용 횟수
            int citation = citations[paperCount - 1 - i];

            // H-Index 조건 확인
            if (citation >= i + 1) {
                hIndex = i + 1;
            } else {
                break; 
            }
        }

        return hIndex;
    }
}