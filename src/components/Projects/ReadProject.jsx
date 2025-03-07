import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ReadProject = () => (
  <Card className="m-4 p-6 ml-72">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">Read Project</h2>
      <Input className="mb-2" placeholder="Search by Project Name" />
      <Button>Search</Button>
    </CardContent>
  </Card>
);

export default ReadProject;