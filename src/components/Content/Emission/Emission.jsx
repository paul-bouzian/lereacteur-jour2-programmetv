import "./Emission.css";

const Emission = ({ emission }) => {
  return (
    <section>
      <h3>{emission.time}</h3>
      <div className="div-img">
        <img src={emission.image} alt="" />
      </div>
      <div className="emissionInfos">
        <h4>{emission.title}</h4>
        <p>{emission.type}</p>
        <div className="durationDiv">
          <h3>{emission.duration}</h3>
          {emission.isUnseen && <span>&bull; Inédit</span>}
          {emission.direct && <span>&bull; Direct</span>}
        </div>
      </div>
    </section>
  );
};

export default Emission;
