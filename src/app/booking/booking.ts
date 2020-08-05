export class Booking {
    id: number;
	customerId: number;
    staffId: number;
    vehicleId: number;
    entryDate: Date;
	collectionDate: Date;
	bookingTypeId: number;
	statusId: number;
	serviceIds: number[];
	itemIds: number[];
    bookingDate: Date = new Date();
    customerName: String;
    serviceName: String;
    staffName: String;
    status: String;
    comments: String;
    bookingItems: any[];
}
