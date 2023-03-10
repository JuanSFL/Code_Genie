import Header from "../Header";
import Footer from "../Footer";

function Landing() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="welcome">
          <h1>Welcome to CodeGenie</h1>
          <p>We all need the magic lamp sometimes</p>
          <p>Search a Solution Below!</p>
          <input type="text" autocomplete="off" name="text" className="input"placeholder="Search"/>
          <p className="or">Or</p>
          <button className="login">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
