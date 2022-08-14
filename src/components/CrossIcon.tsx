import React from "react";

export const CrossIcon = ({ onClose }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={onClose}
    width="40"
    height="40"
    style={{ float: "right", cursor: onClose && "pointer" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

interface Props {
  onClose?: () => void;
}
