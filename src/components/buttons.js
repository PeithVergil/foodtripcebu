import React from 'react';


export class MapBox extends React.Component {

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
        this.props.rect.setBounds(this.props.map.getBounds());
        this.props.rect.setVisible(true);
    }
    
    onRemove() {
        console.log('Removing box...');
        this.props.rect.setVisible(false);
    }
}