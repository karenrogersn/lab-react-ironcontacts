import React, { Component } from 'react';
import './App.css';
import './Components/Contacts.css';
import contacts from './contacts.json';

const ContactsInfo = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.img}</td>
      <td>{props.Santi}</td>
      <td>{props.popularity}</td>
    </tr>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts].splice(0, 5),
    };
  }

  addRandomContact = () => {
    console.log(this.state);
    const celebrity = [...contacts];
    let random = celebrity[Math.round(Math.random() * celebrity.length)];
    celebrity.concat(random);
    this.setState({
      contacts: celebrity,
    });
  };

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <h1>
          <strong>IronContacts</strong>
        </h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <table nameClass="table">
          <div nameClass="container">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact) => {
                return (
                  <ContactsInfo
                    key={contact.id}
                    img={
                      <img
                        src={contact.pictureUrl}
                        alt="celebrity"
                        height="80mv"
                      />
                    }
                    Santi={contact.name}
                    popularity={contact.popularity.toString().slice(0, 5)}
                  />
                );
              })}
            </tbody>
          </div>
        </table>
      </div>
    );
  }
}

export default App;
