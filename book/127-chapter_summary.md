---
title: Chapter Summary
---

<h3 id="filepos3533220"><a id="filepos3533253"></a>Chapter Summary</h3>
<p>Each class controls what happens when we copy, move, assign, or destroy objects of its type. Special member functions—the copy constructor, move constructor, copy-assignment operator, move-assignment operator, and destructor—define these operations. The move constructor and move-assignment operator take a (usually non<code>const</code>) rvalue reference; the copy versions take a (usually <code>const</code>) ordinary lvalue reference.</p>
<p>If a class declares none of these operations, the compiler will define them automatically. If not defined as deleted, these operations memberwise initialize, move, assign, or destroy the object: Taking each non<code>static</code> data member in turn, the synthesized operation does whatever is appropriate to the member’s type to move, copy, assign, or destroy that member.</p>
<p>Classes that allocate memory or other resources almost always require that the class define the copy-control members to manage the allocated resource. If a class needs a destructor, then it almost surely needs to define the move and copy constructors and the move- and copy-assignment operators as well.</p>
