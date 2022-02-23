import './styles.css';

const AssentmentAval = () => {
  return (
    <div className="base-card aval">
      <form>
        <div className="mb-4 box">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Deixe seua avaliação aqui"
            name="aval"
          />
        </div>
        <button className="btn btn-primary btn-aval">SALVAR AVALIAÇÃO</button>
      </form>
    </div>
  );
};

export default AssentmentAval;
