import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Loader, Container, Grid, Segment, Image, Card, Icon, Button, Embed } from 'semantic-ui-react';
import TalentDetail from './TalentDetail.jsx';

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            showVideo: true
        };

        this.toggle = this.toggle.bind(this);
    };

    componentDidMount() {
        this.setState({
            id: this.props.data.id,
            name: this.props.data.name
        });
    }

    toggle() {
        this.setState({
            showVideo: !this.state.showVideo
        })
    }

    render() {
        const name = this.state.name;
        const id = this.state.id;
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header style={{ display: 'inline' }}>{name}</Card.Header>
                    <Button floated='right' icon circular>
                        <Icon name='star' />
                    </Button>
                </Card.Content>

                <TalentDetail openVideo={this.state.showVideo} id={id} />
                <Card.Content>
                    <Grid columns='equal'>
                        <Grid.Row textAlign='center'>
                            <Grid.Column>
                                {this.state.showVideo ? <Icon name='user' size='large' link onClick={this.toggle} /> : <Icon name='video' size='large' link onClick={this.toggle} />}

                            </Grid.Column>
                            <Grid.Column>
                                <Icon name='file pdf outline' size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name='linkedin' size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name='github' size='large' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>
                <Card.Content extra>
                    <a>
                        No Skills recorded
                    </a>
                </Card.Content>
            </Card>
        )

    }
}

