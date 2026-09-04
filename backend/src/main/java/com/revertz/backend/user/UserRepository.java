package com.revertz.backend.user;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Lookups for unique fields
    Optional<User> findByUuid(UUID uuid);
    Optional<User> findByEmail(String email);
    Optional<User> findByPhone(String phone);

    // Validation / Existence checks (ideal for registration or updates)
    boolean existsByEmail(String email);
    boolean existsByPhone(String phone);
    boolean existsByUuid(UUID uuid);

    // Lookups for non-unique fields
    List<User> findByFirstName(String firstName);
    List<User> findByLastName(String lastName);
    List<User> findByFirstNameAndLastName(String firstName, String lastName);
}