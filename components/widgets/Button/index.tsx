"use client";

import cn from "classnames";
import React, { forwardRef, useRef, ButtonHTMLAttributes } from "react";
import { mergeRefs } from "react-merge-refs";
import Loader from "@/components/widgets/Loader";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  loading?: boolean;
  width?: number | string;
  shape?: "surface" | "outline" | "filled";
  size?: "small" | "default";
  Component?: React.ComponentType;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, buttonRef) => {
  const {
    className,
    children,
    active,
    loading = false,
    disabled = false,
    width,
    shape,
    size,
    style = {},
    Component = "button",
    ...rest
  } = props;

  const ref = useRef(null);

  const rootClassName = cn(
    styles.root,
    shape && styles[shape],
    size && styles[size],
    {
      [styles.loading]: loading,
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <Component
      aria-pressed={active}
      data-shape={shape}
      data-size={size}
      ref={mergeRefs([ref, buttonRef])}
      className={`${rootClassName}`}
      disabled={disabled}
      style={{
        width: width ? width : "auto",
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="m-0 flex pl-2 ">
          <Loader />
        </i>
      )}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;
