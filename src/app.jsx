import React from 'react';
import Agendaday from './components/agendaday';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                Dagen<br/>
                <Agendaday
                    weekday="Monday"
                />
                <Agendaday
                    weekday="Tuesday"
                />
                <Agendaday
                    weekday="Wednesday"
                />
                <Agendaday
                    weekday="Thursday"
                />
                <Agendaday
                    weekday="Friday"
                />
                <Agendaday
                    weekday="Saturday"
                />
                <Agendaday
                    weekday="Sunday"
                />
            </div>
        );
    }

}

export default App;