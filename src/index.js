import {ChatUx} from 'chatux';

const chatux = new ChatUx();

const opt = {
    api: {
        endpoint: 'http://localhost:8080/chat',//URL of chat server
        method: 'GET',                         //HTTP METHOD
        dataType: 'json'                       //DATA TYPE
    },
    bot: {
        wakeupText: "hi",//user input which is automatically send to server on startup
        botPhoto: 'https://img.icons8.com/color/80/000000/music-robot.png',//URL of bot photo image
        humanPhoto: 'https://img.icons8.com/color/48/000000/user-location.png',//URL of human photo image
        widget: {
            sendLabel: 'SEND',
            placeHolder: 'Say something'
        }
    },
    window: {
        title: 'My chat',
        infoUrl: 'https://github.com/riversun/chatux',
        size: {
            width: 340,
            height: 450,
            minWidth: 300,
            minHeight: 300,
            titleHeight: 50
        },
        appearance: {
            border: {
                shadow: '2px 2px 10px  rgba(0, 0, 0, 0.5)',
                width: 0,
                radius: 6
            },
            titleBar: {
                fontSize: 14,
                color: 'white',
                background: '	#303030',
                leftMargin: 40,
                height: 40,
                buttonWidth: 36,
                buttonHeight: 16,
                buttonColor: 'white',

                buttons: [
                    {
                        fa: 'fas fa-times',
                        name: 'hideButton',
                        visible: true
                    }
                ],
                buttonsOnLeft: [
                    {
                        fa: 'fas fa-comment-alt',
                        name: 'info',
                        visible: true
                    }
                ],
            },
        }
    }
};

//initialize
chatux.init(opt);

const isAutoOpenWindow=true;
chatux.start(isAutoOpenWindow);
