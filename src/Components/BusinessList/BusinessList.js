//@ts-check

import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css"

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(buisness => {
                        return <Business business={buisness} key={buisness.id} />
                    })
                }
            </div>
        )
    }
}

export default BusinessList;