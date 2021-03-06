import React, { Component } from 'react'
import APIService from '../utils/APIService'

export default class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            submitted: false
        }
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        APIService.createContact(this.state.name, this.state.email, this.state.message).then(this.setState({ submitted: true }))
        event.preventDefault();
    }

    render() {
        if (this.state.submitted) {
            return (
                <div className="alert alert-success">
                    Your contact has been submitted!
              </div>
            );
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Contact Us</h1>
                <div className="form-group">
                    <label htmlFor="inputName" className="sr-only">Name</label>
                    <input type="text" name="name" className="form-control mt-2" placeholder="Name" required onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Email address" required onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="inputMessage" className="sr-only">Message</label>
                    <textarea type="textarea" name="message" className="form-control" placeholder="Message" required rows={10} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                </div>
            </form>
        );
    }
}