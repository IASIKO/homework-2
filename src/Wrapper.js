import Footer from "./Footer";
import Navbar from "./Navbar";
import Parent from "./Parent";

function Wrapper(props) {
  return (
    <>
      <Navbar />
      {props.children}
        <Parent/>
      <Footer />
    </>
  );
}

export default Wrapper;
