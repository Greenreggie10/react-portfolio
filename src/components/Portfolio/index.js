import React, {useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
// import { db } from '../../firebase';
import { portfolioData } from "../../data/portfolio";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
      

        // return () => {
        //     clearTimeout(timer);
        // }
    // });

    // useEffect(() => {
    //     getPortfolio();
    // }, []);

    // const getPortfolio = async () => {
    //     // const querySnapshot = await getDocs(collection(db, 'portfolio'));

        
    //     // setPortfolio(querySnapshot.docs.map(doc => doc.data()));
    //     setPortfolio([{idx:1,port:{imge:'https://picsum.photos/200/200',name:'Test',description:'test description',url:'https://picsum.photos/200/200'}}])
    // }

    const renderPortfolio = () => {

        // {getPortfolio()}
        
        return (
            <div className="images-container">
                {
                    portfolioData.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;