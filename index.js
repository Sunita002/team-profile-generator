// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

// Required module exports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/generateHTML");
