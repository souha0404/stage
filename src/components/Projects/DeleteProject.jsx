import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const DeleteProject = () => (
  <Card className="m-4 p-6 ml-72">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">Delete Project</h2>
      <Input className="mb-2" placeholder="Search by Project Name" />
      <Button className="bg-red-500 text-white">Delete</Button>
    </CardContent>
  </Card>
);

export default DeleteProject;