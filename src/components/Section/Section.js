import css from './Section.module.css';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <div className = {css.section}>
      <h1 className = {css.title}>{title}</h1>
      {children}
     </div>
   )
}
export default Section;

Section.protoTypes = {
  title: PropTypes.string.isRequired,
}