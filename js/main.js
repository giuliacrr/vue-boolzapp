"use strict"

Vue.createApp({

  data() {
    return {
      newMessages: [{
        message: "",
        status: "",
      }],
      contacts: [
        {//Pikachù
          answer: "Pika Pika!!",
          name: "Pikachù",
          avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Pikachù! Come va?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Dopo 3 giorni mi sono ricordata di darti da mangiare. Speravo tanto non fossi morto!",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Pika.",
              status: "received",
            },
          ],
        },
        {//Charmander
          answer: "Char char!!",
          name: "Charmander",
          avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Oddio Charmy! Sei il mio pokèmon preferito!! Bff!",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Char char!",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Char 💖",
              status: "received",
            },
          ],
        },
        {//Bulbasaur
          answer: "Saur saur",
          name: "Bulbasaur",
          avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "SAUR SAUR??????",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Tranquillo, adoro anche te................",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "SA SAUR!!!! 😢",
              status: "received",
            },
          ],
        },
        {//LUISA
          answer: "Psy...!!",
          name: "Psyduck",
          avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai preso gli antidepressivi, Psyduck?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Psy.............",
              status: "received",
            },
          ],
        },
      ],
      currentChat: 2,
    };
  },
  methods: {
    showCurrentChat(i) {
      this.currentChat = i;
    },
    //Send message function, row 161 HTML
    sendMessage(i) {
      const newMessage = { ...this.newMessages };
      newMessage.status = "sent";
      this.contacts[i].messages.push(newMessage);
      this.newMessages.message = "";
      setTimeout(this.receiveMessage, 1500);
    },
    //Receive message used in the send message function above
    receiveMessage() {
      const newMessage = { ...this.newMessages };
      newMessage.status = "received";
      newMessage.message = this.contacts[this.currentChat].answer;
      this.contacts[this.currentChat].messages.push(newMessage);
    },
  },
  mounted() {

  },
}).mount("#app");