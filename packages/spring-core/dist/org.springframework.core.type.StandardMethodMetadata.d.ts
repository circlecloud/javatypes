declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * {@link MethodMetadata} implementation that uses standard reflection
                 * to introspect a given {@code Method}.
                 * @author Juergen Hoeller
                 * @author Mark Pollack
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @since 3.0
                 */
                // @ts-ignore
                class StandardMethodMetadata extends java.lang.Object implements org.springframework.core.type.MethodMetadata {
                    /**
                     * Create a new StandardMethodMetadata wrapper for the given Method.
                     * @param introspectedMethod the Method to introspect
                     * @deprecated since 5.2 in favor of obtaining instances via {#link AnnotationMetadata}
                     */
                    // @ts-ignore
                    constructor(introspectedMethod: java.lang.reflect.Method)
                    /**
                     * Create a new StandardMethodMetadata wrapper for the given Method,
                     * providing the option to return any nested annotations or annotation arrays in the
                     * form of {@link org.springframework.core.annotation.AnnotationAttributes} instead
                     * of actual {@link java.lang.annotation.Annotation} instances.
                     * @param introspectedMethod the Method to introspect
                     * @param nestedAnnotationsAsMap return nested annotations and annotation arrays as
                     *  {#link org.springframework.core.annotation.AnnotationAttributes} for compatibility
                     *  with ASM-based {@link AnnotationMetadata} implementations
                     * @since 3.1.1
                     * @deprecated since 5.2 in favor of obtaining instances via {#link AnnotationMetadata}
                     */
                    // @ts-ignore
                    constructor(introspectedMethod: java.lang.reflect.Method, nestedAnnotationsAsMap: boolean)
                    // @ts-ignore
                    public getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Return the underlying Method.
                     */
                    // @ts-ignore
                    public getIntrospectedMethod(): java.lang.reflect.Method
                    // @ts-ignore
                    public getMethodName(): string
                    // @ts-ignore
                    public getDeclaringClassName(): string
                    // @ts-ignore
                    public getReturnTypeName(): string
                    // @ts-ignore
                    public isAbstract(): boolean
                    // @ts-ignore
                    public isStatic(): boolean
                    // @ts-ignore
                    public isFinal(): boolean
                    // @ts-ignore
                    public isOverridable(): boolean
                    // @ts-ignore
                    public getAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getAllAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
