# Dynamic Creative Scoring System

This Node.js application dynamically scores ad creatives based on clicks, engagements, and time of day, selecting the best-performing creative for a specified audience segment. It is modular, separating rules/weight calculations into their own folder and dynamically importing them.

A future design can be deciding on a naming scheme for the creative properties that allows for a fully programmatic import and execution of logic from the rules folder.

## Features

- Modular design with separate files for each weight calculation.
- Support for dynamic audience segments.
- Extensible structure for adding more weight calculations or allowing for dynamic feedback.

### File Structure

The project is organized as follows:

- `/rules` - Contains separate modules for each weight calculation (`clickWeight.js`, `engagementWeight.js`, `timeWeight.js`).
- `creatives.js` - Module exporting the array of creative objects.
- `index.js` - The main entry point for the application which uses the modular weight calculations.
