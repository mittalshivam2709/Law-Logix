# LawLogix
This repository consists of codebase for the website named LawLogix which is basically a Lawyer Appointment Management Application.

## Assumptions
- Following are the assumptions made while developing this application:
1. There is a single user to the website (admin) who will book the slots and use any other functionality provided by the website. (No user authentication is implemented)
2. Since there is no backend for this application, the data is stored in the local storage of the browser. So, the data will be lost if the browser is closed.

## Features

1. The Homepage for this website contains the list of all the firms that are associated with LawLogix,
2. The user can click on any firm to view the list of lawyers associated with that firm.
3. The user can click on any lawyer to view the details (like specialization, cost per appointment etc.) of that lawyer.
4. The user can view the list of available appointment slots clicking on the "Book Appointment" button.
5. The user can book an appointment by clicking on the slot of his/her choice.
6. The user can view the list of all the booked appointments for a particular lawyer by clicking on the "View Appointment History" button.
7. All the pages contain a Header and a Footer, however the links in the header and footer are not functional since that is trivial.

## Technologies Used
- HTML
- CSS
- JavaScript
- ReactJS
- Material-UI
- React-Router-DOM
- React-Redux

## How to run the application
1. Clone the repository using the following command:
```
git clone https://github.com/mittalshivam2709/LawLogix.git
```
2. Navigate to the lawlogix directory of the project and run the following command to install all the dependencies:
```
npm install
```
3. Run the following command in the src to start the application:
```
npm start
```
4. The application will start running on the following URL:
```
http://localhost:3000/
```


