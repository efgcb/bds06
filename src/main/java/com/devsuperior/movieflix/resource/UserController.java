package com.devsuperior.movieflix.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.service.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping(value = "/profile")
	@PreAuthorize("hasAnyRole('VISITOR','MEMBER')")
	public ResponseEntity<UserDTO> findProfileByUserLogged() {
		UserDTO dto = service.findProfileByUserLogged();
		return ResponseEntity.ok().body(dto);
		
	}	
	
	
}
