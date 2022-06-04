import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  return <div>About con id : {id}</div>;
};

export default About;
