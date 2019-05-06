import React from 'react';


class Place extends React.Component {
    render() {
        // Use the default image if none is available.
        let image = 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg';

        if ((typeof this.props.info.photos) !== 'undefined')
            image = this.props.info.photos[0].getUrl({
                maxWidth: 300,
                maxHeight: 300,
            });

        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img" alt="italian pizza" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.info.name}</h5>
                            <p className="card-text">{this.props.info.formatted_address}</p>
                            <p className="card-text"><small className="text-muted">Rating: {this.props.info.rating}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Places extends React.Component {
    render() {
        let items = this.props.items.map((item) => {
            console.log(item);
            return <Place info={item} key={item.id} />;
        });
        return (
            <div id="places">
                {items}
            </div>
        );
    }
}


export default Places;