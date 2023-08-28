# react-hanzi-lookup

React functional component for Chinese handwriting recognition. Easy set-up.
Let your users write on a canvas for real-time prediciton of Chinese character.

**Getting Started**

To begin using this component, follow these steps:

1\. **Install the library**:

```

npm i react-hanzi-lookup

```

2\. **Import Hanzi in the React component and render**:

```

import {Hanzi} from 'react-hanzi-lookup'


```

3\. **Instantiate a Hanzi component**:

```

<Hanzi handleChange={(predictedCharacters: string[]) => {
    // Handle predictedCharacters array here
}} />

```

**Contributing**

Contributions are welcome! If you'd like to contribute to the project, feel free to fork the repository and submit a pull request.

**License**

This project is licensed under the MIT License.
