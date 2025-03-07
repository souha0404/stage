import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreateProject = () => (
  <Card className="m-4 p-6 ml-72">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">Create Project</h2>
      <form>
        <Input className="mb-2" placeholder="Project Name" />
        <Input className="mb-2" placeholder="Location" />
        <Input className="mb-2" placeholder="Client" />
        <Input className="mb-2" placeholder="Leader Full Name" />
        <Input className="mb-4" placeholder="Leader Grade" />
        <Button type="submit">Add Project</Button>
      </form>
    </CardContent>
  </Card>
);

export default CreateProject;