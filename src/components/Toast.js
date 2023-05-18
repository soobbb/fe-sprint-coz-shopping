import { ToastContainer} from "react-toastify";

const Toast = ({ image }) => (
  <>
    <img className="custom-toast-image" src={image} alt="Bookmark Icon" />
    <ToastContainer className="custom-toast-container" />
  </>
);
export default Toast;
