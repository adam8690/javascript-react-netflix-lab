import React from 'react'


class FilmDetails extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      image: this.props.film.poster
    }
  }

componentWillMount(){
  console.log(this.state)
  const imgUrl = this.props.film.poster;
  
  const request = new XMLHttpRequest();
    request.open('GET', imgUrl);
    request.onload = () => {
      if(request.status === 200){
        return
      }
      this.setState({image: "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F600060188872155136%2Fst4Sp6Aw.jpg"})
    }
    request.send()
  }

render(){
  console.log('rendering...')
  console.log(this.props)
  console.log(this.state)
  return (
      <div className="film-details" >
        <h3>{this.props.film.show_title}</h3>
        <img src={this.props.film.poster}/>
        <p>Release Year: {this.props.film.release_year}</p>
        <p>Summary: {this.props.film.summary}</p>
      </div>
    )
  }





}

export default FilmDetails