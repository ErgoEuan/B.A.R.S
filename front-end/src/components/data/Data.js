import React, {Component} from 'react';
import NEOs from './NEOs';

import {getCurrentDate} from '../utils'
import {getAPIKey} from '../utils'
import axios from 'axios';

export default class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    updateData() {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
            params: {
                start_date: getCurrentDate(),
                end_date: getCurrentDate(),
                api_key: getAPIKey()
            }
        })
        .then(res => {
            this.setState({ data: res.data });
        });
    }
    
    componentDidMount() {
        this.updateData()
    }

    render() {
        if (undefined === this.state.data.near_earth_objects)
            return (
                <div>
                    No Data.
                </div>  
            );
        else 
            // console.log(this.state.data.near_earth_objects[getCurrentDate()])
            return (
                <div>
                    Got Data.
                    <NEOs neos={this.state.data.near_earth_objects[getCurrentDate()]}/>
                </div>
            )
    }
}
