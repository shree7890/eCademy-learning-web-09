
import { useParams } from 'react-router';
import './GetService.css';
const GetService = () => {
    const { teacherId } = useParams();

    return (
        <div className="py-5 text-center">
            <h2>{teacherId}</h2>
        </div>
    );
};

export default GetService;