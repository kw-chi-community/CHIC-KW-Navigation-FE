import React from "react";

export default function ModalDescription({
  description,
}: ModalDescriptionProps) {
  return (
    <div className="px-4">
      <p className="text-base text-gray-600 text-left">{description}</p>
    </div>
  );
}

interface ModalDescriptionProps {
  description: string;
}