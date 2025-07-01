import java.util.*;


class Solution {
    public int solution(int[] nums) {
        int answer = 0;


        // Set을 사용하여 중복된 폰켓몬 종류를 제거
        Set<Integer> uniquePokemon = new HashSet<>();
        for (int num : nums) {
            uniquePokemon.add(num);
        }

        // N/2마리를 선택할 수 있으므로, 최대 선택 가능한 폰켓몬 종류는 N/2와 고유한 폰켓몬 종류의 개수 중 작은 값
        int maxSelectable = nums.length / 2;
        answer = Math.min(uniquePokemon.size(), maxSelectable);

        return answer;
    }
}