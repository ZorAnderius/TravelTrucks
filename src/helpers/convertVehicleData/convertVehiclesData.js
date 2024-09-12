import { convertFacilities } from "./convertFacilities";
import { convertPrice } from "./convertPrice";

export const convertVehiclesData = ({
  gallery,
  price,
  rating,
  reviews,
  location,
  AC,
  TV,
  bathroom,
  engine,
  kitchen,
  transmission,
  radio,
  ...vehicles
}) => {
  const facilitiesData = convertFacilities({
    AC,
    TV,
    bathroom,
    kitchen,
    radio,
    engine, transmission
  })

  return {
    ...vehicles,
    imgVehicle: gallery[0].original,
    price: convertPrice(price),
    location: location.split(",").reverse().join(", "),
    rating: rating.toFixed(1),
    reviews: reviews?.length,
    facilities: facilitiesData,
  };
};
