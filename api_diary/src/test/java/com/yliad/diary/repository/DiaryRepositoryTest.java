package com.yliad.diary.repository;


import com.yliad.diary.entity.Diary;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DiaryRepositoryTest {
    @Autowired
    DiaryRepository diaryRepository;
//
//    @Test
//    void QueryTest(){
//        Diary diary = Diary.builder()
//                .emotion("a")
//                .content("1")
//                .build();
//        Diary diary1 = Diary.builder()
//                .emotion("a")
//                .content("1")
//                .build();
//        Diary diary2 = Diary.builder()
//                .emotion("b")
//                .content("1")
//                .build();
//        Diary diary3 = Diary.builder()
//                .emotion("c")
////                .diaryDate(LocalDateTime.parse("2022-05-28 15:18"))
//                .content("1")
//                .build();
//
//        //isnull(0)
//        diaryRepository.save(diary);
//        diaryRepository.save(diary1);
//        diaryRepository.save(diary2);
//        diaryRepository.save(diary3);
//
//        List<Integer> list = diaryRepository.countMonthEmotionCount(0L, 2022, 5);
//
////        List<Integer> list = diaryRepository.countEmotion();
//        for(int i = 0; i < list.size(); i++){
//            System.out.println(list.get(i));
//        }
//        diaryRepository.delete(diary);
//        diaryRepository.delete(diary1);
//        diaryRepository.delete(diary2);
//        diaryRepository.delete(diary3);
//    }
//
//
//    @Test
//    void countEmotionTest(){
//        Diary diary = Diary.builder()
//                .emotion("love")
//                .content("1")
//                .build();
//        Diary diary1 = Diary.builder()
//                .emotion("love")
//                .content("1")
//                .build();
//        Diary diary2 = Diary.builder()
//                .emotion("joy")
//                .content("1")
//                .build();
//        Diary diary3 = Diary.builder()
//                .emotion("anger")
//                .content("1")
//                .build();
//
//        diaryRepository.findById(1L);
//
//        //isnull(0)
//        diaryRepository.save(diary);
//        diaryRepository.save(diary1);
//        diaryRepository.save(diary2);
//        diaryRepository.save(diary3);
//
//        List<String> list2 = diaryRepository.countMonthEmotion(0L,2022, 5);
//        List<Integer> list = diaryRepository.countMonthEmotionCount(0L,2022, 5);
//
////        List<Integer> list = diaryRepository.countEmotion();
//        for(int i = 0; i < list.size(); i++){
//            System.out.println(list2.get(i));
//            System.out.println(list.get(i));
//        }
//
//    }
//
//    @Test
//    void countMonthEmotionTest(){
//
//        Diary diary = Diary.builder()
//                .emotion("love")
//                .content("1")
//                .build();
//        Diary diary1 = Diary.builder()
//                .emotion("love")
//                .content("1")
//                .build();
//        Diary diary2 = Diary.builder()
//                .emotion("joy")
//                .content("1")
//                .build();
//        Diary diary3 = Diary.builder()
//                .emotion("anger")
////                .diaryDate(LocalDateTime.parse("2022-05-28 15:18"))
//                .content("1")
//                .build();
//
//        diaryRepository.findById(1L);
//
//        //isnull(0)
//        diaryRepository.save(diary);
//        diaryRepository.save(diary1);
//        diaryRepository.save(diary2);
//        diaryRepository.save(diary3);
//
//        List<String> list2 = diaryRepository.countMonthEmotion(0L,2022, 5);
//        List<Integer> list = diaryRepository.countMonthEmotionCount(0L,2022, 5);
//
//        int year = diaryRepository.countDiaryYear(0L, 2022);
//        int month = diaryRepository.countDiaryMonth(0L, 2022, 5);
//        int total = diaryRepository.countDiaryTotal(0L);
//
//        System.out.println(year);
//        System.out.println(month);
//        System.out.println(total);
//        }
}
