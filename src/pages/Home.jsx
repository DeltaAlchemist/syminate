import { Menu } from '../components/Menu';
import chtbot from '../img/chatbot.png';
import Card1 from '../img/card1.jpg';

import './home.css'
import { Footer } from '../components/Footer/Footer';

const Home = () => {
    return(
        <div className="pusher">
            <div className="ui inverted vertical masthed center aligned segment" style={{ display: 'block' }}>
                <div className="header">
                    <div className="ui text container" style={{ fontFamily: 'Lato', boxSizing: 'border-box' }}>
                        <h1 className="ui inverted header" style={{ marginTop: '192px', minHeight:'14px', fontSize:'64px' }}>Syminate</h1>
                        <h2 style={{ fontWeight: '400', fontSize:'27.2px'}}>Que a felicidade vire rotina.</h2>
                        <div className="ui huge primary button" style={{ marginTop: '10px'}}>
                            Vamos lá 
                            <i className="right arrow icon" />
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="ui vertical stripe segment">
                        <div className="ui middle aligned stackable grid container">
                            <div className="row">
                                <div className="eight wide column">
                                    <h3 className="ui header">Nós ajudamos pessoas</h3>
                                    <p>Nós oferecemos soluções para ajudar pessoas a serem a melhor versão de si mesmos. Usando tecnologia e inovação podemos ir mais longe.</p>
                                    <h3 className="ui header">Nós podemos oferecer o intangível</h3>
                                    <p>Com o intuito de criar um mundo mais mentalmente resiliente, nós desenvolvemos o Raposym - uma IA que te faz sentir ouvido.</p>
                                </div>
                                <div className="six wide right floated column">
                                    <img src={chtbot} className="ui large bordered rounded image" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="center aligned column">
                                    <a className="ui huge button">Confira</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical stripe quote segment">
                        <div className="ui equal width stackable internally celled grid">
                            <div className="center aligned row">
                                <div className="column">
                                <h3>"What a Company"</h3>
                                <p>That is what they all say about us</p>
                                </div>
                                <div className="column">
                                <h3>"I shouldn't have gone with their competitor."</h3>
                                <p>
                                    <img src={Card1} className="ui avatar image" /> <b>Nan</b> Chief Fun Officer Acme Toys
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                       
        </div>
    )
}

export default Home