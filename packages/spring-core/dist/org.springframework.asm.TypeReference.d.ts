declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A reference to a type appearing in a class, field or method declaration, or on an instruction.
             * Such a reference designates the part of the class where the referenced type is appearing (e.g. an
             * 'extends', 'implements' or 'throws' clause, a 'new' instruction, a 'catch' clause, a type cast, a
             * local variable declaration, etc).
             * @author Eric Bruneton
             */
            // @ts-ignore
            class TypeReference extends java.lang.Object {
                /**
                 * Constructs a new TypeReference.
                 * @param typeRef the int encoded value of the type reference, as received in a visit method
                 *      related to type annotations, such as {#link ClassVisitor#visitTypeAnnotation}.
                 */
                // @ts-ignore
                constructor(typeRef: number /*int*/)
                /**
                 * The sort of type references that target a type parameter of a generic class. See {@link
                 * #getSort}.
                 */
                // @ts-ignore
                public static readonly CLASS_TYPE_PARAMETER: number /*int*/
                /**
                 * The sort of type references that target a type parameter of a generic method. See {@link
                 * #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_TYPE_PARAMETER: number /*int*/
                /**
                 * The sort of type references that target the super class of a class or one of the interfaces it
                 * implements. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CLASS_EXTENDS: number /*int*/
                /**
                 * The sort of type references that target a bound of a type parameter of a generic class. See
                 * {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CLASS_TYPE_PARAMETER_BOUND: number /*int*/
                /**
                 * The sort of type references that target a bound of a type parameter of a generic method. See
                 * {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_TYPE_PARAMETER_BOUND: number /*int*/
                /**
                 * The sort of type references that target the type of a field. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly FIELD: number /*int*/
                /**
                 * The sort of type references that target the return type of a method. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_RETURN: number /*int*/
                /**
                 * The sort of type references that target the receiver type of a method. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_RECEIVER: number /*int*/
                /**
                 * The sort of type references that target the type of a formal parameter of a method. See {@link
                 * #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_FORMAL_PARAMETER: number /*int*/
                /**
                 * The sort of type references that target the type of an exception declared in the throws clause
                 * of a method. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly THROWS: number /*int*/
                /**
                 * The sort of type references that target the type of a local variable in a method. See {@link
                 * #getSort}.
                 */
                // @ts-ignore
                public static readonly LOCAL_VARIABLE: number /*int*/
                /**
                 * The sort of type references that target the type of a resource variable in a method. See {@link
                 * #getSort}.
                 */
                // @ts-ignore
                public static readonly RESOURCE_VARIABLE: number /*int*/
                /**
                 * The sort of type references that target the type of the exception of a 'catch' clause in a
                 * method. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly EXCEPTION_PARAMETER: number /*int*/
                /**
                 * The sort of type references that target the type declared in an 'instanceof' instruction. See
                 * {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly INSTANCEOF: number /*int*/
                /**
                 * The sort of type references that target the type of the object created by a 'new' instruction.
                 * See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly NEW: number /*int*/
                /**
                 * The sort of type references that target the receiver type of a constructor reference. See
                 * {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CONSTRUCTOR_REFERENCE: number /*int*/
                /**
                 * The sort of type references that target the receiver type of a method reference. See {@link
                 * #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_REFERENCE: number /*int*/
                /**
                 * The sort of type references that target the type declared in an explicit or implicit cast
                 * instruction. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CAST: number /*int*/
                /**
                 * The sort of type references that target a type parameter of a generic constructor in a
                 * constructor call. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT: number /*int*/
                /**
                 * The sort of type references that target a type parameter of a generic method in a method call.
                 * See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_INVOCATION_TYPE_ARGUMENT: number /*int*/
                /**
                 * The sort of type references that target a type parameter of a generic constructor in a
                 * constructor reference. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT: number /*int*/
                /**
                 * The sort of type references that target a type parameter of a generic method in a method
                 * reference. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD_REFERENCE_TYPE_ARGUMENT: number /*int*/
                /**
                 * Returns a type reference of the given sort.
                 * @param sort one of {#link #FIELD}, {@link #METHOD_RETURN}, {@link #METHOD_RECEIVER}, {@link
                 *      #LOCAL_VARIABLE}, {@link #RESOURCE_VARIABLE}, {@link #INSTANCEOF}, {@link #NEW}, {@link
                 *      #CONSTRUCTOR_REFERENCE}, or {@link #METHOD_REFERENCE}.
                 * @return a type reference of the given sort.
                 */
                // @ts-ignore
                public static newTypeReference(sort: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to a type parameter of a generic class or method.
                 * @param sort one of {#link #CLASS_TYPE_PARAMETER} or {@link #METHOD_TYPE_PARAMETER}.
                 * @param paramIndex the type parameter index.
                 * @return a reference to the given generic class or method type parameter.
                 */
                // @ts-ignore
                public static newTypeParameterReference(sort: number /*int*/, paramIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to a type parameter bound of a generic class or method.
                 * @param sort one of {#link #CLASS_TYPE_PARAMETER} or {@link #METHOD_TYPE_PARAMETER}.
                 * @param paramIndex the type parameter index.
                 * @param boundIndex the type bound index within the above type parameters.
                 * @return a reference to the given generic class or method type parameter bound.
                 */
                // @ts-ignore
                public static newTypeParameterBoundReference(sort: number /*int*/, paramIndex: number /*int*/, boundIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to the super class or to an interface of the 'implements' clause of a
                 * class.
                 * @param itfIndex the index of an interface in the 'implements' clause of a class, or -1 to
                 *      reference the super class of the class.
                 * @return a reference to the given super type of a class.
                 */
                // @ts-ignore
                public static newSuperTypeReference(itfIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to the type of a formal parameter of a method.
                 * @param paramIndex the formal parameter index.
                 * @return a reference to the type of the given method formal parameter.
                 */
                // @ts-ignore
                public static newFormalParameterReference(paramIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to the type of an exception, in a 'throws' clause of a method.
                 * @param exceptionIndex the index of an exception in a 'throws' clause of a method.
                 * @return a reference to the type of the given exception.
                 */
                // @ts-ignore
                public static newExceptionReference(exceptionIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to the type of the exception declared in a 'catch' clause of a method.
                 * @param tryCatchBlockIndex the index of a try catch block (using the order in which they are
                 *      visited with visitTryCatchBlock).
                 * @return a reference to the type of the given exception.
                 */
                // @ts-ignore
                public static newTryCatchReference(tryCatchBlockIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns a reference to the type of a type argument in a constructor or method call or
                 * reference.
                 * @param sort one of {#link #CAST}, {@link #CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT}, {@link
                 *      #METHOD_INVOCATION_TYPE_ARGUMENT}, {@link #CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT}, or {@link
                 *      #METHOD_REFERENCE_TYPE_ARGUMENT}.
                 * @param argIndex the type argument index.
                 * @return a reference to the type of the given type argument.
                 */
                // @ts-ignore
                public static newTypeArgumentReference(sort: number /*int*/, argIndex: number /*int*/): org.springframework.asm.TypeReference
                /**
                 * Returns the sort of this type reference.
                 * @return one of {#link #CLASS_TYPE_PARAMETER}, {@link #METHOD_TYPE_PARAMETER}, {@link
                 *      #CLASS_EXTENDS}, {@link #CLASS_TYPE_PARAMETER_BOUND}, {@link #METHOD_TYPE_PARAMETER_BOUND},
                 *      {@link #FIELD}, {@link #METHOD_RETURN}, {@link #METHOD_RECEIVER}, {@link
                 *      #METHOD_FORMAL_PARAMETER}, {@link #THROWS}, {@link #LOCAL_VARIABLE}, {@link
                 *      #RESOURCE_VARIABLE}, {@link #EXCEPTION_PARAMETER}, {@link #INSTANCEOF}, {@link #NEW},
                 *      {@link #CONSTRUCTOR_REFERENCE}, {@link #METHOD_REFERENCE}, {@link #CAST}, {@link
                 *      #CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT}, {@link #METHOD_INVOCATION_TYPE_ARGUMENT}, {@link
                 *      #CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT}, or {@link #METHOD_REFERENCE_TYPE_ARGUMENT}.
                 */
                // @ts-ignore
                public getSort(): number /*int*/
                /**
                 * Returns the index of the type parameter referenced by this type reference. This method must
                 * only be used for type references whose sort is {@link #CLASS_TYPE_PARAMETER}, {@link
                 * #METHOD_TYPE_PARAMETER}, {@link #CLASS_TYPE_PARAMETER_BOUND} or {@link
                 * #METHOD_TYPE_PARAMETER_BOUND}.
                 * @return a type parameter index.
                 */
                // @ts-ignore
                public getTypeParameterIndex(): number /*int*/
                /**
                 * Returns the index of the type parameter bound, within the type parameter {@link
                 * #getTypeParameterIndex}, referenced by this type reference. This method must only be used for
                 * type references whose sort is {@link #CLASS_TYPE_PARAMETER_BOUND} or {@link
                 * #METHOD_TYPE_PARAMETER_BOUND}.
                 * @return a type parameter bound index.
                 */
                // @ts-ignore
                public getTypeParameterBoundIndex(): number /*int*/
                /**
                 * Returns the index of the "super type" of a class that is referenced by this type reference.
                 * This method must only be used for type references whose sort is {@link #CLASS_EXTENDS}.
                 * @return the index of an interface in the 'implements' clause of a class, or -1 if this type
                 *      reference references the type of the super class.
                 */
                // @ts-ignore
                public getSuperTypeIndex(): number /*int*/
                /**
                 * Returns the index of the formal parameter whose type is referenced by this type reference. This
                 * method must only be used for type references whose sort is {@link #METHOD_FORMAL_PARAMETER}.
                 * @return a formal parameter index.
                 */
                // @ts-ignore
                public getFormalParameterIndex(): number /*int*/
                /**
                 * Returns the index of the exception, in a 'throws' clause of a method, whose type is referenced
                 * by this type reference. This method must only be used for type references whose sort is {@link
                 * #THROWS}.
                 * @return the index of an exception in the 'throws' clause of a method.
                 */
                // @ts-ignore
                public getExceptionIndex(): number /*int*/
                /**
                 * Returns the index of the try catch block (using the order in which they are visited with
                 * visitTryCatchBlock), whose 'catch' type is referenced by this type reference. This method must
                 * only be used for type references whose sort is {@link #EXCEPTION_PARAMETER} .
                 * @return the index of an exception in the 'throws' clause of a method.
                 */
                // @ts-ignore
                public getTryCatchBlockIndex(): number /*int*/
                /**
                 * Returns the index of the type argument referenced by this type reference. This method must only
                 * be used for type references whose sort is {@link #CAST}, {@link
                 * #CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT}, {@link #METHOD_INVOCATION_TYPE_ARGUMENT}, {@link
                 * #CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT}, or {@link #METHOD_REFERENCE_TYPE_ARGUMENT}.
                 * @return a type parameter index.
                 */
                // @ts-ignore
                public getTypeArgumentIndex(): number /*int*/
                /**
                 * Returns the int encoded value of this type reference, suitable for use in visit methods related
                 * to type annotations, like visitTypeAnnotation.
                 * @return the int encoded value of this type reference.
                 */
                // @ts-ignore
                public getValue(): number /*int*/
            }
        }
    }
}
