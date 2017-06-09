import React from 'react';

const AddTitle = (props) => {
  return (
    <div>
      <input type="text" ref={(title) => {this.title = title;}} />
      <input type="button" onClick={()=>{props.addTitle(this.title.value)}} value="ADD"/>
    </div>
  )
};



export default AddTitle;