---
title: Chapter Summary
---

<h3 id="filepos3773544"><a id="filepos3773577"></a>Chapter Summary</h3>
<p>An overloaded operator must either be a member of a class or have at least one operand of class type. Overloaded operators have the same number of operands, associativity, and precedence as the corresponding operator when applied to the built-in types. When an operator is defined as a member, its implicit <code>this</code> pointer is bound to the first operand. The assignment, subscript, function-call, and arrow operators must be class members.</p>
<p>Objects of classes that overload the function-call operator, <code>operator()</code>, are known as “function objects.” Such objects are often used in combination with the standard algorithms. Lambda expressions are succinct ways to define simple function-object classes.</p>
<p>A class can define conversions to or from its type that are used automatically. Non<code>explicit</code> constructors that can be called with a single argument define conversions from the parameter type to the class type; non<code>explicit</code> conversion operators define conversions from the class type to other types.</p>
