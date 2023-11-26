<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Colinquess/luizalabs">
    <img src="https://img.shields.io/badge/API-Integration-0000FF?style=for-the-badge&logo=API-Integration&logoColor=white" alt="Logo" width="434" height="80">
  </a>

  <p align="center">
    This project was make as a sample to showcase my nodejs and API creation skills.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#tree-structure">Tree Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project was make as a sample to showcase my nodejs and API creation skills.

For file handling, it uses the [Multer][multer-url]

For server, it uses the [Express][express-url]

For testing, it uses [Jest][jest-url] and [Supertest][supertest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![multer][multer]][multer-url]
* [![express][express]][express-url]
* [![jest][jest]][jest-url]
* [![supertest][supertest]][supertest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Tree Structure -->
### Tree Structure
<pre>
.
app
├── app.js
├── config.js
├── handlers
│   ├── getdatabyid.js
│   ├── getdatabyinterval.js
│   ├── getdata.js
│   ├── index.js
│   └── setdata.js
├── index.js
├── package.json
├── package-lock.json
├── services
│   └── db.js
└── __test__
    └── API_tests.spec.js
</pre>

<!-- GETTING STARTED -->
## Getting Started

The project itself is very simple, it uses mostly deffault libraries.

### Prerequisites

To run the project without docker just run the following commands in your terminal.

* cd app/
* npm install
* npm run start

Testing:
* npm run test

### Shared Postman Colection

[Postman Colection](https://api.postman.com/collections/20978866-f30f4480-3228-4db3-99be-c40ce8f199a1?access_key=PMAT-01HG3TS7F2VWJWBNTW90C1PMK9)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

José L. N. Coliques - [@josecolinques](https://colinquess.github.io/) - josecolinques@gmail.com

Project Link: [https://github.com/Colinquess/luizalabs](https://github.com/Colinquess/luizalabs)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[multer]: https://img.shields.io/badge/multer-black?style=for-the-badge&logo=multer&logoColor=0969da
[multer-url]: https://www.npmjs.com/package/multer

[express]: https://img.shields.io/badge/express-black?style=for-the-badge&logo=express&logoColor=0969da
[express-url]: https://expressjs.com/

[jest]: https://img.shields.io/badge/supertest-15c213?style=for-the-badge&logo=jest&logoColor=0000
[jest-url]: https://jestjs.io/pt-BR/

[supertest]: https://img.shields.io/badge/supertest-0969da?style=for-the-badge&logo=supertest&logoColor=0969da
[supertest-url]: https://github.com/ladjs/supertest

[contributors-shield]: https://img.shields.io/github/contributors/Colinquess/luizalabs.svg?style=for-the-badge
[contributors-url]: https://github.com/Colinquess/luizalabs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Colinquess/luizalabs.svg?style=for-the-badge
[forks-url]: https://github.com/Colinquess/luizalabs/network/members
[stars-shield]: https://img.shields.io/github/stars/Colinquess/luizalabs.svg?style=for-the-badge
[stars-url]: https://github.com/Colinquess/luizalabs/stargazers
[issues-shield]: https://img.shields.io/github/issues/Colinquess/luizalabs.svg?style=for-the-badge
[issues-url]: https://github.com/Colinquess/luizalabs/issues
[license-shield]: https://img.shields.io/github/license/Colinquess/luizalabs.svg?style=for-the-badge
[license-url]: https://github.com/Colinquess/luizalabs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jose-colinques

