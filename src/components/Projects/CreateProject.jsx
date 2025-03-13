import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addProject } from "../../service/ProjectService";


const CreateProject = () => {
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log({data});
    
    await addProject(data);
  };

  
  return(
  <Card className="m-4 p-6 ml-72">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">Create Project</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input className="mb-2" placeholder="Project Name" id="nameProjet" {...register("nameProjet")}/>
        <Input className="mb-2" placeholder="Location" id="location" {...register("location")}/>
        <Input className="mb-2" placeholder="Client" id="client" {...register("client")}/>
        <Input className="mb-2" placeholder="Leader Full Name" id="leaderFullName" {...register("leaderFullName")}/>
        <Input className="mb-4" placeholder="Leader Grade" id="leaderGrade" {...register("leaderGrade")}/>
        <Button type="submit">Add Project</Button>
      </form>
    </CardContent>
  </Card>
)};

export default CreateProject;