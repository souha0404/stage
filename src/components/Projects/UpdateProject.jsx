import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UpdateProject = () => (
  <Card className="m-4 p-6 ml-72">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">Update Project</h2>
      <Input className="mb-2" placeholder="Search by Project Name" />
      <Button className="mb-4">Search</Button>
      <form>
        <Input className="mb-2" placeholder="Update Project Name" />
        <Input className="mb-2" placeholder="Update Location" />
        <Input className="mb-2" placeholder="Update Client" />
        <Input className="mb-2" placeholder="Update Leader Full Name" />
        <Input className="mb-2" placeholder="Update Leader Grade" />
        <Button type="submit">Update Project</Button>
      </form>
    </CardContent>
  </Card>
);

export default UpdateProject;