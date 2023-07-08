   import { Title, Section1 } from "./Section.styled";
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