import { useNavigate } from 'react-router-dom';
import useScrollMemory from '../hooks/useScrollMemory';
import img3 from '../img/img3.png';
import '../App.css';

function Page3() {
    useScrollMemory();
    
    const navigate = useNavigate();

    return (
    <div className="page">
        <img src={img3} alt="Page 3" className="full-image" />
        <div
        className="button"
        style={{ top: '6.7%', left: '3%', width: '8%', height: '4%' }}
        onClick={() => navigate('/')}
        />
        <div
        className="button"
        style={{ top: '6.7%', right: '3%', width: '8%', height: '4%' }}
        onClick={() => navigate('/page4')}
        />
    </div>
    );
}

export default Page3;