// class
// function component
import React, { Fragment } from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfor';
class Mycomponent extends React.Component {
   state = {
      listUsers: [
         { id: 1, name: "Minh Nhat", age: 20 },
         { id: 2, name: "Viet Anh", age: 19 },
         { id: 1, name: "Tuan Loc", age: 22 },
      ]
   }
   handleAddNewUser = (userObject) => {
      this.setState({
         listUsers: [userObject, ...this.state.listUsers]
      })
   }
   render() {
      const test = { name: "Minh Nhat", age: 19 }
      return (
         <Fragment>
            {JSON.stringify(test)}
            <UserInfor handleAddNewUser={this.handleAddNewUser} />
            <DisplayInfor listUsers={this.state.listUsers} />
         </Fragment>
      );
   }
}
export default Mycomponent;