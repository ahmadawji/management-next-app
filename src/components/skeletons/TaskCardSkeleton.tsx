import React from "react";
import { Card } from "../Card";

export const TaskCardSkeleton = () => {
  return (
    <Card className="w-full py-14">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 bg-gray-300 rounded w-2/6"></div>
          <div className="space-y-3">
            <div className="h-2 bg-gray-300 rounded w-4/6"></div>
            <div className="h-2 bg-gray-300 rounded w-4/6"></div>
            <div className="h-2 bg-gray-300 rounded w-4/6"></div>
            <div className="h-2 bg-gray-300 rounded w-4/6"></div>
            <div className="h-2 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};
