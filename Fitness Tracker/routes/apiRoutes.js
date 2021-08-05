const express = require('express');
const router = express.Router()
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration',
            },
          },
        },
      ])
        .then((dbWorkouts) => {
          res.json(dbWorkouts);
        })
        .catch((err) => {
          res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((fitness)=> {
        res.json(fitness);
    })
    .catch((err) => {
        res.json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({id:req.params.id}, 
        {$push:{exercises:req.body}})
        .then((fitness)=> {
            res.json(fitness);
        })
        .catch((err) => {
            res.json(err);
          });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration',
            },
          },
        },
      ])
        .then((dbWorkouts) => {
          res.json(dbWorkouts);
        })
        .catch((err) => {
          res.json(err);
        });
});

module.exports = router;