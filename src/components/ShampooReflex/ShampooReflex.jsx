import "./ShampooReflex.css";
import Shampoo from "../../images/envie/shampoo_reflex.jpg";
import Container from "../Container/Container";

const ShampooReflex = () => {
  return (
    <section className="shampoo">
      <div>
        <h1 className="sectionTitle">Shampoo Reflex</h1>
        <span className="sectionText sectionText--margin">
          Шампунь для блонду
        </span>
        <span className="sectionText">з ефектом анти-жовтизни</span>
        <img className="powder-img" src={Shampoo} alt="ampoules" />

        <Container>
          <div className="shampoo__wrapper">
            <h2 className="shampoo__title">Шампунь з ефектом анти-жовтизни</h2>
            <p className="shampoo__text shampoo__text--margin">
              Шампунь (250/1000ml) призначений для дбайливого догляду за
              світлим, знебарвленим волоссям. Синій та фіолетовий пігменти, які
              входять до його складу нейтралізують небажаний жовтий нюанс,
              надають свіжість відтінкам блонд. Шампунь захищає від УФ-променів
              та надає додатковий блиск.
            </p>
            <p className="shampoo__text">
              Склад: Water, Sodium, Laureth sulfate, Cocamidopropyl betaine,
              Cocamide mea, Glycol distearate bisamino Peg Pgg 41\3 Aminoethyl
              Pg-propyl dimethicone, Imidazolidinyl urea, Parfum,
              Phenoxyethanol, Disodium edta, Laureth-10, Methyl paraben,
              Propylparaben, Ethyl paraben, Acid violet 43, Hc Blue No.2, Citric
              Acid, Benzyl Salicylate.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ShampooReflex;
