import React, {Fragment} from "react";
import {CustomCheckboxLabel, CustomDefaultLabel, CustomHelpText} from "./CustomLabels";

type CustomInputProps = {
    id: string,
    name: string,
    type: string,
    value?: string | number,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    helpText?: string
}

type CustomCheckboxProps = {
    id: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    checked: boolean
}

export const CustomCommonInput = (props: CustomInputProps) => {
    return (
        <Fragment>
            <CustomDefaultLabel id={props.id} text={props.label}/>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                className="form-control"
                aria-describedby={props.id}
                onChange={props.changeHandler}
            />

            <CustomHelpText id={props.id} text={props.helpText}/>
        </Fragment>
    );
}


export const CustomCheckboxInput = (props: CustomCheckboxProps) => {
    return (
        <Fragment>
            <input
                type="checkbox"
                className="form-check-input"
                id={props.id}
                name={props.name}
                checked={props.checked}
                onChange={props.changeHandler}
            />
            <CustomCheckboxLabel id={props.id} text={props.label}/>
        </Fragment>
    );
}
