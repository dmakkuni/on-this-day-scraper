# On This Day Scraper

A lightweight script that queries a public historical events API to pull milestones and data for the current calendar date.

## Installation

### Requirements

- Node.js 18 or later
- An internet connection

Install the dependencies and build the scraper:

```sh
npm install
npm run build
```

## Usage

Run the scraper for the current date:

```sh
npm start
```

The script fetches historical events for your computer's current date and prints a random selection of up to five. It does not take command-line arguments.

After building, you can also run the compiled script directly:

```sh
node dist/index.js
```
