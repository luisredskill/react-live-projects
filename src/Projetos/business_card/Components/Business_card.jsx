import '../CSS/Business_card.css';
import Buttons from "./Buttons"
import Footer from "./Footer"
import Name from "./Name"
import Photo from "./Photo"
import Text from "./Text"

export default function Business_card() {
    return(
    <div className="Business_cardBody">
      <div className='Business_card'>
          <Photo/>
          <Name/>
          <Buttons/>
          <Text/>
          <Footer/>
        </div>
    </div>
    )
}