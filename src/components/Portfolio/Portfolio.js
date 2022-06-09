import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/HAMMER.BD-screenshot.png';
import IMG2 from '../../assets/Fruits Warehouse-screenshot.png';
import IMG3 from '../../assets/Wild Photographer-screenshot.png';
import IMG4 from '../../assets/book reviewed-screenshot.JPG';
import IMG5 from '../../assets/guitar store-screenshot.JPG';
import IMG6 from '../../assets/convention center-screenshot.JPG';


const data = [

    {
        id: 1,
        image: IMG1,
        title: 'HAMMER.BD',
        github: 'https://github.com/AlImran21/HAMMER.BD-Client',
        demo: 'https://my-assignment-12-f75b8.web.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fruits Warehouse',
        github: 'https://github.com/AlImran21/Fruits-Warehouse-Client',
        demo: 'https://my-assignment-11-with-node.web.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Wild Photographer',
        github: 'https://github.com/AlImran21/Wild-Photographer',
        demo: 'https://my-assignment10-with-react.web.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'A Book Reviewed',
        github: 'https://github.com/AlImran21/Product-Analysis',
        demo: 'https://my-assignment-9-with-react-router.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Guitar Store',
        github: 'https://github.com/AlImran21/Lucky-One',
        demo: 'https://my-assignment8-with-react.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Convention Center',
        github: 'https://github.com/AlImran21/Convention-Center',
        demo: 'https://my-third-assignment-project.netlify.app/'
    }

]



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My React Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>

                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio_item-cta'>
                                    <a href={github} target='_blank' className='btn'>Github</a>
                                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                                </div>

                            </article>
                        )
                    })
                }

            </div>

        </section>
    );
};

export default Portfolio;