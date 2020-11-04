import * as React from 'react';
import  moment from 'moment';

class DateRender extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state={
            value: moment(this.props.value).format( 'MMM Do YYYY, h:mm:ss a')
        }
    }

    public render() {
        return (

                <div className="DateRender-component">{this.state.value}</div>
        )
    }
};

export default DateRender;
