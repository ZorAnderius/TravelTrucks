import { convertFormValue, convertSizeValue } from "./converFeaturesValue";
import { convertFacilities } from "./convertFacilities";
import { convertPrice } from "./convertPrice";

export const convertVehiclesData = (vehicle={}, type='') => {
  if (!vehicle) return;
  const {
    id,
    name,
    description,
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
    form,
    length,
    width,
    height,
    thank,
    consumption,
  } = vehicle;

  const facilitiesData = convertFacilities({
    AC,
    TV,
    bathroom,
    kitchen,
    radio,
    engine, transmission
  })
  const baseFacilities = {
    price: convertPrice(price),
    location: location?.split(",")?.reverse()?.join(", "),
    rating: rating?.toFixed(1),
    reviewsQuantity: reviews?.length,
    facilities: facilitiesData,
    id,
    name,
    description,
    reviews,
  };
  return type === "catalog"
    ? {
        ...baseFacilities,
        imgVehicle: gallery && gallery[0].original,
      }
    : {
        ...baseFacilities,
        gallery,
        form: convertFormValue(form),
        length: convertSizeValue(length),
        width: convertSizeValue(width),
        height: convertSizeValue(height),
        thank: convertSizeValue(thank),
        consumption,
      };
};
