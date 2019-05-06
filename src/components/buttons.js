import React from 'react';


export class MapBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rect: new google.maps.Rectangle({
                draggable: true,
                editable: true,
                bounds: {
                    north: 44.599,
                    south: 44.490,
                    east: -78.443,
                    west: -78.649,
                },
            }),
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-block btn-light" onClick={this.onCreate.bind(this)}>Create Box</button>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-block btn-light" onClick={this.onRemove.bind(this)}>Remove Box</button>
                </div>
            </div>
        );
    }

    onCreate() {
        console.log('Creating box...');
        this.state.rect.setMap(this.props.map);
        this.state.rect.setBounds(this.props.map.getBounds());
    }
    
    onRemove() {
        console.log('Removing box...');
        this.state.rect.setMap(null);
    }
}