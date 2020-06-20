declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * {@link MergedAnnotationSelector} implementations that provide various options
                 * for {@link MergedAnnotation} instances.
                 * @author Phillip Webb
                 * @since 5.2
                 * @see MergedAnnotations#get(Class, Predicate, MergedAnnotationSelector)
                 * @see MergedAnnotations#get(String, Predicate, MergedAnnotationSelector)
                 */
                // @ts-ignore
                class MergedAnnotationSelectors extends java.lang.Object {
                    /**
                     * Select the nearest annotation, i.e. the one with the lowest distance.
                     * @return a selector that picks the annotation with the lowest distance
                     */
                    // @ts-ignore
                    nearest<A extends java.lang.annotation.Annotation>(): org.springframework.core.annotation.MergedAnnotationSelector<A>
                    /**
                     * Select the first directly declared annotation when possible. If no direct
                     * annotations are declared then the nearest annotation is selected.
                     * @return a selector that picks the first directly declared annotation whenever possible
                     */
                    // @ts-ignore
                    firstDirectlyDeclared<A extends java.lang.annotation.Annotation>(): org.springframework.core.annotation.MergedAnnotationSelector<A>
                }
            }
        }
    }
}
