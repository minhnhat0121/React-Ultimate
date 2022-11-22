import React from 'react'
import logo from './../logo.svg'
import '../App.scss'
class UserInfor extends React.Component {
   state = {
      name: 'Nhat',
      address: "Viet Nam",
      age: 26,
   };
   handleOnChange = (event) => {
      this.setState({
         name: event.target.value
      })
   }
   handleOnChangeAge = (event) => {
      this.setState({
         age: event.target.value
      })
   }
   handleOnSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.value)
      this.props.handleAddNewUser({
         name: this.state.name,
         age: +this.state.age
      });
   }
   render() {
      return (
         <div>
            <img src={logo}/>
            My name {this.state.name} and from {this.state.address}. I'm {this.state.age}
            <button onClick={this.handleClick}>Click me</button>
            <form action="" onSubmit={this.handleOnSubmit}>
               <label>Your name: </label>
               <input type="text" onChange={this.handleOnChange} value={this.state.name} />
               <br></br>
               <label>Your age: </label>
               <input type="text" onChange={this.handleOnChangeAge} value={this.state.age} />
               <button>Submit</button>
            </form>
         </div>
      )
   }
}
export default UserInfor