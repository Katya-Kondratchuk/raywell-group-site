import "./Collagene.css";

import CollagenImg from "../../images/envie/collagen/collagen.jpg";
import CollagenDescription from "../../images/envie/collagen/collagen_desc.jpg";

const Collagene = () => {
  return (
    <section className="hyaluronic">
      <div>
        <h1 className="sectionTitle">Collagene</h1>
        <span className="sectionText sectionText--margin">
          Серія для збереження кольору
        </span>
        <span className="sectionText">та відновлення фарбованого волосся.</span>
        <img className="powder-img" src={CollagenImg} alt="ampoules" />

        <div className="powder-container">
          <details className="powder-details">
            <summary className="powder-summary">Шампунь</summary>
            <p className="powder-text">
              Шампунь (250/1000ml) для фарбованого волосся з колагеном та кисим
              РН глибоко зволожує, захищає та посилює яскравість кольору.
              Запобігає появі посічених кінчиків, покращує текстуру та змешшує
              пористість. Призначений для в'юнкого, сухого та хімічно
              обробленного волосся. Завдяки вмісту молочних протеїнів він
              зміцнює, живить та зволожує волосся.
            </p>
            <p className="powder-text">
              Склад: Water, Sodium laureth sulfate, Glycerin, Cocomidopropyl
              betaine, Glycol distearate, Cocamide mea, Cocamide dea,
              Polyquaternium-7, Sodium chloride, Laureth-10, Parfum,
              Imidazolidinyl urea, Phenoxyethanol, Disodium edta, Laureth-9,
              Trideceth-12, Methylparaben, Propylparaben, Ethylparaben,
              Amodimethicone, C-11-15 Pareth-7, Collagen,
              Methylchloroisothiazolinone, Methylisothiazolinone, Citric Acid,
              Linalool.
            </p>
          </details>
          <details className="powder-details">
            <summary className="powder-summary">Маска</summary>

            <p className="powder-text">
              Маска-стабілізатор (250/1000ml) з колагеном та кислим РН
              нейтралізує залишкові лужні процеси та закриває чешуйки кутикули
              для довготривалого збереження кольору. Підвищує пружність та
              міцність волосся, робить його м'яким та шовковистим. Здатна
              запобігати пошкодженню, поповнювати нестачу білків та глибоко
              зволожувати волосся з середини, роблячи його пружним та еластичним
              по всій довжині.
            </p>
            <p className="powder-text">
              Склад: Water, Cetearyl Alcohol, Myristyl alcohol, Cetrimonium
              chloride, Behentrimonium chloride, Isopropyl alcohol, Parfum,
              Phenoxyethanol, Imidazolidinyl urea, Disodium edta, Collagen,
              Steardimonium hydroxypropyl panthenyl PEG-7 dimeticone phosphate
              chloride, Methylparaben, Propylparaben, Ethylparaben, Citric Acid,
              Linalool.
            </p>
          </details>
          <details className="powder-details">
            <summary className="powder-summary">Спрей-флюїд</summary>

            <p className="powder-text">
              Спрей-флюїд (250ml) з колагеном регенерує волосся після фарбування
              та хімічних обробок, глибоко відновлює, робить м'яким, блискучим
              та об'ємним.
            </p>
            <p className="powder-text">
              Склад: Water, Isopropyl alcohol, Propylene glycol, Cetrimonium
              chloride, Myristyl alcohol, 2-Methylpropanol, Cetearyl alcohol,
              Collagen, Parfum, Linalool.
            </p>
          </details>
        </div>
        <h2 className="sectionTitle sectionTitle--margin">
          Протокол процедури
        </h2>
        <span className="sectionText sectionText--margin">
          Колагенова процедура
        </span>
        <span className="sectionText">
          для збереження та насичення кольору.
        </span>

        <img src={CollagenDescription} alt="compound" />
      </div>
    </section>
  );
};

export default Collagene;
