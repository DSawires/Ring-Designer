import { GoogleGenAI } from "@google/genai";
import { RingConfig } from "../types";

// We need to declare the window interface for the AI Studio specific methods
declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export async function generateRingImage(config: RingConfig): Promise<string> {
  // Check for API key selection first
  if (window.aistudio) {
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await window.aistudio.openSelectKey();
      // We assume success after the dialog closes, or at least try.
      // In a real app we might want to check again, but for now we proceed.
    }
  }

  // Initialize the client with the selected key (injected via process.env.API_KEY after selection)
  // Note: The documentation says to create a new instance right before making the call
  // to ensure it uses the most up-to-date key.
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found. Please select a key.");
  }
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `A photorealistic, high-jewelry product shot of a ring.
  Metal: ${config.metal}.
  Center Stone: ${config.gemstone}, Cut: ${config.cut}.
  Setting Style: ${config.setting}.
  Band Style: ${config.bandStyle}.
  
  The image should be a professional studio macro shot with soft lighting, sharp focus on the gemstone, and elegant reflections. White background. High resolution, 8k quality.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: config.imageSize,
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }

    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Error generating ring image:", error);
    throw error;
  }
}
