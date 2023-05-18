import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-gray-500 text-center font-bold mb-4">Blog Page</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Access Token and Refresh Token</h3>
        <p>
          An access token is a credential that is used to authorize and authenticate a user's access to protected resources,
          typically in a web application. It is usually a short-lived token that contains information about the user and
          permissions granted. On the other hand, a refresh token is a long-lived token used to obtain a new access token
          once the original token expires.
        </p>
        <p>
          Access tokens are sent with each request to the server to access protected resources. They are typically stored in
          the Authorization header of the HTTP request. Refresh tokens, however, are securely stored on the client-side, such
          as in an HTTP-only cookie or local storage. They are used to request a new access token from the server when the
          current access token expires.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">SQL vs. NoSQL Databases</h3>
        <p>
          SQL (Structured Query Language) and NoSQL (Not only SQL) are two types of database management systems that differ in
          their data models and storage mechanisms.
        </p>
        <p>
          SQL databases are based on a relational data model and use structured tables with predefined schemas. They are
          suitable for complex and structured data, and provide strong consistency and ACID (Atomicity, Consistency, Isolation,
          Durability) properties. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.
        </p>
        <p>
          On the other hand, NoSQL databases are designed to handle unstructured or semi-structured data and provide flexible
          schemas. They are horizontally scalable and offer high availability and performance. NoSQL databases can be
          categorized into key-value stores, document stores, column stores, and graph databases. Examples of NoSQL databases
          include MongoDB, Cassandra, and Redis.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Express.js and Nest.js</h3>
        <p>
          Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to
          building web applications and APIs. Express.js offers a robust set of features for routing, middleware, and
          integrating with other libraries. It is known for its flexibility and scalability, making it a preferred choice for
          building server-side applications in JavaScript or TypeScript.
        </p>
        <p>
          Nest.js, on the other hand, is a progressive Node.js framework built with TypeScript. It is inspired by Angular and
          takes advantage of decorators, modules, and dependency injection to create highly maintainable and scalable
          applications. Nest.js provides an opinionated structure and powerful features such as built-in support for GraphQL,
          WebSockets, and microservices. It is suitable for building complex enterprise applications with a modular and
          organized codebase.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">MongoDB Aggregate</h3>
        <p>
          MongoDB Aggregate is a powerful framework for performing data aggregation operations on MongoDB collections. It
          allows you to process and transform data using a pipeline of stages, such as filtering, grouping, projecting,
          sorting, and joining data from multiple collections.
        </p>
        <p>
          The aggregation pipeline in MongoDB consists of multiple stages, where each stage performs a specific operation on
          the input documents and passes the result to the next stage. This enables you to perform complex data processing
          tasks and generate aggregated results efficiently.
        </p>
        <p>
          The pipeline stages can include operations like $match (filtering documents), $group (grouping and aggregating
          data), $project (selecting or reshaping fields), $sort (sorting results), $lookup (joining data from other
          collections), and many more. By combining these stages, you can build sophisticated queries and extract valuable
          insights from your data in MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Blog;
