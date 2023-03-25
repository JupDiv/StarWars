# Star Wars Characters App

A React Native app that displays information about Star Wars characters using the [Star Wars API (SWAPI)](https://swapi.dev/).

## Features

- Fetch and display a list of Star Wars characters
- View details about each character, including their home planet and species
- Add and remove characters to/from your favorites list
- View favorite characters count by gender
- Reset favorite characters list

## Installation

Clone this repository and navigate to the project folder:

```sh
git clone https://github.com/JupDiv/StarWars.git
cd StarWars
```

Install dependencies:

```sh
npm install
```

## Running the App

To run the app on Android:

```sh
npm run android
```

To run the app on iOS:

```
npm run ios
```

NOTE: You need to have the necessary Android and/or iOS development environment set up on your machine.

## Project Structure

The app is organized into the following main folders:

- `src`: Contains all the source code, including components, hooks, and Redux slices
  - `components`: Contains all React Native components used in the app, organized by feature
  - `redux`: Contains Redux store configuration and slices
  - `utils`: Contains utility functions for fetching data from the API
  - `styles`: Contains common styles for app
  - `entites`: Contains types for Typescript
- `assets`: Contains images and other static assets used in the app

## Technologies Used

- React Native
- Redux Toolkit
- styled-components
- Star Wars API (SWAPI)

Author: Hlib Laskin aka JupDiv
