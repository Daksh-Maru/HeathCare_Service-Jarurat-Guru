const express = require("express");
const Service = require("../models/Service");
const router = express.Router();

router.post("/api/services", async (req, res) => {
    console.log(req.body);
    const { name, description, price } = req.body;

    if (!name || !description || !price || price <= 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields and ensure price is a positive number",
        });
    }

    const service = new Service({ name, description, price });

    try {
        const savedService = await service.save();
        res.status(201).json({ success: true, data: savedService });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.get("/api/services", async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ success: true, data: services });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.put("/api/services/:id", async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            { name, description, price },
            { new: true, runValidators: true }
        );
        if (!updatedService) {
            return res.status(404).json({ message: "Service not found!" });
        }
        res.status(200).json({ success: true, data: updatedService });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete("/api/services/:id", async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);

        if (!deletedService) {
            return res.status(404).json({ message: "Service not found!" });
        }

        res.status(200).json({ success: true, data: deletedService });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
