
import Header from "./Header";

import HomepageContainer from "./HomepageContainer";

import Imgslider from "./imagesliderhome";


function HomePage() {



    

    return (<>

        <Header />

        <Imgslider/>
        <div className="Homepage" >

            <h1 className="Head" > MOBILES</h1>

            <div><HomepageContainer data='http://localhost:3004/mobiles' link="mobiles"/></div>

            <h1 className="Head" > LAPTOPS</h1>

            

            <HomepageContainer data='http://localhost:3004/laptops' css='laptopimg' link="laptops"/>


        </div>

    </>
    )
}

export default HomePage;