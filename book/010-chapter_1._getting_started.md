---
title: Chapter 1. Getting Started
---

<h2 id="filepos113276">Chapter 1. Getting Started</h2>
<p>Contents</p><ul><li><strong><a href="011-1.1._writing_a_simple_cpp_program.html#filepos117760">Section 1.1 Writing a Simple C++ Program</a></strong></li><li><strong><a href="012-1.2._a_first_look_at_inputoutput.html#filepos136281">Section 1.2 A First Look at Input/Output</a></strong></li><li><strong><a href="013-1.3._a_word_about_comments.html#filepos157648">Section 1.3 A Word about Comments</a></strong></li><li><strong><a href="014-1.4._flow_of_control.html#filepos166172">Section 1.4 Flow of Control</a></strong></li><li><strong><a href="015-1.5._introducing_classes.html#filepos219539">Section 1.5 Introducing Classes</a></strong></li><li><strong><a href="016-1.6._the_bookstore_program.html#filepos244566">Section 1.6 The Bookstore Program</a></strong></li><li><strong><a href="017-chapter_summary.html#filepos253310">Chapter Summary</a></strong></li><li><strong><a href="018-defined_terms.html#filepos254268">Defined Terms</a></strong></li></ul>

<p>This chapter introduces most of the basic elements of C++: types, variables, expressions, statements, and functions. Along the way, we’ll briefly explain how to compile and execute a program.</p>
<p>After having read this chapter and worked through the exercises, you should be able to write, compile, and execute simple programs. Later chapters will assume that you can use the features introduced in this chapter, and will explain these features in more detail.</p>
<p><a id="filepos115465"></a><em>The way to learn</em> a new programming language is to write programs. In this chapter, we’ll write a program to solve a simple problem for a bookstore.</p>
<p>Our store keeps a file of transactions, each of which records the sale of one or more copies of a single book. Each transaction contains three data elements:</p>

```
0-201-70353-X 4 24.99
```

<p>The first element is an ISBN (International Standard Book Number, a unique book identifier), the second is the number of copies sold, and the last is the price at which each of these copies was sold. From time to time, the bookstore owner reads this file and for each book computes the number of copies sold, the total revenue from that book, and the average sales price.</p>
<p>To be able to write this program, we need to cover a few basic C++ features. In addition, we’ll need to know how to compile and execute a program.</p>
<p>Although we haven’t yet designed our program, it’s easy to see that it must</p>
<ul><li>Define variables</li><li>Do input and output</li><li>Use a data structure to hold the data</li><li>Test whether two records have the same ISBN</li><li>Contain a loop that will process every record in the transaction file</li></ul>

<p>We’ll start by reviewing how to solve these subproblems in C++ and then write our bookstore program.</p>
