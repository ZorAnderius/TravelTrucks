import { nanoid } from "nanoid";

export const vehicleTransmission = {
    id: nanoid(),
    title: "automatic",
    iconStyle: "icon-diagram",
};
  
export const vehicleEngine = {
  id: nanoid(),
  title: "petrol",
  iconStyle: "icon-petrol",
};

export const vehicleEquipment = [
  {
    id: nanoid(),
    title: "AC",
    iconStyle: "icon-wind",
  },
  vehicleTransmission,
  {
    id: nanoid(),
    title: "kitchen",
    iconStyle: "icon-cup",
  },
  {
    id: nanoid(),
    title: "TV",
    iconStyle: "icon-tv",
  },
  {
    id: nanoid(),
    title: "bathroom",
    iconStyle: "icon-water",
  },
  {
    id: nanoid(),
    title: "radio",
    iconStyle: "icon-list",
  },
];

export const vehicleType = [
  {
    id: nanoid(),
    title: "Van",
    iconStyle: "icon-grid-1x2",
  },
  {
    id: nanoid(),
    title: "Fully Integrated",
    iconStyle: "icon-grid-2x2",
  },
  {
    id: nanoid(),
    title: "alcove",
    iconStyle: "icon-grid-3x3",
  },
];