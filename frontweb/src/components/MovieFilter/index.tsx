import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/Genre';

import { requestBackend } from 'util/requests';

import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { setValue, getValues, control } =
    useForm<MovieFilterData>(); 

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({
      url: './genres',
      withCredentials: true,
    }).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="base-card movie-filter-container">     
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectGenres}
              isClearable
              placeholder="Gêneros"
              classNamePrefix="movie-filter-select"
              onChange={(value) => handleChangeGenre(value as Genre)}
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
            />
          )}
        />    
    </div>
  );
};

export default MovieFilter;
