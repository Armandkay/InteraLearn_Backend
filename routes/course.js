const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/courses', async (req, res) => {
  const courses = await Course.find().populate('instructor', 'username');
  res.json(courses);
});

router.get('/courses/:id', async (req, res) => {
  const course = await Course.findById(req.params.id).populate('instructor', 'username');
  res.json(course);
});

router.put('/courses/:id', async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
});

router.delete('/courses/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;

