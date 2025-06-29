import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {


        int[] answer = {};

        Map<String, Integer> genrePlayCount = new HashMap<>();
        Map<String, List<int[]>> genreSongs = new HashMap<>();

        for(int i = 0;i<genres.length;i++){
            String genre = genres[i];
            int playCount = plays[i];

            genrePlayCount.put(genre, genrePlayCount.getOrDefault(genre,0 )+ playCount);
            genreSongs.putIfAbsent(genre, new ArrayList<>());
            genreSongs.get(genre).add(new int[]{i,playCount});
        }

        List<Map.Entry<String, Integer>> sortedGenres = new ArrayList<>(genrePlayCount.entrySet());
        sortedGenres.sort((a,b)->b.getValue().compareTo(a.getValue()));

        System.out.println(sortedGenres);

        List<Integer> answerList = new ArrayList<>();
        for(Map.Entry<String, Integer> entry: sortedGenres){
            String genre = entry.getKey();
            List<int[]>songs = genreSongs.get(genre);

            songs.sort((a,b)->{
                if(b[1]==a[1]){
                    return Integer.compare(a[0], b[0]);
                }
                return Integer.compare(b[1], a[1]);
            });

            for(int j=0; j<Math.min(2, songs.size()); j++){
                answerList.add(songs.get(j)[0]);
            }


        }
        answer= answerList.stream().mapToInt(i->i).toArray();

        return answer;
    }
}