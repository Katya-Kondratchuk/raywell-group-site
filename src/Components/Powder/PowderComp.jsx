import './Powder.css';
import Pudres from '../../images/pudresTablet.jpg'
import Powder from '../../images/powder.jpg'


const PowderComp = () => {
    return (
        <div>
            <h1 className='sectionTitle'>Technics</h1>
            <span className='sectionText'>Освітлюючі пудри Raywell</span>
            <img className='powder-img' src={Pudres} alt="Пудра" />
            <div className='powder-container'>
                <details className='powder-details'>
                    <summary className='powder-summary'>Безаміачна пудра Amonia Free</summary>
                    <p className='powder-text'>Безаміачна пудра AMMONIA FREE (1000g) Працює дуже м'яко, має кремово-гелеву консистенцію, оптимальну для роботи, зарахунок чого легко наноситься. Освітляє до 6-ти тонів. Має у складі протеїновий комплекс, завдяки якому волосся на виході в ідеальному стані, наповнене та зволожене.Пудра гіпоалергенна, не летка, має приємний запах.</p>
                    <p className='powder-text'>Склад: Potassium persulfate, Sodium silicate, Sodium persulfate, Sodium metasilicate, Hydrated silica, cyamopsis tetragonoloba, Silica, Magnesium carbonate, Cyclodextrin, Zea Mais, Tetrasodium edta, Sodium lauryl sulfate, Parfume, Citronellol, Geranion. </p>    
                </details>
                <details className='powder-details'>
                    <summary className='powder-summary'>Фіолетова пудра Sweet Sugar</summary>
                    <p className='powder-text'>Фіолетова пудра SWEET SUGAR (500 gr). Низькоаміачна пудра здатна захищати вологу волокна під час фази висвітлення волосся. Підходить для відкритих та закритих технік, висвітлює до 5 тонів за 15 хвилин. Має ICE-ефект - усуває жовтий пігмент під час висвітлення та дає ідеально-чисту базу. Містить полісахариди фруктових цукрів, що забезпечує краще зчеплення. Пудра не летка. Гіпоалергенна. Має приємний фруктовий аромат.</p>
                    <p className='powder-text'> Склад: Magnesium carbonate, Ammonium persulfate, Sodium silicate, Sodium stearate, Sodium metasilicate, Potassium persulfate, Diammonium phosphate, Silica, Polyamino sugar condensate, Sodium lauryl sulfate, Cyamopsis tetragonoloba (guar) gum, Xanthan gum, Tetrasodium edta, Paraffinum liquidum, Ultramarines/Ci 77007.</p>    
                </details>
                <details className='powder-details'>
                    <summary className='powder-summary'>Аміачна пудра Magic Velox</summary>
                    <p className='powder-text'>Аміачна пудра MAGIC VELOX (1000g) Має швику інтенсивну дію, освітляє до 6 тонів, має густу пластичну текстуру. До складу входить синій пігмент, який забирає жовтизну ще на етапі освітлення. Пудра не пересушує, гіпоалергенна, не летка, має приємний кокосовий аромат. </p>
                    <p className='powder-text'> Склад: Magnesium carbonate, ammonium persulfate, Sodiumsilicate, Sodium persulfate, Sodium stearate, Sodium mtasilicate, Potassium persulfate, Diammonium phosphate, Silica, Sodium lauryl sulfate, Cyamopsis tetragonoloba (guar) gum, Xanthan gum, Tetrasodium EDTA, Paraffinum liquidum\minerai oil, Ultramarines/CI 77007.</p>    
                </details>
            </div>
            <img className='powder-img' src={Powder} alt="Powder" />
        </div>

    )
}



export default PowderComp;