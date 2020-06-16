const state = {
  profilePage: {
    posts: [
      {
        contant: "Hello? How are you?",
        avatar:
          "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",
      },
      {
        contant: "I use props! It's cool!",
        avatar:
          "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",
      },
      {
        contant: "Today is June 10th, perfect day to lern the React, Redux",
        avatar:
          "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",
      },
    ],
  },
  dialogPage: {
    dialogs: [
      {
        name: "Артем",
        id: "1",
      },
      {
        name: "Василий",
        id: "2",
      },
      {
        name: "Гоша",
        id: "3",
      },
      {
        name: "Ваня",
        id: "4",
      },
      {
        name: "Диана",
        id: "5",
      },
      {
        name: "Света",
        id: "6",
      },
      {
        name: "Петя",
        id: "7",
      },
    ],
    messages: [
      {
        message: "Привет",
        id: "1",
      },
      {
        message: "Как день прошел?",
        id: "2",
      },
      {
        message: "Хорошо",
        id: "3",
      },
      {
        message: "У меня тоже хорошо",
        id: "4",
      },
      {
        message: "Чем занимаешься завтра вечером?",
        id: "5",
      },
      {
        message: "Не знаю, есть предложения?",
        id: "6",
      },
    ],
  },
  navbar: {
    friends: [
      {name: 'Артем', avatar: 'https://sun9-56.userapi.com/c627221/v627221045/1f868/BSgDaLPthEU.jpg'},
      {name: 'Динара', avatar: 'https://sun9-20.userapi.com/c858420/v858420872/15fe20/ZyIMsPbQkfE.jpg'},
      {name: 'Антон', avatar: 'https://sun9-11.userapi.com/c625825/v625825771/41496/azh0iVZs5JY.jpg'},
      {name: 'Николай', avatar: 'https://sun9-42.userapi.com/c840230/v840230984/58de1/zHlKOZkHGPk.jpg'},
    ]
  },
};

const createNewPost = (text) => {
  const newPost = {
    contant: text, 
    avatar: "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",}
  return newPost;
}

export const addPost = (text) => {
  const newPost = createNewPost(text);
  state.profilePage.posts.push(newPost);
}

  export default state;