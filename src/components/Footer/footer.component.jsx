import "./footer.style.scss";
import PokemonLogo from "../../assets/img/pokemon-logo.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__img" src={PokemonLogo} alt="Pokemon Logo" />
    </div>
  );
}

export default Footer;
