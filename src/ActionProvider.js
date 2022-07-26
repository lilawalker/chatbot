class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('Hi, ANDi.');
    this.updateChatbotState(greetingMessage);
  }

  handleClientList = () => {
    const message = this.createChatBotMessage("Fantastic, here's some information on a few of AND Digital's clients:", {
      widget: 'clientLinks',
    });

    this.updateChatbotState(message);
  };

  handleValuesList = () => {
    const message = this.createChatBotMessage(
      'Every ANDi follows the same three values. These values are what drives AND Digital to make an impact globally, whilst sharing our skills with each other and the wider community',
      {
        widget: 'staticData',
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
