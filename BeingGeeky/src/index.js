import React from 'react';
import ReactDOM from 'react-dom';
//import { ReactComponent as Logo } from './src/ipad.png';
//import Logo from './?public/?ipad-app-mockup-03.png';
import './index.css';
class Cq extends React.Component {
	render() {
		return (
            <div className="main">
            <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
            <div className="Header"><navbar>
            <nav className="cf">
                <ul>
                    <li class="1">
                    <a href="#Geeky" className="">Being Geeky</a>
                    </li>
                    <li class="2">
                    <a href="#documentation">Tutorials</a>
                    </li>
                    <li class="3">
                    <a href="#video-lecture">Videos</a>
                    </li>
                    <li class="4">
                    <a href="#Coupons">Coupons</a>
                    </li>

                </ul>
            </nav>
            </navbar>
            </div>
            <div className="Geeky" id="Geeky">
            <div className="container paras">
                <h1 className="heading">Being Geeky</h1>

            </div>

                <h2>Your own video theoretical study place</h2>
                <h4>Being Geeky is one of the best platform for the online learning. With the best study material.Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</h4>
            </div>
            <div className="documentation" id="documentation">
            <div className="container paras">
                <h1 className="heading"><i class="fas fa-clock"></i>Documentation</h1>

            </div>

                <h2>All genuine Documentation at one place</h2>
                <h4>Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</h4>
                <div class="an1"><a href="#" class="an">Start Your Trial Now</a></div><p></p><p></p>
                <div class="an1">You can download Being Geeky from app store or playstore.</div>
                              
            </div>
            <div class="ipad"><img src={'./ipad.png'} ></img>  </div>
            <div class="space"></div>
            <div class="video-lecture" id="video-lecture">
            <h2 style={{fontSize:'32px',fontWeight:'bold',margin:'45px',padding:'45px'}}>The video lecture you shouldn't miss</h2>
            <h5 style={{fontWeight:'light',margin:'30px',padding:'30px',lineHeight:'2em'}}>With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</h5>
            <div class="an1"><a href="#" class="an">Read More</a></div><p></p><p></p>
            <span style={{ marginLeft:'10%',display:'flex',alignItems:'center',displayContent:'center',width:'100%'}}><img style={{height:'40%',width:'80%'}} src={'./lecture.jpg'} ></img>  </span><div style={{height:'13%'}}></div>
            <div style={{width:'100%',height:'20%'}}></div>
            </div>
            <div class="lectures" id="lectures" style={{color:'white',backgroundColor: 'rgb(71, 111, 112)',height: '80%',width: '100%',lineHeight:'1.6em',justifyContent:'center',alignItems:'center'}}>
            <div style={{height:'20%'}}></div>
            <h2 style={{display:'flex' ,margin:'30px',padding:'30px'}}>Lectures available anywhere anytime.</h2>
            <h3 style={{display:'flex' ,margin:'30px',padding:'30px'}}>You can watch the lecture anytime from anywhere and ask doubts.The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</h3>
            </div>
            <div class="Coupons" id="Coupons">
            <div style={{display:'flex' ,margin:'40px',padding:'30px'}}>
            <img style={{height:'60%',width:'30%'}} src={'./coupon.jpg'} ></img>
            <div style={{width:'20%'}}></div>
            <div style={{width:'80%'}}><h1 style={{fontWeight:'bold',display:'block'}}>Coupons</h1><h4 style={{margin:'20px',padding:'20px',color:'grey'}}>You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.</h4>
            <h4 style={{color:'grey'}}>Already have Coupon?</h4>
            <hr style={{height:'17px'}}/>
            <a>Redeem</a>
            </div>
            
            
            </div>
            </div>
            <div className="footer-container">
            <div className="footer">
                <div className="footer-heading footer-1">
                    <h2>Address</h2>
                    <a href="#">ZZZZZ Workspace</a>
                    <a href="#">Street 43,building 4A</a>
                    <a href="#">Industrial Area</a>
                    <a href="#">Aqwertyu</a>
                    <a href="#">Mumbai</a>        
                </div>
                <div className="footer-heading footer-2">
                    <h2>Clients</h2>
                    <a href="#">XYZ org</a>
                    <a href="#">ABC org</a>
                    <a href="#">UK org</a>
                    <a href="#">Qwerty corp</a>
                    <a href="#">ZAQ PVT</a>        
                </div><div className="footer-heading footer-3">
                    <h2>Stack</h2>
                    <a href="#">HTML,CSS,JS</a>
                    <a href="#">React</a>
                    <a href="#">Angular</a>
                    <a href="#">NodeJS</a>
                    <a href="#">Django</a>        
                </div><div className="footer-heading footer-4">
                    <h2>About Being Geeky</h2>
                    <a href="#">About CEO</a>
                    <a href="#">About Team</a>
                    <a href="#">Location</a>
                    <a href="#">Working Atmosphere</a>
                    <a href="#">Contact Being Geeky</a>        
                </div>
            </div>
            </div>
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
