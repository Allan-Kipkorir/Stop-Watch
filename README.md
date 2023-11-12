
# React Stopwatch App

This project demonstrates building a simple stopwatch application in React using useRef hook. 

## Features

- Displays a stopwatch that can be started and stopped
- Implements start/stop functionality using refs 
- Allows time to be tracked in seconds
- Uses React state and effects hooks

## Usage

The app has two buttons:

**Start** - Starts the stopwatch timer

**Stop** - Stops the stopwatch timer

Time elapsed increments by seconds.

## Implementation

This project follows the React official docs guide for building a stopwatch with useRef:

- Keeps track of time elapsed in a ref 
- Uses the useEffect hook to increment the time ref each second
- Buttons call start and stop methods that control the timer based on status

## Running Locally

The project uses Create React App. To run locally:

1. Clone the repository
2. Run `npm install` 
3. Run `npm start`
4. Access the running app at http://localhost:3000

This demonstrates a simple usage of React refs for basic state management.
