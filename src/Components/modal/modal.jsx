import './modal.css'

import {ReactComponent as ReactLogo} from '../../images/menu_24px.svg';


const Modal = () => {
    return (

        <div>
            <button data-modal-open className='modalOpenButton'><ReactLogo /></button>
            <div class="backdrop is-hidden" data-modal>
                <div class="modal">
                    <button className='modal-close' data-modal-close>dsadas</button>
                </div>
            </div>
        </div>
    )
};


export default Modal;