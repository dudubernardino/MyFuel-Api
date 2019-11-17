<div style="margin: 0 auto">
  <h1 align="center">
  <br>
    <img src="petrol-station.png" alt="MyFuel" width="200" height="200">
  <br>
  <br>
  MyFuel
  </h1>

  <p align="center"> An application for fuel expense control 🚗⛽</p>
</div>
<hr />

## Features

A Node.js API built with Express and all the latest tools and best practices in development!

- ⚡ **Adonis** — A web framework for Node
- 💾 **Sequelize** — SQL dialect ORM for Node.js
- 🍂 **PostgreSQL** — document-based database
- 💖 **Lint** — ESlint/Prettier/Editor Config

## Dependencies

- [Node.js](https://nodejs.org/en/) 8.0.0 ou >
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Prerequisites

To run this server you will need three containers running on your machine.

To do so, you will need to run the following commands:

- `docker run --name some-postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`;

_Remember: If you restart your machine, you will need to start again the server with `docker start <container_id>`._

## Getting started


1. Clone this repo using `https://github.com/dudubernardino/MyFuel`
2. Run `yarn` to install dependencies.<br />
3. Copy the `.env.example` file and rename it to `.env`.<br/>
4. Add all the values for the environment variables.<br/>
5. Run `yarn start` to run the servers at `http://localhost:3333`.

## Docs
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0d6cd3812b1e892b7c3d)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.