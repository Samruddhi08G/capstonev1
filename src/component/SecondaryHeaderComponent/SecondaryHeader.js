import React from "react";
import './secondaryheader.scss';

class SecondaryHeader extends React.Component{
    render(){
        return(
           <section className="secondary-header">
                <div class="wrapper">
                    <div class="secondary-header-row">
                        <label className="">Clothing/ Women's/ outerwear</label>
                        <label className="results-section">38 Results</label>
                        <select name="sorting-dropdown" id="sort">
                            <option value="volvo">Sort By Latest</option>
                            <option value="saab">Sort By Name</option>
                            <option value="mercedes">Sort By Category</option>
                            <option value="audi">Sort By Size</option>
                         </select>
                    </div>
                </div>
           </section> 
        )
    }
}

export default SecondaryHeader; 