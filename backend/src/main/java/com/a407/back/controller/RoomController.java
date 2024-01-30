package com.a407.back.controller;

import com.a407.back.config.constants.SuccessCode;
import com.a407.back.dto.Room.MakePublicRoomRequest;
import com.a407.back.dto.util.ApiResponse;
import com.a407.back.model.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    @PostMapping("/")
    public ResponseEntity<ApiResponse<Long>> makePublicRoom(
        @RequestBody MakePublicRoomRequest makePublicRoomRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(
            new ApiResponse<>(SuccessCode.INSERT_SUCCESS,
                roomService.makePublicRoom(makePublicRoomRequest)));
    }
}
