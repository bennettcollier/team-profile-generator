class generatePage {
    addRole(role) {
        if (role === 'Manager') {
            return `
            </span>Manager
            `
        } else if (role === 'Engineer') {
            return `
            </span>Engingeer`
        } else if (role === 'Intern') {
            return `
            </span>Intern
            `
        }
    }

    addEmployeeCard(teamMembers) {
        return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <header id="navbar">
        <h1 class="header">Team Page</h1>
    </header>

    <div class="container">
        <div class="row">

            <div class="col-sm">
                <div class="card">
                    <h5>Manager</h5>
                    <ul>
                        <li class="list-group-item">Name: /li>
                        <li class="list-group-item">Employee ID: </li>
                        <li class="list-group-item">Email: /li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </div>
            </div>


            <div class="col-sm">
                <div class="card">
                    <h5>Engineer</h5>
                    <ul>
                        <li class="list-group-item">Name: </li>
                        <li class="list-group-item">Employee ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">GitHub Username: </li>
                    </ul>
                </div>
            </div>

            <div class="col-sm">
                <div class="card">
                    <h5>Intern</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Name: </li>
                        <li class="list-group-item">Employee ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">School: </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html
        `

    };
};

module.exports = generatePage;
