# E-charts Demo

A comprehensive demonstration of Apache ECharts capabilities with TypeScript implementation. This project showcases various chart types and visualizations using ECharts.

## Features

### Line Charts
- Basic Line Charts (Simple, Smooth, Area)
- Multi-Axis Charts (Multiple Y-axes, Polar coordinates)
- Special Line Types (Step Line, Bump Chart, Function Plot)
- Area Charts (Stacked, Pieces, Large Scale)
- Data Visualization (Temperature, Electricity, AQI)
- Interactive Features (Dynamic, Zoom, Confidence Band)

### Bar Charts
- Basic Bar Charts
- Stacked Bar Charts
- Bar Race Animation
- Waterfall Charts
- Background Bars
- Negative Value Bars

### Pie Charts
- Basic Pie Charts
- Doughnut Charts
- Rose Charts
- Nested Pies

### Advanced Visualizations
- Scatter Charts
- Treemap
- Sunburst Charts
- Sankey Diagrams
- 3D Charts (Globe, Surface)
- Geographic Maps

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-charts.git
cd e-charts
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Build the project:
```bash
npm run build
# or
yarn build
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
e-charts/
├── src/
│   ├── charts.ts         # Main chart manager
│   ├── lineCharts.ts     # Line chart implementations
│   └── advancedCharts.ts # Advanced chart implementations
├── dist/                 # Compiled JavaScript files
├── index.html           # Main HTML file
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Usage

1. Open `index.html` in your browser
2. Use the dropdown menu to select different chart types
3. Charts will automatically resize with window size
4. Interactive features available on most charts:
   - Zoom
   - Tooltips
   - Legend toggling
   - Data filtering

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Dependencies

- [Apache ECharts](https://echarts.apache.org/) - A powerful charting library
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Bootstrap](https://getbootstrap.com/) - For responsive UI components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Apache ECharts team for the amazing charting library
- Contributors to the project
- Bootstrap team for the UI framework
