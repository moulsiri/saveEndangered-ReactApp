import {useState} from 'react'


import {IoMdArrowDropright, IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { Link } from 'react-router-dom'


import bigStoryImg from '../../../../assets/images/loin&loiness.jpg';
import author from '../../../../assets/images/writer.jpg';
import articleImg from '../../../../assets/images/loin&loiness2.jpg'
import ArticleCarousel from './ArticleCarousel';


const ExploreArticles = () => {
  const [imgLoad,setImgLoad]=useState(false)
  const [imgLoad2,setImgLoad2]=useState(false)
  const [imgLoad3,setImgLoad3]=useState(false)


  return (
    <section id="exArticles">
      <div className="ex-prt1">
         <ArticleCarousel></ArticleCarousel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam perferendis sequi? Soluta eius sunt at vero voluptatibus corporis distinctio sint, consectetur exercitationem veritatis voluptatem nobis itaque, culpa ipsam iste.</p>
      </div>
      <div className="ex-prt2">
         <div id="bg-picture">
        <div id="b-lft">
          <div id="b-img">
            <img 
            className={`smooth-image image-${
              imgLoad ? 'visible' :  'hidden'}`}
              onLoad={()=>setImgLoad(true)}
            src={bigStoryImg} alt="" />
            <div className="a-writer">
              <h3>article written by</h3>
              <div className="w-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos facere accusantium fugiat harum, minima adipisci possimus nulla quo</p>
                <div className="a-img">
                  <img 
                   className={`smooth-image image-${
                    imgLoad2 ? 'visible' :  'hidden'}`}
                    onLoad={()=>setImgLoad2(true)}
                  
                  src={author} 
                  alt="" />
                </div>
              </div>
              <div className="name">
                 <h6>Micheal Daruwala</h6>
              <p>orgnisation name <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></p>
              </div>
             

            </div>
            <div className="a-headline">
              <div id="a-hlft">
                <img 
                 className={`smooth-image image-${
                  imgLoad3 ? 'visible' :  'hidden'}`}
                  onLoad={()=>setImgLoad3(true)}
                src={articleImg} 
                alt="" />
              </div>
              <div id="a-hrt">
              <div className="h-a-txt">
            <h2 className="txt-align-right">facts about rhino</h2>
            <p className="txt-align-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rerum aperiam necessitatibus recusandae officiis hic debitis, eligendi voluptas vitae eum, facere iste ex. Deserunt iure velit provident! Minima, adipisci ipsa.</p>
          
              <button className="txt-align-right pointer">
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
          <Link to="/articles" className='link-element'>
            <button className='pointer'>Read <IoMdArrowDropright></IoMdArrowDropright></button>
          </Link>

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