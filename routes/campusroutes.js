const express = require('express');
const Campus = require('../models/Campus');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const campuses = await Campus.find();
      res.json(campuses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

  router.get('/:id', async (req, res) => {
    try {
      const campus = await Campus.findById(req.params.id);
      res.json(campus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

 
router.post('/', async (req, res) => {
    try {
      const newCampus = new Campus(req.body);
      await newCampus.save();
      res.json(newCampus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

 
router.put('/:id', async (req, res) => {
    try {
      const updatedCampus = await Campus.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedCampus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

  router.delete('/:id', async (req, res) => {
    try {
      await Campus.findByIdAndDelete(req.params.id);
      res.json({ message: 'Campus deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;

