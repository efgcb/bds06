import { AuthContext } from 'AuthContext';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { getTokenData } from 'util/auth';
import { requestBackendLogin} from 'util/requests';
import { saveAuthData } from 'util/storage';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {

  const { setAuthContextData } = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        })       
        history.replace('/movies');
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Ocorreu um erro ao tentar efetuar o login
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email Inválido!!'
              }
            })}
            type="text"
            className={`form-control base-input ${errors.username? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Campo obrigatório'
            })}
            type="password"
            className={`form-control base-input ${errors.password? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
           <div className="invalid-feedback d-block">{errors.password?.message}</div>
        </div>
        <button className="btn btn-primary btn-login">FAZER LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
