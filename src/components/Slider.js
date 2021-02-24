import ReactJS, {Component} from 'react';

class Slider extends Component {
    render() {
        return(
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search item name"/>
                <span className="input-group-btn">
                    <button class="btn btn-info" type="button">Clear</button>
                </span>
            </div>
        );
    }
}

export default Slider;