import React from 'react'

export default function Header(props) {
  return (
    <header className="masthead" style={{backgroundImage: "url('assets/img/"+ props.imgName + ".jpg')"}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>{props.title}</h1>
                                <span className="subheading">{props.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  )
}
