export class BookingItem {
    itemId:number;
    itemName: String;
    quantity: number;

    constructor(itemId, itemName, quantity){
        console.log("constructor");
        console.log(itemId);
        console.log(quantity);
        this.itemId = itemId;
        this.quantity = quantity;
        this.itemName = itemName;
    }
}
