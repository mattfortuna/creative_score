# Dynamic Creative Scoring System

This Node.js application dynamically scores ad creatives based on clicks, engagements, and time of day, selecting the best-performing creative for a specified audience segment. It is modular, separating rules/weight calculations into their own folder and dynamically importing them.

A future design can be deciding on a naming scheme for the creative properties that allows for a fully programmatic import and execution of logic from the rules folder.

## Features

- Modular design with separate files for each weight calculation.
- Support for dynamic audience segments.
- Extensible structure for adding more weight calculations or allowing for dynamic feedback.

### File Structure

Project Organization:

- `/rules` - Contains separate modules for each weight calculation (`calculateClickWeight.js`, `calculateEngagementWeight.js`, `calculateTimeWeight.js`).
- `creatives.js` - Module exporting the array of creative objects.
- `index.js` - The main entry point for the application which uses the modular weight calculations.

## Testing / Running the code

Clone github repo. Install node. Run the following commands:

npm install

npm run creative

If there are any issues you can test on this online setup I have. It is written as frontend js, but works the same.

[Testing](https://playcode.io/1826494)
