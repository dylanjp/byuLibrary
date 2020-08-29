import React, {Component} from 'react'
import GitHubService from '../API/GitHubService'

class RatingComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            author : '',//who the author is
            Description : '', //summary of the media
            title : '', // Title of the media
            type : '', // Type of meida
            imageUrl : '', // avatar picture
            itemId : '' // ID of the media
        }
        //bindFunctionsHere
        this.yesClicked = this.yesClicked.bind(this);
        this.noClicked = this.noClicked.bind(this);
    }

    //When page loads it will get the first thing to rate
    componentDidMount() {
        this.setState({author:'Dylan Pratt'})

        GitHubService.getNewItemToRate()
        .then(response => {
            console.log(response)
            if(response.status !== 200){
                console.log("Not Valid")
            }else{
                this.setState({Description:response.data.description})
                this.setState({imageUrl:response.data.thumbnail})
                this.setState({author:response.data.author})
                this.setState({title:response.data.title})
                this.setState({type:response.data.type})
                this.setState({itemId:response.data.id})
            }

        })
    }
    //no was clicked
    noClicked(){
        GitHubService.noWasClicked(this.state.itemId)
        .then(response => {
            console.log(response)
            GitHubService.getNewItemToRate()
            .then(response => {
                console.log(response)
                if(response.data.id == this.state.itemId){
                    console.log("YA GOT THE SAME ONE")
                    this.noClicked()
                }else{
                    this.setState({Description:response.data.description})
                    this.setState({imageUrl:response.data.thumbnail})
                    this.setState({author:response.data.author})
                    this.setState({title:response.data.title})
                    this.setState({type:response.data.type})
                    this.setState({itemId:response.data.id})
                }
            })
        }
        ).catch( () => {
            console.log('ItsaBroken')
        }) 


    }

    //Yes was Clicked
    yesClicked(){
        GitHubService.yesWasClicked(this.state.itemId)
        .then(response => {
            console.log(response)
            GitHubService.getNewItemToRate()
            .then(response => {
                console.log(response)
                if(response.data.id == this.state.itemId){
                    console.log("YA GOT THE SAME ONE")
                    this.yesClicked()
                }else{
                    this.setState({Description:response.data.description})
                    this.setState({imageUrl:response.data.thumbnail})
                    this.setState({author:response.data.author})
                    this.setState({title:response.data.title})
                    this.setState({type:response.data.type})
                    this.setState({itemId:response.data.id})
                }
            })
        }
        ).catch( () => {
            console.log('ItsaBroken')
        }) 

    }

    render() {
        return (
            <div className="superbox">
            
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h5>{this.state.type}</h5>
                        <img src={this.state.imageUrl} alt="thumbnail" className="avatar"/>
                        <h1>{this.state.title}</h1>
                        <h5>{this.state.author}</h5>
                        <h6>Description: "{this.state.Description}"</h6>
                        <br/>
                        <h5>Would you you like to read or watch this?</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                         <button className="btn btn-danger" onClick={this.noClicked}>NO</button>
                    </div>
                    <div className="col-sm">
                         <button className="btn btn-success" onClick={this.yesClicked}>YES</button>
                    </div>
                </div>
            </div>


            </div>
        )
    }
}
export default RatingComponent