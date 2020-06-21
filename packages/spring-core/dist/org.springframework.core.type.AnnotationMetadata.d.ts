declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * Interface that defines abstract access to the annotations of a specific
                 * class, in a form that does not require that class to be loaded yet.
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @since 2.5
                 * @see StandardAnnotationMetadata
                 * @see org.springframework.core.type.classreading.MetadataReader#getAnnotationMetadata()
                 * @see AnnotatedTypeMetadata
                 */
                // @ts-ignore
                interface AnnotationMetadata extends org.springframework.core.type.ClassMetadata, org.springframework.core.type.AnnotatedTypeMetadata {
                    /**
                     * Get the fully qualified class names of all annotation types that
                     * are <em>present</em> on the underlying class.
                     * @return the annotation type names
                     */
                    // @ts-ignore
                    getAnnotationTypes(): Array<java.lang.String | string>
                    /**
                     * Get the fully qualified class names of all meta-annotation types that
                     * are <em>present</em> on the given annotation type on the underlying class.
                     * @param annotationName the fully qualified class name of the meta-annotation
                     *  type to look for
                     * @return the meta-annotation type names, or an empty set if none found
                     */
                    // @ts-ignore
                    getMetaAnnotationTypes(annotationName: java.lang.String | string): Array<java.lang.String | string>
                    /**
                     * Determine whether an annotation of the given type is <em>present</em> on
                     * the underlying class.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @return {#code true} if a matching annotation is present
                     */
                    // @ts-ignore
                    hasAnnotation(annotationName: java.lang.String | string): boolean
                    /**
                     * Determine whether the underlying class has an annotation that is itself
                     * annotated with the meta-annotation of the given type.
                     * @param metaAnnotationName the fully qualified class name of the
                     *  meta-annotation type to look for
                     * @return {#code true} if a matching meta-annotation is present
                     */
                    // @ts-ignore
                    hasMetaAnnotation(metaAnnotationName: java.lang.String | string): boolean
                    /**
                     * Determine whether the underlying class has any methods that are
                     * annotated (or meta-annotated) with the given annotation type.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     */
                    // @ts-ignore
                    hasAnnotatedMethods(annotationName: java.lang.String | string): boolean
                    /**
                     * Retrieve the method metadata for all methods that are annotated
                     * (or meta-annotated) with the given annotation type.
                     * <p>For any returned method, {@link MethodMetadata#isAnnotated} will
                     * return {@code true} for the given annotation type.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @return a set of {#link MethodMetadata} for methods that have a matching
                     *  annotation. The return value will be an empty set if no methods match
                     *  the annotation type.
                     */
                    // @ts-ignore
                    getAnnotatedMethods(annotationName: java.lang.String | string): Array<org.springframework.core.type.MethodMetadata>
                    /**
                     * Factory method to create a new {@link AnnotationMetadata} instance
                     * for the given class using standard reflection.
                     * @param type the class to introspect
                     * @return a new {#link AnnotationMetadata} instance
                     * @since 5.2
                     */
                    // @ts-ignore
                    introspect(type: java.lang.Class<any>): org.springframework.core.type.AnnotationMetadata
                }
            }
        }
    }
}
