import { Coca } from "./Coca";
import { Creator, Refresco } from "./MainCreator";


export class CocaCreator extends Creator{
    public crearRefresco(): Refresco {
        return new Coca()
    }
}