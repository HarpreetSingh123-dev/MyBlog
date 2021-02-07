import React, { Component } from 'react';
import axios from 'axios'
import './Mainbody2.css'
class AllExercises extends Component {
  
    constructor(props){
 
         super(props)

        
         this.state={

                Exercises_Set:[],
             
         }

}


   // componentDidMount(){
      
     //   axios.get('http://localhost:8000/dishes/')

       // .then((res)=>{
              
         //   if(res.data.length>0){

           //     this.setState({testdishes:res.data})
            //}


        //})

    

    //}

    componentDidMount(){

        //axios.get('http://localhost:8000/exercises/')

        axios.get('http://[2605:fd00:4:1001:f816:3eff:fe55:93ce]:8000/exercises/')

         .then((res)=>{
               
             if(res.data.length>0){
 
                 this.setState({ Exercises_Set:res.data})
              
                }
             
            })  .catch((err) =>{

                 if(err.response){
                     console.log("error response"+ err.response)
                 }

                 else if(err.request){
                   
                    console.log(err.request)
                 }

            });

             
    }


    test(){

        var options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/help/countries',
            headers: {
              'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              
            if(error.response){
                console.log("sooooo"+ error.response)
            }

            else if(error.request){
              
               console.log("soooo whyy"+error.request)
            }
          });


    }

    render() {

           let b = null

            b = ( this.state.Exercises_Set.map((exercise,index , array)=>{

                
                  
                return ( <div> 
                           <div className="container">
                           <div><h2><b>DAY {index}</b></h2></div>
                        <div><h3><b>{exercise.title}</b></h3></div> 
                          

                           <div className="table-responsive-sm">
                           <table class="table">
  
                              <thead>
                                   <tr>
                                   <th scope="col"></th>
                                      <th scope="col" ><h5><b>Exercise Name</b></h5></th>
                                      <th scope="col" ><h5><b>Description</b></h5></th>
                                      <th scope="col" ><h5><b>Sets</b></h5></th>
                                      <th scope="col" ><h5><b>Reps</b></h5></th>
                                   </tr>
                              </thead>
                                   <tbody>
                                       <tr>
                                       <th scope="row">1</th>
                                        <td>{exercise.exercises.First_Exercise}</td>
                                        <td>{exercise.description.First_Description}</td>
                                        <td>{exercise.sets.FirstExercise_Sets}</td>
                                        <td>{exercise.reps.FirstExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                       <th scope="row">2</th>
                                        <td>{exercise.exercises.Second_Exercise}</td>
                                        <td>{exercise.description.Second_Description}</td>
                                        <td>{exercise.sets.SecondExercise_Sets}</td>
                                        <td>{exercise.reps.SecondExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                       <th scope="row">3</th>
                                        <td>{exercise.exercises.Third_Exercise}</td>
                                        <td>{exercise.description.Third_Description}</td>
                                        <td>{exercise.sets.ThirdExercise_Sets}</td>
                                        <td>{exercise.reps.ThirdExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                       <th scope="row">4</th>
                                        <td>{exercise.exercises.Fourth_Exercise}</td>
                                        <td>{exercise.description.Fourth_Description}</td>
                                        <td>{exercise.sets.FourthExercise_Sets}</td>
                                        <td>{exercise.reps.FourthExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                       <th scope="row">5</th>
                                        <td>{exercise.exercises.Fifth_Exercise}</td>
                                        <td>{exercise.description.Fifth_Description}</td>
                                        <td>{exercise.sets.FifthExercise_Sets}</td>
                                        <td>{exercise.reps.FifthExercise_Reps}</td>
                                       </tr>

                                       <tr>
                                       <th scope="row">6</th>
                                        <td>{exercise.exercises.Sixth_Exercise}</td>
                                        <td>{exercise.description.Sixth_Description}</td>
                                        <td>{exercise.sets.SixthExercise_Sets}</td>
                                        <td>{exercise.reps.SixthExercise_Reps}</td>
                                       </tr>
                                  </tbody>
                           </table>                
                        </div>
                
                            </div>
                        </div>
                              )

            }))
         


        return (
            <div>
               
                <div className="Main-body-2">
                <div className="Main-Body-Upper-Decor"></div>
                <h2 className="text-center">Intermediate Level Workout Plan</h2> 
                  
                  <div >
                      <button onClick={this.test.bind(this)}>Test</button>
                  {b}
                  </div>
            </div>
            </div>
        );
    }
}

export default AllExercises;