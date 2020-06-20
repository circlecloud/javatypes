declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Callback interface that can be used to filter specific annotation types.
                 * <p>Note that the {@link MergedAnnotations} model (which this interface has been
                 * designed for) always ignores lang annotations according to the {@link #PLAIN}
                 * filter (for efficiency reasons). Any additional filters and even custom filter
                 * implementations apply within this boundary and may only narrow further from here.
                 * @author Phillip Webb
                 * @author Juergen Hoeller
                 * @since 5.2
                 * @see MergedAnnotations
                 */
                // @ts-ignore
                interface AnnotationFilter {
                    /**
                     * {@link AnnotationFilter} that matches annotations in the
                     * {@code java.lang} and {@code org.springframework.lang} packages
                     * and their subpackages.
                     * <p>This is the default filter in the {@link MergedAnnotations} model.
                     */
                    // @ts-ignore
                    
                    /**
                     * {@link AnnotationFilter} that matches annotations in the
                     * {@code java} and {@code javax} packages and their subpackages.
                     */
                    // @ts-ignore
                    
                    /**
                     * {@link AnnotationFilter} that always matches and can be used when no
                     * relevant annotation types are expected to be present at all.
                     */
                    // @ts-ignore
                    
                    /**
                     * {@link AnnotationFilter} that never matches and can be used when no
                     * filtering is needed (allowing for any annotation types to be present).
                     * @deprecated as of 5.2.6 since the {#link MergedAnnotations} model
                     *  always ignores lang annotations according to the {@link #PLAIN} filter
                     *  (for efficiency reasons)
                     * @see #PLAIN
                     */
                    // @ts-ignore
                    
                    /**
                     * Test if the given annotation matches the filter.
                     * @param annotation the annotation to test
                     * @return {#code true} if the annotation matches
                     */
                    // @ts-ignore
                    matches(annotation: java.lang.annotation.Annotation): boolean
                    /**
                     * Test if the given type matches the filter.
                     * @param type the annotation type to test
                     * @return {#code true} if the annotation matches
                     */
                    // @ts-ignore
                    matches(type: java.lang.Class<any>): boolean
                    /**
                     * Test if the given type name matches the filter.
                     * @param typeName the fully qualified class name of the annotation type to test
                     * @return {#code true} if the annotation matches
                     */
                    // @ts-ignore
                    matches(typeName: string): boolean
                    /**
                     * Create a new {@link AnnotationFilter} that matches annotations in the
                     * specified packages.
                     * @param packages the annotation packages that should match
                     * @return a new {#link AnnotationFilter} instance
                     */
                    // @ts-ignore
                    packages(...packages: string[]): org.springframework.core.annotation.AnnotationFilter
                }
            }
        }
    }
}
