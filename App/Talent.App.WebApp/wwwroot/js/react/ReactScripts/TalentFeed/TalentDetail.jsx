import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx'
import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';
import { Loader, Container, Grid, Segment, Image, Card, Icon, Button, Embed, Divider, Header, Search } from 'semantic-ui-react';

export default class TalentDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            data: {}
        }

        this.loadData = this.loadData.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({
                id: this.props.id
            }, () => this.loadData())
        }
    }

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: `https://talentservicesprofile20210219125952.azurewebsites.net/profile/profile/getTalentProfile?id=${this.state.id}`,
            //url: `http://localhost:60290/profile/profile/getTalentProfile?id=${this.state.id}`,
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            success: function (res) {
                this.setState({
                    data: res.data
                })
            }.bind(this)
        })
    }


    render() {
        if (JSON.stringify(this.state.data) !== JSON.stringify({})) console.log(this.state.data);
        if (this.props.openVideo) {
            return (
                <React.Fragment>
                    <Embed
                        id='125292332'
                        //placeholder='https://react.semantic-ui.com/images/vimeo-example.jpg'
                        source='vimeo'
                    />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                            </Grid.Column>

                            <Grid.Column>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <Header as='h3' >Talent Snapshot</Header>
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        CURRENT EMPLOYER
                                        <br />
                                        None
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        VISA STATUS
                                        <br />
                                        {this.state.data.visaStatus ? this.state.data.visaStatus : 'None'}
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        POSITION <br />
                                        None
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </React.Fragment>
            )
        }

    }
}