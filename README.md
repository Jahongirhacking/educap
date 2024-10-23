# Educup Tournament

Welcome to the Educup Tournament web application. This project is built with Next.js and includes various modern development practices and folder structures to ensure scalability and maintainability.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Folder Details](#folder-details)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```bash
educup/
├── app/
│ └── _components/
│   ├── Carousel/
│   ├── Footer/
│   ├── Gallery/
│   ├── Goals/
│   ├── Hero/
│   ├── Navbar/
│   ├── Organizers/
│   ├── PrizeFund/
│   ├── Select/
│   ├── Statistics/
│   └── Winners/
├── assets/
│ ├── fonts/
│ ├── icons/
│ ├── images/
│ └── logos/
├── lib/
│ └── store/
│ └── features/
├── locales/
├── public/
├── styles/
├── types/
├── utils/
└── README.md
```

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jahongirhacking/educup-tournament.git
   cd educup-tournament
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the running application.

## Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint on the project files.

## Dependencies

- `next`: The React framework for production.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Serves as the entry point to the DOM and server renderers for React.
- Additional dependencies can be found in `package.json`.

## Folder Details

- **app/**: The main folder of the application, containing all components in its child `_components` folder.
- **assets/**: Contains source files for images and fonts.
- **lib/**: Contains the Redux Toolkit store and slices.
- **locales/**: Contains language translations of the static website content.
- **public/**: Contains public resources.
- **styles/**: Contains SCSS style files, including `normalize.scss` and `globals.scss`.
- **types/**: Contains TypeScript types and interfaces.
- **utils/**: Contains utility variables and resources.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
