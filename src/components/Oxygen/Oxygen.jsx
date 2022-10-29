import './Oxygen.css'

import OxigenSolo from '../../images/oxigen-solo.jpg'
import Oxigen2 from '../../images/2ndOxigen.jpg'

const OxygenComp = () => {
    return (
        <div>
            <h1 className="sectionTitle">Oxygen</h1>
            <span className='sectionText'>Окисники Raywell</span>

            <ul className='oxygen-list'>
                <li>
                    <img src={OxigenSolo} alt="oxigen" />
                    <div className='list-container'>
                    <h2 className='oxygen-list-title'>Окисники Raywell</h2>
                        <p className='list-text'>Окисники (200/1000ml). Мають приємну кремо-подібну структуру, при змішуванні з фарбником нейтралізують запах аміаку, тож готова суміш має не різкий фруктовий аромат. Не агресивні, мають м'яку дію і, як результат, мінімально пошкоджують структуру волосини.
                            <br /> 
                        <br /> 
                    В асортименті:
                        <br />
                    Х - окисник Активатор, 10 - 3%, 20 - 6%, 30 - 9%, 40 - 12%
                        <br />
                        <br />
                        Склад: Water, Hydrogen peroxide, Cetearyl alcohol, Paraffinum Liquidum, Ceteareth-20, Ceteareth-30, Lauryl alcohol, Parfum, Myristyl alcohol, Oxyquinoline sulfate, Tetrasodium EDTA, Etidronic acid.
                        </p>
                        </div>
                </li>
                <li>
                    <img src={Oxigen2} alt="oxigen" />
                    <div className='list-container'>
                    <h2 className='oxygen-list-title'>Окисники Raywell з анти-жовтим ефектом</h2>
                        <p className='list-text'>
                            Окисники з ефектом анти-жовтизни (1000ml). Мають приємну кремо-подібну структуру, при змішуванні з фарбником нейтралізують запах аміаку, тож готова суміш має не різкий фруктовий аромат.
                            <br />
                            У складі містяться пом'якшувальні олії, завдяки яким окисник краще проникає та покриває світле волосся. Усуває жовтий колір ще на стадії висвітлення та має додаткові захисні властивості для освітленого та пошкодженого волосся.                        <br />
                            <br />
                            В асортименті:
                            <br />
                            Х - окисник Активатор, 10 - 3%, 20 - 6%, 30 - 9%, 40 - 12%
                            <br />
                            <br />
                            Склад: Water, Hydrogen peroxide, Cetearyl alcohol, Paraffinum liquidum, Ceteareth-20, Ceteareth-30, Lauryl alcohol, Parfum, Myristyl alcohol, Oxyquinoline sulfate, Tetrasodium EDTA, Etidronic acid, Acid violet 43.
                        </p>
                        </div>
                </li>
            </ul>
        </div>
    )
}

export default OxygenComp;