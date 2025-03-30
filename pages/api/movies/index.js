import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const movies = await prisma.movie.findMany();
    return res.status(200).json(movies);
  }
  
  if (req.method === "POST") {
    const { title, actors, releaseYear } = req.body;
    const newMovie = await prisma.movie.create({
      data: { title, actors, releaseYear },
    });
    return res.status(201).json(newMovie);
  }
  
  res.status(405).json({ message: "Method Not Allowed" });
}