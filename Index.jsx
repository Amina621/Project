import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroimage1 from "../assets/hero-bg-1.jpg";
import heroimage2 from "../assets/hero-bg-2.jpg";
import heroimage3 from "../assets/hero-bg-3.jpg";

import heroicon1 from "../assets/hero-icon1.svg";
import heroicon2 from "../assets/hero-icon2.svg";
import heroicon3 from "../assets/hero-icon3.svg";
import test1 from "../assets/team-1.jpg";
import test2 from "../assets/team-2.jpg";
import test3 from "../assets/team-3.jpg";
import test4 from "../assets/team-4.jpg";
import bannerbg from "../assets/banner-bg.png";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
import agentprop1 from "../assets/agent-properties-1.jpg";
import agentprop2 from "../assets/agent-properties-2.jpg";
import agentprop3 from "../assets/agent-properties-3.jpg";
import discover1 from "../assets/discover-1.jpg";
import discover2 from "../assets/discover-2.jpg";
import discover3 from "../assets/discover-3.jpg";
import discover4 from "../assets/discover-4.jpg";
import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
import news4 from "../assets/news-4.jpg";
import newsClient from "../assets/news-client.jpg";
import brand1 from "../assets/brand-1.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";

//Data
import PropretieData from "../Data.json";

import{Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css"

import propIcon1 from "../assets/hero-icon1.svg";
import propIcon2 from "../assets/hero-icon2.svg";
import propIcon3 from "../assets/hero-icon3.svg"
import { Link } from 'react-router-dom';

export default function Index() {
  
    useEffect(()=>{
        Fancybox.bind('[data-fancybox]',{});
        return ()=>{
            Fancybox.destroy();
        };
    },[])

    const[likedItems,setLikedItems]=useState([]);

    const toggleLike=(id)=>{
        setLikedItems(prev => prev.includes(id) ? prev.filter(item=> item !== id): [...prev, id])
    }
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className='mb-4'
      >
        {[heroimage1, heroimage2, heroimage3].map((bgImg, index) => (
          <SwiperSlide key={index}>
            <div className="hero-main mb-4 position-relative">
              <img src={bgImg} alt={`slide-${index}`} className="w-100" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                <div className="container my-5">
                  <div className="hero-info py-5 px-4 rounded-4 shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white">
                    <div>
                      <h5 className="mb-1 fs-4 fw-semibold">
                        Home in Coral Gables
                        <small className='text-muted ms-2 fs-6 fw-normal'>Build 2025</small>
                      </h5>
                      <p className="mb-2 text-muted"><strong>Added:</strong> June 30, 2025</p>
                    </div>
                    <div className="d-flex gap-4 align-items-center my-3 my-md-0 text-primary">
                      <div className="d-flex align-items-center text-black">
                        <img src={heroicon1} alt="" className='hero-icon me-2' />4
                      </div>
                      <div className="d-flex align-items-center text-black">
                        <img src={heroicon2} alt="" className='hero-icon me-2' />4.5
                      </div>
                      <div className="d-flex align-items-center text-black">
                        <img src={heroicon3} alt="" className='hero-icon me-2' />3800 sq ft
                      </div>
                    </div>
                    <div className="text-end sm-md-3 hero-sale">
                      <span className="text-start d-block mb-1">For Sale</span>
                      <h4 className="mb-0 fw-bold fs-3">$850,000</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*Properties*/}
      <div className="container position-relative py-5">
        <Swiper modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
            delay:2000,
            disableOnInteraction:false,

        }}
        navigation={{
            prevEl:".swiper-button-prev",
           nextEl:".swiper-button-next"
        }}
        breakpoints={{
            1399:{slidesPerView:3},
            991:{slidesPerView:2},
            767:{slidesPerView:1},
            0:{slidesPerView:0},

        }}
       className='mt-5 py-5'
        >
            {PropretieData.map((PropData,propIndex)=>(
                <SwiperSlide key={PropData.id}>
                    <div className="property-card card">
                        <div className="property-image position-relative">
                            <img src={PropData.img} className='img-fluid rounded'  alt={PropData.name} />
                            <div className="property-tags position-absolute">
                                {
                                    Object.values(PropData.tags).slice(0, 3).map((tag ,index)=>(
                                        <span key={index} className={`span${index + 1}`}> {tag}</span>
                                    ))
                                }
                            </div>
                            <div className="property-img-vid position-absolute">
                                <span 
                                style={{cursor:"pointer"}}
                                onClick={()=>{
                                    const trigger=document.querySelector(`#gallery-trigger-${propIndex}`);
                                    if(trigger) trigger.click();
                                }}
                                >
                                    <i className="bi bi-camera-fill"></i>
                                    &nbsp;{PropData.images}
                                    
                                </span>

                                 <span 
                                style={{cursor:"pointer"}}
                                onClick={()=>{
                                    const videoTrigger=document.querySelector(`#video-trigger-${propIndex}`);
                                    if(videoTrigger) videoTrigger.click();
                                }}
                                >
                                    <i className="bi bi-film"></i>
                                    &nbsp;{PropData.videos}
                                    
                                </span>
                            </div>
                            <a 
                            id={`videoTrigger-${PropData.propIndex}`}
                            data-Fancybox
                            href={PropData.videoSlide}
                            style={{display:"none"}}
                            ></a>
                            <div style={{display:"none"}}>
                                {PropData.imagesSlides ?.map((img, index)=>(
                                    <a
                                    key={index}
                                    id={index === 0  ? `gallery-trigger-${propIndex}`:undefined}
                                    data-Facybox={`gallery-${propIndex}`}
                                    href={img}
                                    >
                                        <img src={img} alt={`hidden-${index}`} />
                                    </a>
                                ))}
                            </div>
                            <span
                            className={`liked-property position-absolute ${likedItems.includes(PropData.id) ? 'liked' : ''}`}
                            onClick={()=>toggleLike(PropData.id)}> 
                            <i className="bi bi-heart-fill"></i>
                            </span>
                        </div>
                        <Link to={`/property/${PropData.id}`} className="text-decoration-none"></Link>
                        <div className="property-content mt-3 px-3">
                            <h2>{PropData.name}</h2>
                            <p><i className="bi bi-geo-alt-fill"></i>{PropData.address}</p>
                            <h5>{PropData.type}</h5>
                            <div className="d-flex mt-3 pb-3 justify-content-between align-items-center w-100">
                            <h3 className='m-0'>{PropData.price}</h3>
                            <div className="property-detail">
                                <span><img src={propIcon1} className='img-fluid' alt="" />3</span>
                                <span><img src={propIcon2} className='img-fluid' alt="" />3.5</span>
                                <span><img src={propIcon3} className='img-fluid' alt="" />3500 sq ft</span>
                            </div>
                        </div>
                        <p><span>Added:</span>{PropData.date}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
        <div className="swiper-button-prev swiper-btn swiper-prev"><i className="bi bi-caret-left-fill"></i></div>
         <div className="swiper-button-next swiper-btn swiper-next"><i className="bi bi-caret-right-fill"></i></div>
      </div>
      {/*About property*/}
      <div className="about-property position-relative">
        <div className="dots-element position-absolute"></div>
        <div className="dots-element2 position-absolute"></div>
        <div className="container mt-5 py-5 position-relative">
          <Swiper
          modules={[Navigation, EffectFade]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          effect="fade"
          fadeEffect={{crossFade:true}}
          >
            {PropretieData.slice(0, 4).map(AbpropData=>(
              <SwiperSlide
              key={AbpropData.id}>
                <div className="ap-wrapper row">
                  <div className="col-lg-6">
                    <div className="ap-img rounded position-relative">
                      <img src={AbpropData.apImg} className='img-fluid rounded' alt=''/>
                        

                        <div className="property-img-vid position-absolute" style={{top:'20px', right:'15px',zIndex:10}}>
                                <span 
                                style={{cursor:"pointer"}}
                                onClick={()=>{
                                    const trigger=document.querySelector(`#about-gallery-trigger-${AbpropData.id}`);
                                    if(trigger) trigger.click();
                                }}
                                >
                                    <i className="bi bi-camera-fill"></i>&nbsp;{AbpropData.images || 'View'}   
                                </span>
                                 <span 
                                style={{cursor:"pointer"}}
                                onClick={()=>{
                                    const videoTrigger=document.querySelector(`#about-video-trigger-${AbpropData.id}`);
                                    if(videoTrigger) videoTrigger.click();
                                }}
                                >
                                    <i className="bi bi-film"></i>&nbsp;{AbpropData.videos ||'play'}    
                                </span>
                            </div>
                            <span 
                            id={`about-video-trigger-${AbpropData.id}`}
                            data-fancybox
                            href={AbpropData.videoSlide}
                            style={{display:"none"}}
                            ></span>
                            <div style={{display:"none"}}>
                                {AbpropData.imagesSlides ?.map((img, index)=>(
                                    <a
                                    key={index}
                                    id={index === 0  ? `about-gallery-trigger-${AbpropData.id}`:undefined}
                                    data-facybox={`about-gallery-${AbpropData.id}`}
                                    href={img}
                                    >
                                        <img src={img} alt={`hidden-about -${index}`} />
                                    </a>
                                ))}
                            </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ap-content mt-4 d-flex flex-column gap-3">
                      <div className="property-tags ap-tags">
                                {
                                    Object.values(AbpropData.tags).slice(0, 3).map((tag ,index)=>(
                                        <span key={index} className={`span${index + 1}`}> {tag}</span>
                                    ))}
                       </div>
                       <h2 className='mt-2 mb-0'>{AbpropData.name}</h2>
                       <p><i className="bi bi-geo-alt-fill"></i> {AbpropData.address}</p>
                       <div className="ap-info my-3">
                                <span><img src={propIcon1} className='img-fluid' alt="" />3</span>
                                <span><img src={propIcon2} className='img-fluid' alt="" />3.5</span>
                                <span><img src={propIcon3} className='img-fluid' alt="" />3500 sq ft</span>
                       </div>
                       <h1 className='mt-3'>{AbpropData.price}</h1>
                       <p className="ap-pere">Enchanting bedroom, there bath home with spacious one bedroom,one beth cabana, in-laws quaters.</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
       {/*Testimonial*/}
       <div className="container py-5 text-center position-relative">
        <h2 className="fw-bold mb-5"> Customers Loves Us</h2>
        <Swiper
            loop={true}
            navigation={{
              nextEl:'.swiper-next',
              prevEl:'.swiper-prev'
            }}
            modules={[Navigation]}
            className='testimonial-swiper'
        >
          <SwiperSlide>
            <div className="bg-white rounded p-4 p-md-5 mx-auto" style={{maxWidth:"900px"}}>
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img src={test1} className='rounded-circle shadow' alt="" style={{width:"150px", height:"150px", objectFit:"cover"}}/>
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className='text-primary fw-bold mb-3 fs-2'>
                    This is genuiely the best theme I have ever bought in terms of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3"> I have been a web designer for over 18years now. The theme is fantastic, flexible and simple excellent to use.I connot recommand enough!</p>
                  <h5 className="fw-bold mb-1">Daisybee</h5>
                  <a href="#" className='text-decoration-underline text-muted'>K2infocom User</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded p-4 p-md-5 mx-auto" style={{maxWidth:"900px"}}>
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img src={test2} className='rounded-circle shadow' alt="" style={{width:"150px", height:"150px", objectFit:"cover"}}/>
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className='text-primary fw-bold mb-3 fs-2'>
                    This is genuiely the best theme I have ever bought in terms of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3"> I have been a web designer for over 18years now. The theme is fantastic, flexible and simple excellent to use.I connot recommand enough!</p>
                  <h5 className="fw-bold mb-1">Daisybee</h5>
                  <a href="#" className='text-decoration-underline text-muted'>K2infocom User</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded p-4 p-md-5 mx-auto" style={{maxWidth:"900px"}}>
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img src={test3} className='rounded-circle shadow' alt="" style={{width:"150px", height:"150px", objectFit:"cover"}}/>
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className='text-primary fw-bold mb-3 fs-2'>
                    This is genuiely the best theme I have ever bought in terms of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3"> I have been a web designer for over 18years now. The theme is fantastic, flexible and simple excellent to use.I connot recommand enough!</p>
                  <h5 className="fw-bold mb-1">Daisybee</h5>
                  <a href="#" className='text-decoration-underline text-muted'>K2infocom User</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded p-4 p-md-5 mx-auto" style={{maxWidth:"900px"}}>
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img src={test4} className='rounded-circle shadow' alt="" style={{width:"150px", height:"150px", objectFit:"cover"}}/>
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className='text-primary fw-bold mb-3 fs-2'>
                    This is genuiely the best theme I have ever bought in terms of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3"> I have been a web designer for over 18years now. The theme is fantastic, flexible and simple excellent to use.I connot recommand enough!</p>
                  <h5 className="fw-bold mb-1">Daisybee</h5>
                  <a href="#" className='text-decoration-underline text-muted'>K2infocom User</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
       </div>
        {/*Banner*/}
        <div className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="hero-heading">
                  <h1 className="hero-hearing">Finding a perfect property have never <br/>been this easy eaelier</h1>
                  <p className="hero-subtext">You can find perfectly suited properties for your all needs with ease.</p>
                </div>
                <div className="col-md-4 text-md-end text-start mt-4 mt-md-0">
                  <div className="btn check-button">Check Properties</div>
                </div>
              </div>
              <div className="hero-divider">
                <div className="row hero-contact text-center text-md-start">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="contact-label">Email</div>
                    <p className="contact-info">hello@modernhouse.com</p>
                  </div>

                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="contact-label">Phone Number</div>
                    <p className="contact-info">+212 645 774 162</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={bannerbg} className='img-fluid position-absolute banner-img' alt="" />
          </div>
        </div>
        
        {/*Our Agents*/}
        <div className="our-agents py-5 my-5 position-relative">
          <div className="container ">
            <div className="row justify-content-between">
              <div className="agents-title col-lg-6">
                <h2>Meet Our Agents</h2>
              </div>
              <div className="agents-btn col-lg-6 d-flex justify-content-end">
                <button className='btn btn1'>View All</button>
              </div>
            </div>
          </div>
          <div className="agents-swiper mt-5">
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            navigation={{
              nextEl:'.swiper-next',
              prevEl:'.swiper-prev',
            }}
            breakpoints={{
              1339:{slidesPerView:3},
              991:{slidesPerView:2},
              575:{slidesPerView:1},
              0:{slidesPerView:1},
            }}
            >
              {/*Slide 1*/}
              <SwiperSlide>
                <div className="agent-card d-flex flex-column gap-2 shadow-sm border ronded p-3">
                  <div className="agent-info d-flex align-items-center gap-3">
                    <div className="agent-img">
                      <img src={team1} className='img-fluid' alt="" />
                    </div>
                    <div className="agent-det">
                      <h2>Alice Brian</h2>
                      <p>Alice Brian Agency</p>
                    </div>
                  </div>
                  <div className="agent-gallery mt-3">
                    <div className="agent-gallery-col d-flex gap-3">
                      <img src={agentprop1} className='img-fluid rounded' alt="" />
                      <img src={agentprop2} className='img-fluid rounded' alt="" />
                      <img src={agentprop3} className='img-fluid rounded' alt="" />
                    </div>
                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                      <button className="btn btn1">View Profile</button>
                      <a href="#">Listed Properties</a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              {/*Slide 2*/}
              <SwiperSlide>
                <div className="agent-card d-flex flex-column gap-2 shadow-sm border ronded p-3">
                  <div className="agent-info d-flex align-items-center gap-3">
                    <div className="agent-img">
                      <img src={team2} className='img-fluid' alt="" />
                    </div>
                    <div className="agent-det">
                      <h2>Alice Brian</h2>
                      <p>Alice Brian Agency</p>
                    </div>
                  </div>
                  <div className="agent-gallery mt-3">
                    <div className="agent-gallery-col-d-flex gap-3">
                      <img src={agentprop1} className='img-fluid rounded' alt="" />
                      <img src={agentprop2} className='img-fluid rounded' alt="" />
                      <img src={agentprop3} className='img-fluid rounded' alt="" />
                    </div>
                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                      <button className="btn btn1">View Profile</button>
                      <a href="#">Listed Properties</a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              {/*Slide 3*/}
              <SwiperSlide>
                <div className="agent-card d-flex flex-column gap-2 shadow-sm border ronded p-3">
                  <div className="agent-info d-flex align-items-center gap-3">
                    <div className="agent-img">
                      <img src={team3} className='img-fluid' alt="" />
                    </div>
                    <div className="agent-det">
                      <h2>Alice Brian</h2>
                      <p>Alice Brian Agency</p>
                    </div>
                  </div>
                  <div className="agent-gallery mt-3">
                    <div className="agent-gallery-col-d-flex gap-3">
                      <img src={agentprop1} className='img-fluid rounded' alt="" />
                      <img src={agentprop2} className='img-fluid rounded' alt="" />
                      <img src={agentprop3} className='img-fluid rounded' alt="" />
                    </div>
                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                      <button className="btn btn1">View Profile</button>
                      <a href="#">Listed Properties</a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              {/*Slide 4*/}
              <SwiperSlide>
                <div className="agent-card d-flex flex-column gap-2 shadow-sm border ronded p-3">
                  <div className="agent-info d-flex align-items-center gap-3">
                    <div className="agent-img">
                      <img src={team4} className='img-fluid' alt="" />
                    </div>
                    <div className="agent-det">
                      <h2>Alice Brian</h2>
                      <p>Alice Brian Agency</p>
                    </div>
                  </div>
                  <div className="agent-gallery mt-3">
                    <div className="agent-gallery-col-d-flex gap-3">
                      <img src={agentprop1} className='img-fluid rounded' alt="" />
                      <img src={agentprop2} className='img-fluid rounded' alt="" />
                      <img src={agentprop3} className='img-fluid rounded' alt="" />
                    </div>
                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                      <button className="btn btn1">View Profile</button>
                      <a href="#">Listed Properties</a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/*Discover Properties*/}
            <div className="discover-properties py-5">
              <div className="container">
                <div className="row">
                  <div className="dis-prop-head">
                    <h2>Discover Properties</h2>
                    <p>Find Properties In Your Favourite Cities</p>
                  </div>
                </div>
                <div className="row mt-5 mt-lg-5 mt-sm-0">
                  <div className="col-lg-3 col-md-6 dis-prop-col rounded">
                    <div className="dis-prop-img position-relative"></div>
                    <img src={discover1} className='img-fluid rounded' alt="" />
                    <div className="dis-prop-content text-center rounded position-absolute">
                      <span>Miami</span>
                      <h2>7</h2>
                      <p className="m-0 text-muted">Find Properties</p>
                    </div>
                    <button className="btn dis-prop-btn position-absolute">View All <i className="bi bi-caret-right-fill"></i></button>
                  </div>
                  <div className="col-lg-3 col-md-6 dis-prop-col rounded">
                    <div className="dis-prop-img position-relative"></div>
                    <img src={discover2} className='img-fluid rounded' alt="" />
                    <div className="dis-prop-content text-center rounded position-absolute">
                      <span>Miami</span>
                      <h2>7</h2>
                      <p className="m-0 text-muted">Find Properties</p>
                    </div>
                    <button className="btn dis-prop-btn position-absolute">View All <i className="bi bi-caret-right-fill"></i></button>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 rounded">
                    <div className="dis-prop-img position-relative"></div>
                    <img src={discover3} className='img-fluid rounded' alt="" />
                    <div className="dis-prop-content text-center rounded position-absolute">
                      <span>Miami</span>
                      <h2>7</h2>
                      <p className="m-0 text-muted">Find Properties</p>
                    </div>
                    <button className="btn dis-prop-btn position-absolute">View All <i className="bi bi-caret-right-fill"></i></button>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 rounded">
                    <div className="dis-prop-img position-relative"></div>
                    <img src={discover4} className='img-fluid rounded' alt="" />
                    <div className="dis-prop-content text-center rounded position-absolute">
                      <span>Miami</span>
                      <h2>7</h2>
                      <p className="m-0 text-muted">Find Properties</p>
                    </div>
                    <button className="btn dis-prop-btn position-absolute">View All <i className="bi bi-caret-right-fill"></i></button>
                  </div>
                </div>
              </div>
            </div>
             {/*Latest News*/}
             <div className="latest-news py-5 my-5 position-relative">
              <div className="container">
                <div className="row">
                  <div className="dis-prop-head">
                    <h2>Latest News & Update</h2>
                    <p>Latest News About Real Estate</p>
                  </div>
                </div>
                 <div className="row mt-5 w-100">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                      nextEl:'.news-swiper-next',
                       prevEl:'.news-swiper-prev',
                    }}
                    breakpoints={{
                      1399:{slidesPerView:3},
                      991:{slidesPerView:3},
                      575:{slidesPerView:1},
                      0:{slidesPerView:1},
                    }}
                    className='news-swiper'
                     >
                      <SwiperSlide>
                      <div className="news-card">
                        <div className="news-card-img position-relative">
                          <img src={news1} className='img-fluid rounded' alt="" />
                          <div className="news client-info d-flex align-items-center position-absolute">
                            <img src={newsClient} className='img-fluid' alt="" />
                            <p className='ms-2'>By Amina MOUINI</p>
                          </div>
                        </div>
                        <div className="news-card-content mt-3">
                          <p>July 1,2025</p>
                          <h5>As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool</h5>
                          <a href="#">Luxury</a>
                        </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="news-card">
                        <div className="news-card-img position-relative">
                          <img src={news2} className='img-fluid rounded' alt="" />
                          <div className="news client-info d-flex align-items-center position-absolute">
                            <img src={newsClient} className='img-fluid' alt="" />
                            <p className='ms-2'>By Amina MOUINI</p>
                          </div>
                        </div>
                        <div className="news-card-content mt-3">
                          <p>July 1,2025</p>
                          <h5>As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool</h5>
                          <a href="#">Luxury</a>
                        </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="news-card">
                        <div className="news-card-img position-relative">
                          <img src={news3} className='img-fluid rounded' alt="" />
                          <div className="news client-info d-flex align-items-center position-absolute">
                            <img src={newsClient} className='img-fluid' alt="" />
                            <p className='ms-2'>By Amina MOUINI</p>
                          </div>
                        </div>
                        <div className="news-card-content mt-3">
                          <p>July 1,2025</p>
                          <h5>As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool</h5>
                          <a href="#">Luxury</a>
                        </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="news-card">
                        <div className="news-card-img position-relative">
                          <img src={news4} className='img-fluid rounded' alt="" />
                          <div className="news client-info d-flex align-items-center position-absolute">
                            <img src={newsClient} className='img-fluid' alt="" />
                            <p className='ms-2'>By Amina MOUINI</p>
                          </div>
                        </div>
                        <div className="news-card-content mt-3">
                          <p>July 1,2025</p>
                          <h5>As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool</h5>
                          <a href="#">Luxury</a>
                        </div>
                      </div>
                      </SwiperSlide>
                  </Swiper>
                  <div className="news-swiper-prev new-swiper-btn swiper-btn"><i className="bi bi-caret-left-fill"></i></div>
                   <div className="news-swiper-next new-swiper-btn swiper-btn"><i className="bi bi-caret-right-fill"></i></div>
                 </div>
              </div>
             </div>
             {/*Brands*/}
             <div className="container-fluid">
              <div className="container py-5">
                <h2><strong>Partners of RealHomes</strong></h2>
                <p>We are pleased to work with our partners</p>
                <div className="row d-flex justify-centent-between">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="partner-card">
                      <img src={brand1} className='partner-img' alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="partner-card">
                      <img src={brand2} className='partner-img' alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 mt-4 mt-lg-0 col-lg-2">
                    <div className="partner-card">
                      <img src={brand3} className='partner-img' alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 mt-4 mt-lg-0 col-lg-2">
                    <div className="partner-card">
                      <img src={brand4} className='partner-img' alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 mt-4 mt-lg-0 col-lg-2">
                    <div className="partner-card">
                      <img src={brand5} className='partner-img' alt="" />
                    </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
          );
        }