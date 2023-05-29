import css from './Notification.module.css'
import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return (
    <>
      <p className={css.title}>{message}</p>
    </>
 )
}
export default Notification;

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
}