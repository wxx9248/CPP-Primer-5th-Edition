import {defineConfig} from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    title: "C++ Primer, Fifth Edition",
    description: "C++ Primer, Fifth Edition. Text transcribed by Team LiB.",
    lang: "en-US",

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Cover Page', link: '/book/000-cpp_primer_fifth_edition.html'},
            {text: 'Contents', link: '/book/001-contents.html'},
            {
                text: 'Plain Version',
                link: "src/000-cpp_primer_fifth_edition.html",
                target: "_blank"
            }
        ],
        sidebar: [
            {
                "text": "Cover Page",
                "items": [
                    {
                        "text": "C++ Primer Fifth Edition",
                        "link": "/book/000-cpp_primer_fifth_edition.html"
                    }
                ]
            },
            {
                "text": "Title Page",
                "items": [
                    {
                        "text": "Contents",
                        "link": "/book/001-contents.html"
                    },
                    {
                        "text": "New Features in C++11",
                        "link": "/book/002-new_features_in_cpp11.html"
                    }
                ]
            },
            {
                "text": "Preface",
                "link": "/book/003-preface.html",
                "items": [
                    {
                        "text": "Why Read This Book",
                        "link": "/book/004-why_read_this_book.html"
                    },
                    {
                        "text": "Changes to the Fifth Edition",
                        "link": "/book/005-changes_to_the_fifth_edition.html"
                    },
                    {
                        "text": "Structure of This Book",
                        "link": "/book/006-structure_of_this_book.html"
                    },
                    {
                        "text": "Aids to the Reader",
                        "link": "/book/007-aids_to_the_reader.html"
                    },
                    {
                        "text": "A Note about Compilers",
                        "link": "/book/008-a_note_about_compilers.html"
                    },
                    {
                        "text": "Acknowledgments",
                        "link": "/book/009-acknowledgments.html"
                    }
                ]
            },
            {
                "text": "Chapter 1. Getting Started",
                "link": "/book/010-chapter_1._getting_started.html",
                "items": [
                    {
                        "text": "Writing a Simple C++ Program",
                        "link": "/book/011-1.1._writing_a_simple_cpp_program.html"
                    },
                    {
                        "text": "A First Look at Input/Output",
                        "link": "/book/012-1.2._a_first_look_at_inputoutput.html"
                    },
                    {
                        "text": "A Word about Comments",
                        "link": "/book/013-1.3._a_word_about_comments.html"
                    },
                    {
                        "text": "Flow of Control",
                        "link": "/book/014-1.4._flow_of_control.html"
                    },
                    {
                        "text": "Introducing Classes",
                        "link": "/book/015-1.5._introducing_classes.html"
                    },
                    {
                        "text": "The Bookstore Program",
                        "link": "/book/016-1.6._the_bookstore_program.html"
                    },
                    {
                        "text": "Chapter Summary",
                        "link": "/book/017-chapter_summary.html"
                    },
                    {
                        "text": "Defined Terms",
                        "link": "/book/018-defined_terms.html"
                    }
                ]
            },
            {
                "text": "Part I: The Basics",
                "link": "/book/019-part_i_the_basics.html",
                "items": [
                    {
                        "text": "Chapter 2. Variables and Basic Types",
                        "link": "/book/020-chapter_2._variables_and_basic_types.html",
                        "items": [
                            {
                                "text": "Primitive Built-In Types",
                                "link": "/book/021-2.1._primitive_builtin_types.html"
                            },
                            {
                                "text": "Variables",
                                "link": "/book/022-2.2._variables.html"
                            },
                            {
                                "text": "Compound Types",
                                "link": "/book/023-2.3._compound_types.html"
                            },
                            {
                                "text": "const Qualifier",
                                "link": "/book/024-2.4._const_qualifier.html"
                            },
                            {
                                "text": "Dealing with Types",
                                "link": "/book/025-2.5._dealing_with_types.html"
                            },
                            {
                                "text": "Defining Our Own Data Structures",
                                "link": "/book/026-2.6._defining_our_own_data_structures.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/027-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/028-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 3. Strings, Vectors, and Arrays",
                        "link": "/book/029-chapter_3._strings_vectors_and_arrays.html",
                        "items": [
                            {
                                "text": "Namespace using Declarations",
                                "link": "/book/030-3.1._namespace_using_declarations.html"
                            },
                            {
                                "text": "Library string Type",
                                "link": "/book/031-3.2._library_string_type.html"
                            },
                            {
                                "text": "Library vector Type",
                                "link": "/book/032-3.3._library_vector_type.html"
                            },
                            {
                                "text": "Introducing Iterators",
                                "link": "/book/033-3.4._introducing_iterators.html"
                            },
                            {
                                "text": "Arrays",
                                "link": "/book/034-3.5._arrays.html"
                            },
                            {
                                "text": "Multidimensional Arrays",
                                "link": "/book/035-3.6._multidimensional_arrays.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/036-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/037-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 4. Expressions",
                        "link": "/book/038-chapter_4._expressions.html",
                        "items": [
                            {
                                "text": "Fundamentals",
                                "link": "/book/039-4.1._fundamentals.html"
                            },
                            {
                                "text": "Arithmetic Operators",
                                "link": "/book/040-4.2._arithmetic_operators.html"
                            },
                            {
                                "text": "Logical and Relational Operators",
                                "link": "/book/041-4.3._logical_and_relational_operators.html"
                            },
                            {
                                "text": "Assignment Operators",
                                "link": "/book/042-4.4._assignment_operators.html"
                            },
                            {
                                "text": "Increment and Decrement Operators",
                                "link": "/book/043-4.5._increment_and_decrement_operators.html"
                            },
                            {
                                "text": "The Member Access Operators",
                                "link": "/book/044-4.6._the_member_access_operators.html"
                            },
                            {
                                "text": "The Conditional Operator",
                                "link": "/book/045-4.7._the_conditional_operator.html"
                            },
                            {
                                "text": "The Bitwise Operators",
                                "link": "/book/046-4.8._the_bitwise_operators.html"
                            },
                            {
                                "text": "The sizeof Operator",
                                "link": "/book/047-4.9._the_sizeof_operator.html"
                            },
                            {
                                "text": "Comma Operator",
                                "link": "/book/048-4.10._comma_operator.html"
                            },
                            {
                                "text": "Type Conversions",
                                "link": "/book/049-4.11._type_conversions.html"
                            },
                            {
                                "text": "Operator Precedence Table",
                                "link": "/book/050-4.12._operator_precedence_table.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/051-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/052-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 5. Statements",
                        "link": "/book/053-chapter_5._statements.html",
                        "items": [
                            {
                                "text": "Simple Statements",
                                "link": "/book/054-5.1._simple_statements.html"
                            },
                            {
                                "text": "Statement Scope",
                                "link": "/book/055-5.2._statement_scope.html"
                            },
                            {
                                "text": "Conditional Statements",
                                "link": "/book/056-5.3._conditional_statements.html"
                            },
                            {
                                "text": "Iterative Statements",
                                "link": "/book/057-5.4._iterative_statements.html"
                            },
                            {
                                "text": "Jump Statements",
                                "link": "/book/058-5.5._jump_statements.html"
                            },
                            {
                                "text": "try Blocks and Exception Handling",
                                "link": "/book/059-5.6._try_blocks_and_exception_handling.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/060-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/061-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 6. Functions",
                        "link": "/book/062-chapter_6._functions.html",
                        "items": [
                            {
                                "text": "Function Basics",
                                "link": "/book/063-6.1._function_basics.html"
                            },
                            {
                                "text": "Argument Passing",
                                "link": "/book/064-6.2._argument_passing.html"
                            },
                            {
                                "text": "Return Types and the return Statement",
                                "link": "/book/065-6.3._return_types_and_the_return_statement.html"
                            },
                            {
                                "text": "Overloaded Functions",
                                "link": "/book/066-6.4._overloaded_functions.html"
                            },
                            {
                                "text": "Features for Specialized Uses",
                                "link": "/book/067-6.5._features_for_specialized_uses.html"
                            },
                            {
                                "text": "Function Matching",
                                "link": "/book/068-6.6._function_matching.html"
                            },
                            {
                                "text": "Pointers to Functions",
                                "link": "/book/069-6.7._pointers_to_functions.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/070-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/071-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 7. Classes",
                        "link": "/book/072-chapter_7._classes.html",
                        "items": [
                            {
                                "text": "Defining Abstract Data Types",
                                "link": "/book/073-7.1._defining_abstract_data_types.html"
                            },
                            {
                                "text": "Access Control and Encapsulation",
                                "link": "/book/074-7.2._access_control_and_encapsulation.html"
                            },
                            {
                                "text": "Additional Class Features",
                                "link": "/book/075-7.3._additional_class_features.html"
                            },
                            {
                                "text": "Class Scope",
                                "link": "/book/076-7.4._class_scope.html"
                            },
                            {
                                "text": "Constructors Revisited",
                                "link": "/book/077-7.5._constructors_revisited.html"
                            },
                            {
                                "text": "Static Class Members",
                                "link": "/book/078-7.6._static_class_members.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/079-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/080-defined_terms.html"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Part II: The C++ Library",
                "link": "/book/081-part_ii_the_cpp_library.html",
                "items": [
                    {
                        "text": "Chapter 8. The IO Library",
                        "link": "/book/082-chapter_8._the_io_library.html",
                        "items": [
                            {
                                "text": "The IO Classes",
                                "link": "/book/083-8.1._the_io_classes.html"
                            },
                            {
                                "text": "File Input and Output",
                                "link": "/book/084-8.2._file_input_and_output.html"
                            },
                            {
                                "text": "string Streams",
                                "link": "/book/085-8.3._string_streams.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/086-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/087-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 9. Sequential Containers",
                        "link": "/book/088-chapter_9._sequential_containers.html",
                        "items": [
                            {
                                "text": "Overview of the Sequential Containers",
                                "link": "/book/089-9.1._overview_of_the_sequential_containers.html"
                            },
                            {
                                "text": "Container Library Overview",
                                "link": "/book/090-9.2._container_library_overview.html"
                            },
                            {
                                "text": "Sequential Container Operations",
                                "link": "/book/091-9.3._sequential_container_operations.html"
                            },
                            {
                                "text": "How a vector Grows",
                                "link": "/book/092-9.4._how_a_vector_grows.html"
                            },
                            {
                                "text": "Additional string Operations",
                                "link": "/book/093-9.5._additional_string_operations.html"
                            },
                            {
                                "text": "Container Adaptors",
                                "link": "/book/094-9.6._container_adaptors.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/095-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/096-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 10. Generic Algorithms",
                        "link": "/book/097-chapter_10._generic_algorithms.html",
                        "items": [
                            {
                                "text": "Overview",
                                "link": "/book/098-10.1._overview.html"
                            },
                            {
                                "text": "A First Look at the Algorithms",
                                "link": "/book/099-10.2._a_first_look_at_the_algorithms.html"
                            },
                            {
                                "text": "Customizing Operations",
                                "link": "/book/100-10.3._customizing_operations.html"
                            },
                            {
                                "text": "Revisiting Iterators",
                                "link": "/book/101-10.4._revisiting_iterators.html"
                            },
                            {
                                "text": "Structure of Generic Algorithms",
                                "link": "/book/102-10.5._structure_of_generic_algorithms.html"
                            },
                            {
                                "text": "Container-Specific Algorithms",
                                "link": "/book/103-10.6._containerspecific_algorithms.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/104-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/105-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 11. Associative Containers",
                        "link": "/book/106-chapter_11._associative_containers.html",
                        "items": [
                            {
                                "text": "Using an Associative Container",
                                "link": "/book/107-11.1._using_an_associative_container.html"
                            },
                            {
                                "text": "Overview of the Associative Containers",
                                "link": "/book/108-11.2._overview_of_the_associative_containers.html"
                            },
                            {
                                "text": "Operations on Associative Containers",
                                "link": "/book/109-11.3._operations_on_associative_containers.html"
                            },
                            {
                                "text": "The Unordered Containers",
                                "link": "/book/110-11.4._the_unordered_containers.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/111-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/112-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 12. Dynamic Memory",
                        "link": "/book/113-chapter_12._dynamic_memory.html",
                        "items": [
                            {
                                "text": "Dynamic Memory and Smart Pointers",
                                "link": "/book/114-12.1._dynamic_memory_and_smart_pointers.html"
                            },
                            {
                                "text": "Dynamic Arrays",
                                "link": "/book/115-12.2._dynamic_arrays.html"
                            },
                            {
                                "text": "Using the Library: A Text-Query Program",
                                "link": "/book/116-12.3._using_the_library_a_textquery_program.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/117-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/118-defined_terms.html"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Part III: Tools for Class Authors",
                "link": "/book/119-part_iii_tools_for_class_authors.html",
                "items": [
                    {
                        "text": "Chapter 13. Copy Control",
                        "link": "/book/120-chapter_13._copy_control.html",
                        "items": [
                            {
                                "text": "Copy Assign and Destroy",
                                "link": "/book/121-13.1._copy_assign_and_destroy.html"
                            },
                            {
                                "text": "Copy Control and Resource Management",
                                "link": "/book/122-13.2._copy_control_and_resource_management.html"
                            },
                            {
                                "text": "Swap",
                                "link": "/book/123-13.3._swap.html"
                            },
                            {
                                "text": "A Copy-Control Example",
                                "link": "/book/124-13.4._a_copycontrol_example.html"
                            },
                            {
                                "text": "Classes That Manage Dynamic Memory",
                                "link": "/book/125-13.5._classes_that_manage_dynamic_memory.html"
                            },
                            {
                                "text": "Moving Objects",
                                "link": "/book/126-13.6._moving_objects.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/127-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/128-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 14. Overloaded Operations and Conversions",
                        "link": "/book/129-chapter_14._overloaded_operations_and_conversions.html",
                        "items": [
                            {
                                "text": "Basic Concepts",
                                "link": "/book/130-14.1._basic_concepts.html"
                            },
                            {
                                "text": "Input and Output Operators",
                                "link": "/book/131-14.2._input_and_output_operators.html"
                            },
                            {
                                "text": "Arithmetic and Relational Operators",
                                "link": "/book/132-14.3._arithmetic_and_relational_operators.html"
                            },
                            {
                                "text": "Assignment Operators",
                                "link": "/book/133-14.4._assignment_operators.html"
                            },
                            {
                                "text": "Subscript Operator",
                                "link": "/book/134-14.5._subscript_operator.html"
                            },
                            {
                                "text": "Increment and Decrement Operators",
                                "link": "/book/135-14.6._increment_and_decrement_operators.html"
                            },
                            {
                                "text": "Member Access Operators",
                                "link": "/book/136-14.7._member_access_operators.html"
                            },
                            {
                                "text": "Function-Call Operator",
                                "link": "/book/137-14.8._functioncall_operator.html"
                            },
                            {
                                "text": "Overloading Conversions and Operators",
                                "link": "/book/138-14.9._overloading_conversions_and_operators.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/139-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/140-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 15. Object-Oriented Programming",
                        "link": "/book/141-chapter_15._objectoriented_programming.html",
                        "items": [
                            {
                                "text": "OOP: An Overview",
                                "link": "/book/142-15.1._oop_an_overview.html"
                            },
                            {
                                "text": "Defining Base and Derived Classes",
                                "link": "/book/143-15.2._defining_base_and_derived_classes.html"
                            },
                            {
                                "text": "Virtual Functions",
                                "link": "/book/144-15.3._virtual_functions.html"
                            },
                            {
                                "text": "Abstract Base Classes",
                                "link": "/book/145-15.4._abstract_base_classes.html"
                            },
                            {
                                "text": "Access Control and Inheritance",
                                "link": "/book/146-15.5._access_control_and_inheritance.html"
                            },
                            {
                                "text": "Class Scope Under Inheritance",
                                "link": "/book/147-15.6._class_scope_under_inheritance.html"
                            },
                            {
                                "text": "Constructors and Copy Control",
                                "link": "/book/148-15.7._constructors_and_copy_control.html"
                            },
                            {
                                "text": "Containers and Inheritance",
                                "link": "/book/149-15.8._containers_and_inheritance.html"
                            },
                            {
                                "text": "Text Queries Revisited",
                                "link": "/book/150-15.9._text_queries_revisited.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/151-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/152-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 16. Templates and Generic Programming",
                        "link": "/book/153-chapter_16._templates_and_generic_programming.html",
                        "items": [
                            {
                                "text": "Defining a Template",
                                "link": "/book/154-16.1._defining_a_template.html"
                            },
                            {
                                "text": "Template Argument Deduction",
                                "link": "/book/155-16.2._template_argument_deduction.html"
                            },
                            {
                                "text": "Overloading and Templates",
                                "link": "/book/156-16.3._overloading_and_templates.html"
                            },
                            {
                                "text": "Variadic Templates",
                                "link": "/book/157-16.4._variadic_templates.html"
                            },
                            {
                                "text": "Template Specializations",
                                "link": "/book/158-16.5._template_specializations.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/159-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/160-defined_terms.html"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Part IV: Advanced Topics",
                "link": "/book/161-part_iv_advanced_topics.html",
                "items": [
                    {
                        "text": "Chapter 17. Specialized Library Facilities",
                        "link": "/book/162-chapter_17._specialized_library_facilities.html",
                        "items": [
                            {
                                "text": "The tuple Type",
                                "link": "/book/163-17.1._the_tuple_type.html"
                            },
                            {
                                "text": "The bitset Type",
                                "link": "/book/164-17.2._the_bitset_type.html"
                            },
                            {
                                "text": "Regular Expressions",
                                "link": "/book/165-17.3._regular_expressions.html"
                            },
                            {
                                "text": "Random Numbers",
                                "link": "/book/166-17.4._random_numbers.html"
                            },
                            {
                                "text": "The IO Library Revisited",
                                "link": "/book/167-17.5._the_io_library_revisited.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/168-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/169-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 18. Tools for Large Programs",
                        "link": "/book/170-chapter_18._tools_for_large_programs.html",
                        "items": [
                            {
                                "text": "Exception Handling",
                                "link": "/book/171-18.1._exception_handling.html"
                            },
                            {
                                "text": "Namespaces",
                                "link": "/book/172-18.2._namespaces.html"
                            },
                            {
                                "text": "Multiple and Virtual Inheritance",
                                "link": "/book/173-18.3._multiple_and_virtual_inheritance.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/174-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/175-defined_terms.html"
                            }
                        ]
                    },
                    {
                        "text": "Chapter 19. Specialized Tools and Techniques",
                        "link": "/book/176-chapter_19._specialized_tools_and_techniques.html",
                        "items": [
                            {
                                "text": "Controlling Memory Allocation",
                                "link": "/book/177-19.1._controlling_memory_allocation.html"
                            },
                            {
                                "text": "Run-Time Type Identification",
                                "link": "/book/178-19.2._runtime_type_identification.html"
                            },
                            {
                                "text": "Enumerations",
                                "link": "/book/179-19.3._enumerations.html"
                            },
                            {
                                "text": "Pointer to Class Member",
                                "link": "/book/180-19.4._pointer_to_class_member.html"
                            },
                            {
                                "text": "Nested Classes",
                                "link": "/book/181-19.5._nested_classes.html"
                            },
                            {
                                "text": "union: A Space-Saving Class",
                                "link": "/book/182-19.6._union_a_spacesaving_class.html"
                            },
                            {
                                "text": "Local Classes",
                                "link": "/book/183-19.7._local_classes.html"
                            },
                            {
                                "text": "Inherently Non-Portable Features",
                                "link": "/book/184-19.8._inherently_nonportable_features.html"
                            },
                            {
                                "text": "Chapter Summary",
                                "link": "/book/185-chapter_summary.html"
                            },
                            {
                                "text": "Defined Terms",
                                "link": "/book/186-defined_terms.html"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Appendix A. The Library",
                "link": "/book/187-appendix_a._the_library.html",
                "items": [
                    {
                        "text": "A.1. Library Names and Headers",
                        "link": "/book/188-a.1._library_names_and_headers.html"
                    },
                    {
                        "text": "A.2. A Brief Tour of the Algorithms",
                        "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html",
                        "items": [
                            {
                                "text": "A.2.1 Algorithms to Find an Object",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5418543"
                            },
                            {
                                "text": "A.2.2 Other Read-Only Algorithms",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5427759"
                            },
                            {
                                "text": "A.2.3 Binary Search Algorithms",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5431685"
                            },
                            {
                                "text": "A.2.4 Algorithms That Write Container Elements",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5437730"
                            },
                            {
                                "text": "A.2.5 Partitioning and Sorting Algorithms",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5451118"
                            },
                            {
                                "text": "A.2.6 General Reordering Operations",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5464459"
                            },
                            {
                                "text": "A.2.7 Permutation Algorithms",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5472363"
                            },
                            {
                                "text": "A.2.8 Set Algorithms for Sorted Sequences",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5478694"
                            },
                            {
                                "text": "A.2.9 Minimum and Maximum Values",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5484033"
                            },
                            {
                                "text": "A.2.10 Numeric Algorithms",
                                "link": "/book/189-a.2._a_brief_tour_of_the_algorithms.html#filepos5490698"
                            }
                        ]
                    },
                    {
                        "text": "A.3. Random Numbers",
                        "link": "/book/190-a.3._random_numbers.html",
                        "items": [
                            {
                                "text": "A.3.1 Random Number Distributions",
                                "link": "/book/190-a.3._random_numbers.html#filepos5497410"
                            },
                            {
                                "text": "A.3.2 Random Number Engines",
                                "link": "/book/190-a.3._random_numbers.html#filepos5515213"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Index",
                "link": "/book/191-index.html",
                "items": [
                    {
                        "text": "What's new in C++11",
                        "link": "/book/192-whats_new_in_cpp11.html"
                    },
                    {
                        "text": "Symbols",
                        "link": "/book/193-symbols.html"
                    },
                    {
                        "text": "A",
                        "link": "/book/194-a.html"
                    },
                    {
                        "text": "B",
                        "link": "/book/195-b.html"
                    },
                    {
                        "text": "C",
                        "link": "/book/196-c.html"
                    },
                    {
                        "text": "D",
                        "link": "/book/197-d.html"
                    },
                    {
                        "text": "E",
                        "link": "/book/198-e.html"
                    },
                    {
                        "text": "F",
                        "link": "/book/199-f.html"
                    },
                    {
                        "text": "G",
                        "link": "/book/200-g.html"
                    },
                    {
                        "text": "H",
                        "link": "/book/201-h.html"
                    },
                    {
                        "text": "I",
                        "link": "/book/202-i.html"
                    },
                    {
                        "text": "K",
                        "link": "/book/203-k.html"
                    },
                    {
                        "text": "L",
                        "link": "/book/204-l.html"
                    },
                    {
                        "text": "M",
                        "link": "/book/205-m.html"
                    },
                    {
                        "text": "N",
                        "link": "/book/206-n.html"
                    },
                    {
                        "text": "O",
                        "link": "/book/207-o.html"
                    },
                    {
                        "text": "P",
                        "link": "/book/208-p.html"
                    },
                    {
                        "text": "Q",
                        "link": "/book/209-q.html"
                    },
                    {
                        "text": "R",
                        "link": "/book/210-r.html"
                    },
                    {
                        "text": "S",
                        "link": "/book/211-s.html"
                    },
                    {
                        "text": "T",
                        "link": "/book/212-t.html"
                    },
                    {
                        "text": "U",
                        "link": "/book/213-u.html"
                    },
                    {
                        "text": "V",
                        "link": "/book/214-v.html"
                    },
                    {
                        "text": "W",
                        "link": "/book/215-w.html"
                    },
                    {
                        "text": "X",
                        "link": "/book/216-x.html"
                    },
                    {
                        "text": "Z",
                        "link": "/book/217-z.html"
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/wxx9248/CPP-Primer-5th-Web-Edition"}
        ]
    }
})
