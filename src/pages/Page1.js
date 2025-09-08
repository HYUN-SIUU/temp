import { useNavigate } from 'react-router-dom';
import useScrollMemory from '../hooks/useScrollMemory';
import img1 from '../img/img1.png';
import img5 from "../img/img5.jpg";
import '../App.css';

function Page1() {
    useScrollMemory();

    const navigate = useNavigate();

    return (
    <div className="page">
        <img src={img1} alt="Page 1" className="full-image" />
        <img 
            className='button'
            src={img5} alt="img5" 
            style={{ top: '6.7%', right: '12.2%', width: '8%', height: '4%', borderRadius: "50%", objectFit: "cover"  }} 
        />
        <div
            className="button"
            style={{ top: '6.7%', right: '12.2%', width: '8%', height: '4%' }}
            onClick={() => navigate('/page2')}
        />
        <div
            className="button"
            style={{ top: '6.7%', right: '2.9%', width: '8%', height: '4%' }}
            onClick={() => navigate('/page4')}
        />
    </div>
    );
}

export default Page1;
