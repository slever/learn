package com.cgi.fic.api.ficapi.controller;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.fic.api.ficapi.resource.Greeting;
import com.cgi.fic.api.ficapi.resource.User;
import com.cgi.fic.api.ficapi.service.UserService;

@RestController
public class FicapiController {
	private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
	
    @Autowired
    private UserService userService;
    
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
	
	@GetMapping("/user")
    public List<User> users() {
        return userService.getUsers();
    }
	
	@GetMapping("/user/{lastname}")
    public User user(@PathVariable (value="lastname", required = true) String lastname) {
        return userService.searchUser(lastname);
    }
	
	@PostMapping("/login")
    public User login(@RequestBody User user) {
		// not a real login :)
        return userService.searchUser(user.getUserId());
    }
}
