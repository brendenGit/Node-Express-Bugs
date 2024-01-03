### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  Otherwise known as a JSON web token a JWT is a string of encrypted data used for things like authorization and authentication. JWTs are used to transmit information.<br/><br/>

- What is the signature portion of the JWT?  What does it do?
  This takes a secret key and runs it through a hashing function. This hash is then used to verify the JWT. The signature is used to verify the integrity of the token and the auth of the sender.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes. However, they would not be able to reconcile the token.<br/><br/>  

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  At a high level we can create a token with some data in the payload and a token hashed at the end. We can then use a verification function like 
  `jwt.verify(token, SECRET_KEY)` to verify that the token sent over was valid.<br/><br/>

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests test individual/isolated components of code. Small pieces of the application like routes, class methods, functions, etc.  
  Integration tests test how different parts work together. Like a class being used in a Express application.  
  End-toend tests test the entire application! For example we might use a framework like Cypress to see how an actual user interacts with the application.  
  Comparing these 3 succinctly they all test larger and larger parts of an application starting from the smallest parts to the entire thing.<br/><br/>

- What is a mock? What are some things you would mock?
  A mock is something you can use to mock a class or function. You would use this during testing to make it a bit easier.<br/><br/>

- What is continuous integration?
  Continous integrations or CI is the practice of continuously developing your application. Releasing small pieces often. This allows for continuous development where a recently shipped feature can be tested while another is produced. Once finished testing and produced work can be swapped to continue on with development.<br/><br/>

- What is an environment variable and what are they used for?
  Environmental variables are typically found in a `.env` file. This 
  `.env` file can then be imported into your application using `require("dotenv").config();`. We can then store these secured values in variables for usage.<br/><br/>

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development or TDD is the practice of writing the tests first before development. The benefits of TDD include: clearly defined functionality, compartmentalization, and guranteed coverage. A disadvantage might be the time commitment to writing tests before code.<br/><br/>

- What is the value of using JSONSchema for validation?
  A JSONSchema allows for a more robust checking mechanic. Rather than writing tons of conditionals in your code you can use a JSONSchema.<br/><br/>

- What are some ways to decide which code to test?
  It would be smart to try and test as much if not all code. Routes should be tested. User interactions should be tested. And updates to a database, however those happen, should be tested.<br/><br/>

- What does `RETURNING` do in SQL? When would you use it?
  `RETURNING` allows us to return some data from a SQL query that doesn't typically return data. For example UPDATE or DELETE would not return data. However, we can use the `RETURNING` clause to do so.<br/><br/>

- What are some differences between Web Sockets and HTTP?
  At a high level Web Sockets are more beneficial for applications that require low-latency and high interactivity like online gaming or financial trading. Web Sockets support a bidirectional communication channel between the server and the client allowing for independent requests and responses. HTTP works on a request-response model waiting for the client to send a request and then responding.<br/><br/>

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?
  I preferred Express over Flask. The main benefit was not having to switch between JavaScript and Python regularly. I think the synchronous order of Express and its middleware also made sense. However, Flask not having middleware was kind of nice as well.<br/><br/>