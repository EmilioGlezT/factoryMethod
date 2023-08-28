import { Creator, Refresco } from './MainCreator';
import { Fanta } from './Fanta';


export class FantaCreator extends Creator{
 
    public crearRefresco(): Refresco {
        return new Fanta();
    }

}