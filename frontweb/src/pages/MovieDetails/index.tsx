import Assentment from '../../components/Assentment';
import AssentmentAval from '../../components/AssentmentAval';
import './styles.css';


const MovieDetails = () => {
    return (
        <div className="assentmentDetails-container">        
            <div className="assentmentDetails-content-container">          
            <h1>Tela detalhes do filme id: 1</h1>
            <AssentmentAval />
            <Assentment />
            <Assentment />
            <Assentment />
            <Assentment />
            </div>
           
        
        </div>
    );
};

export default MovieDetails;