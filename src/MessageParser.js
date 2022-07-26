class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') | lowerCaseMessage.includes('hi') | lowerCaseMessage.includes('hey')) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes('clients')) {
      this.actionProvider.handleClientList();
    }

    if (lowerCaseMessage.includes('values')) {
      this.actionProvider.handleValuesList();
    }
  }
}

export default MessageParser;
