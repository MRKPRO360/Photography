import useTitle from "../../hooks/useTitle";
import BlogCard from "./BlogCard";
const questions = [
  {
    question: "What is the difference between sql and nosql?",
    ans: "👉🏼SQL databases are primarily called RDBMS where as NoSQL databases are called as non-relational databases. 👉🏼SQL is structured query language and NoSQL is no declarative query language. 👉🏼SQL databases are table based databases and NoSQL databases can be document based key value pairs graph databases. 👉🏼SQL databases have a pre defined schema and NoSQL databases use dynamic schema for unstructured data.",
  },
  {
    question: "What is JWT and how does it works?",
    ans: "JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/public key.",
  },
  {
    question: "Difference between node.js and vanilla js?",
    ans: "👉🏼JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. 👉🏼Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. 👉🏼JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.",
  },
  {
    question: "How does node js handles multiple request at the same time?",
    ans: "NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.",
  },
];
export default function Blog() {
  useTitle("Blog");
  return (
    <div className="space-y-8">
      {questions.map((el, i) => (
        <BlogCard key={i} blogCard={el} />
      ))}
    </div>
  );
}
