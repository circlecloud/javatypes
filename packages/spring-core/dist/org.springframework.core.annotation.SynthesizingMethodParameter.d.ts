declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * A {@link MethodParameter} variant which synthesizes annotations that
                 * declare attribute aliases via {@link AliasFor @AliasFor}.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 4.2
                 * @see AnnotationUtils#synthesizeAnnotation
                 * @see AnnotationUtils#synthesizeAnnotationArray
                 */
                // @ts-ignore
                class SynthesizingMethodParameter extends org.springframework.core.MethodParameter {
                    /**
                     * Create a new {@code SynthesizingMethodParameter} for the given method,
                     * with nesting level 1.
                     * @param method the Method to specify a parameter for
                     * @param parameterIndex the index of the parameter: -1 for the method
                     *  return type; 0 for the first method parameter; 1 for the second method
                     *  parameter, etc.
                     */
                    // @ts-ignore
                    constructor(method: java.lang.reflect.Method, parameterIndex: number /*int*/)
                    /**
                     * Create a new {@code SynthesizingMethodParameter} for the given method.
                     * @param method the Method to specify a parameter for
                     * @param parameterIndex the index of the parameter: -1 for the method
                     *  return type; 0 for the first method parameter; 1 for the second method
                     *  parameter, etc.
                     * @param nestingLevel the nesting level of the target type
                     *  (typically 1; e.g. in case of a List of Lists, 1 would indicate the
                     *  nested List, whereas 2 would indicate the element of the nested List)
                     */
                    // @ts-ignore
                    constructor(method: java.lang.reflect.Method, parameterIndex: number /*int*/, nestingLevel: number /*int*/)
                    /**
                     * Create a new {@code SynthesizingMethodParameter} for the given constructor,
                     * with nesting level 1.
                     * @param constructor the Constructor to specify a parameter for
                     * @param parameterIndex the index of the parameter
                     */
                    // @ts-ignore
                    constructor(constructor: java.lang.reflect.Constructor<any>, parameterIndex: number /*int*/)
                    /**
                     * Create a new {@code SynthesizingMethodParameter} for the given constructor.
                     * @param constructor the Constructor to specify a parameter for
                     * @param parameterIndex the index of the parameter
                     * @param nestingLevel the nesting level of the target type
                     *  (typically 1; e.g. in case of a List of Lists, 1 would indicate the
                     *  nested List, whereas 2 would indicate the element of the nested List)
                     */
                    // @ts-ignore
                    constructor(constructor: java.lang.reflect.Constructor<any>, parameterIndex: number /*int*/, nestingLevel: number /*int*/)
                    /**
                     * Copy constructor, resulting in an independent {@code SynthesizingMethodParameter}
                     * based on the same metadata and cache state that the original object was in.
                     * @param original the original SynthesizingMethodParameter object to copy from
                     */
                    // @ts-ignore
                    constructor(original: org.springframework.core.annotation.SynthesizingMethodParameter)
                    // @ts-ignore
                    adaptAnnotation<A extends java.lang.annotation.Annotation>(annotation: A): A
                    // @ts-ignore
                    adaptAnnotationArray(annotations: java.lang.annotation.Annotation[]): java.lang.annotation.Annotation[]
                    // @ts-ignore
                    public clone(): org.springframework.core.annotation.SynthesizingMethodParameter
                    /**
                     * Create a new SynthesizingMethodParameter for the given method or constructor.
                     * <p>This is a convenience factory method for scenarios where a
                     * Method or Constructor reference is treated in a generic fashion.
                     * @param executable the Method or Constructor to specify a parameter for
                     * @param parameterIndex the index of the parameter
                     * @return the corresponding SynthesizingMethodParameter instance
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static forExecutable(executable: java.lang.reflect.Executable, parameterIndex: number /*int*/): org.springframework.core.annotation.SynthesizingMethodParameter
                    /**
                     * Create a new SynthesizingMethodParameter for the given parameter descriptor.
                     * <p>This is a convenience factory method for scenarios where a
                     * Java 8 {@link Parameter} descriptor is already available.
                     * @param parameter the parameter descriptor
                     * @return the corresponding SynthesizingMethodParameter instance
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static forParameter(parameter: java.lang.reflect.Parameter): org.springframework.core.annotation.SynthesizingMethodParameter
                }
            }
        }
    }
}
