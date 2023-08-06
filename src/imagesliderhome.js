import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
// import { Fade,Zoom,Slide } from "react-slideshow-image";
const Imgslider = () => {
  const slides = [
    { url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/14649_samsung_s23-ultra_1-2-2023_1200x675-sixteen_nine.jpg?VersionId=11lWDaf3FVEq35iFvPeCQOod65Aj0cjD", title: "beach" },
    { url: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1738784_c83d710b4940e0cc9c78f2137174d0b6.png", title: "oneplus" },
    { url: "https://s3b.cashify.in/gpro/uploads/2022/05/03005222/HP-Pavilion-15_.jpg", title: "hp" },
    { url: "https://i.ytimg.com/vi/N6cFknYffdI/maxresdefault.jpg", title: "asus" },
    { url: "https://www.gizmochina.com/wp-content/uploads/2021/10/macbook-pro-2021-renders.jpg", title: "apple" },

  ];

  return (
    <div>
      <Fade className="fade">

        {slides.map((e, i) => {

          return (

            <div key={i}>
              <div
                style={{ backgroundImage: `url(${e.url})` }}
                className="divstyle">

              </div>

            </div>
          )

        })}
      </Fade>
    </div>
  );
};

export default Imgslider;