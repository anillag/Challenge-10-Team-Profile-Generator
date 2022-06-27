const genEmployeeInfo = (employeeArr) => {
    const cardTemplate = (data) => { 
        return`                    <div class="card border-danger">
                        <div class="card-body">
                            <section class="w-100 p-3">
                                <h3 class="card-title">
                                    ${data.name}
                                </h3>
                                <h4 class="card-subtitle mb-2 text-muted">
                                    ${data.role}
                                </h4>
                            </section>
                            <ul class="list-group list-group-flush p-3">
                                <li class="list-group-item">ID:<br/>${data.employeeID}</li>
                                <li class="list-group-item">Email:<br/><a href="mailto:${data.email}">${data.email}</a></li>
                                ${data.teamManagerOfficeNumber ? `<li class="list-group-item">Office:<br/>${data.teamManagerOfficeNumber}</li>`:''}
                                ${data.engineerGitHub ? `<li class="list-group-item">GitHub:<br/><a href="https://www.github.com/${data.engineerGitHub}" target="_blank">${data.engineerGitHub}</a></li>`:''}
                                ${data.internSchool ? `<li class="list-group-item">School:<br/>${data.internSchool}</li>`:''}
                            </ul>
                        </div>
                    </div>`
                }
        const cardArr = employeeArr.map(employee => (
            cardTemplate(employee)
        ))
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
        <div class="page-header bg-danger text-center p-4">
            <h1>My Team</h1>
        </div>
        <div class="container p-5">
            <div class="row">
                <div class="card-group mx-auto">
                    ${cardArr}
                </div>
            </div>
        </div>
</body>
</html>`
}

module.exports = genEmployeeInfo