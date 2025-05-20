import { useNavigate } from 'react-router-dom';
import useScrollMemory from '../hooks/useScrollMemory';
import img1 from '../img/img1.png';
import '../App.css';

function Page1() {
    useScrollMemory();

    const navigate = useNavigate();

    return (
    <div className="page">
        <img src={img1} alt="Page 1" className="full-image" />
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
