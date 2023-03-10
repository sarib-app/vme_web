import React, { useEffect } from 'react'
import axios, { Axios } from 'axios';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
// import CursorZoom from 'react-cursor-zoom';
import { useLocation } from 'react-router-dom';
import Imagesurl from '../SourceFiles/Imageurl';

import allImagesUrl from '../SourceFiles/baseimageurl';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';


const ShopScreem = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false)

    const [addCount, setAddCount] = useState(1);
    const [getColor, setColor] = useState('')
    const [getColors, setColors] = useState('black')
    const [isActive, setIsActive] = useState(false);

    const location = useLocation();
    const { items } = location.state

    const changeClass = () => {
        setIsActive(current => !current)
    }

    const incrementCount = () => {
        setAddCount(addCount + 1);
    }
    const decrementCount = () => {
        setAddCount(addCount - 1)
    }

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => { topFunction() }, [])

    return (
        <div>

           {/* Navbar */}
           <div>
                <header className="header-area header-sticky" >
                    <div className='container'>
                        <div className='container-fluid' style={{ borderRadius: '50px', backgroundColor: '#fff' }} >
                            <nav className="navbar  navbar-expand-lg navbar-light " style={{ borderRadius: "50px", backgroundColor: '#fff' }}>
                                <div className="container-fluid">
                                    <p >
                                        <Link to='/' className="logo">
                                            <img src="./source/assets/images/logo.png" alt='icon_image' style={{ height: "54px" }} />
                                        </Link>
                                    </p>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse " id="navbarNav">
                                        <ul className="navbar-nav  ms-auto">
                                            <li className="nav-item ">
                                                <p className={'nav-link me-4 '} aria-current="page"><b><Link to='/' className='text-secondary' >Home</Link></b></p>
                                            </li>
                                            <li className="nav-item ">
                                                <p className={'nav-link me-4 enjoy'} aria-current="page"><b> <Link state={{ values: 'Card' }} className='text-secondary' to='/ShopMain'>Shop</Link></b></p>
                                            </li>
                                            <li className="nav-item ">
                                                <p className={'nav-link me-4 '} aria-current="page"><b> <Link to='/ProfileMain' className='text-secondary' >Profiles</Link> </b></p>
                                            </li>

                                            <li className="nav-item ">
                                                <p className={'nav-link borderLogin  me-4 '} aria-current="page"><b> <p onClick={() => setOpenModal(true)} className='text-secondary' style={{ cursor: 'pointer' }}  >Login</p> </b></p>
                                            </li>

                                            <li className="nav-item ">
                                                <p className={'nav-link borderSignup me-4 '} aria-current="page"><b> <p onClick={() => setOpenSignUp(true)} style={{ cursor: 'pointer' }} className='text-white' >SIgn up for free</p> </b></p>
                                            </li>

                                            <li className="nav-item dropdown" >
                                                <a className="nav-link dropdown-toggle mt-1" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-gear" />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                                    <li className='d-flex updateNav'><i className="fa-solid fa-pen mt-2 ms-2" />
                                                        <a className="dropdown-item updateNav" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">Update Profile</a>
                                                    </li>
                                                    <li className='d-flex updateNav'>
                                                        <i className="fa-solid fa-newspaper mt-2 ms-2" />
                                                        <a className="dropdown-item updateNav" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">What`s New</a>
                                                    </li>
                                                    <li className='d-flex updateNav'>
                                                        <i className="fa-solid fa-question mt-2 ms-2" />
                                                        <Link className="dropdown-item updateNav" to='/WorkingVideo'>Need Help</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                {openModal && < SignIn setOpenModal={setOpenModal} />}
                {openSignUp && <SignUp setOpenSignUp={setOpenSignUp} />}

            </div>

            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6>DigiCard Market</h6>
                            <h2>Buy Your DigiCard Now.</h2>
                            <span className=''> <Link state={{ values: 'Card' }} to='/ShopMain'>Shop</Link>  &gt; <a style={{cursor:'default'}}>Buy Item</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="currently-market">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="line-dec" />
                                <h2><em>Items</em> Currently In The Market.</h2>
                            </div>
                        </div>

                        <div className="col-lg-12">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className='col-lg-12 mb-4'>
                                        {/* <CursorZoom className=''
                                            image={{
                                                src: `${allImagesUrl.itemImage}${items.item_pic}`,
                                                width: 550,
                                                height: 550
                                            }}
                                            zoomImage={{
                                                src: `${allImagesUrl.itemImage}${items.item_pic}`,
                                                width: 3500,
                                                height: 2300
                                            }}
                                            cursorOffset={{ x: 10, y: -10 }}
                                        /> */}

<img  src={`${allImagesUrl.itemImage}${items.item_pic}`} alt="" />

                                    </div>

                                </div>
                                <div className="col-lg-5 ms-1 ps-4 pe-4">

                                    <h3>{items.item_name}</h3>
                                    <h5 className='mt-2'>Rs. <span style={{ fontSize: "12px" }} className='text-secondary text-decoration-line-through'><span>{items.previous_price}</span></span>{items.item_price}</h5>
                                    <hr style={{ width: "320px", height: "1px", color: "#7453fc" }} />
                                    <h6 style={{ color: "#7453fc" }}>Quantity:</h6>
                                    <div className='mt-2'>
                                        {
                                            addCount > 1 ?
                                                <button className='btn btn-secondary me-2 btn-sm' style={{ backgroundColor: "#7453fc" }} onClick={decrementCount}><i className="fa-solid fa-angle-left" /></button> : console.log(".-.")
                                        }
                                        <label className='text-white' htmlFor="exampleInputPassword1">{addCount}</label>
                                        <button className='btn btn-secondary ms-2 btn-sm' style={{ backgroundColor: "#7453fc" }} onClick={incrementCount}><i className="fa-solid fa-angle-right" /></button>
                                    </div>

                                    <hr style={{ width: "320px", height: "1px", color: "#7453fc" }} />
                                    <h6 style={{ color: "#7453fc" }} className='mt-2 mb-2'>Color Avaiblable;</h6>
                                    <button className={isActive ? 'btnShop borderClass' : 'btnShop'} onClick={changeClass} style={{ backgroundColor: `${items.color_avaliable}` }} ></button>

                                    <h6 className='mt-3' style={{ color: "#7459fc" }}>Describtion:</h6>
                                    <p className='p-2'>{items.describtion}</p>

                                    <div className='mt-2 d-flex'><Link to='/ItemForm' state={{ counter: addCount, itemColor: getColor, item: items }} className='text-center buttonx col-11'>BUY NOW</Link> <i className="fa-2x ms-2 mt-1 fa-solid fa-heart text-danger" />
                                    </div>
                                    <p style={{ fontSize: "11px" }} className='text-secondary text-center'>Pyament method is COD, other methods are comming soon!</p>
                                </div>
                            </div>
                            <hr className='bg-secondary' />
                            {/* <div className="buttons  mt-5 d-flex justify-content-center">
                                <div className="main-button ">
                                    <Link to='/ShopMain' className='p-3 mt-1 me-2'>Explore Our Products</Link>
                                </div>
                                <Link to='/ProfileMain' className='buttonx p-4 ms-2'>View Profiles</Link>
                            </div> */}
                            <div className='d-flex justify-content-center mt-5'>
                                <div className="buttons me-2">
                                    <div className="border-button">
                                        <Link to='/ShopMain' >Explore more products</Link>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <div className="main-button">
                                        <Link to='/ProfileMain' >View Profiles</Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopScreem