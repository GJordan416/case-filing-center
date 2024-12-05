// Handle Case Filing
document.getElementById("case-filing-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form data
    const caseType = document.getElementById("case-type").value;
    const description = document.getElementById("description").value;
    const court = document.getElementById("court").value;
    const plaintiff = document.getElementById("plaintiff").value;
    const defendant = document.getElementById("defendant").value;

    // Create the payload for the Discord embed
    const embed = {
        title: "New Case Filed",
        description: `A new case has been filed in the court.`,
        color: 5814783, // Green color for success
        fields: [
            { name: "Case Type", value: caseType, inline: true },
            { name: "Court", value: court, inline: true },
            { name: "Plaintiff", value: plaintiff, inline: true },
            { name: "Defendant", value: defendant, inline: true },
            { name: "Description", value: description }
        ],
        footer: { text: `Filed on: ${new Date().toLocaleString()}` }
    };

    // Discord webhook URL (configured in the config.json file)
    const webhookUrl = 'https://discord.com/api/webhooks/1314281316237185154/DU923HwNgdIHhgLeyeHAvBsA9cqIpfimP1AfsJmN6HxEWsHhVi6TjTFsVESXuS-iUaLf';

    // Data to send to the webhook
    const data = {
        content: "A new case has been filed.",
        embeds: [embed]
    };

    // Send the data to the Discord webhook using Fetch API
    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.id) {
            alert("Case filed successfully!");
        } else {
            alert("Error: Could not file the case.");
        }
    })
    .catch(error => {
        alert("Error: Unable to contact the server.");
    });
});
