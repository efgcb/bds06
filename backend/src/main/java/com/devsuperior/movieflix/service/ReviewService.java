package com.devsuperior.movieflix.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repository.MovieRepository;
import com.devsuperior.movieflix.repository.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private AuthService authService;

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		copyDtoToEntity(dto, entity);
		entity = reviewRepository.save(entity);
		return new ReviewDTO(entity, entity.getUser());

	}

	private void copyDtoToEntity(ReviewDTO dto, Review entity) {

		User user = authService.authenticated();
		Movie movieEntity = movieRepository.getOne(dto.getMovieId());

		entity.setText(dto.getText());
		entity.setMovie(movieEntity);
		entity.setUser(user);

	}

}
