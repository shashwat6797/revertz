package com.revertz.backend.user.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
}