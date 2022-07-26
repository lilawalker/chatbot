import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from './components/LearningOptions/LearningOptions';
import LinkList from './components/LinkList/LinkList';

const config = {
  botName: 'ANDBot',
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What would you like to know about AND Digital?", {
      widget: 'learningOptions',
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#d82036',
    },
    chatButton: {
      backgroundColor: '#d82036',
    },
  },
  widgets: [
    {
      widgetName: 'learningOptions',
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: 'clientLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Gousto',
            url: 'https://www.and.digital/our-work/gousto',
            id: 1,
          },
          {
            text: 'upside',
            url: 'https://www.and.digital/our-work/upside',
            id: 2,
          },
          {
            text: 'Diageo',
            url: 'https://www.and.digital/our-work/diageo',
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
