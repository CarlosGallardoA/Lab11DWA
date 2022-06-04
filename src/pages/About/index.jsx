import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Usuario con DNI : {id}</h1>
    </>
  );
};

export default About;
