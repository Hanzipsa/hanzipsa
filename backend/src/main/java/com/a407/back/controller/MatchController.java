package com.a407.back.controller;

import com.a407.back.config.ErrorCode;
import com.a407.back.domain.Zipsa;
import com.a407.back.dto.MatchSearchRequest;
import com.a407.back.dto.MatchSearchResponse;
import com.a407.back.exception.CustomException;
import com.a407.back.model.service.MatchService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/matches")
public class MatchController {

    private final MatchService matchService;


    @GetMapping("/filter")
    public ResponseEntity<List<MatchSearchResponse>> getZipsas(
        @RequestParam(name = "majorCategory") String majorCategory,
        @RequestParam(name = "gender", required = false) String gender,
        @RequestParam(name = "age", required = false) String age,
        @RequestParam(name = "grade", required = false) String grade,
        @RequestParam(name = "score", required = false) String score) {

        if (majorCategory == null) {
            throw new CustomException(ErrorCode.BAD_REQUEST_ERROR);
        }
        MatchSearchRequest condition = new MatchSearchRequest(Long.parseLong(majorCategory), gender,
            age, grade, score);

        List<Zipsa> zipsas = matchService.getMatchesByConditions(condition);

        List<MatchSearchResponse> matchSearchResponses = zipsas.stream().map(zipsa -> {
            List<String> categories = matchService.getCategoryNamesForZipsa(zipsa);
            return new MatchSearchResponse(
                zipsa.getZipsaId().getName(),// Zipsa의 이름
                zipsa.getZipsaId().getProfileImage(), // Zipsa의 프로필 이미지
                zipsa.getGradeId(), // Zipsa의 등급 ID
                categories, // Zipsa의 카테고리 이름 리스트
                zipsa.getServiceCount(), // Zipsa의 서비스 횟수
                majorCategory // 필터링에 사용된 대분류 카테고리 ID
            );
        }).collect(Collectors.toList());

        return ResponseEntity.ok(matchSearchResponses);
    }


}