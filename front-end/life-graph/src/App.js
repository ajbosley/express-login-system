import React, { Component } from 'react';

class App extends Component {
  clicker = async function() {
  return await fetch('http://localhost:5000/api/spotify/data', {headers:{'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjE5OTVhYXJvbi5ib3NsZXlAZ21haWwuY29tIiwiX2lkIjoiNWMyNGM5Yjg4YWIwODMyMDI2MTc4Yzg0IiwiaWF0IjoxNTQ1OTk0MzgyLCJleHAiOjE1NDYwMDE1ODJ9.bUwBIkZBoLjxGu_AQnvwJ0IaGM-Vu0buHTj8r4sLD2A'}})
  .then(response=>response.json())
  .then(json=>console.log(json))
  .catch((err) => {
  console.log("error");
  console.log("error " + err.statusText)
});
}
  render() {
    return (
      <div className="App">
        <button onClick={this.clicker}>Do some work baby</button>
      </div>
    );
  }
}

export default App;
