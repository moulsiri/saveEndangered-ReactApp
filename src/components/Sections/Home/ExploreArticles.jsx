import React from 'react'
import {IoMdArrowDropright, IoMdCheckmarkCircleOutline} from 'react-icons/io'
const ExploreArticles = () => {
  return (
    <section id="exArticles">
      <div className="ex-prt1">
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
              <img src="/assets/images/a-rhino.jpg" alt="" />

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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam perferendis sequi? Soluta eius sunt at vero voluptatibus corporis distinctio sint, consectetur exercitationem veritatis voluptatem nobis itaque, culpa ipsam iste.</p>
      </div>
      <div className="ex-prt2">
         <div id="bg-picture">
        <div id="b-lft">
          <div id="b-img">
            <img src="/assets/images/loin&loiness.jpg" alt="" />
            <div className="a-writer">
              <h3>article written by</h3>
              <div className="w-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos facere accusantium fugiat harum, minima adipisci possimus nulla quo</p>
                <div className="a-img">
                  <img src="/assets/images/writer.jpg" alt="" />
                </div>
              </div>
              <div className="name">
                 <h6>Micheal Daruwala</h6>
              <p>orgnisation name <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></p>
              </div>
             

            </div>
            <div className="a-headline">
              <div id="a-hlft">
                <img src="/assets/images/loin&loiness2.jpg" alt="" />
              </div>
              <div id="a-hrt">
              <div className="h-a-txt">
            <h2 className="txt-align-right">facts about rhino</h2>
            <p className="txt-align-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rerum aperiam necessitatibus recusandae officiis hic debitis, eligendi voluptas vitae eum, facere iste ex. Deserunt iure velit provident! Minima, adipisci ipsa.</p>
            <button className="txt-align-right">
              Read more
            </button>

          </div>
              </div>
          <div className="red-bx"></div>

            </div>
          </div>

        </div>
        <div id="b-rt">
          <div className="b-heading">
            <h3>big picture</h3>
            <h5>of the day</h5>
          </div>
          <div className="b-readBtn">
            <button>Read <IoMdArrowDropright></IoMdArrowDropright></button>
            <h2>1000+ articles</h2>
            <p>Written by various researchers and get 
to know more about the species</p>
          </div>

        </div>

      </div>
      </div>
     
     
      </section>
  )
}

export default ExploreArticles