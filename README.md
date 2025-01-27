# Pagination Utils
A lightweight and flexible utility library to simplify pagination logic in JavaScript and Node.js applications. This package helps generate dynamic pagination structures, including ellipsis ("...") for large page ranges, making it perfect for building user-friendly pagination components.

# Installation
Install the package using npm:
    npm install pagination-utils

# Features
* Dynamically generates a list of pages based on the current page and total pages.
* Supports ellipsis ("...") for compact pagination in large datasets.
* Handles edge cases like small page ranges or pages near the start or end.
* Easily integrates into React, Angular, Vue, or any plain JavaScript or Node.js application.
* Lightweight and highly customizable.


# Usage
Import the Function
You can import the getPages function in your project:

For CommonJS:
const { getPages } = require('pagination-utils');

For ES Modules:
import { getPages } from 'pagination-utils';


# Function Signature

* getPages(currentPage: number, totalPages: number): Array<Page>
### Parameters:
* currentPage (number): The current page number (1-based index).
* totalPages (number): The total number of pages.
* Returns:

### An array of page objects with the following structure:

* {
  number: number,  // The page number or position
  text: string,    // The display text (e.g., "1", "...", "10")
  active: boolean  // Indicates if this page is the current page
}

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Support
If you encounter any issues or have questions, feel free to open an issue in the GitHub repository or contact me directly.

Happy coding! 😊