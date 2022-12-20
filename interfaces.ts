interface car {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
};

// const printVehicle = (vehicle:car) => {

// }
// can do above or below

//dumb way to do it if we dont pull out interface
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken?: ${vehicle.broken}`);
// };

// console.log(printVehicle(oldCivic));

const printVehicle = (vehicle: car): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

console.log(printVehicle(oldCivic));
