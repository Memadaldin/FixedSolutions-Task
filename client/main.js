import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {FixedData} from './../imports/api/fixedData';
import {Tracker} from 'meteor/tracker';
import AddData from './../imports/ui/AddData';



Meteor.startup(()=>{
  Tracker.autorun(()=>{
    //let fixeddata = FixedData.find().fetch();
    let jsx = (
      <div>
        <AddData />
      
        
        </div>
        );
      ReactDOM.render(jsx, document.getElementById('app'));
  })
  
});