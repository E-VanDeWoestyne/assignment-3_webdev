import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, actors, releaseYear } = req.body;
    try {
      const updatedMovie = await prisma.movie.update({
        where: { id },
        data: { title, actors, releaseYear },
      });
      return res.status(200).json(updatedMovie);
    } catch (error) {
      return res.status(400).json({ message: "Movie not found" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.movie.delete({ where: { id } });
      return res.status(204).end();
    } catch (error) {
      return res.status(400).json({ message: "Movie not found" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
