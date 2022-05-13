import React, { useEffect, useState } from 'react';
import Nav from "../../components/Nav/Nav"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PostPreviewList from '../../components/PostPreviewList/PostPreviewList';

const POSTS = [{id: 1, title: 'Man must explore, and this is exploration at its greatest', subtitle: 'Problems look mighty small from 150 miles up', author: 'Start Bootstrap', publication_date: 'September 24, 2019'},
{id: 2, title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.', subtitle: 'A fancy subtitle.', author: 'Start Bootstrap', publication_date: 'September 18, 2019'}];

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        setPosts(POSTS)
    },[])

    return (
        <>
            <Nav />
            <Header imgName="home-bg" title="Clean Blog" subtitle="A Blog theme by Start Bootstrap" />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <PostPreviewList posts={posts}/>
                        
                        
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
  )
}
