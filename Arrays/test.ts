interface RevenuePerShipmentData {
  Month: string;
  Revenue_Per_Shipment: number;
}

interface RevenuePerShipmentResponse {
  success: boolean;
  data: RevenuePerShipmentData[];
}

const repsonse: RevenuePerShipmentResponse = {
  success: true,
  data: [
    { Month: "January", Revenue_Per_Shipment: 100 },
    { Month: "February", Revenue_Per_Shipment: 200 },
    { Month: "March", Revenue_Per_Shipment: 300 },
  ],
};


