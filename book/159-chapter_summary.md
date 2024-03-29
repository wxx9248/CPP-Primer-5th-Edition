---
title: Chapter Summary
---

<h3 id="filepos4547083"><a id="filepos4547116"></a>Chapter Summary</h3>
<p>Templates are a distinctive feature of C++ and are fundamental to the library. A template is a blueprint that the compiler uses to generate specific class types or functions. This process is called instantiation. We write the template once, and the compiler instantiates the template for the type(s) or value(s) with which we use the template.</p>
<p>We can define both function templates and class templates. The library algorithms are function templates and the library containers are class templates.</p>
<p>An explicit template argument lets us fix the type or value of one or more template parameters. Normal conversions are applied to parameters that have an explicit template argument.</p>
<p>A template specialization is a user-provided instantiation of a template that binds one or more template parameters to specified types or values. Specializations are useful when there are types that we cannot use (or do not want to use) with the template definition.</p>
<p>A major part of the latest release of the C++ standard is variadic templates. A variadic template can take a varying number and types of parameters. Variadic templates let us write functions, such as the container <code>emplace</code> members and the library <code>make_shared</code> function, that pass arguments to an object’s constructor.</p>
