function executeCommand() {
    const commandInput = document.getElementById('command');
    const outputDiv = document.getElementById('output');
    const command = commandInput.value.trim();

    if (command === 'help') {
        outputDiv.innerHTML += 'Available commands: help, clear<br>';
    } else if (command === 'clear') {
        outputDiv.innerHTML = '';
    } else {
        outputDiv.innerHTML += 'Command not recognized. Type "help" for a list of commands.<br>';
    }

    commandInput.value = '';
}
