declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * {@link AnnotationMetadata} implementation that uses standard reflection
                 * to introspect a given {@link Class}.
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @since 2.5
                 */
                // @ts-ignore
                class StandardAnnotationMetadata extends org.springframework.core.type.StandardClassMetadata implements org.springframework.core.type.AnnotationMetadata {
                    /**
                     * Create a new {@code StandardAnnotationMetadata} wrapper for the given Class.
                     * @param introspectedClass the Class to introspect
                     * @see #StandardAnnotationMetadata(Class, boolean)
                     * @deprecated since 5.2 in favor of the factory method {#link AnnotationMetadata#introspect(Class)}
                     */
                    // @ts-ignore
                    constructor(introspectedClass: java.lang.Class<any>)
                    /**
                     * Create a new {@link StandardAnnotationMetadata} wrapper for the given Class,
                     * providing the option to return any nested annotations or annotation arrays in the
                     * form of {@link org.springframework.core.annotation.AnnotationAttributes} instead
                     * of actual {@link Annotation} instances.
                     * @param introspectedClass the Class to introspect
                     * @param nestedAnnotationsAsMap return nested annotations and annotation arrays as
                     *  {#link org.springframework.core.annotation.AnnotationAttributes} for compatibility
                     *  with ASM-based {@link AnnotationMetadata} implementations
                     * @since 3.1.1
                     * @deprecated since 5.2 in favor of the factory method {#link AnnotationMetadata#introspect(Class)}.
                     *  Use {@link MergedAnnotation#asMap(org.springframework.core.annotation.MergedAnnotation.Adapt...) MergedAnnotation.asMap}
                     *  from {@link #getAnnotations()} rather than {@link #getAnnotationAttributes(String)}
                     *  if {@code nestedAnnotationsAsMap} is {@code false}
                     */
                    // @ts-ignore
                    constructor(introspectedClass: java.lang.Class<any>, nestedAnnotationsAsMap: boolean)
                    // @ts-ignore
                    getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                    // @ts-ignore
                    getAnnotationTypes(): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getAnnotationAttributes(annotationName: string, classValuesAsString: boolean): java.util.Map<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    getAllAnnotationAttributes(annotationName: string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    hasAnnotatedMethods(annotationName: string): boolean
                    // @ts-ignore
                    getAnnotatedMethods(annotationName: string): java.util.Set<org.springframework.core.type.MethodMetadata>
                }
            }
        }
    }
}
