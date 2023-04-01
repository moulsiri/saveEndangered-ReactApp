import React from 'react'

import Carousel from 'react-material-ui-carousel'
import carouselImg from '../../../../assets/images/a-rhino.jpg';

const ArticleCarousel = () => {
  return (
    <div id="h-article-carousel">
    <div className="h-a-elm">
      <div className="h-a-txt">
        <h2>facts about rhino</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rerum aperiam necessitatibus recusandae officiis hic debitis, eligendi voluptas vitae eum, facere iste ex. Deserunt iure velit provident! Minima, adipisci ipsa.</p>
        <button>
          Read more
        </button>

      </div>
      <div className="h-a-img">
        <div className="a-img">
          <img src={carouselImg} alt="" />

        </div>

      </div>
      <div className="red-bx"></div>

    </div>
    <div className="h-a-slideBtn">
          <div className="h-a-btn">
            <h3>Prev</h3>
          </div>
          <div className="h-a-btn">
            <h3>Next</h3>
          </div>
    </div>

  </div>
  )
}

export default ArticleCarousel