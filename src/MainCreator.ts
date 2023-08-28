

export abstract class Creator{
    // Refresco refresco = crearRefresco()


    public abstract crearRefresco():Refresco;

    public imprimirSabor(): string{
        const refresco = this.crearRefresco()
        return `El sabor es de ${refresco.sabor()}`
    }
}



export interface Refresco{
    sabor(): string;
}