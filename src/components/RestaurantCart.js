import {IMG_CDN_URL} from "../Constant"
const RestaurantCart = ({name,totalRatingsString,cloudinaryImageId}) => {
    // console.log(props)
    // const {name,totalRatingsString,cloudinaryImageId}= restaurant.data.data
  return (
    <div className="cart">
      <img src= { IMG_CDN_URL +cloudinaryImageId }/>
      <h2> {name}</h2>
      {/* <h3>{props.restaurant.data?.cuisines.join(" ,")}</h3> */}
      <h4>{totalRatingsString}  </h4>
    </div>
  );
};
export default RestaurantCart;