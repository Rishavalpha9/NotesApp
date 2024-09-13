import React from 'react';

import {MdAdd,MdClose} from "react-icons/md";

const TagInput = () => {
  return (
    <div className='tagInput'>








        <div className="flex items-center gap-4 mt-3">
<input type="text" className=""  placeholder="Add tags"/>

<button className="">


<MdAdd className="text-2xl text-blue-700 hover:text-white" />




</button>
        </div>
    </div>
  )
}

export default TagInput