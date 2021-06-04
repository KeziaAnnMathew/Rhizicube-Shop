export class ProductModel{
    constructor(
        public productname:string,
        public SKU:string,
        public productcategory:string,
        public productprice:number,
        public productimage:string,
        public productdescription:string,
        public productrating:number,
        public producttotalbought:number,
        public productreviews:number
    ){

    }
}