import React from "react";
import {useState} from 'react';
import ValoresEconomicos from "../../interfaces/ValoresEconomicos";
import CustomNumberInput, {CustomCheckboxInput} from "../form-components/CustomInputs";

/**
 * Ajuste de interface para definir correctamente las props entrantes y su definición.
 */
interface SimuladorFormProps {
    valoresEconomicos: ValoresEconomicos,
}

type simuladorValuesForm = {
    monto: number,
    cuotas: number,
    seguroDesgravamen: boolean,
    seguroCesantia: boolean
}

const SimuladorForm = (props: SimuladorFormProps) => {

    // Object destructuring de los props entregados
    const {maxUF, maxUFToPesos} = props.valoresEconomicos;

    // Valoración inicial de los valores del formulario. Usa el type interno de esta clase.
    const [values, setValues] = useState<simuladorValuesForm>({
        monto: 0,
        cuotas: 0,
        seguroDesgravamen: true,
        seguroCesantia: false
    });

    // Controla los cambios de los inputs del formulario y los asigna a los elementos correspondientes del objeto que contiene
    // los datos del formulario.
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    // Controla el submit del formulario.
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('enviando datos');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <CustomNumberInput
                    id={"input-Monto"}
                    label={"Ingresa el monto que necesitas:"}
                    name={"monto"} //El campo "name" debe ser igual al nombre de campo que se usa en 'setValues'
                    helpText={`Hasta ${maxUF} UF ($${maxUFToPesos})`}
                    changeHandler={handleChange}
                />
            </div>
            <div className="mb-3">
                <CustomNumberInput
                    id={"input-Cuotas"}
                    label={"Ingresa el número de cuotas:"}
                    name={"cuotas"} //El campo "name" debe ser igual al nombre de campo que se usa en 'setValues'
                    helpText={"Entre 1 a 60 cuotas"}
                    changeHandler={handleChange}
                />

                {/*<input*/}
                {/*    type="number"*/}
                {/*    className="form-control"*/}
                {/*    id="input-Cuotas"*/}
                {/*    aria-describedby="inputCuotas"*/}
                {/*    step="any"*/}
                {/*    min="1"*/}
                {/*    max="60"*/}
                {/*/>*/}

            </div>
            <div className="mb-3 form-check">
                <CustomCheckboxInput id={"check-seguroDesgravamen"} label={"Seguro de desgravamen"}/>
            </div>
            <div className="mb-3 form-check">
                <CustomCheckboxInput id={"check-seguroCesantia"} label={"Seguro de cesantía"}/>
            </div>

            <button type="submit" className="btn btn-primary">Simular</button>
        </form>
    );
}

export default SimuladorForm;
