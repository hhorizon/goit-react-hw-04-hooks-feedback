import PropTypes from "prop-types";
import { NotificationMessage } from "./Notification.style";

const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
