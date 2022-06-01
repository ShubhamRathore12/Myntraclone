import React from 'react'
import Flag from "../images/flag.webp"
import Flag2 from "../images/flag2.webp"

const Header = () => {
    return (
        <div className="header">
               <div>
        <div className="box_content">
        <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <img src={Flag} alt="" style={{width: "100%", height: "100%"}}/>
        <a href="#carousel__slide4"
           class="carousel__prev"></a>
        <a href="#carousel__slide2"
           class="carousel__next"></a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
      <img src={Flag2} alt="" style={{width: "100%", height: "100%"}}/>
    
      <a href="#carousel__slide1"
         class="carousel__prev"></a>
      <a href="#carousel__slide3"
         class="carousel__next"></a>
           </div>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
      <img src={Flag} alt="" style={{width: "100%", height: "100%"}}/>
     
      <a href="#carousel__slide2"
         class="carousel__prev"></a>
      <a href="#carousel__slide4"
         class="carousel__next"></a>
          </div>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
      <img src={Flag2} alt="" style={{width: "100%", height: "100%"}}/>
   
      <a href="#carousel__slide3"
         class="carousel__prev"></a>
      <a href="#carousel__slide1"
         class="carousel__next"></a>
            </div>
    </li>
  </ol>
  
</section>
        </div>
    </div>

        </div>
    )
}

export default Header
