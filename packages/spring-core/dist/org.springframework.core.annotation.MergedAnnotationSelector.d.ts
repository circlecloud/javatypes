declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Strategy interface used to select between two {@link MergedAnnotation}
                 * instances.
                 * @author Phillip Webb
                 * @since 5.2
                 * @param <A> the annotation type
                 * @see MergedAnnotationSelectors
                 */
                // @ts-ignore
                interface MergedAnnotationSelector<A extends java.lang.annotation.Annotation> {
                    /**
                     * Determine if the existing annotation is known to be the best
                     * candidate and any subsequent selections may be skipped.
                     * @param annotation the annotation to check
                     * @return {#code true} if the annotation is known to be the best candidate
                     */
                    // @ts-ignore
                    isBestCandidate(annotation: org.springframework.core.annotation.MergedAnnotation<A>): boolean
                    /**
                     * Select the annotation that should be used.
                     * @param existing an existing annotation returned from an earlier result
                     * @param candidate a candidate annotation that may be better suited
                     * @return the most appropriate annotation from the {#code existing} or
                     *  {@code candidate}
                     */
                    // @ts-ignore
                    select(existing: org.springframework.core.annotation.MergedAnnotation<A>, candidate: org.springframework.core.annotation.MergedAnnotation<A>): org.springframework.core.annotation.MergedAnnotation<A>
                }
            }
        }
    }
}
