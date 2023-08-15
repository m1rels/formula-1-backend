import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from "cors";
const app = express();
const port = 8081;

const prisma = new PrismaClient()

app.use(cors());

app.get('/seasons', async (req, res) => {
  const seasons = await prisma.seasons.findMany()
  res.json(seasons)
});

app.get('/seasons/:season/drivers', async (req, res) => {
  const { season } = req.params;
  const driverStandings = await prisma.driverStandings.findMany({
    where: { season }
  })
  res.json(driverStandings)
});

app.get('/seasons/:season/constructors', async (req, res) => {
  const { season } = req.params;
  const constructorStandings = await prisma.constructorStandings.findMany({
    where: { season }
  })
  res.json(constructorStandings)
});

app.get('/drivers/:driverId', async (req, res) => {
  const { driverId } = req.params;
  const drivers = await prisma.drivers.findMany({
    where: { driverId }
  })
  res.json(drivers)
});

app.get('/constructors/:constructorId', async (req, res) => {
  const { constructorId } = req.params;
  const constructors = await prisma.teams.findMany({
    where: { constructorId }
  })
  res.json(constructors)
});

app.get('/seasons/:season/races', async (req, res) => {
  const { season } = req.params;
  const races = await prisma.races.findMany({
    where: { season }
  })
  console.log('races', races)
  res.json(races)
});

app.get('/circuits/:circuitId', async (req, res) => {
  const { circuitId } = req.params;
  const circuits = await prisma.circuits.findMany({
    where: { circuitId }
  })
  res.json(circuits)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});