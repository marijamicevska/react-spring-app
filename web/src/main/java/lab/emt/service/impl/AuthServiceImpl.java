package lab.emt.service.impl;


import lab.emt.model.User;
import lab.emt.model.exceptions.InvalidArgumentsException;
import lab.emt.model.exceptions.InvalidUserCredentialsException;
import lab.emt.repository.UserRepository;
import lab.emt.service.AuthService;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User login(String username, String password) {
        if (username==null || username.isEmpty() || password==null || password.isEmpty()) {
            throw new InvalidArgumentsException();
        }
        return userRepository.findByUsernameAndPassword(username,
                password).orElseThrow(InvalidUserCredentialsException::new);
    }


}
