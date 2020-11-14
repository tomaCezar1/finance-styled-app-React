import React, {Component} from 'react';
import "./ContentSection.css";
import Button from "../Button/Button";


class ContentSection extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className={`content-section ${this.props.lightBg ? "lightBackground" : 'darkBackground'} 
                    ${this.props.onTop ? "top-section" : ""}`}>
                        <div className={`col ${this.props.reverse ? "reverse" : ""}`}>
                            <div className={`side-content ${this.props.reverse ? "reversed-side-content" : ""}`}>
                                <h1 className="headline">{this.props.headline}</h1>
                                <h1 className={`heading ${this.props.lightText ? "light" : "dark"}`}>{this.props.heading}</h1>
                                <p className={`info-text ${this.props.lightText ? "light" : "dark"}`}>{this.props.infoText}</p>
                                <Button
                                    buttonClass="btn blue"
                                >{this.props.buttonTitle}</Button>
                            </div>
                            <img className="img" src={this.props.imageSrc} alt=''/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContentSection;