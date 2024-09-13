import { nanoid } from "nanoid";

export const vehicleTransmission = {
    id: nanoid(),
    title: "automatic",
    value: "automatic",
    iconStyle: "icon-diagram",
};
  
export const vehicleEngine = {
  id: nanoid(),
  title: "petrol", 
  value: "petrol",
  iconStyle: "icon-petrol",
};

export const vehicleEquipment = [
  {
    id: nanoid(),
    title: "AC",
    value: "AC",
    iconStyle: "icon-wind",
  },
  vehicleTransmission,
  {
    id: nanoid(),
    title: "kitchen",
    value: "kitchen",
    iconStyle: "icon-cup",
  },
  {
    id: nanoid(),
    title: "TV",
    value: "TV",
    iconStyle: "icon-tv",
  },
  {
    id: nanoid(),
    title: "bathroom",
    value: "bathroom",
    iconStyle: "icon-water",
  },
];

export const vehicleType = [
  {
    id: nanoid(),
    title: "Van",
    value: "panelTruck",
    iconStyle: "icon-grid-1x2",
  },
  {
    id: nanoid(),
    title: "Fully Integrated",
    value: "fullyIntegrated",
    iconStyle: "icon-grid-2x2",
  },
  {
    id: nanoid(),
    title: "alcove",
    value: "alcove",
    iconStyle: "icon-grid-3x3",
  },
];

export const vehicleBadges = [
  ...vehicleEquipment,
  {
    id: nanoid(),
    title: "radio",
    value: "radio",
    iconStyle: "icon-list",
  },
];