import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card2";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";

const Resources = () => {
  const [elementType, setElementType] = useState("normal");
  const [resources, setResources] = useState([{ name: "", quantity: "" }]);

  const handleAddResource = () => {
    setResources([...resources, { name: "", quantity: "" }]);
  };

  const handleResourceChange = (index, field, value) => {
    const updatedResources = [...resources];
    updatedResources[index][field] = value;
    setResources(updatedResources);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>WBS Element Form</CardTitle>
          <CardDescription>Fill in the details for the selected WBS element.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center">
            <div>
              <label htmlFor="elementTitle" className="block text-sm font-medium">
                Element Title
              </label>
              <Input id="elementTitle" placeholder="Enter element title" className="mx-auto" />
            </div>

            <div>
              <label htmlFor="elementType" className="block text-sm font-medium">
                Element Type
              </label>
              <Select onValueChange={setElementType} className="mx-auto">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="workPackage">Work Package</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {elementType === "workPackage" && (
                <>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium">
                      Description
                    </label>
                    <Textarea id="description" placeholder="Enter work package description" className="mx-auto" />
                  </div>

                  <div>
                    <label htmlFor="ppDay" className="block text-sm font-medium">
                      PP Day
                    </label>
                    <Input id="ppDay" type="number" placeholder="Enter PP day value" className="mx-auto" />
                  </div>

                  <div>
                    <label htmlFor="taskBefore" className="block text-sm font-medium">
                      Task Before
                    </label>
                    <Input id="taskBefore" placeholder="Enter preceding task" className="mx-auto" />
                  </div>

                  <div>
                    <label htmlFor="taskAfter" className="block text-sm font-medium">
                      Task After
                    </label>
                    <Input id="taskAfter" placeholder="Enter succeeding task" className="mx-auto" />
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium">
                      Duration
                    </label>
                    <Input id="duration" type="number" placeholder="Enter duration in days" className="mx-auto" />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium">Resources</label>
                {resources.map((resource, index) => (
                  <div key={index} className="flex justify-center space-x-2">
                    <Input
                      placeholder="Resource name"
                      value={resource.name}
                      onChange={(e) => handleResourceChange(index, "name", e.target.value)}
                      className="w-1/2"
                    />
                    <Input
                      type="number"
                      placeholder="Quantity"
                      value={resource.quantity}
                      onChange={(e) => handleResourceChange(index, "quantity", e.target.value)}
                      className="w-1/4"
                    />
                  </div>
                ))}
                <Button type="button" onClick={handleAddResource} className="mt-2">
                  Add Resource
                </Button>
              </div>
            </div>

            <Button className="w-full mt-4">Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resources;