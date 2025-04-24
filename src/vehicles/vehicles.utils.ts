export const carModelInclude = {
  carModel: {
    select: {
      id: true,
      make: true,
      model: true,
      year: true,
    },
  },
};

export function formatVehicle(vehicle) {
  const { id, carModel, plate } = vehicle;
  const { make, model, year } = carModel;

  return {
    id,
    plate,
    carModel: {
      make,
      model,
      year,
    },
  };
}
