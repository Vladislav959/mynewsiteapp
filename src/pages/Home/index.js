import './index.css'
import "animate.css"
import memoji from '../../memoji.png'
import Footer from '../../components/Footer'
import yundupreview from '../../yundupreview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faDribbbleSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {PageSlides, SlideParallaxType} from 'react-page-slides';
export default function Home(props){
    const mediaQuery = window.matchMedia('(max-width:600px)');
    let matches = mediaQuery.matches
    mediaQuery.addEventListener('change',(e)=>{
        if(matches !== e.matches){
            props.refresh()
        }
        if(e.matches){
            document.body.style.overflow = 'visible'
        }
    })
    const slides = [
        {
            content: <><div className="vg__home-div_centered">
        
            <div className="vg__home-infoavatar">
            <img src={memoji} alt="Vladislav Gubarev"/></div>
            <div style={{display: 'flex', flexDirection:'column',alignItems: 'center'}}>
            <h1 className="vg__home-heading_grand">Привет, я Влад!</h1>
            <div className="vg__home-info">
            <p>Веб-разработчик и бренд-дизайнер с 2018 года.</p>
            <div className="vg__home-infosocial">
                <a rel="noreferrer" target="_blank" href="https://github.com/Vladislav959">
                <div>
                <FontAwesomeIcon icon={faGithubSquare} />
                
                </div>
                </a>
    
                <a rel="noreferrer" target="_blank" href="https://dribbble.com/vla_doss">
                <div>
                <FontAwesomeIcon icon={faDribbbleSquare} />
                </div>
                </a>
    
                <a rel="noreferrer" target="_blank" href="https://t.me/kopleti">
                <div style={{fontSize:'1.7em'}}>
                <FontAwesomeIcon icon={faTelegram}/>
                </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            <div className="vg__home-scrolldown">
                <p>Прокрути вниз</p>
		<div style={{marginTop:5}}>
			<span className="vg__home-m_scroll_arrows vg__home-doi"></span>
			<span className="vg__home-m_scroll_arrows vg__home-trei"></span>
		</div>
            </div></>
        },
        {
            content:<div style={{padding:'0 10px'}}>
                <h1>Обо мне</h1>
                <div className="vg__home-aboutme"><p>Знаю HTML, CSS, JS и NodeJS. Работаю с MongoDB и ReactJS. Создам вам сайт-визитку, корпоративный сайт, блог и собственный проект.</p>
                <p>Создам уникальный фирменный стиль для вашего бренда с логотипом и полным брендбуком.</p>
                </div>   
                <div className="vg__home-scrolldown">
                <p>Прокрути вниз</p>
		<div style={{marginTop:5}}>
			<span className="vg__home-m_scroll_arrows vg__home-doi"></span>
			<span className="vg__home-m_scroll_arrows vg__home-trei"></span>
		</div>
            </div>
            </div>
        },
        {
            content: <div style={{padding:'0 10px'}}>
                <h1>Мои работы</h1>
                <div className="vg__home-cards">
                <div className="vg__home-card"><a href="https://yundu.co">
                    <img src={yundupreview} alt=""/>
                    <p>Yundu</p>
                    <p>Сервис для школьников, основанный на технологии мини-приложений.</p>
                </a></div>
                </div>
                <div className="vg__home-scrolldown">
                <p>Прокрути вниз</p>
		<div style={{marginTop:5}}>
			<span className="vg__home-m_scroll_arrows vg__home-doi"></span>
			<span className="vg__home-m_scroll_arrows vg__home-trei"></span>
		</div>
            </div>
            </div>
        },
        {
            content: <div style={{padding:'0 10px'}}>
                <h1>Мои дизайны</h1>
                <div className="vg__home-dribbble"><a href="https://dribbble.com/vla_doss">Просмотреть</a></div>
                
        <Footer/>
            </div>
        },
    ];
    return(
        <>
            {matches ? 
            <>
                <><div className="vg__home-div_centered">
        
        <div className="vg__home-infoavatar">
        <img src={memoji} alt="Vladislav Gubarev"/></div>
        <div style={{display: 'flex', flexDirection:'column',alignItems: 'center'}}>
        <h1 className="vg__home-heading_grand">Привет, я Влад!</h1>
        <div className="vg__home-info">
        <p>Веб-разработчик и бренд-дизайнер с 2018 года.</p>
        <div className="vg__home-infosocial">
            <a rel="noreferrer" target="_blank" href="https://github.com/Vladislav959">
            <div>
            <FontAwesomeIcon icon={faGithubSquare} />
            
            </div>
            </a>

            <a rel="noreferrer" target="_blank" href="https://dribbble.com/vla_doss">
            <div>
            <FontAwesomeIcon icon={faDribbbleSquare} />
            </div>
            </a>

            <a rel="noreferrer" target="_blank" href="https://t.me/kopleti">
            <div style={{fontSize:'1.7em'}}>
            <FontAwesomeIcon icon={faTelegram}/>
            </div>
            </a>
        </div>
        </div>
        </div>
        </div>
        <div className="vg__home-scrolldown">
            <p>Прокрути вниз</p>
    <div style={{marginTop:5}}>
        <span className="vg__home-m_scroll_arrows vg__home-doi"></span>
        <span className="vg__home-m_scroll_arrows vg__home-trei"></span>
    </div>
        </div></><div className="vg__home-nextpage">
            <h1>Обо мне</h1>
            <div className="vg__home-aboutme"><p>Знаю HTML, CSS, JS и NodeJS. Работаю с MongoDB и ReactJS. Создам вам сайт-визитку, корпоративный сайт, блог и собственный проект.</p>
            <p>Создам уникальный фирменный стиль для вашего бренда с логотипом и полным брендбуком.</p>
            </div>   
            <div className="vg__home-scrolldown">
            <p>Прокрути вниз</p>
    <div style={{marginTop:5}}>
        <span className="vg__home-m_scroll_arrows vg__home-doi"></span>
        <span className="vg__home-m_scroll_arrows vg__home-trei"></span>
    </div>
        </div>
        </div><div className="vg__home-nextpage">
            <h1>Мои работы</h1>
            <div className="vg__home-cards">
            <div className="vg__home-card"><a href="https://yundu.co">
                <img src={yundupreview} alt=""/>
                <p>Yundu</p>
                <p>Сервис для школьников, основанный на технологии мини-приложений.</p>
            </a></div>
            </div>
            <div className="vg__home-scrolldown">
            <p>Прокрути вниз</p>
    <div style={{marginTop:5}}>
        <span className="vg__home-m_scroll_arrows vg__home-doi"></span>
        <span className="vg__home-m_scroll_arrows vg__home-trei"></span>
    </div>
        </div>
        </div> <div className="vg__home-nextpage">
            <h1>Мои дизайны</h1>
            <div className="vg__home-dribbble"><a href="https://dribbble.com/vla_doss">Просмотреть</a></div>
            
    <Footer/>
        </div></>
        :
        <PageSlides
            enableAutoScroll={true}
            transitionSpeed={1000}
            slides={slides}
            parallax={{
                offset: 0.6,
                type: SlideParallaxType.reveal
            }}
        />
            }
        </>
        
    )
}