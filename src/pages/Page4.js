import { useNavigate } from 'react-router-dom';
import useScrollMemory from '../hooks/useScrollMemory';
import img4 from '../img/img4.png';
import '../App.css';

function Page4() {
    useScrollMemory();

    const navigate = useNavigate();

    return (
    <div className="page">
        <img src={img4} alt="Page 4" className="full-image" />
        <div
            className="button"
            style={{ top: '6.7%', right: '14%', width: '8%', height: '4%' }}
            onClick={() => navigate('/')}
        />
        <div
            className="button"
            style={{ top: '6.7%', right: '2.7%', width: '8%', height: '4%' }}
            onClick={() => navigate(-1)}
        />
        <div
            className="button"
            style={{ top: '21.5%', left: '5%', width: '45%', height: '5%' }}
            onClick={() => navigate('/page3')}
        />
        <div
            className="button"
            style={{ top: '10%', left: '6%', width: '15%', height: '5%', background: "#048A4C" }} // #048A4C #f8f8f8
        />
        <p
            className='button'
            style={{ top: '8.9%', left: '5.5%', color: "white", fontFamily: "Noto Sans KR", fontSize: "80px" }}
        >
            이규호
        </p>
    </div>
    );
}

export default Page4;
