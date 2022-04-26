import {Fragment} from "react";
import {checkValidString} from "../../services/UtilsHelper";

type CustomLabelsProps = {
    id: string,
    text?: string,
    className?: string
}

export const CustomDefaultLabel = (props: CustomLabelsProps) => {
    const className = (checkValidString(props.className)) ? props.className : "form-label";
    return (
        <Fragment>
            {checkValidString(props.text) &&
                <label htmlFor={props.id} className={className}>
                    {props.text}
                </label>
            }
        </Fragment>
    );
}

export const CustomHelpText = (props: CustomLabelsProps) => {
    const className = (checkValidString(props.className)) ? props.className : "form-text";
    return (
        <Fragment>
            {checkValidString(props.text) &&
                <div id={`${props.id}Help`} className={className}>{props.text}</div>
            }
        </Fragment>
    )
}

/****************************************
 ********* Formatos particulares ********
 ****************************************/

export const CustomCheckboxLabel = (props: CustomLabelsProps) => {
    return (
        <CustomDefaultLabel id={props.id} text={props.text} className={"form-check-label"}/>
    );
}
