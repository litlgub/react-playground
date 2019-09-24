import React from 'react';

class Accordian extends React.Component {

    static defaultProps= {sections: []};

    state = {
        currentIndex: 0
    };


    renderButtons(){
        return this.props.sections.map((section, index) => (
        <ul>
        <li>
            <button key={index} onClick={()=>
                this.handleButtonClick(index)}>{section.title}</button>
        </li>

    </ul>
        ))

    }
    renderContent(){
        const currentIndex= this.props.sections[this.state.currentIndex]
        return (
            <div>
                {currentIndex.content}
            </div>
        )

    }
    handleButtonClick(index){

        this.setState({currentIndex: index})

    }


    render(){
        return(
            <div>
                {this.renderButtons()}

                {this.props.sections.length && this.renderContent()}
            </div>
       
            )
    }
}



export default Accordian;
