import React, { Component } from 'react';
import { Button , Label, Row, Col} from 'reactstrap';
import * as IoIcons from "react-icons/io";
import initialDetails from './initialDetails';
import './style.css';

class staffDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '', alphabet: '', favorites: [], showFav:false };

    this.handleClick = this.handleClick.bind(this); 

  }
   
    handleClick(id){
      
      const favorites = this.state.favorites;
      const findIdx = favorites.indexOf(id);

      if (findIdx > -1) {
        favorites.splice(findIdx, 1);
      } else {
        favorites.push(id);
      }

      this.setState({
        favorites: favorites
      });

    }

    favListDisplay = () =>{
        // this.setState({favList:e.target.value})
        // console.log("favlist", e.target.value)

        this.setState({showFav: !this.state.showFav})
    }


    onSearchInputChange = (e) => {
      this.setState({alphabet: e.target.value})
    }
    onSearchInputChange2 = (e) => {
      this.setState({searchInput: e.target.value})
    }
    onAlphabetClick = (e) => {
      this.setState({alphabet: e.target.value})
    }

  

    prepareAlphabets = () => {
      let result = [];
      for(let i=65; i<91; i++) {
        result.push(
          <Button outline color="primary" style={{marginTop:"2rem"}} key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</Button>

        )
      }
      return result;
    }

    elementContainsSearchString = (searchInput, element) => (searchInput ? element.name.toLowerCase().includes(searchInput.toLowerCase()) || element.designation.toLowerCase().includes(searchInput.toLowerCase()) : false);

    


    filterItems = (initialDetails) => {
      let disp=this.state.favorites
      console.log("selected items", disp.length)
      console.log("initialDetails", initialDetails)
       let result = [];
      const { searchInput,alphabet, favList } = this.state;
      if(initialDetails &&  (searchInput || alphabet)) {
        result = initialDetails.filter((element) => (element.name.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
        this.elementContainsSearchString(searchInput, element) 
        );
      }
  
      else {
        result = initialDetails ||[];
      }
      console.log("selected resultsss", disp.length)
      result = result.map((item,key)=> (
      
      // <li>{item.name}</li>

      <div key={item.id}> 
        

            <Row>
                  <Col sm="5">
                  <div>
                  <img    src={item.imgPath} alt={item.name} style={{borderRadius:"50%", width:"100%"}}/>
                  </div>
                  </Col>

                <Col>
                <div className="textAlg">
                    <p className="headFont">{item.name}</p>
                      
                    <Label >{item.designation}</Label>
                  <br />
                    <Label  key={item.id}  onClick={()=>this.handleClick(item.id)} className="mailText">{item.email} </Label>
                    <Label className="subText">{item.phNumber}</Label>
                  </div>
                  
                </Col>
            </Row>

            <Row>
              <Col>
          <div className="likeHeart" >
           
            <div  onClick={()=>this.handleClick(item.id)}>

            {this.state.favorites.includes(item.id) ? (<IoIcons.IoIosHeart   style={{color:"red"}} /> ):
            (<IoIcons.IoIosHeart  style={{color:"#606060"}} /> )}

            </div>
          </div>
              </Col>
            </Row>
    
      </div>
      
      ))
      
      return result;
      
    }

      render() {
  
        let initialDetails1 = initialDetails
        if(this.state.showFav===true){
            initialDetails1 =[]
            initialDetails.forEach((item,key)=>{
                if(this.state.favorites.indexOf(item.id) >= 0){
                    initialDetails1.push(item)
                }
            
            })

        }

        const filteredList = this.filterItems(initialDetails1);
      return (
        <div >

            <div>
              <Label className="staffDirectory"> Staff Directory  </Label>
            </div>  

            <div className="searchStaff">
              <Label>Search Staff</Label>
            </div>


            <div className="pa2">
                  <Row>
                      <Col sm="7">
                      <input 
                  className="searchingDesign"
                  type = "search" 
                  placeholder = "Search Staff Name or Department" 
                  onChange={this.onSearchInputChange2} 
                />
                      </Col>

                      <Col>
                            <Label className="showFavouritesOnly">Show Favourites Only</Label>
                            <label className="switch">
                            <input type="checkbox"  onChange={this.favListDisplay} />
                            <span className="slider round"></span>
                            </label>
                        
                      </Col>
                  </Row>
              </div>


          <Button outline color="primary" style={{marginTop:"2rem"}} onClick={this.onSearchInputChange} >All</Button>
          {this.prepareAlphabets()}
          <div className="wrapper">
            {filteredList}
          </div>


        </div>
      );
      }
  }

  export default staffDirectory;