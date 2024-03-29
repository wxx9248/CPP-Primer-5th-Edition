---
title: "Part II: The C++ Library"
---

<h1 id="filepos2066884">Part II: The C++ Library</h1>
<p>Contents</p><ul><li><strong><a href="082-chapter_8._the_io_library.html#filepos2071768">Chapter 8 The IO Library</a></strong></li><li><strong><a href="088-chapter_9._sequential_containers.html#filepos2171064">Chapter 9 Sequential Containers</a></strong></li><li><strong><a href="097-chapter_10._generic_algorithms.html#filepos2454824">Chapter 10 Generic Algorithms</a></strong></li><li><strong><a href="106-chapter_11._associative_containers.html#filepos2718579">Chapter 11 Associative Containers</a></strong></li><li><strong><a href="113-chapter_12._dynamic_memory.html#filepos2900383">Chapter 12 Dynamic Memory</a></strong></li></ul>

<p>With each revision of the C++ language, the library has also grown. Indeed, more than two-thirds of the text of the new standard is devoted to the library. Although we cannot cover every library facility in depth, there are core facilities that the library defines that every C++ programmer should be comfortable using. We cover these core facilities in this part.</p>
<p>We’ll start by covering the basic IO library facilities in <a href="082-chapter_8._the_io_library.html#filepos2071768">Chapter 8</a>. Beyond using the library to read and write streams associated with the console window, the library defines types that let us read and write named files and do in-memory IO to <code>string</code>s.</p>
<p>Central to the library are a number of container classes and a family of generic algorithms that let us write programs that are succinct and efficient. The library worries about bookkeeping details—in particular, taking care of memory management—so that our programs can worry about the actual problems we need to solve.</p>
<p>In <a href="029-chapter_3._strings_vectors_and_arrays.html#filepos633734">Chapter 3</a> we introduced the <code>vector</code> container type. We’ll learn more about <code>vector</code> in <a href="088-chapter_9._sequential_containers.html#filepos2171064">Chapter 9</a>, which will cover the other sequential container types as well. We’ll also cover more operations provided by the <code>string</code> type. We can think of a <code>string</code> as a special kind of container that contains only characters. The <code>string</code> type supports many, but not all, of the container operations.</p>
<p><a href="097-chapter_10._generic_algorithms.html#filepos2454824">Chapter 10</a> introduces the generic algorithms. The algorithms typically operate on a range of elements in a sequential container or other sequence. The algorithms library offers efficient implementations of various classical algorithms, such as sorting and searching, and other common tasks as well. For example, there is a <code>copy</code> algorithm, which copies elements from one sequence to another; <code>find</code>, which looks for a given element; and so on. The algorithms are generic in two ways: They can be applied to different kinds of sequences, and those sequences may contain elements of most types.</p>
<p>The library also provides several associative containers, which are the topic of <a href="106-chapter_11._associative_containers.html#filepos2718579">Chapter 11</a>. Elements in an associative container are accessed by key. The associative containers share many operations with the sequential containers and also define operations that are specific to the associative containers.</p>
<p>This part concludes with <a href="113-chapter_12._dynamic_memory.html#filepos2900383">Chapter 12</a>, which looks at language and library facilities for managing dynamic memory. This chapter covers one of the most important new library classes, which are standardized versions of smart pointers. By using smart pointers, we can make code that uses dynamic memory much more robust. This chapter closes with an extended example that uses library facilities introduced throughout <a href="081-part_ii_the_cpp_library.html#filepos2066884">Part II</a>.</p> 
