import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated';
class NewsDetail extends Component {
    render() {
      // var x = 2 ; 
      // var y = "2";
      // y = parseInt(y,20);
      // if(x===y) { console.log("bang nhau ");}
      // console.log(typeof(y));

      // console.log(this.props.match.params.id);
      // console.log(typeof(this.props.match.params.id));
     
      var dem = 1 ; 
     
     return (
            <div>
              <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">Trang Chi tiet tin </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
 {
  dl.map((value,key) => {
        
        if(value.id === parseInt(this.props.match.params.id,20) ) {
          return (
            <div className="jumbotron jumbotron-fluid" key={key}>
            <div className="container">
              <img src={value.anh} className="img-fluid rong100" alt="react router demo" />
              <h3 className="lead text-center">{value.tieuDe}</h3>
              <hr className="my-2" />

              {
                value.noiDung
              }
              </div>
          </div>
          )
        }
        else{return true; }
      })
    }


  <div className="container">
    <h4 className="card-title text-center">Tin lien quan </h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
        {
          
          dl.map((value,key) => {
            // console.log(key);
            if(value.id !==  parseInt(this.props.match.params.id,20)  ){
              if(dem <=4 ) {
                dem++;  
                return (
                    <NewsRelated key={key} 
                          tinId={value.id}
                          anh={value.anh} 
                          tieuDe={value.tieuDe}
                          trichDan={value.trichDan}> </NewsRelated>
                      )
              }
            }  
            return true; 
          
          })
        }
           
        </div>
      </div>
    </div>
  </div>
  {/* end  tintuc */}
</div>
  
            </div>
        );
    }
}

export default NewsDetail;