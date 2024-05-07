# Password Generator in React

This project is a simple yet effective Password Generator built with React and styled with Tailwind CSS. It allows users to generate random passwords based on selected criteria including numbers and special characters.

## Features

- Generate random passwords with selectable length and character types.
- Copy generated password to clipboard with one click.
- Responsive design implemented with Tailwind CSS.

## Installation

To run this project, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
   ```
   cd password-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm start
   ```

## React Hooks Used

### `useState`

`useState` is a Hook that lets you add React state to function components. In this project, it is used to manage the state of the password length, inclusion of numbers, inclusion of special characters, and the generated password itself.

- **Example Usage:**
  ```javascript
  const [password, setPassword] = useState("initialPassword");
  ```

### `useEffect`

`useEffect` lets you perform side effects in function components. It is used in this project to generate a new password whenever the user changes the password length or toggles the inclusion of numbers and special characters.

- **Example Usage:**
  ```javascript
  useEffect(() => {
    passwordGenerator();
  }, [length, allowNum, allowChar]);
  ```

### `useCallback`

`useCallback` returns a memoized callback function. This hook is used to ensure that the password generation function and the clipboard copy function do not get recreated unless certain dependencies change. This prevents unnecessary re-renders and interactions.

- **Example Usage:**
  ```javascript
  const passwordGenerator = useCallback(() => {
    // Function body
  }, [length, allowNum, allowChar]);

  const copyPasswordToClipboard = useCallback(() => {
    // Function body
  }, [password]);
  ```

### `useRef`

`useRef` returns a mutable ref object whose `.current` property is initialized with the passed argument (`initialValue`). The ref object provided by this hook is used in this project to reference the DOM node of the password text input so it can be easily accessed to implement the copy-to-clipboard functionality.

- **Example Usage:**
  ```javascript
  const passwordRef = useRef(null);
  ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature suggestions.

---
