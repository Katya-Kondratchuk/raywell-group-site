import "./ColorPlex.css";
import Container from '../Container/Container'
import Main from '../../images/colorPlex/main.jpg'

// import Slider1 from '../../images/colorPlex/slider1.jpg'
// import Slider2 from '../../images/colorPlex/slider2.jpg'
// import Slider3 from '../../images/colorPlex/slider3.jpg'
// import Slider4 from '../../images/colorPlex/slider4.jpg'

// const images = [
//   {
//     original: "../../images/colorPlex/slider1.jpg",
//   },
//   {
//     original: "../../images/colorPlex/slider2.jpg",
//   },
//   {
//     original: "../../images/colorPlex/slider3.jpg",
//   },
//   {
//     original: "../../images/colorPlex/slider4.jpg",
//   },
// ];

const ColorPlex = () => {
  return (
    <div>

      <h1 className="colorPlex-Title">Color Plex</h1>
      <span className="sectionText colorplex-text">
        Фарбник
        <br />з рослинним кератином
      </span>
      <img className="colorPlexImg" src={Main} alt="ColorPlex" />
      <Container>
        <div className="textWrapper">
          <h2 className="colorPlexColors">Фарбник Color Plex</h2>
          <p>Фарбник COLOR PLEX (100ml). Містить в собі рослинний кератин та систему захисту CUTICLEX. В процесі досліджень у лабораторії INTERCOSMETICS було виявлено, що оболонка, яка вкриває плоди кіноа схожа за своїми властивостями та складом на кератин, завдяки цьому вона може замінити у складі фарбника частину хімічних компонентів на натуральні, знижує об'єм пошкоджень під час фарбування та не дає фарбнику проникати у шкіру голови.</p>
          <p>Окрім цього, насіння кіноа містить амінокислоти, серед яких - "лізин". Лізин сприяє природному виробленню колагену. Color Plex дозволяє провести процес фарбування зберігаючи цілісність структури волосся, робить його міцним, блискучим та інтенсивно укріплює стрижень волосини.</p>
          <p>Склад: Cetearyl alcohol, Ceteareth-25, Stearic Acid, Palmitic acid, Propylene glycol, Laureth-6, Ammonia polyglyceryl-4 caprate, polyglyceryl-3, Ricinoleate, Polyquaternium-22, Cetrimonium chloride, Parfum, Edta, Citric acid, Sodium sulfite, Hydrolyzed keratin, Hydrolyzed vegetable protein Pg-Propyl silanetriol, Chenopodium Quinoa seed extract, p-Phenylenediamine, N,N-BIS(2-Hydroxyethyl)-P-Phenylen Ediamine Sulfate, M-Aminophenol, Resorcinol, Benzyl Salicylate, linalool</p>
        </div>
        </Container>
    </div>
  );
};

export default ColorPlex;
