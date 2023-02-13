import {useDispatch} from "react-redux";
import {addDislike, addLike} from "../actions/actions";

const MovieListItem = ({movie}) => {

    const {id, title, likes, dislikes, category} = movie;

    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(addLike(id));
    }

    const handleDisLike = () => {
        dispatch(addDislike(id));
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span className="badge bg-primary">
                        {category}
                    </span>
                    <hr/>
                    <div className="d-flex">
                        <button className="btn btn-primary align-items-center" onClick={handleLike}>
                            <span className="me-2">{likes}</span>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                        <button className="btn btn-primary d-flex align-items-center ms-3" onClick={handleDisLike}>
                            <span className="me-2">{dislikes}</span>
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieListItem;