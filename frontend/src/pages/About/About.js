import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>It is true that technology has become an essential tool for online marketing nowadays.
                    However, there are numerous small shops and grocery stores with mostly offline business model in Vietnam recently. With this commerce model, it will bring a lot of bad
                    experiences for both buyers and sellers. For instance, the seller has the product want to
                    offer but the buyer may not know it, or the buyer may urgently need to purchase something, but the store is out of stock. Moreover, online shopping helps customers to choose
                    a wide range of products, prices and they can compare them to each other easily</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>Encountering the inadequacies and the weaknesses of the offline business model, making a website application for searching and buying things for each shop is very necessary
                    right now. Recently, there have been many e-commerce sites exported such as Amazon,
                    e-bay or the stores that can sell products via social media channels like Facebook. However, customers still find it difficult to choose the products they want because of the large
                    variety of products on these sites and not focus on specific things. Moreover, the sellers
                    have to spend a high amount of money on marketing or paying for fees. From there
                    disadvantages, implement an online e-commerce web application for small grocery
                    stores helps retailers can manage products on their own systems and not depend on the
                    3rd party website. For the customers, they can quickly search the products if it is available
                    and come to store to pick it up and they can contact directly to the shop owner to learn
                    more about the products that they are looking for.
                    In order to make a website that can acquire the needs of both customers and retailers,
                    MERN (MongoDB, Express.js framework, ReactJS library, NodeJS platform) is one of
                    the powerful stacks that can help us to develop an e-commerce web application. </p>
                </div>
            </div>
        </>
    
    )
}

export default About
