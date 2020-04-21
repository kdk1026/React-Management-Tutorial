import React from 'react';

class CustomerDelete extends React.Component {

    deleteCustomer(id) {
        const url = 'http://localhost:5000/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }

}

export default CustomerDelete;