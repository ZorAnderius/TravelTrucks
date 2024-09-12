import { vehicleEngine, vehicleEquipment, vehicleTransmission } from "../filterVariable";

export const convertFacilities = (data) => { 
    const facilitiesData = Object.entries(data).reduce(
      (acc, [key, value]) =>
        value === true ? [...acc, { [key]: value, title: key }] : acc,
      []
    );
    const filterFacilities = vehicleEquipment.filter((data) =>
      facilitiesData.find(({ title }) => title === data.title)
    );
    filterFacilities.unshift(
      { ...vehicleTransmission, title: data.transmission },
      { ...vehicleEngine, title: data.engine }
    );
    return filterFacilities;
 }