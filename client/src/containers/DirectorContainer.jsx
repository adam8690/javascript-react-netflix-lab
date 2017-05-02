import React from 'react';
import FilmSelector from '../components/FilmSelector.jsx'
import FilmDetails from '../components/FilmDetails.jsx'

class DirectorContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      filmArray: [],
      selectedFilm: {}
    }
  }

  componentDidMount(){
    const url = "http://netflixroulette.net/api/api.php?director=Woody%20Allen"
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200){
        console.log(request)
        const jsonString = request.responseText;
        const filmData = JSON.parse(jsonString);
        this.setState({filmArray: filmData, selectedFilm: filmData[0]})
      }
    }
    request.send()
  }

  handleStateChange(film){
    this.setState({selectedFilm: film})
    console.log(film);
  }

  render(){

    return (

      <div className="director-container">
        <h1>Woody Allen</h1>
        <FilmSelector films={this.state.filmArray} handleStateChange={this.handleStateChange.bind(this)}/> 
        <FilmDetails film={this.state.selectedFilm}/>
      </div>

    )


  }

}

export default DirectorContainer;