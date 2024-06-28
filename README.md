# @akifzdemir/react-multi-select

A customizable multi-select component for React applications, designed with Tailwind CSS for styling.

![Screenshot](/img/image.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm or yarn:

```bash
npm install @akifzdemir/react-multi-select
```

or

```bash
yarn add @akifzdemir/react-multi-select
```

## Usage

Import the `MultiSelect` component and use it in your React application:

```jsx
import React from "react";
import { MultiSelect, OptionType } from "@akifzdemir/react-multi-select";
import "@akifzdemir/react-multi-select/dist/style.css";

const options: OptionType[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  // Add more options here
];

const App = () => {
  const handleChange = (selected: OptionType[]) => {
    console.log("Selected options:", selected);
  };

  return (
    <div>
      <MultiSelect options={options} onChange={handleChange} />
    </div>
  );
};

export default App;
```

## Screen Shout

## Props

The `MultiSelect` component accepts the following props:

| Prop              | Type                               | Default     | Description                                       |
| ----------------- | ---------------------------------- | ----------- | ------------------------------------------------- |
| `options`         | `OptionType[]`                     | `[]`        | Array of options to select from.                  |
| `onChange`        | `(selected: OptionType[]) => void` | `undefined` | Callback function called when selection changes.  |
| `isDark`          | `boolean`                          | `false`     | Determines if the component should use dark mode. |
| `selectClassName` | `string`                           | `''`        | Additional classes for the select button.         |
| `optionClassName` | `string`                           | `''`        | Additional classes for the options.               |

### `OptionType`

The `OptionType` interface defines the shape of each option object:

```ts
export interface OptionType {
  label: string;
  value: string;
}
```

## Development

To contribute to this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/username/react-multi-select.git
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Run the development server:

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
