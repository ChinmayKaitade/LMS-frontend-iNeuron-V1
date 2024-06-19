# LMS Frontend Project

### Setup Instructions

1. Clone the project

```
    git clone https://github.com/ChinmayKaitade/LMS-frontend-iNeuron.git
```

2. Move into the directory

```
    cd LMS-frontend-project
```

3. Install dependencies

```
    npm i
```

4. Run the server

```
    npm run dev
```

### Setup Instructions for tailwind

[Tailwind official instruction docs](https://tailwindcss.com/docs/installation)

1. Install Tailwind CSS

```
    npm install -D tailwindcss
```

2. Create tailwind config file

```
    npx tailwindcss init
```

3. Add file extension to config to tailwind config file in the contents property

```
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Add the following details in the plugin property of tailwind config

```
    [require("daisyui"), require("@tailwindcss/line-clamp")];
```

### Adding plugins and dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sort

```
    npm i -D eslint-plugin-simple-import-sort
```

plugin installed for Easy auto-fixable import sorting

2. Add rule in `eslint.cjs`

```
    "simple-import-sort/imports": "error"
```

3. Add simple-import-sort plugin in `eslint.cjs`

```
   plugins: [..., "simple-import-sort"]
```

4. To Enable auto import sort on file save in vscode

   - open `settings.json`
   - Add the following config

```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```

