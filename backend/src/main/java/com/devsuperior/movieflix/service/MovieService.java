package com.devsuperior.movieflix.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.MovieMinDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repository.GenreRepository;
import com.devsuperior.movieflix.repository.MovieRepository;
import com.devsuperior.movieflix.service.exception.ResourceNotFoundException;

@Service
public class MovieService {	
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = movieRepository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity, entity.getGenre());
	}
	
	@Transactional(readOnly = true)
	public Page<MovieMinDTO> findAllPaged(Long genreId, Pageable pageable) {
		   Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		   Page<Movie> page = movieRepository.find(genre, pageable);
		return page.map(x -> new MovieMinDTO(x));
	}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
