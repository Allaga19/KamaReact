// создаём объектов
let state = {
    profilePage: {
        posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Алла'},
            {id: 2, name: 'Андрей'},
            {id: 3, name: 'Света'},
            {id: 4, name: 'Саша'},
            {id: 5, name: 'Виктор'}
        ]
    }
    // sidebar: {

    // }
     
};

export default state;
