import { PrismaClient, Task } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;
export const createTask = async (req:Request,res:Response) => {
    try {
        const {title,description,}:Task= req.body;
        const task = await prisma.task.create({
            data:{
                title,
                description
            }
        })
         res.status(201).json({
            message:"Task created Successfully",
            data:task
        });
        return
    } catch (error) {
       
         res.status(500).json(`Something went Wrong`);
         return
        
    }
}
export const getAllTasks = async (_req:Request,res:Response) => {
    try {
        const tasks = await prisma.task.findMany({
            where:{isDeleted:false}
        })
        if(tasks.length<0){
            res.status(404).json("No tasks found")
        }
    res.status(200).json(
        tasks
    ) ;
    return       
    } catch (error) {
        res.status(500).json("something Went wrong");
        return
    }
    
}
export const getTask = async (req:Request,res:Response) => {
    try {
        const {id}= req.params;
        const task = await prisma.task.findFirst({
            where:{id,isDeleted:false}
        })
        if(!task){
            res.status(404).json("Task not found");
            return
        }
        res.status(200).json(
            task
        )
    } catch (error) {
        res.status(500).json("Something Went wrong");
        return
        
    }
    
}

export const editTask = async (req:Request,res:Response) => {
    try {
        const {id} = req.params;
        const {title,description,isDeleted,isCompleted}:Task= req.body;
        const updatedTask = await prisma.task.update({
            where:{id},
            data:{
                ...(title &&{title}),
                ...(description &&{description}),
                ...(isDeleted &&{isDeleted}),
                ...(isCompleted&&{isCompleted})
            }
        })
        res.status(200).json(updatedTask)
    } catch (_error) {
        res.status(500).json('Something Went Wrong');
        return
        
    }
    
}

export const deleteTask = async (req:Request,res:Response) => {
    try {
        const{id}=req.params;
        await prisma.task.update({where:{id},
            data:{
                isDeleted:true
            }
        })
        res.status(200).json('Task has been deleted');
        return
    } catch (error) {
        res.status(500).json("Something went wrong");
        return
        
    }
    
}