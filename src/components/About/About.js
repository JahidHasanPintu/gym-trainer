import React from 'react';
import trainerImg from '../../images/img2.jpg'
import './About.css'

const About = () => {
    return (
       
            <div className="about-container">
                <div className="about-description">
                    <h1>
                        About Trainer
                    </h1>
                    <h3>10 YEARS OF EXPERIENCE IN FITNESS</h3>
                    <p>Pintu is a Beverly Hills-based personal trainer whose clients include celebrities, professional athletes, and everyday people. Pintu's is the former Los Angeles Lakers Director of Strength and Endurance. He is widely recognized for his expertise in functional training and his commitment to developing and implementing innovative fitness techniques. With over 28 years in the fitness industry, Pintu's dynamic approach, boundless energy and (sometimes risky) humor only add to the effectiveness of the experience his clients enjoy. With a client list as diverse as his training methods, Pintu's emphasizes strength training modalities that can be transferred from the gym to daily life, from training camp to championship game. He has worked with athletes from the NBA, NHL, NFL, MLB, USTA, professional boxing (male AND female!) and various NCAA sports. Many film and television celebrities have also sought Pintu's guidance in preparing for roles and have stayed on to become year-round clients, making him a cornerstone of their fitness regiment.</p>
                    <a href="#" class="zero-margin in-link button button-ld price-button">view our plans</a>

                </div>
                <div className="img-fluid">
                    <img src={trainerImg} alt="" />
                </div>
            </div>
       
    );
};

export default About;