import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini AI client gracefully
  const getAi = () => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return null;
    return new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      company: "Trimurti Enterprises",
      partnerBrand: "JSW Avante Smart Steel Doors & Windows",
      timestamp: new Date().toISOString(),
    });
  });

  // Contact Form Endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, subject, message } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }
    const referenceId = `TE-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    console.log(`[Contact Inquiry ${referenceId}] From ${name} <${email}>: ${subject}`);
    
    return res.json({
      success: true,
      referenceId,
      message: `Thank you ${name}! Your inquiry has been received by Trimurti Enterprises. Our JSW Avante door specialist will contact you within 24 hours.`,
      receivedAt: new Date().toISOString()
    });
  });

  // Quote Submit Endpoint
  app.post("/api/quote-submit", (req, res) => {
    const { customerName, email, phone, doorType, widthFt, heightFt, quantity, finishId } = req.body || {};
    if (!customerName || !email) {
      return res.status(400).json({ error: "Customer name and email are required" });
    }
    const quoteId = `TE-QT-${Math.floor(100000 + Math.random() * 900000)}`;
    console.log(`[Quote Request ${quoteId}] ${quantity || 1}x ${doorType} for ${customerName}`);

    return res.json({
      success: true,
      quoteId,
      message: "Your door & window quote request has been generated successfully.",
      estimatedTurnaround: "1 Business Day",
      salesAdvisorContact: "+91 98765 43210"
    });
  });

  // Gemini AI Door & Specification Assistant
  app.post("/api/quote-assistant", async (req, res) => {
    try {
      const { userQuery, projectType, requirementDetails } = req.body || {};
      const ai = getAi();
      
      if (!ai) {
        return res.json({
          recommendation: "Trimurti Enterprises offers a full range of JSW Avante doors including Plain Finish, 3D Embossed, Double Grill, Fire Rated, Glazed Doors, and Sliding Windows.",
          doorType: "JSW Avante Smart Steel Door",
          estimatedPriceRange: "₹380 - ₹680 / sq. ft.",
          keyFeatures: [
            "100% Galvanized Steel Skin",
            "High-Density Honeycomb Infill Core",
            "0% Termite Risk & 100% Weather Protection",
            "10-Year Manufacturer Warranty"
          ]
        });
      }

      const prompt = `You are a Senior Architectural Hardware & Steel Door Technical Expert for Trimurti Enterprises, the authorized channel partner for JSW Avante Smart Steel Doors & Windows (JSW Steel Coated Products Ltd).
      
User Project Info:
- Project Type: ${projectType || 'General Architectural Project'}
- Requirements: ${userQuery || requirementDetails || 'Looking for high quality, secure, fire-safe, and anti-termite door solutions'}

Please provide a highly professional, structured JSON recommendation including:
1. recommendedDoorType: Specific product from JSW Avante range (Plain Finish, Embossed Wood Grain, Double Door with Safety Grill, Fire Rated Door 60/120 min, Glazed Steel Door, or Sliding Windows)
2. rationale: Why this door fits their project requirements
3. keyTechnicalSpecs: List of 4 recommended specs (e.g. Sheet Gauge, Core Infill type, Lock type)
4. aestheticFinish: Recommended finish (e.g. Dark Walnut wood grain or RAL 8017 / RAL 7035)
5. priceEstimatePerSqFt: Estimated price range in Indian Rupees (INR ₹)
6. complianceAdvantage: Relevant certifications (CBRI Fire, NBC 2016, ISO 9001:2015)

Output format must be valid JSON only.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "{}";
      const parsed = JSON.parse(responseText);

      return res.json({
        success: true,
        data: parsed
      });
    } catch (err: any) {
      console.error("Error in quote-assistant endpoint:", err);
      return res.status(500).json({
        error: "Unable to process AI recommendation at this time.",
        fallback: "Please call Trimurti Enterprises at +91 98765 43210 for live assistance."
      });
    }
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Trimurti Enterprises server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
