import React from 'react';

/**
 * Agendaday component
 * @param props
 * @returns {XML}
 */
class Agendaday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Day">
             <div className="Day__weekday">
                 {this.props.weekday}
             </div>
                <div className="Day__Hour1">

                </div>
            </div>

        );
    }

}

export default Agendaday;