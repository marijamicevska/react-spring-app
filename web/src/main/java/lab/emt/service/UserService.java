package lab.emt.service;

import lab.emt.model.Role;

import lab.emt.model.User;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    User register(String username, String password, String repeatPassword, String name, String surname, Role role);

    UserDetails loadUserByUsername(String username);
}
