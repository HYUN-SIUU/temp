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
        <div
            className="button"
            style={{ top: '24%', left: '27%', width: '15%', height: '3%', background: "#f8f8f8" }} // #048A4C #f8f8f8
        />
        <h3
            className='button'
            style={{ top: '22.2%', left: '28.8%', fontFamily: "Noto Sans KR", fontSize: "70px" }}
        >
            김민재
        </h3>
    </div>
    );
}

export default Page3;