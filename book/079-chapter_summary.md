---
title: Chapter Summary
---

<h3 id="filepos2052488"><a id="filepos2052521"></a>Chapter Summary</h3>
<p>Classes are the most fundamental feature in C++. Classes let us define new types for our applications, making our programs shorter and easier to modify.</p>
<p>Data abstraction—the ability to define both data and function members—and encapsulation—the ability to protect class members from general access—are fundamental to classes. We encapsulate a class by defining its implementation members as <code>private</code>. Classes may grant access to their non<code>public</code> member by designating another class or function as a friend.</p>
<p>Classes may define constructors, which are special member functions that control how objects are initialized. Constructors may be overloaded. Constructors should use a constructor initializer list to initialize all the data members.</p>
<p>Classes may also define <code>mutable</code> or <code>static</code> members. A <code>mutable</code> member is a data member that is never <code>const;</code> its value may be changed inside a <code>const</code> member function. A <code>static</code> member can be either function or data; <code>static</code> members exist independently of the objects of the class type.</p>
