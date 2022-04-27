import { Router } from "express";

const router = Router();

router.get("/api/races", () => {
  console.log("getting list of objects at /api");
});

router.get("/api/races/:id", () => {
  console.log("getting single object /api with ID");
});

router.post("/api/races", () => {
  console.log("posting at /api");
});

router.delete("/api/races/:id", () => {
  console.log("deleting object / with ID");
});

router.put("/api/races/:id", () => {
  console.log("updating object at /api with ID");
});

export default router;
