---
title: Chapter 18. Tools for Large Programs
---

<h2 id="filepos4852546">Chapter 18. Tools for Large Programs</h2>
<p>Contents</p><ul><li><strong><a href="171-18.1._exception_handling.html#filepos4855328">Section 18.1 Exception Handling</a></strong></li><li><strong><a href="172-18.2._namespaces.html#filepos4928252">Section 18.2 Namespaces</a></strong></li><li><strong><a href="173-18.3._multiple_and_virtual_inheritance.html#filepos5026780">Section 18.3 Multiple and Virtual Inheritance</a></strong></li><li><strong><a href="174-chapter_summary.html#filepos5102148">Chapter Summary</a></strong></li><li><strong><a href="175-defined_terms.html#filepos5104665">Defined Terms</a></strong></li></ul>

<p>C++ is used on problems small enough to be solved by a single programmer after a few hours’ work and on problems requiring enormous systems consisting of tens of millions of lines of code developed and modified by hundreds of programmers over many years. The facilities that we covered in the earlier parts of this book are equally useful across this range of programming problems.</p>
<p>The language includes some features that are most useful on systems that are more complicated than those that a small team can manage. These features—exception handling, namespaces, and multiple inheritance—are the topic of this chapter.</p>
<p><a id="filepos4854383"></a><em>Large-scale programming</em> places greater demands on programming languages than do the needs of systems that can be developed by small teams of programmers. Among the needs that distinguish large-scale applications are</p>
<ul><li>The ability to handle errors across independently developed subsystems</li><li>The ability to use libraries developed more or less independently</li><li>The ability to model more complicated application concepts</li></ul>

<p>This chapter looks at three features in C++ that are aimed at these needs: exception handling, namespaces, and multiple inheritance.</p>
