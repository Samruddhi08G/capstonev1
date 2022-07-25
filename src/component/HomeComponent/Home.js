import React from "react";
import './home.scss';
import Banner from './../BannerComponent/Banner'; 
import SecondaryHeader from './../SecondaryHeaderComponent/SecondaryHeader';
 import ProductList from '../ProductListComponent/ProductList';
 import Sidebar from './../SidebarComponent/Sidebar';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner />
                <SecondaryHeader /> 

                <div className="home-page">
                    <div>
                        <Sidebar/>
                    </div>
                    <div>
                        <ProductList /> 
                    </div>
                </div>
                
                
            </div>
        
           
        )
    }
}

export default Home;