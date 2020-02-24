import { useState, useEffect } from "react";
import { createStore, useStore } from 'react-hookstore';

const useMenuState = () => {
    try {
        createStore('menuShown', false);
    } catch { }

    const [open, setOpen] = useStore('menuShown');

    const handleMenuShownClick = () => {
        const val = open;
        setOpen(!val);
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 700);

    };

    return {
        open,
        setOpen,
        handleMenuShownClick
    }
}

export default useMenuState;