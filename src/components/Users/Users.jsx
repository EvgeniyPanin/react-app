import React from 'react';
import User from './User/User';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
          {
            id: 1,
            name: "Дарья Демедюк",
            status:
              "Однажды вы совершенно случайно окажетесь в нужное время в нужном месте, и миллионы дорог сойдутся в одной точке.",
            avatar:
              "https://sun6-16.userapi.com/impg/jscQykeIISjXGyjlhvgBKzAs3cdm2SIovXDpVQ/QsrwkTjP3S8.jpg?size=200x0&quality=90&sign=ae3eb79b29a2055af16ef4b4d13029c0&ava=1",
            fallowed: true,
            location: {
              city: "Краснодар",
              country: "Россия",
            },
          },
          {
            id: 2,
            name: "Наталья Новикова ",
            status: "Hello! It's amazing!",
            avatar:
              "https://sun6-19.userapi.com/impg/7NCYi_rop7UaB_qB5PuPEuLQZRLdZvHDSmCkow/aLoYiS4L8ZQ.jpg?size=200x0&quality=90&sign=5b940ed0be493b5487fceaf053c9601b&ava=1",
            fallowed: false,
            location: {
              city: "Кореновск",
              country: "Россия",
            },
          },
          {
            id: 3,
            name: "Алеся Куль",
            status: "I'm so beautiful",
            avatar:
              "https://sun9-63.userapi.com/c308727/v308727650/30c2/dYb0IRgvC14.jpg",
            fallowed: true,
            location: {
              city: "Саратов",
              country: "Россия",
            },
          },
        ]);
      }
    const userElements = props.users
        .map(user => {
            return < User 
                avatar={ user.avatar } 
                name={ user.name }
                status={ user.status }
                city={ user.location.city }
                country={ user.location.country }
                fallowed={user.fallowed}
                userID={user.id}
                toggleFallow={props.toggleFallow}/>
        })
    return (
        <div>
            { userElements }
        </div>
    )
}

export default Users;