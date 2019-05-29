import React from 'react';

export default class ProfileDisplay extends React.Component {
    
    state = {
        tasks: []
    }

    render () {
        return (
        <div>
             <table>
                 <tr>
                     <td>Date</td>
                     <td>Time</td>
                     <td>Task</td>
                 </tr>
                 {/* Map data from firebase to here for the user */}
                 <tr>
                     <td>June 21st, 2019</td>
                     <td>10:00am</td>
                     <td>Build website</td>
                 </tr>
             </table>
        </div>
           
        );
    }

}