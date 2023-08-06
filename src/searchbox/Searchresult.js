import { useNavigate } from "react-router-dom";
export const SearchResult = ({ result, id }) => {
  const Navigate = useNavigate();
  function navpage(id) {
    if (id < 17) {
      Navigate(`/Login/HomePage/mobiles/${id}`)

    }
    else {
      Navigate(`/Login/HomePage/laptops/${id}`)

    }
    window.location.reload(false)
  }
  return (
    <div
      className="search-result"
      onClick={(e) => navpage(id)}
    >
      {result}
    </div>
  );
};