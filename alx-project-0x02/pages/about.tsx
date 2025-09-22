import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div className="p-8 flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">About Page</h1>
      <div className="flex space-x-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default About;
