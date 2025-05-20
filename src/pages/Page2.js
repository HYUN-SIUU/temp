import { useNavigate } from 'react-router-dom';
import useScrollMemory from '../hooks/useScrollMemory';
import img2 from '../img/img2.png';
import '../App.css';

function Page2() {
    useScrollMemory();

    const navigate = useNavigate();

    return (
    <div className="page">
        <img src={img2} alt="Page 2" className="full-image" />
        <div
        className="button"
        style={{ top: '21.5%', right: '11.5%', width: '8%', height: '4%' }}
        onClick={() => navigate(-1)}
        />
        <div
        className="button"
        style={{ top: '75%', left: '9%', width: '82%', height: '5%' }}
        onClick={() => navigate('/page3')}
        />
    </div>
    );
}

export default Page2;
