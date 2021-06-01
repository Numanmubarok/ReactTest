import React, {Component} from 'react'
import YouTubeComp from '../../YoutubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render (){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
            <YouTubeComp time="7.12" 
            title="tutorial mengajar 1"
            desc="ini deskripsi 1"
            />
            <YouTubeComp time="8.00" 
            title="tutorial mengajar 2"
            desc="ini deskripsi 2"
            />
            <YouTubeComp time="6.54" 
            title="tutorial mengajar 3"
            desc="ini deskripsi 3"
            />
            <YouTubeComp time="1.00" 
            title="tutorial mengajar 4"
            desc="ini deskripsi 4"
            />
            <YouTubeComp/> */}
            <p>Counter</p>
            <hr/>
            <Product/>
            </div>
            
            
        )
    }
}
export default Home;