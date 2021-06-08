import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions';

import HeaderImage from '../../headerImage';
import FaqDetails from './faqDetail';

class FAQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            types: [
                "Contacting Us",
                "Purchasing a Puppy"
            ],
            subTypes: [
                "Application",
                "Deposit",
                "Choosing Your Puppy",
                "Final Payment",
                "Recieving Your Aussie"
            ],
            subTypeCategory: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/faqs')
        .then(res => {
            this.props.setFaqData(res.data.faqs);
        })
        .catch(err => {
            console.log("Error with faq get request", err);
        })

        this.props.faqData.map((faq, index) => {
            if (faq.subType) {
                this.setState({
                    subTypeCategory: faq.type
                })
            }
        })
    }

    render() {
        return (
            <div className="faq-container">
                <HeaderImage 
                    className="faq-page-img" 
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="FAQ"
                />

                <div className="faqs-wrapper">
                    <div className="faqs-content">
                        <h2 className="faqs-heading">Frequently Asked Questions</h2>

                        <div className="faqs">
                            <FaqDetails />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        faqData: state.faq.faqData
    }
}

FAQ = connect(mapStatetoProps, actions)(FAQ);

export default FAQ;