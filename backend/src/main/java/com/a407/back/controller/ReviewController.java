package com.a407.back.controller;

import com.a407.back.dto.ReviewCreateRequest;
import com.a407.back.model.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<String> createReview(
        @RequestBody ReviewCreateRequest reviewCreateRequest) {
        reviewService.createReview(reviewCreateRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body("성공");
    }


}
