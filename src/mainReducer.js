import React from "react";

const SWITCH_LANG_RU = "SWITCH_LANG_RU"
const SWITCH_LANG_EN = "SWITCH_LANG_EN"

const initialState = {

    text: {
        Home: "Home",
        Skills: "Skills",
        AboutUs: "About us",
        Portfolio: "Portfolio",
        Contacts: "Contacts",
        ProgrammersTeam: "Programmers team",

    },

    en:  {
        Home: "Home",
        Skills: "Skills",
        AboutUs: "About us",
        Portfolio: "Portfolio",
        Contacts: "Contacts",
        ProgrammersTeam: "Programmers team",

    },

    ru:  {
        Home: "Главная",
        Skills: "Умения",
        AboutUs: "О нас",
        Portfolio: "Портфолио",
        Contacts: "Контакты",
        ProgrammersTeam: "Команда программистов",

    },
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANG_RU:
            return {
                ...state,
                text: state.ru
            }

        case SWITCH_LANG_EN:
            return {
                ...state,
                text: state.en
            }

        default:
            return state
    }
}

export const switchLangRu = () => ({type: SWITCH_LANG_RU})
export const switchLangEn = () => ({type: SWITCH_LANG_EN})

export default mainReducer
