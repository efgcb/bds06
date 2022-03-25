
import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId : string;
  onInsertReview: (review: Review) => void;
}

type FormData = {
  movieId: number;
  text: string;
};


const AvalCard = ({ movieId, onInsertReview } : Props) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue
  } = useForm<FormData>();
  

const onSubmit = (formData: FormData) => {
  formData.movieId = parseInt(movieId);
  console.log(formData);

const config: AxiosRequestConfig = {
  method: 'POST',
  url: '/reviews',
  data: formData,
  withCredentials: true
};

requestBackend(config)
  .then(response => {
   setValue('text','');
   onInsertReview(response.data);
  })
  .catch(error => {
    console.log('ERRO AO SALVAR', error);
  });
}; 

  return (
    <div className="base-card aval">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 box">
          <input
          { ...register('text', {
            required: 'Campo obrigatório',
          })}
            type="text"
            name="text"            
            placeholder="Deixe seua avaliação aqui"           
          />
          <div>
            {errors.text?.message}
          </div>
        </div>
        <button type= "submit" className="btn btn-primary btn-aval">SALVAR AVALIAÇÃO</button>
      </form>
    </div>
  );
};

export default AvalCard;
