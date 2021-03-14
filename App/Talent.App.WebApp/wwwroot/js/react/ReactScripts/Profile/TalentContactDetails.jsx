import React, { Component } from 'react';
import { Button, Container, Input } from 'semantic-ui-react';

export default class TalentContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            editMode: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.changFname = this.changFname.bind(this);
        this.changLname = this.changLname.bind(this);
        this.changEmail = this.changEmail.bind(this);
        this.changPhone = this.changPhone.bind(this);
    }

    handleEdit() {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    changFname(e) {
        this.setState({
            fname: e.target.value
        })
    }

    changLname(e) {
        this.setState({
            lname: e.target.value
        })
    }

    changEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    changPhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    saveContact(firstName, lastName, email, phone) {
        this.props.updateProfileData({
            firstName: this.state.fname === "" ? firstName : this.state.fname,
            lastName: this.state.lname === "" ? lastName : this.state.lname,
            email: this.state.email === "" ? email : this.state.email,
            phone: this.state.phone === "" ? phone : this.state.phone
        });
        this.handleEdit();
    }

    render() {
        //console.log(this.props);
        const details = this.props.details;
        const firstName = (details.firstName === null || details.firstName === undefined) ? '' : details.firstName;
        const lastName = (details.lastName === null || details.lastName === undefined) ? '' : details.lastName;
        const name = (firstName !== '' && lastName !== '') ? (firstName + ' ' + lastName) : "";
        const email = (details.email === null || details.email === undefined) ? '' : details.email;
        const phone = (details.phone === null || details.phone === undefined) ? '' : details.phone;
        const editMode = this.state.editMode;
        if (!editMode) {
            return (
                <React.Fragment>
                    <Container style={{ margin: '20px' }}>
                        <h4>Name: {name}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phone}</h4>
                        <Button
                            color='teal'
                            onClick={this.handleEdit}
                            floated='right'
                            onClick={() => this.handleEdit()}
                        >
                            Edit
                        </Button>
                    </Container>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Container style={{ margin: '20px' }}>
                        <h4>FirstName</h4>
                        <Input fluid defaultValue={details.firstName} onChange={(e) => this.changFname(e)} />
                        <h4>LastName</h4>
                        <Input fluid defaultValue={details.lastName} onChange={(e) => this.changLname(e)} />
                        <h4>Email address</h4>
                        <Input fluid defaultValue={email} onChange={(e) => this.changEmail(e)} />
                        <h4>Phone number</h4>
                        <Input fluid defaultValue={phone} onChange={(e) => this.changPhone(e)} />
                        <br />
                        <Button
                            color='teal'
                            onClick={() => this.saveContact(firstName, lastName, email, phone)}
                        >Save</Button>
                        <Button onClick={() => this.handleEdit()} >Cancel</Button>
                    </Container>
                </React.Fragment>
            )

        }

    }
}