import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class Contact extends Component {  
  state = {
    showContactInfo: false
  };

  // Arrow function works like methods in vue, it will hold the execution
  // onShowClick = e => {
  //   this.setState({showContactInfo: !this.state.showContactInfo});
  // };

  onDeleteClick = (id) => {
    this.props.deleteContact(id);
  };
  
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "} 
          <i 
            onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} 
            className="fas fa-sort-down"
            style={{cursor: 'pointer'}} 
          />
          
          <i
            className="fas fa-times"
            style={{cursor: 'pointer', float: 'right', color: 'red'}}
            onClick={this.onDeleteClick.bind(this, id)}
          />

          <Link to={`contact/edit/${id}`}>
            <i 
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}></i>
          </Link>
        </h4>
        {
          showContactInfo 
          ?
          (<ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
          ) : null
        }
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

// connect(state, action)
export default connect(null, {deleteContact})(Contact);
