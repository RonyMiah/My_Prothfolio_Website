import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <Link to="/home">
        {" "}
        <Button className="text-start d-block m-5">
          <i class="fa-solid fa-arrow-left"> </i> Go Back{" "}
        </Button>
      </Link>
      <div className="props-type">
        <h2
          className="mx-auto  mt-5 text-font mx-auto font-responsive"
          style={{ color: "#1c1333" }}
        >
          PROPS TYPE
        </h2>
        <div className="Horizontal-ver">
          <hr className="fw-bolder  w-25 mx-auto "></hr>
        </div>
        <div className="container w-75">
          <img
            className="w-100"
            src="https://i.ibb.co/XVmvsf7/Fornt-End-Developer.png"
            alt="No Internet"
          ></img>
          <p className="fw-bolder fs-5 text-start mt-3">
            In this post, I will discuss Props type so let’s start 👍. React
            props are used to send data from one component to another component.
            When a component received the wrong type of props data it can fetch
            some bugs and errors in your app. React has an inside mechanism
            that’s name is props types, it’s means props validation.
          </p>

          <h2 className="text-start fw-bolder">How do React props work?</h2>
          <p className="fw-bolder fs-5 text-start">
            The answer is simple to react props allowed send data as like
            including string, number, function, array, etc. spouse you have
            multiple components, you can pass data one component to another
            component.
          </p>
        </div>
      </div>

      {/* JSX  */}

      <div className="jsx">
        <h2
          className="mx-auto  mt-5  text-font mx-auto font-responsive"
          style={{ color: "#1c1333" }}
        >
          JSX
        </h2>
        <div className="Horizontal-ver">
          <hr className="fw-bolder  w-25 mx-auto "></hr>
        </div>

        <div className="container w-75">
          <img
            className="w-100"
            src="https://i.ibb.co/Gn0SrCC/Fornt-End-Developer.jpg"
            alt="No Internet"
          ></img>
          <p className="fw-bolder fs-5 text-start mt-3">
            Today we talk about JSX, so without further doing so let’s jump to
            the post. ⚙ Javascript syntax Extention is JSX and it’s referred to
            as javascript XML. JSX is a javascript language and React extension.
          </p>

          <h2 className="text-start fw-bolder">Component Lifecycle:</h2>
          <p className="fw-bolder fs-5 text-start">
            In this article, we are discussing component lifecycle React Js. But
            Frist we should understand what is it? Everything flows a cycle in
            the world. One thing we have noticed people are born, grow and die.
            Everything flows Lifecycle, React component do as well. In the same
            way, components are created updating and then die. That’s a
            component life cycle. So Let’s discuss life cycle methods in
            different phases..
          </p>
          <h2 className="text-start fw-bolder">
            {" "}
            The component lifecycle has Four parts.
          </h2>
          <ul>
            <li className="text-start"> **Initialize</li>
            <li className="text-start"> **Updating</li>
            <li className="text-start"> **Mounting</li>
            <li className="text-start"> **UnMounting</li>
          </ul>
          <h4 className="text-start">
            So Let’s discuss life cycle methods in different phases.
          </h4>
          <h2 className="text-start fw-bolder" >Initialize :</h2>
          <p className="text-start fs-5 fw-bolder ">
            This phase component going to start the journey by setting the state
            and props. It’s done inside the constructor method.
          </p>
          <h2 className="text-start fw-bolder">Mounting :</h2>
          <p className="text-start fs-5 fw-bolder">
            Component mounts on the dom Mounting phase. After the completed
            phase is initialized then this phase comes onto the scene, then the
            component renders the first time. Now we have available phases are :
            The Component Will-Mount and Did-Mount so let’s discuss This topic:
          </p>
          <h2 className="text-start fw-bolder">Will-Mount :</h2>
          <p className="text-start fs-5 fw-bolder">
            Methode called before component mount on the dom otherwise The
            render method is called. Then the component gets Mounted.
          </p>
          <h2 className="text-start fw-bolder">Did-Mount :</h2>
          <p className="text-start fs-5 fw-bolder">
            The component gets the mount on the dom after Methode called. same
            as Component Will Mount it’s called one in the lifecycle. When the
            render method is called before this method execution. However, we
            can make API Easily call updates and the state with API Responses.
          </p>
          <h2 className="text-start fw-bolder">Updating :</h2>
          <p className="text-start fs-5 fw-bolder">
            This is the third stage component passes. When a component is
            created the update phase comes into here. Then the component state
            is changed and re-rendered. Then component data (state props) update
            response user clicking and typing. Then component Result in
            re-rendering. Now we have available phases are: Component will
            update, should update, and did Update.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
