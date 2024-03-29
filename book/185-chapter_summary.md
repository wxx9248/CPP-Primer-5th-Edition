---
title: Chapter Summary
---

<h3 id="filepos5395442"><a id="filepos5395475"></a>Chapter Summary</h3>
<p>C++ provides several specialized facilities that are tailored to particular kinds of problems.</p>
<p>Some applications need to take control of how memory is allocated. They can do so by defining their own versions—either class specific or global—of the library <code>operator new</code> and <code>operator delete</code> functions. If the application defines its own versions of these functions, <code>new</code> and <code>delete</code> expressions will use the application-defined version.</p>
<p>Some programs need to directly interrogate the dynamic type of an object at run time. Run-time type identification (RTTI) provides language-level support for this kind of programming. RTTI applies only to classes that define virtual functions; type information for types that do not define virtual functions is available but reflects the static type.</p>
<p>When we define a pointer to a class member, the pointer type also encapsulates the type of the class containing the member to which the pointer points. A pointer to member may be bound to any member of the class that has the appropriate type. When we dereference a pointer to member, we must supply an object from which to fetch the member.</p>
<p>C++ defines several additional aggregate types:</p>
<ul><li>Nested classes, which are classes defined in the scope of another class. Such classes are often defined as implementation classes of their enclosing class.</li><li><code>union</code>s are a special kind of class that may define several data members, but at any point in time, only one member may have a value. <code>union</code>s are most often nested inside another class type.</li><li>Local classes, which are defined inside a function. All members of a local class must be defined in the class body. There are no <code>static</code> data members of a local class.</li></ul>

<p>C++ also supports several inherently nonportable features, including bit-fields and <code>volatile</code>, which make it easier to interface to hardware, and linkage directives, which make it easier to interface to programs written in other languages.</p>
