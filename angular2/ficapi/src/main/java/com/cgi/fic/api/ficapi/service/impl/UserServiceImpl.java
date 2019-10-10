package com.cgi.fic.api.ficapi.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cgi.fic.api.ficapi.resource.User;
import com.cgi.fic.api.ficapi.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	private List<User> users = new ArrayList<>();
	
	{
		users.add(new User("john","do"));
		users.add(new User("john","papa"));
		users.add(new User("foo","bar"));
	}
	
	@Override
	public List<User> getUsers() {
		return users;
	}

	@Override
	public User searchUser(String lastname) {
		return users.stream().filter(u->u.getLastName().equals(lastname))
				.findAny()
				.orElseThrow(RuntimeException::new);
	}

}
