---
title: Chapter Summary
---

<h3 id="filepos2163240"><a id="filepos2163273"></a>Chapter Summary</h3>
<p>C++ uses library classes to handle stream-oriented input and output:</p>
<ul><li>The <code>iostream</code> classes handle IO to console</li><li>The <code>fstream</code> classes handle IO to named files</li><li>The <code>stringstream</code> classes do IO to in-memory <code>string</code>s</li></ul>

<p>The <code>fstream</code> and <code>stringstream</code> classes are related by inheritance to the <code>iostream</code> classes. The input classes inherit from <code>istream</code> and the output classes from <code>ostream</code>. Thus, operations that can be performed on an <code>istream</code> object can also be performed on either an <code>ifstream</code> or an <code>istringstream</code>. Similarly for the output classes, which inherit from <code>ostream</code>.</p>
<p>Each IO object maintains a set of condition states that indicate whether IO can be done through this object. If an error is encountered—such as hitting end-of-file on an input stream—then the object’s state will be such that no further input can be done until the error is rectified. The library provides a set of functions to set and test these states.</p>
