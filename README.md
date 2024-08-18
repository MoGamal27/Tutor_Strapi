# Api endpoints

- **Creat new course**
  ```
  Post http://localhost:1337/api/courses
  ```
  Create new course by instructor

  Request :
  ```
  {
  {
  "data": {
    "title": "Introduction to Node.js",
    "description": "A beginner-friendly course on Node.js fundamentals.",
    "users_permissions_user": 1
  }
  }
  }
  ```
  Response : 
 ```
{
{
  "data": {
    "id": 2,
    "attributes": {
      "createdAt": "2024-08-17T12:00:18.013Z",
      "updatedAt": "2024-08-17T12:00:18.013Z",
      "publishedAt": "2024-08-17T12:00:18.003Z",
      "title": "Introduction to Node.js",
      "description": "A beginner-friendly course on Node.js fundamentals."
    }
  },
  "meta": {}
}
}
 ```

- **Get All Courses**
  ```
  Get http://localhost:1337/api/courses
  ```
  Retrieve All Courses

  Response :
  ```
  {
   {
  "data": [
    {
      "id": 1,
      "attributes": {
        "createdAt": "2024-08-17T11:51:34.532Z",
        "updatedAt": "2024-08-17T11:54:06.939Z",
        "publishedAt": "2024-08-17T11:54:06.925Z",
        "title": "first course in js",
        "description": "learn data type"
      }
    },
    {
      "id": 2,
      "attributes": {
        "createdAt": "2024-08-17T12:00:18.013Z",
        "updatedAt": "2024-08-17T12:00:18.013Z",
        "publishedAt": "2024-08-17T12:00:18.003Z",
        "title": "Introduction to Node.js",
        "description": "A beginner-friendly course on Node.js fundamentals."
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 2
    }
  }
  }
  }
  ```

    - **Get Course contain category**
  ```
  Get http://localhost:1337/api/courses/getAllCourses
  ```
  Get courses contain category

  Response :
  ```
  {
  [
  {
    "id": 1,
    "createdAt": "2024-08-17T11:51:34.532Z",
    "updatedAt": "2024-08-17T11:54:06.939Z",
    "publishedAt": "2024-08-17T11:54:06.925Z",
    "title": "first course in js",
    "description": "learn data type",
    "category": null
  },
  {
    "id": 2,
    "createdAt": "2024-08-17T12:00:18.013Z",
    "updatedAt": "2024-08-17T12:00:18.013Z",
    "publishedAt": "2024-08-17T12:00:18.003Z",
    "title": "Introduction to Node.js",
    "description": "A beginner-friendly course on Node.js fundamentals.",
    "category": null
  },
  {
    "id": 3,
    "createdAt": "2024-08-17T13:40:37.932Z",
    "updatedAt": "2024-08-17T13:40:37.932Z",
    "publishedAt": "2024-08-17T13:40:37.912Z",
    "title": "Express server",
    "description": "lets build express server",
    "category": {
      "id": 2,
      "name": "Backend nodejs",
      "description": "let's enroll courses backend",
      "createdAt": "2024-08-17T13:39:42.046Z",
      "updatedAt": "2024-08-17T13:39:42.046Z",
      "publishedAt": "2024-08-17T13:39:42.036Z"
    }
  }
  ]
  }
  ```



  - **Get Single Course**
  ```
  Get http://localhost:1337/api/courses/2
  ```
  Get single course by id

  Response :
  ```
  {
  {
  "data": {
    "id": 2,
    "attributes": {
      "createdAt": "2024-08-17T12:00:18.013Z",
      "updatedAt": "2024-08-17T12:00:18.013Z",
      "publishedAt": "2024-08-17T12:00:18.003Z",
      "title": "Introduction to Node.js",
      "description": "A beginner-friendly course on Node.js fundamentals."
    }
  },
  "meta": {}
  }
  }
  ```

    - **Get enrollment course**
  ```
  Get http://localhost:1337/api/enrollments/getEnrollmentCourse
  ```
  Get get enrollment course

  Response :
  ```
  {
  [
  {
    "id": 1,
    "date": "2024-08-18T07:42:26.000Z",
    "createdAt": "2024-08-18T07:42:40.242Z",
    "updatedAt": "2024-08-18T07:42:40.242Z",
    "publishedAt": "2024-08-18T07:42:40.231Z",
    "course": {
      "id": 3,
      "createdAt": "2024-08-17T13:40:37.932Z",
      "updatedAt": "2024-08-17T13:40:37.932Z",
      "publishedAt": "2024-08-17T13:40:37.912Z",
      "title": "Express server",
      "description": "lets build express server"
    },
    "users_permissions_user": {
      "id": 1,
      "username": "mohamed",
      "email": "engmogamil@gmail.com",
    }
  }
  ```

  












# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
