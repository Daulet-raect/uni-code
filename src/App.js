import './App.css';
import React, {useState} from "react";
import {connect} from "react-redux";
import {switchLangEn, switchLangRu} from "./mainReducer";
import img from "./media/files-h-1.png"

const App = ({switchLangRu, switchLangEn, text}) => {
    const [activeLang, setActiveLang] = useState({ru: false, en: false})

    const changeLang = (lang) => {
        if (lang === "ru") {
            switchLangRu()
            setActiveLang({ru: true, en: false})
        } else {
            switchLangEn()
            setActiveLang({ru: false, en: true})
        }
    }

    return (
        <div>
            <div className="start">
                <div className="nav">
                    <a className="nav-element">{text.Home}</a>
                    <a className="nav-element">{text.Skills}</a>
                    <a className="nav-element">{text.AboutUs}</a>
                    <a className="nav-element">{text.Portfolio}</a>
                    <a className="nav-element">{text.Contacts}</a>
                </div>
                <div className="block1 ">
                    <div className="block-info header row">
                        <span className="name">Uni-code<span className="old">
                            &nbsp;{text.ProgrammersTeam}
                        </span></span>
                        <span className={"lang"}>
                <span className={activeLang.ru ? "lang-ru-active" : "lang-ru"} onClick={() => changeLang("ru")}>RU</span>
                |
                <span className={activeLang.en ? "lang-en-active" : "lang-en"} onClick={() => changeLang("en")}>EN</span>
            </span>
                    </div>
                    <img src={img} className="col-12 img-html"/>
                </div>
            </div>
            <div className="block2">
                <div className="block2-one">
                    About us
                </div>
                <div className="block2-two">
                    Hi, I'm Denis – UX/UI designer from Minsk.<br/> I'm interested in design and everything connected
                    with
                    it.<br/><br/>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.<br/> <br/>Ready
                    to
                    implement excellent projects<br/>with wonderful people.
                </div>
            </div>
            <div className="block3">
                <div className="skills">Skills</div>
                <div className="blocks-skills row">
                    <div className="skill col-4 ">Frontend
                        <div className="skill-text"></div>
                    </div>
                    <div className="skill2 col-4 ">Backend
                        <div className="skill-text"></div>
                    </div>
                    <div className="skill col-4 ">layout
                        <div className="skill-text"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({text: state.text})

const AppContainer = connect(mapStateToProps, {switchLangRu, switchLangEn})(App)

export default AppContainer;
