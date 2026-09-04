package com.revertz.backend.user;

import org.springframework.stereotype.Service;
import com.revertz.backend.user.UserRepository;
import com.revertz.backend.user.User;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already taken!");
        }
        return userRepository.save(user);
    }

    public Optional<User> getUserByUuid(UUID uuid) {
        return userRepository.findByUuid(uuid);
    }
}
