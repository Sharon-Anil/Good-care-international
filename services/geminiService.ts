import { GoogleGenAI, Type, Schema } from "@google/genai";
import { TripPlanResult } from "../types";

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Remove header from base64 string if present (e.g., "data:image/jpeg;base64,")
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: 'image/jpeg', // Assuming jpeg for simplicity, ideally detect from file
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Gemini 2.5 Flash Image returns an image in the candidates
    // We need to parse the response to find image data
    if (response.candidates && response.candidates.length > 0) {
       const parts = response.candidates[0].content.parts;
       for (const part of parts) {
         if (part.inlineData && part.inlineData.data) {
            return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
         }
       }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    throw error;
  }
};

export const generateTripItinerary = async (
  destination: string, 
  days: string, 
  budget: string, 
  travelers: string, 
  interests: string
): Promise<TripPlanResult | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Create a detailed ${days}-day travel itinerary for a trip to ${destination} for ${travelers} people. 
    The budget is ${budget}. Their interests include: ${interests}.
    
    Provide:
    1. A catchy title for the trip.
    2. An estimated total cost range (in USD).
    3. 3 recommended hotels with brief descriptions.
    4. A day-by-day itinerary. For each day, provide a theme and a list of morning, afternoon, and evening activities with specific times.
    `;

    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        tripTitle: { type: Type.STRING, description: "A catchy title for the trip" },
        estimatedCost: { type: Type.STRING, description: "Estimated total cost range" },
        hotels: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING },
            }
          }
        },
        dailyItinerary: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.INTEGER },
              theme: { type: Type.STRING, description: "The main theme or area focus for the day" },
              activities: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    time: { type: Type.STRING, description: "Time of day e.g., 9:00 AM or Morning" },
                    activity: { type: Type.STRING, description: "Description of the activity" }
                  }
                }
              }
            }
          }
        }
      },
      required: ["tripTitle", "estimatedCost", "hotels", "dailyItinerary"]
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as TripPlanResult;
    }

    return null;

  } catch (error) {
    console.error("Error generating trip plan:", error);
    return null;
  }
};
