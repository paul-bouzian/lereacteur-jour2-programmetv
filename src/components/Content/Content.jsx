import "./Content.css";
import programme from "../../assets/programme.json";
import Emission from "./Emission/Emission";

const Content = () => {
  return (
    <main>
      {programme.map((emission, index) => {
        return <Emission key={index} emission={emission} />;
      })}
    </main>
  );
};

export default Content;
