import React, {Fragment} from "react";

type CustomNumberInputProps = {
    id: string,
    label: string,
    helpText: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

type CustomCheckboxInputProps = {
    id: string,
    label: string,
}

const CustomNumberInput = (props: CustomNumberInputProps) => {

    return (
        <Fragment>
            {props.label.length > 0 &&
                <label htmlFor={props.id} className="form-label">
                    {props.label}
                </label>
            }

            <input
                name={props.name}
                type="number"
                className="form-control"
                id={props.id}
                aria-describedby={props.id}
                onChange={props.changeHandler}
            />

            {props.helpText.length > 0 &&
                <div id={`${props.id}Help`} className="form-text">{props.helpText}</div>
            }
        </Fragment>
    );
}

export const CustomCheckboxInput = (props: CustomCheckboxInputProps) => {
    return (
        <Fragment>
            <input type="checkbox" className="form-check-input" id={props.id}/>
            <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
        </Fragment>
    );
}

export default CustomNumberInput;
