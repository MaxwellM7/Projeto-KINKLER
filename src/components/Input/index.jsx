import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[20px]",
};

const variants = {
    fill: {
        gray_200: "bg-gray-200 text-gray-900_05",
    },
};

const sizes = {
    xs: "h-[40px] px-4 text-[16px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "xs",
            color = "gray_200",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={`flex items-center justify-center cursor-text text-gray-900_05 text-[16px] border-gray-900_13 border-[0.5px] border-solid bg-gray-200 ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant].gray_200)} ${size && sizes[size]} ${className}`}
            >
                {label && <span className="mr-2">{label}</span>} {/* Adiciona um espaçamento entre o label e o input */}
                {prefix}
                <input 
                    ref={ref} 
                    type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    className="flex-grow border-none" // Estilo básico para o input
                    {...restProps} 
                />
                {suffix}
            </label>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["gray_200"]),
};

export { Input };
