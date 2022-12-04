import React from "react";
import moment from "moment";

export default function DateTimePretty(Component) {
    return class extends React.Component {
        render() {
            this.props = {
                date: moment(this.props.date).locale("ru").fromNow()
            }

            return <Component {...this.props} />;
        }
    }
}