// interface reportable {
//   summary(): string;
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}, maybe it's red?`;
//   },
// };

// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
//   summary(): string {
//     return `my drink has ${this.sugar} of sugar`;
//   },
// };

// // const printVehicle = (vehicle:car) => {

// // }
// // can do above or below

// //dumb way to do it if we dont pull out interface
// // const printVehicle = (vehicle: {
// //   name: string;
// //   year: number;
// //   broken: boolean;
// // }): void => {
// //   console.log(`Name: ${vehicle.name}`);
// //   console.log(`Year: ${vehicle.year}`);
// //   console.log(`Broken?: ${vehicle.broken}`);
// // };

// // console.log(printVehicle(oldCivic));

// const printVehicle = (item: reportable): void => {
//   console.log(item.summary());
// };

// printVehicle(oldCivic);
// printVehicle(drink);

// class Vehicle {
//   drive(): void {
//     console.log('chugga, chugga');
//   }
//   honk(): void {
//     console.log('HONKHONK!');
//   }
// }

// class Car extends Vehicle {
//   drive(): void {
//     console.log('actually vroom vroom');
//   }
// }

// const buick = new Car();

// buick.drive();

// buick.honk();
