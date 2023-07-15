   import { Title, Section1 } from "./Section.styled";
   import PropTypes from 'prop-types'
   
   const Section = ({title, children}) => {
    return (
<>
<Section1>
            <Title >{title}</Title>
            {children}
</Section1>      
</>
    );
  };
  
  export default Section;

  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };