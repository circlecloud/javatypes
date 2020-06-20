declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Predicate implementations that provide various test operations for
                 * {@link MergedAnnotation MergedAnnotations}.
                 * @author Phillip Webb
                 * @since 5.2
                 */
                // @ts-ignore
                class MergedAnnotationPredicates extends java.lang.Object {
                    /**
                     * Create a new {@link Predicate} that evaluates to {@code true} if the name of the
                     * {@linkplain MergedAnnotation#getType() merged annotation type} is contained in
                     * the specified array.
                     * @param <A> the annotation type
                     * @param typeNames the names that should be matched
                     * @return a {#link Predicate} to test the annotation type
                     */
                    // @ts-ignore
                    typeIn<A extends java.lang.annotation.Annotation>(...typeNames: string[]): java.util.function.Predicate<org.springframework.core.annotation.MergedAnnotation<? extends A>>
                    /**
                     * Create a new {@link Predicate} that evaluates to {@code true} if the
                     * {@linkplain MergedAnnotation#getType() merged annotation type} is contained in
                     * the specified array.
                     * @param <A> the annotation type
                     * @param types the types that should be matched
                     * @return a {#link Predicate} to test the annotation type
                     */
                    // @ts-ignore
                    typeIn<A extends java.lang.annotation.Annotation>(...types: java.lang.Class[]): java.util.function.Predicate<org.springframework.core.annotation.MergedAnnotation<? extends A>>
                    /**
                     * Create a new {@link Predicate} that evaluates to {@code true} if the
                     * {@linkplain MergedAnnotation#getType() merged annotation type} is contained in
                     * the specified collection.
                     * @param <A> the annotation type
                     * @param types the type names or classes that should be matched
                     * @return a {#link Predicate} to test the annotation type
                     */
                    // @ts-ignore
                    typeIn<A extends java.lang.annotation.Annotation>(types: Array<any>): java.util.function.Predicate<org.springframework.core.annotation.MergedAnnotation<? extends A>>
                    /**
                     * Create a new stateful, single use {@link Predicate} that matches only
                     * the first run of an extracted value. For example,
                     * {@code MergedAnnotationPredicates.firstRunOf(MergedAnnotation::distance)}
                     * will match the first annotation, and any subsequent runs that have the
                     * same distance.
                     * <p>NOTE: This predicate only matches the first run. Once the extracted
                     * value changes, the predicate always returns {@code false}. For example,
                     * if you have a set of annotations with distances {@code [1, 1, 2, 1]} then
                     * only the first two will match.
                     * @param valueExtractor function used to extract the value to check
                     * @return a {#link Predicate} that matches the first run of the extracted
                     *  values
                     */
                    // @ts-ignore
                    firstRunOf<A extends java.lang.annotation.Annotation>(valueExtractor: java.util.function.Function<any super org.springframework.core.annotation.MergedAnnotation<A>, ?> | java.util.function$.Function<? super org.springframework.core.annotation.MergedAnnotation<A>, ?>): java.util.function.Predicate<org.springframework.core.annotation.MergedAnnotation<A>>
                    /**
                     * Create a new stateful, single use {@link Predicate} that matches
                     * annotations that are unique based on the extracted key. For example
                     * {@code MergedAnnotationPredicates.unique(MergedAnnotation::getType)} will
                     * match the first time a unique type is encountered.
                     * @param keyExtractor function used to extract the key used to test for
                     *  uniqueness
                     * @return a {#link Predicate} that matches a unique annotation based on the
                     *  extracted key
                     */
                    // @ts-ignore
                    unique<A extends java.lang.annotation.Annotation, K>(keyExtractor: java.util.function.Function<any super org.springframework.core.annotation.MergedAnnotation<A>, K> | java.util.function$.Function<? super org.springframework.core.annotation.MergedAnnotation<A>, K>): java.util.function.Predicate<org.springframework.core.annotation.MergedAnnotation<A>>
                }
            }
        }
    }
}
