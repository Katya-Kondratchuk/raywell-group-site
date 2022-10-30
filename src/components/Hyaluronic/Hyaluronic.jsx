import "./Hyaluronic.css";

// import Container from "../Container/Container";

import HyaluronicImg from "../../images/envie/hyaluronic/hyaluronic.jpg";
import HyaluronicImg2 from "../../images/envie/hyaluronic/hyaluronic_2.jpg";
import HyaluronicImg3 from "../../images/envie/hyaluronic/Hyaluronic_3.jpeg";
// import { Link } from "react-router-dom";

const Hyaluronic = () => {
  return (
    <section className="hyaluronic">
      <div>
        <h1 className="sectionTitle">Hyaluronic</h1>
        <span className="sectionText sectionText--margin">
          Серія з гіалуроновою кислотою
        </span>
        <span className="sectionText">для інтенсивного росту волосся</span>
        <img className="powder-img" src={HyaluronicImg} alt="ampoules" />

        <div className="powder-container">
          <details className="powder-details">
            <summary className="powder-summary">Шампунь</summary>
            <p className="powder-text">
              Лікувальний шампунь на основі поліфенолів та нуклеотидів. Дбайливо
              очищає шкіру голови, стимулює активний ріст волосся. Містить
              гіалуронову кислоту з пролонгованим вивільненням. Готує шкіру
              голови до наступного кроку.
            </p>
            <p className="powder-text">
              Склад: Water, Sodium Laureth Sulfate, Cocamidopropyl Betaim,
              Cocamide Mea, Guarhydroxypropyltrmonium chloride, Parfum,
              Imidazolidinyl Urea, Menthol, Sodium Chloride, Disodium Edta,
              Methylparaben, Propylparaben, Ethylparaben, Phenoxyethanol,
              Pentylene Glykol, Sodium Hualuronate Crosspolymer, Olea Europea
              Fruit Extract, Trout Semen Extract, Alcohol, Sodium chloride,
              Propylen Glycol, Sodium Chondroitin Sulfate Proline, Riboflavin,
              PEG-40 Hydrogenated Castor Oil, Ethoxydiglycol, Citric Acid,
              C.I.42080\Acid Blue 7, C.I. 19140\Acid Yellow 23
            </p>
          </details>
          <details className="powder-details">
            <summary className="powder-summary">Ампули</summary>
            <p className="powder-text">
              Концентрований лосьйон в ампулах, який містить:
            </p>
            <p className="powder-text">
              •Procapil - це новий комплексний засіб, спрямований на вирішення
              основних причин алопеції, тобто випадання волосся. Активні
              компоненти засобу: комбінація пептиду Biotinyl-Tripeptide-1,
              апігенину (флавоноїди цитрусових) і олеанолової кислоти з Hemsleya
              amabilis. Він діє відразу на всі проблеми - блокує
              дегідротестестерон, стимулює поділ клітин і покращує
              мікроциркуляцію в шкірі голови, дозволяючи доставляти більше
              поживних речовин волоссю, запобігає старінню шкіри.
            </p>
            <p className="powder-text">
              •Гідралізовану гіалуронову кислоту, яка зволожує на клітинному
              рівні, спричиняє швидкий рух клітин, що сприяє їх відновленню,
              живленню та окисненню. Також гіалуронова кислота стимулює синтез
              білку та сприяє природному вироблення коллагену і еластану.
            </p>
            <p className="powder-text">
              •Гідралізовану гіалуронову кислоту, яка зволожує на клітинному
              рівні, спричиняє швидкий рух клітин, що сприяє їх відновленню,
              живленню та окисненню. Також гіалуронова кислота стимулює синтез
              білку та сприяє природному вироблення коллагену і еластану.
            </p>

            <p className="powder-text">
              •Гідралізовану касторову олію, активні компоненти якої провокують
              посилене утворення кератину, що сприяє загальному зміцненню
              волосяної цибулини та активному росту волосся. •Екстракт
              розмарину, - має судинно-звужуючий фактор і регулює секрецію
              сальних залоз
            </p>
            <p className="powder-text">•Оливкову олію та ментол</p>
            <p className="powder-text">
              Склад: Water, Alcohol Denat, PEG-40 Hydrogenated Castor oil,
              Polyquaternium-22, Rosmarinus Officinalis(Rosemary) Leaf Oil ,
              Butylene Glycol, PPG-26-Buteth-26, Apigenin, Oleanolic Acid,
              Biotinoyl Tripeptide-1, Pantylene Glycol, Sodium Hyaluronate
              Crosspolymer, Olea Europea Fruit Extract, Sodium DNA, Sodium
              Chloride, Menthol, Isopropyl Alcohol, Imidazolidinyl Urea,
              Disodium Edta, Limonene
            </p>
          </details>
        </div>
        <img className="powder-img" src={HyaluronicImg2} alt="ampoules" />
        <h2 className="sectionTitle sectionTitle--margin">
          Протокол процедури
        </h2>
        <img src={HyaluronicImg3} alt="compound" />
      </div>
    </section>
  );
};

export default Hyaluronic;
