import React from "react";
import "./styles.css";

function ListData(props) {
  const {
    bottom,
    bgImage,
    top,
    firstName,
    lastName,
    number,
    movies
  } = props.data;

  return (
    <div className="row">
      {top ? (
        <div
          className="box dark image"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h2 className="name">
            {firstName} <span className="hidden-big">{lastName}</span>
          </h2>
        </div>
      ) : null}
      <div className="box">
        <span className="number">{number}</span>
        <h2 className="name hidden-small">{firstName}</h2>
        <ul className="movies">
          {movies.map((movie) => (
            <li key={movie.name}>
              {movie.name}
              <br /> {movie.year}
            </li>
          ))}
        </ul>
      </div>
      {bottom ? (
        <div
          className="box dark image"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h2 className="name">
            <span className="hidden-big">{firstName}</span> {lastName}
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default function App() {
  const moviesArr = [
    {
      bottom: true,
      bgImage:
        "https://www.screengeek.net/wp-content/uploads/2018/08/james-bond-daniel-craig.jpg",
      number: 4,
      firstName: "Daniel",
      lastName: "Craig",
      movies: [
        {
          name: "Spectre",
          year: 2015
        },
        {
          name: "Skyfall",
          year: 2012
        },
        {
          name: "Quantum of Solace",
          year: 2008
        },
        {
          name: "Casino Royale",
          year: 2006
        }
      ]
    },
    {
      top: true,
      bgImage: "http://i.imgur.com/4MspLjL.jpg",
      number: 3,
      firstName: "Pierce",
      lastName: "Brosnan",
      movies: [
        {
          name: "Die another day",
          year: 2002
        },
        {
          name: "The world is not enough",
          year: 1999
        },
        {
          name: "Tomorrow Never Dies",
          year: 1997
        },
        {
          name: "Goldeneye",
          year: 1995
        }
      ]
    },
    {
      bottom: true,
      bgImage:
        "https://filmfrontier.files.wordpress.com/2015/03/dalton-bond.jpg",
      number: 2,
      firstName: "Timothy",
      lastName: "Dalton",
      movies: [
        {
          name: "License to kill",
          year: 1989
        },
        {
          name: "The living daylight",
          year: 1987
        }
      ]
    },
    {
      top: true,
      bgImage:
        "https://images.indianexpress.com/2015/11/james-bond-roger-moore.jpg",
      number: 7,
      firstName: "Roger",
      lastName: "Moore",
      movies: [
        {
          name: "A view to a kill",
          year: 1985
        },
        {
          name: "Octopussy",
          year: 1983
        },
        {
          name: "For your eyes only",
          year: 1981
        },
        {
          name: "Moonraker",
          year: 19879
        },
        {
          name: "The sky who loved me",
          year: 1977
        },
        {
          name: "The man with the golden gun",
          year: 1974
        },
        {
          name: "Live and let die",
          year: 1973
        }
      ]
    },
    {
      bottom: true,
      bgImage:
        "https://cdn-stream.httpid.com/c201/wp-content/uploads/2015/10/George-Lazenby-Best-Bond.jpg",
      number: 1,
      firstName: "George",
      lastName: "Lazenby",
      movies: [
        {
          name: "On her majesty's secret service",
          year: 1969
        }
      ]
    },
    {
      top: true,
      bgImage:
        "https://imgc.artprintimages.com/img/print/007-james-bond-dr-no-1962_u-l-q10ts640.jpg",
      number: 6,
      firstName: "Sean",
      lastName: "Connery",
      movies: [
        {
          name: "Diamonds are forever",
          year: 1971
        },
        {
          name: "You only live twice",
          year: 1967
        },
        {
          name: "Thunderball",
          year: 1965
        },
        {
          name: "Goldfinger",
          year: 1964
        },
        {
          name: "From Russia with love",
          year: 1963
        },
        {
          name: "Dr. No",
          year: 1962
        }
      ]
    }
  ];

  return (
    <div className="container">
      <div className="row mid">
        <div className="box dark">
          <h1 className="heading">
            James
            <div className="hidden-bg">Bond</div>
          </h1>
        </div>

        <div className="box">
          <h1 className="heading hidden-small">Bond</h1>
        </div>
        <p className="subheading">Movies & Actors</p>
      </div>

      {moviesArr.map((el) => (
        <ListData key={el.bgImage} data={el} />
      ))}

      <div className="row small">
        <div className="box"></div>
        <div className="box dark"></div>
        <p className="subheading">James Bond Movies & Actors</p>
      </div>
    </div>
  );
}
