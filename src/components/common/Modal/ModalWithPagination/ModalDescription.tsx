import React from "react";

export default function ModalDescription({
  description,
}: ModalDescriptionProps) {
  return <p className="px-4 text-base text-gray-600 text-left">{description}</p>;
}

interface ModalDescriptionProps {
  description: string;
}