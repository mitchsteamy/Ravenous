//@ts-check

import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css"

class BusinessList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}

    }

    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(buisness => {
                        return <Business business={buisness} />
                    })
                }
            </div>
        )
    }
}

export default BusinessList;