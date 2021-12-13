import  lilo  from "./khalilos.jpg";
import "./Style.css";
function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={lilo} alt=" " style={{ heigth: 240, width: 320 }} />

        <br />

        
      <img src="/imageInPublic.jpg" alt=" " style={{ heigth: 240, width: 320 }} />

      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}
export default App