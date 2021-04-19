export interface Mesa{
    _id: string;
    id:number;
    activo:Boolean;
    codigo:string;
    pedido:Array<Pedido>

}
export interface Pedido{
    platillo: String,
    cantidad:number,
    precio:number,
    mesa:String,
    tomado:number
}