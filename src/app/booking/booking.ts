export class Booking {
    id: number;
	customerId: number;
    staffId: number;
    vehicleId: number;
	bookingTypeId: number;
	statusId: number;
	serviceIds: number[];
	itemIds: number[];
    bookingDate: Date;
    customerName: String;
    serviceName: String;
    staffName: String;
    status: String;
    comments: String;
    bookingItems: any[];
    bsDate: string;
    invoice: boolean;
}
