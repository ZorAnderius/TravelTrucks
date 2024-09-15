import { nanoid } from "nanoid";
import { convertFormValue, convertSizeValue } from "./converFeaturesValue";
import { convertFacilities } from "./convertFacilities";
import { convertPrice } from "./convertPrice";

export const convertFacilitiesBadge = (vehicle = {}) => {
  if (!vehicle) return;
  const { AC, TV, bathroom, kitchen, radio, engine, transmission } = vehicle;
  return convertFacilities({ AC, TV, bathroom, kitchen, radio, engine, transmission });
};

export const convertVehiclesData = (vehicle = {}, type = "") => {
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
  } = vehicle;


  const baseFacilities = {
    price: convertPrice(price),
    location: location?.split(",")?.reverse()?.join(", "),
    rating: rating?.toFixed(1),
    reviewsQuantity: reviews?.length,
    facilities: convertFacilitiesBadge(vehicle),
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
      };
};

export const convertVehicleDetails = (vehicle = {}) => {
  if (!vehicle) return;
  const { form, length, width, height, tank, consumption } = vehicle;
 return [
    { feature: convertFormValue(form), title: "Form", id: nanoid() },
    { feature: convertSizeValue(length), title: "Length", id: nanoid() },
    { feature: convertSizeValue(width), title: "Width", id: nanoid() },
    { feature: convertSizeValue(height), title: "Height", id: nanoid() },
    { feature: convertSizeValue(tank), title: "Tank", id: nanoid() },
    { feature: consumption, title: "Consumption", id: nanoid(), },
  ];
};
