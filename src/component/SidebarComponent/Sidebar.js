import React from "react";
import './sidebar.scss';
import filter_image from './../../asset/sliders.png';
import sort_image1 from './../../asset/arrow-up.png';
import sort_image2 from './../../asset/arrow-down.png';


class Sidebar extends React.Component{
    render(){
        return(
           <section className="sidebar">
            <div className="sidebar-column">
                <div>
                    <div className="first-row">
                        <li className="sidebar-column-header filter-header">Filter</li>
                        <li className="sidebar-column-header attributes-header">Attributes</li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Jewellery</label><br></br> 
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Electronics</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Men's Clothing</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Women's Clothing</label><br></br> 
                        </li>     
                        <li className="sidebar-column-header attributes-header border-line"><a href="#">Show More...</a></li>
                    </div>
                   
                    
                </div>

                <div>

                </div>
            </div> 
             <div class="mobile-view-filter-block">
                <div className="filter-sort-section">
                    <img src={filter_image} className="filter-image1" alt="FilterImage"  />
                    <li className="filter-sort"><b>Filter</b></li>
                </div>
                <div className="filter-sort-section">
                    <img src={sort_image1} className="sort-image" alt="SortImage1"  />
                    <img src={sort_image2} className="sort-image" alt="SortImage1"  />
                    <li className="filter-sort"><b>Sort Products</b></li>
                </div>
            </div> 
           
           </section>
           
        )
    }
}

export default Sidebar;