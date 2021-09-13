import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import s from './Modal.module.css';

const Modal = ({ action, character }) => {
    const { name, status, species, gender, origin, image } = character;
    const [isOpen, setOpen] = useState(true);
    const onHadleClick = () => {
        setOpen(false);
        setTimeout(() => {
            action(false);
        }, 300);
    };

    return (
        <div className={s.overlay}>
            <CSSTransition
                in={isOpen}
                appear={true}
                timeout={300}
                classNames={{
                    enterActive: s["enter-active"],
                    enterDone: s["enter"],
                    exitDone: s["exit"],
                    exitActive: s["exit-active"],
                }}
                unmountOnExit
            >
                <div className={s.modal}>
                    <div>
                        <img className={s.ImageGalleryItemImage} src={image} alt={name} />
                        <div className={s.about}>
                            <p className={s.text}>Name: {name}</p>
                            <hr />
                            <p className={s.info}>Species: {species}</p>
                            <p className={s.info}>Gender: {gender}</p>
                            <p className={s.info}>Status: {status}</p>
                            <p className={s.info}>Origin: {origin}</p>
                        </div>
                    </div>
                    <button className={s.modalBtn} onClick={onHadleClick} type="button">
                        <svg
                            className={s.modalIcon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
            </CSSTransition>
        </div>
    );
};
export default Modal;

