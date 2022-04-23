package lab.emt.service;

import lab.emt.model.User;

public interface AuthService {
    User login(String username, String password);
}
