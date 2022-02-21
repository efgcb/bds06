package com.devsuperior.movieflix.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{
	
	List<Genre> findAllByOrderByName();
}
