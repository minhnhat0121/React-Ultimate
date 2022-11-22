import React, { Fragment } from 'react'
import UserInfor from './UserInfor'

class DisplayInfor extends React.Component {
   state = {
      isShowListUser: true,
   }
   handleShow_HideUser = () => {
      this.setState(
         {
            isShowListUser: !this.state.isShowListUser,
         }
      )
   }
   render() {
      const { listUsers } = this.props
      return (
         <>
            <div>
               <span className='clickHide' onClick={this.handleShow_HideUser}>
                  {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
               </span>
            </div>
            {this.state.isShowListUser &&
               <div>
                  {
                     listUsers.map((item, index) => {
                        console.log(listUsers)
                        return (
                           <div>
                              <div className={+item.age > 21 ? "green" : "red"}>My id's {item.id} </div>
                              <div>My name's {item.name}</div>
                              <div>My age's {item.age}</div>
                              <hr />
                           </div>
                        )
                     })
                  }
               </div>
            }
         </>
      )
   }
}
export default DisplayInfor