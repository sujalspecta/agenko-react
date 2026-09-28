import React from 'react';
import { Link } from 'react-router-dom';

const Services4 = () => {

    const serviceContent = [
        {img:'/assets/images/pages/service/card-img1.jpg', title:'Development', subTitle:'Web Development', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
        {img:'/assets/images/pages/service/card-img2.jpg', title:'UI/UX Design', subTitle:'Mobile Apps Design', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
        {img:'/assets/images/pages/service/card-img3.jpg', title:'Graphics', subTitle:'Bradning Design', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
        {img:'/assets/images/pages/service/card-img4.jpg', title:'Marketing', subTitle:'SEO Marketing', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
      ]; 

    return (
        <section className="agk-services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="section-title mb-60 text-center pf_zoomIn">
                            <span className="sub-title">Our Service</span>
                            <h2>Top Services We Offer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    {serviceContent.map((item, i) => (
                        <div key={i} className="agenko-card-item style-two mb-10 pf_fadeup">
                            <div className="thumbnail">
                                <img src={item.img} alt="Card Image" />
                            </div>
                            <div className="card-title">
                                <h2><Link to="/service/service-details">{item.title}</Link></h2>
                                <h4>{item.subTitle}</h4>
                            </div>
                            <div className="content">
                                <p>{item.content}</p>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services4;