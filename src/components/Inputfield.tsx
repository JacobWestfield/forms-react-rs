import React from "react";

interface InputfieldProps {
  value: string;
  name: string;
  type: string;
  variant: string;
  size: string;
  radius: string;
  label: string;
  withAsterisk: boolean;
  description: string;
  error: string;
}

const Inputfield = (props: InputfieldProps) => {
  const classNames = Object.values(props).join(" ");

  if (props.type === "radio") {
    return (
      <>
        <div>
          <label for={props.name}>Муж.</label>
          <input
            type={props.type}
            name={props.name}
            value="men"
            className={`${classNames}`}
          />
          <label for={props.name}>Жен.</label>
          <>
            <input
              type={props.type}
              name={props.name}
              value="woman"
              className={`${classNames}`}
            />
          </>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <label for={props.name}>
          {props.label} {props.withAsterisk && <span>*</span>}
        </label>
        <label className="description" for={props.name}>
          {props.description}
        </label>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className={`${classNames}`}
        />
      </div>
    </>
  );
};

export default Inputfield;
