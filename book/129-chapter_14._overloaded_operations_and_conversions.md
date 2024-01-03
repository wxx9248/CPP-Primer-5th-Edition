<h2 id="filepos3544393">Chapter 14. Overloaded Operations and Conversions</h2>
<p>Contents</p><ul><li><strong><a href="130-14.1._basic_concepts.html#filepos3549336">Section 14.1 Basic Concepts</a></strong></li><li><strong><a href="131-14.2._input_and_output_operators.html#filepos3576045">Section 14.2 Input and Output Operators</a></strong></li><li><strong><a href="132-14.3._arithmetic_and_relational_operators.html#filepos3595833">Section 14.3 Arithmetic and Relational Operators</a></strong></li><li><strong><a href="133-14.4._assignment_operators.html#filepos3614210">Section 14.4 Assignment Operators</a></strong></li><li><strong><a href="134-14.5._subscript_operator.html#filepos3620887">Section 14.5 Subscript Operator</a></strong></li><li><strong><a href="135-14.6._increment_and_decrement_operators.html#filepos3630002">Section 14.6 Increment and Decrement Operators</a></strong></li><li><strong><a href="136-14.7._member_access_operators.html#filepos3645985">Section 14.7 Member Access Operators</a></strong></li><li><strong><a href="137-14.8._functioncall_operator.html#filepos3657799">Section 14.8 Function-Call Operator</a></strong></li><li><strong><a href="138-14.9._overloading_conversions_and_operators.html#filepos3713073">Section 14.9 Overloading, Conversions, and Operators</a></strong></li><li><strong><a href="139-chapter_summary.html#filepos3773544">Chapter Summary</a></strong></li><li><strong><a href="140-defined_terms.html#filepos3775079">Defined Terms</a></strong></li></ul>

<p>In <a href="038-chapter_4._expressions.html#filepos995349">Chapter 4</a>, we saw that C++ defines a large number of operators and automatic conversions among the built-in types. These facilities allow programmers to write a rich set of mixed-type expressions.</p>
<p>C++ lets us define what the operators mean when applied to objects of class type. It also lets us define conversions for class types. Class-type conversions are used like the built-in conversions to implicitly convert an object of one type to another type when needed.</p>
<p><a id="filepos3547214"></a>Operator overloading lets us define the meaning of an operator when applied to operand(s) of a class type. Judicious use of operator overloading can make our programs easier to write and easier to read. As an example, because our original <code>Sales_item</code> class type (§ <a href="015-1.5._introducing_classes.html#filepos222335">1.5.1</a>, p. <a href="015-1.5._introducing_classes.html#filepos222335">20</a>) defined the input, output, and addition operators, we can print the sum of two <code>Sales_item</code>s as</p>

```c++
cout << item1 + item2;  // print the sum of two Sales_items
```

<p>In contrast, because our <code>Sales_data</code> class (§ <a href="073-7.1._defining_abstract_data_types.html#filepos1745423">7.1</a>, p. <a href="073-7.1._defining_abstract_data_types.html#filepos1745423">254</a>) does not yet have overloaded operators, code to print their sum is more verbose and, hence, less clear:</p>

```c++
print(cout, add(data1, data2));  // print the sum of two Sales_datas
```
