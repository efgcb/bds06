import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const AvalCard = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        toast.info('Avaliação enviada com sucesso!!');
        setValue('text', '');
        onInsertReview(response.data);
      })
      .catch((error) => {
       toast.error('Erro ao enviar a avaliação!!')
      });
  };

  return (
    <div className="base-card aval">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="base-card box">
          <input
            {...register('text', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.text ? 'is-invalid' : ''
            }`}
            name="text"
            placeholder="Deixe seua avaliação aqui"
          />
          {errors.text?.message}
        </div>
        <button type="submit" className="btn btn-primary btn-aval">
          SALVAR AVALIAÇÃO
        </button>
      </form>
    </div>
  );
};

export default AvalCard;
