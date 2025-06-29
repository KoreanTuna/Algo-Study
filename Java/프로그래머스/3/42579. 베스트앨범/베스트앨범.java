import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        int[] answer = {};

        Map<String, Integer> genrePlayCount = new HashMap<>();
        Map<String, List<int[]>> genreSongs = new HashMap<>();

        // 장르별 재생 횟수와 노래 정보 수집
        for (int i = 0; i < genres.length; i++) {
            String genre = genres[i];
            int playCount = plays[i];
            
            genrePlayCount.put(genre, genrePlayCount.getOrDefault(genre, 0) + playCount);
            genreSongs.putIfAbsent(genre, new ArrayList<>());
            genreSongs.get(genre).add(new int[]{i, playCount}); // [노래 고유 번호, 재생 횟수]
        }
        
        // 장르별로 재생 횟수를 기준으로 정렬
        List<Map.Entry<String, Integer>> sortedGenres = new ArrayList<>(genrePlayCount.entrySet());
        sortedGenres.sort((a, b) -> b.getValue().compareTo(a.getValue()));

        List<Integer> answerList = new ArrayList<>();
        // 각 장르별로 노래를 정렬하고 최대 2개씩 선택
        for (Map.Entry<String, Integer> entry : sortedGenres) {
            String genre = entry.getKey();
            List<int[]> songs = genreSongs.get(genre);
            
            // 노래를 재생 횟수와 고유 번호로 정렬
            songs.sort((a, b) -> {
                if (b[1] == a[1]) {
                    return Integer.compare(a[0], b[0]); // 재생 횟수가 같으면 고유 번호로 정렬
                }
                return Integer.compare(b[1], a[1]); // 재생 횟수로 내림차순 정렬
            }
            );
            
            // 최대 2개의 노래를 선택
            for (int j = 0; j < Math.min(2, songs.size()); j++) {
                answerList.add(songs.get(j)[0]); // 노래 고유 번호 추가
            }
        }

        // 결과를 배열로 변환
        answer = answerList.stream().mapToInt(i -> i).toArray();

        return answer;
    }
}