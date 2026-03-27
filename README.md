English | [Español](README.es.md)

# ReactiveFormsApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

This is a **learning and practice project** built with Angular to explore and understand how **reactive forms** work.
The application demonstrates different types of form controls such as **text and number inputs, switches, radio buttons, and select inputs populated with data from the REST Countries API**, including dynamic data rendering and form state management.
The goal of this project is to practice Angular concepts such as:

- Building and managing reactive forms
- Handling form validation and user input states
- Creating dynamic and reusable form components
- Consuming external APIs and integrating data into form controls
- Managing reactive data flows using RxJS
- Working with strongly typed data in Angular applications

## Tech Stack

- Angular 21
- TypeScript
- Bootstrap 5.3

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Antonio-Borrero/Angular-reactive-forms-app.git
   ```

2. Enter the project folder:
   ```bash
   cd Angular-reactive-forms-app
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Development Server:
   ```bash
   ng serve
   ```

5. Open in browser:
   - Go to `http://localhost:4200/`.
   - The app will automatically reload when any file is modified

## Features

- Multiple reactive form examples with different input types
- Basic inputs (text, number, etc.)
- Advanced controls (switches, radio buttons, checkboxes)
- Dynamic rendering of user input in real time
- Form validation and state handling
- Select inputs populated with data from an external API
- Reactive data handling using RxJS

## Learning 

- How reactive forms work in Angular
- Creating and managing form controls and form groups
- Handling form validation and input states
- Working with different types of form inputs
- Managing dynamic data within forms
- Integrating external data into form controls (API consumption)
- Using RxJS to handle reactive data flows

## Project Structure

```bash
- src/
 └───app
    ├───auth
    │   └───pages
    │       └───register-page       # Page with a reactive form for user registration (validation, inputs, form handling)
    │
    ├───country
    │   ├───interfaces              # TypeScript interfaces for country data (API responses typing)
    │   ├───pages
    │   │   └───country-page        # Page demonstrating select inputs populated from an external API
    │   └───services                # Services to fetch country data from API
    │
    ├───reactive
    │   └───pages
    │       ├───basic-page          # Basic reactive form examples (text, number inputs, validations)
    │       ├───dynamic-page        # Dynamic forms with add/remove fields (CRUD-like behavior)
    │       └───switches-page       # Advanced controls (switches, checkboxes, radio buttons)
    │
    ├───shared
    │   └───components
    │       └───side-menu           # Reusable navigation component for the app
    │
    └───utils                       # Helper functions for custom form validations and error message handling
```

## Build

To build the production version:

```bash
ng build
```
