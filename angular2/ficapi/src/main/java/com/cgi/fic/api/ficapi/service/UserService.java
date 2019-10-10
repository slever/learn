package com.cgi.fic.api.ficapi.service;

import java.util.List;

import com.cgi.fic.api.ficapi.resource.User;

public interface UserService {
	List<User> getUsers();
	
	User searchUser(String lastname);
}
