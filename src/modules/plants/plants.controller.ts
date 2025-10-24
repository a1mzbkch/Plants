import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getPlants = async (req: Request, res: Response) => {
  try {
    const plants = await prisma.plant.findMany();
    res.status(200).json({
      success: true,
      data: plants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при получении растений",
      error: `${error}`,
    });
  }
};

const getPlantsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plant = await prisma.plant.findUnique({
      where: { id: Number(id) },
    });

    if (!plant) {
      return res.status(404).json({
        success: false,
        message: "Растение не найдено",
      });
    }

    res.status(200).json({
      success: true,
      data: plant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при получении растения",
      error: `${error}`,
    });
  }
};

const postPlants = async (req: Request, res: Response) => {
  try {
    const { name, imageUrl, price, category } = req.body;
    const newPlant = await prisma.plant.create({
      data: { name, imageUrl, price, category },
    });
    res.status(201).json({
      success: true,
      data: newPlant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при создании растения",
      error: `${error}`,
    });
  }
};

const deletePlants = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedPlant = await prisma.plant.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({
      success: true,
      data: deletedPlant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при удалении растения",
      error: `${error}`,
    });
  }
};

const putPlants = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, imageUrl, price, category } = req.body;
    const putedPlant = await prisma.plant.update({
      where: { id: Number(id) },
      data: { name, imageUrl, price, category },
    });
    res.status(200).json({
      success: true,
      data: putedPlant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при обновлении растения",
      error: `${error}`,
    });
  }
};

const patchPlants = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const patchedPlant = await prisma.plant.update({
      where: { id: Number(id) },
      data: updateData,
    });
    res.status(200).json({
      success: true,
      data: patchedPlant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при частичном обновлении растения",
      error: `${error}`,
    });
  }
};

export default {
  getPlants,
  postPlants,
  deletePlants,
  putPlants,
  patchPlants,
  getPlantsById,
};
