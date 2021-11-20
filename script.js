const messageList = [
    'My past is not a reflection of my future',
    'I am strong enough to make my own decisions',
    'I choose peace',
    'I’m courageous and stand up for myself',
    'I’m calm, happy, and content',
    'My life is a gift and I appreciate everything I have',
    'I’m allowed to take time to heal',
    'The point of life is balance, not perfection',
    'Difficult times allow me to appreciate the good times',
    'I’m in charge of my life and no one will dictate my path besides me',
    'I will not compare myself to strangers on the Internet',
    'I am enough',
    'I love myself fully',
    'I am worthy of respect and acceptance',
    'My contributions to the world are valuable',
];

const generateRandomIndex = (messagesArray) => {
    let randomIndex = Math.floor(Math.random() * messagesArray.length);
    return randomIndex;
}

const generateMessage = (affirmationList) => {
    let affirmationPosition = generateRandomIndex(affirmationList);
    return console.log('Your affirmation message:', affirmationList[affirmationPosition] + '!');
}

generateMessage(messageList);