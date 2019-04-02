import React , {Component } from 'react';
import SOCIAL_PROFILE from '../data/socialProfiles';

class Social extends Component {
    render() {
        const { image, link } = this.props.social;

        return (
            <div>
                <img src={image} alt='profile' />
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Social_Proyects extends Component {
    render() {
        return (
            <div>
                <h2>Social Proyects</h2>
                <div>
                    <div>
                    {
                        SOCIAL_PROFILE.map(SOCIAL => {
                            return (
                                <Social key={SOCIAL.id} social={SOCIAL} />
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Social_Proyects;