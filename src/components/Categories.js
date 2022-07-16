import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../Styles/Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const checkForStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="check-status">
      <p className="status-name">{status}</p>
      <button type="button" onClick={checkForStatus}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
