'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating color palettes based on a primary color.
 *
 * @fileExport generateColorPalette - An async function to generate a color palette.
 * @fileExport GenerateColorPaletteInput - The input type for the generateColorPalette function.
 * @fileExport GenerateColorPaletteOutput - The output type for the generateColorPalette function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateColorPaletteInputSchema = z.object({
  primaryColor: z
    .string()
    .regex(/^#([0-9A-Fa-f]{3}){1,2}$/)
    .describe('The primary color in hex format (e.g., #7F00FF).'),
});
export type GenerateColorPaletteInput = z.infer<
  typeof GenerateColorPaletteInputSchema
>;

const GenerateColorPaletteOutputSchema = z.object({
  palette: z.array(
    z.string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/)
  ).describe('An array of suggested color palettes in hex format.'),
});
export type GenerateColorPaletteOutput = z.infer<
  typeof GenerateColorPaletteOutputSchema
>;

export async function generateColorPalette(
  input: GenerateColorPaletteInput
): Promise<GenerateColorPaletteOutput> {
  return generateColorPaletteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateColorPalettePrompt',
  input: {schema: GenerateColorPaletteInputSchema},
  output: {schema: GenerateColorPaletteOutputSchema},
  prompt: `You are a color palette expert. Given a primary color, suggest a color palette of 5 colors that complement the primary color. Return the colors in hex format.

Primary color: {{{primaryColor}}}

Output:`,
});

const generateColorPaletteFlow = ai.defineFlow(
  {
    name: 'generateColorPaletteFlow',
    inputSchema: GenerateColorPaletteInputSchema,
    outputSchema: GenerateColorPaletteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
