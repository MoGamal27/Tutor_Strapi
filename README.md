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
  
  - **Get Single Course**
  ```
  Get http://localhost:1337/api/courses/2
  ```
  Get single course by id

  Request :
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
