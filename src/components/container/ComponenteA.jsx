import { Contacto } from "../../models/contact.class";
import { ComponenteB } from "../pure/ComponenteB";

export function ComponenteA(){
    const defaultcontact = new Contacto('juan gerardo','yumacales cuellar','gyumacales@gmail.com',true);
    return(
        <div>
            <ComponenteB contacto={defaultcontact}/>
        </div>
    );
}