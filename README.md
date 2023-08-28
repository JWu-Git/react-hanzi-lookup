# Your React + Typescript Component Library

This is a boilerplate for creating a React + Typescript component library for upload to NPM, with Rollup configurations set.

**Getting Started**

To begin using this component library, follow these steps:

1\. **Fork the Repository**: Start by forking this repository to your own GitHub account.

2\. **Clone the Repository**: Clone the forked repository to your local machine using the following command:

```

git clone [your repository]

```

3\. **Update Package.json**: Open the cloned repository on your machine, head to the `package.json` file and change the `"name"`, `"version"`, and `"description"` to your desired values.

4\. **Install Dependencies**: Navigate to the cloned repository's folder and install the required dependencies:

```

cd [your cloned repository]

npm install

```

5\. **Component Structure**: Your components should be placed in the `src/components` folder. Export each component from its respective file (it will be easier if you stick with named exports).

6\. **Leave src/globals.d.ts unchanged**

7\. **Export Components**: In the `src/index.ts` file, export each component again. Again, I highly suggest you do named exports to prevent multiple default exports. Refer to the existing `src/index.ts` file for guidance.

8\. **Build the dist folder**: Run this command to compile your /dist folder

```

npm run build-lib

```

9\. **Login to NPM via terminal if you are not logged in**

```

npm login

```

10\. **Publish to NPM**: Publish to NPM

```

npm publish

```

**Contributing**

Contributions are welcome! If you'd like to contribute to the project, feel free to fork the repository and submit a pull request.

**License**

This project is licensed under the MIT License.

**Keywords**

- React

- Typescript

- Component

- Library

- Rollup

- Boilerplate
