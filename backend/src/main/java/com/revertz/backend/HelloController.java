package com.revertz.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "<h2>Hello, Spring Boot is <span style='color: red;'>running</span> very good!</h2>";
    }
}