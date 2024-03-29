---
title: Chapter Summary
---

<h3 id="filepos1211678"><a id="filepos1211711"></a>Chapter Summary</h3>
<p>C++ provides a rich set of operators and defines their meaning when applied to values of the built-in types. Additionally, the language supports operator overloading, which allows us to define the meaning of the operators for class types. We’ll see in <a href="129-chapter_14._overloaded_operations_and_conversions.html#filepos3544393">Chapter 14</a> how to define operators for our own types.</p>
<p>To understand expressions involving more than one operator it is necessary to understand precedence, associativity, and order of operand evaluation. Each operator has a precedence level and associativity. Precedence determines how operators are grouped in a compound expression. Associativity determines how operators at the same precedence level are grouped.</p>
<p>Most operators do not specify the order in which operands are evaluated: The compiler is free to evaluate either the left- or right-hand operand first. Often, the order of operand evaluation has no impact on the result of the expression. However, if both operands refer to the same object and one of the operands <em>changes</em> that object, then the program has a serious bug—and a bug that may be hard to find.</p>
<p>Finally, operands are often converted automatically from their initial type to another related type. For example, small integral types are promoted to a larger integral type in every expression. Conversions exist for both built-in and class types. Conversions can also be done explicitly through a cast.</p>
