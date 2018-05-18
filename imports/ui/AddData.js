import React from 'react';
import {FixedData} from './../api/fixedData';


export default class AddData extends React.Component{
  constructor(props){
    super(props);

    // Setting the initial state
    this.state = {
      userName:'',
      age:'',
      profession:'',
      isUploaded: false,
      uploadedfile: null
    }
  }

  handleSubmit(e){
    e.preventDefault();

    // destructing
    const {
      userName,
      age,
      profession,
      buffer,
      isUploaded
    } = this.state;

    //  Sending the Data to the DB
    if (isUploaded){
      FixedData.insert({
        UserName: userName,
        Age: age,
        Profession: profession,
        uploadedfile: buffer
      })
    } else {
      alert("please wait until upload complete")
    }

    // resetting all fields
    e.target.userName.value = '';
    e.target.age.value = '';
    e.target.profession.value = '';
    e.target.uploadedfile.value = null;
    this.setState({
      isUploaded: false
    })
      
  }

  // insertUserName(e){
  //   this.setState({
  //     userName: e.target.value,   
  //   })
  // }
  // insertAge(e){
    
  //   this.setState({
  //     age: e.target.value,      
  //   })
  // }
  // insertProfession(e){
  //   this.setState({
  //     profession: e.target.value
  //   })
  // }

  onTextFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fileHandler(e){
      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = (function(upload){
        var buffer = new Uint8Array(reader.result);
        this.setState({
          isUploaded: true,
          buffer: buffer
        })
      }).bind(this);

      return reader.readAsArrayBuffer(file);
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="userName"
            placeholder="User name"
            value={this.state.userName}
            onChange={this.onTextFieldChange.bind(this)}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age} 
            onChange={this.onTextFieldChange.bind(this)}
          />

          <input
            type="text"
            name="profession"
            placeholder="profession"
            value={this.state.profession}
            onChange={this.onTextFieldChange.bind(this)}
          />

          <input
            type="file"
            name="uploadedfile"
            value={this.state.uploadedfile}
            onChange={this.fileHandler.bind(this)}
          />
        <button>Add User</button>
      </form>
    </div>

    );
  }
}