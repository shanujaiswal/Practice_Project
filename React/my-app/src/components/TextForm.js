import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
     <div class="mb-3">
       {/* <label for="myBox" class="form-label">Example TextArea</label> */}
        <textarea classnm jk  nh kh Name="form-control" id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">Convert to Uppercase </button>
    </div>
  )
}
