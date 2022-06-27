const fs = require('fs');
const inquirer = require('inquirer');
const dataCollection = require('./src/generateHTML');
let employeeDataArray = [];

//To do create prompt to enter the team manager’s name, employee ID, email address, and office number
const managerCollection =() => { 
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter Team Manager Name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter their Employee ID.",
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log("Please enter an Employee ID.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Please enter their e-mail address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an e-mail address.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "teamManagerOfficeNumber",
            message: "Please enter their office number.",
            validate: teamManagerOfficeNumberInput => {
                if (teamManagerOfficeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter an office number.")
                    return false;
                }
            }
        },
    ]);
};

managerCollection()
.then(managerData => {
    const employeeData = {...managerData, role: "Manager"}
                employeeDataArray.push(employeeData)
    menuOptions();
});

const menuOptions =() => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeRole",
            message: "Who's next?",
            choices: ["Engineer", "Intern", "Finish"]
        } 
    ]).then(menuOptionsAnswers => {
        const role = menuOptionsAnswers.employeeRole
        if (role === "Intern") {
            internCollection().then(internData => {
                const employeeData = {...internData, role: "Intern"}
                employeeDataArray.push(employeeData)
                menuOptions()
            })
        } 
        if (role === "Engineer") {
            engineerCollection().then(engineerData => {
                const employeeData = {...engineerData, role: "Engineer"}
                employeeDataArray.push(employeeData)
                menuOptions()
            })
        }
        if (role === "Finish") {
            fs.writeFile("./dist/team.html", dataCollection(employeeDataArray), (err) =>{
                if (err) {
                    console.log(err)
                } else {
                    console.log("Team file created at \"/dist/team.html\" !")
                }
            })
        }
    })
};

//prompt to enter the engineer’s name, ID, email, and GitHub username, and return to menu
const engineerCollection = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter Engineer Name."
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter their Employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter their e-mail address."
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter their GitHub username."
        },
    ])
};

//prompted to enter the intern’s name, ID, email, and school, and return to menu
const internCollection = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter Intern Name.",
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter their Employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter their e-mail address."
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter their school name."
        }
    ])
};