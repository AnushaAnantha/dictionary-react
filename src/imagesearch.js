
import './App.css';

export default function ImageSearch(props) {
    if (props.photosData !== null){
    return (
           <div className="container">
             <div className="span-12">
                 <div className="card">
                     <div className="card-body">
                        <div className="row">
                            {props.photosData.data.photos.map(function(image, index){
                            return(
                                <div className="col-4" key={index}>
                                    <img key={index} src={image.src.landscape} alt="pexels perfect" className="img-fluid" />
                                </div>
                            )  
                            })}
                        </div>
                    </div>
                </div>
              </div>
           </div>
    )
    }
    else {
        return null;
    }
  }
  