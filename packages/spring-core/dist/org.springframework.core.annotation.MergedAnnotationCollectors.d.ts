declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Collector implementations that provide various reduction operations for
                 * {@link MergedAnnotation} instances.
                 * @author Phillip Webb
                 * @since 5.2
                 */
                // @ts-ignore
                class MergedAnnotationCollectors extends java.lang.Object {
                    /**
                     * Create a new {@link Collector} that accumulates merged annotations to a
                     * {@link LinkedHashSet} containing {@linkplain MergedAnnotation#synthesize()
                     * synthesized} versions.
                     * @param <A> the annotation type
                     * @return a {#link Collector} which collects and synthesizes the
                     *  annotations into a {@link Set}
                     */
                    // @ts-ignore
                    toAnnotationSet<A extends java.lang.annotation.Annotation>(): java.util.stream.Collector<org.springframework.core.annotation.MergedAnnotation<A>, ?, java.util.Set<A>>
                    /**
                     * Create a new {@link Collector} that accumulates merged annotations to an
                     * {@link Annotation} array containing {@linkplain MergedAnnotation#synthesize()
                     * synthesized} versions.
                     * @param <A> the annotation type
                     * @return a {#link Collector} which collects and synthesizes the
                     *  annotations into an {@code Annotation[]}
                     * @see #toAnnotationArray(IntFunction)
                     */
                    // @ts-ignore
                    toAnnotationArray<A extends java.lang.annotation.Annotation>(): java.util.stream.Collector<org.springframework.core.annotation.MergedAnnotation<A>, ?, java.lang.annotation.Annotation[]>
                    /**
                     * Create a new {@link Collector} that accumulates merged annotations to an
                     * {@link Annotation} array containing {@linkplain MergedAnnotation#synthesize()
                     * synthesized} versions.
                     * @param <A> the annotation type
                     * @param <R> the resulting array type
                     * @param generator a function which produces a new array of the desired
                     *  type and the provided length
                     * @return a {#link Collector} which collects and synthesizes the
                     *  annotations into an annotation array
                     * @see #toAnnotationArray
                     */
                    // @ts-ignore
                    toAnnotationArray<R extends java.lang.annotation.Annotation, A extends R>(generator: java.util.function.IntFunction<R[]> | java.util.function$.IntFunction<R[]>): java.util.stream.Collector<org.springframework.core.annotation.MergedAnnotation<A>, ?, R[]>
                    /**
                     * Create a new {@link Collector} that accumulates merged annotations to an
                     * {@link MultiValueMap} with items {@linkplain MultiValueMap#add(Object, Object)
                     * added} from each merged annotation
                     * {@link MergedAnnotation#asMap(Adapt...) as a map}.
                     * @param <A> the annotation type
                     * @param adaptations the adaptations that should be applied to the annotation values
                     * @return a {#link Collector} which collects and synthesizes the
                     *  annotations into a {@link LinkedMultiValueMap}
                     * @see #toMultiValueMap(Function, MergedAnnotation.Adapt...)
                     */
                    // @ts-ignore
                    toMultiValueMap<A extends java.lang.annotation.Annotation>(...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): java.util.stream.Collector<org.springframework.core.annotation.MergedAnnotation<A>, ?, org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>>
                    /**
                     * Create a new {@link Collector} that accumulates merged annotations to an
                     * {@link MultiValueMap} with items {@linkplain MultiValueMap#add(Object, Object)
                     * added} from each merged annotation
                     * {@link MergedAnnotation#asMap(Adapt...) as a map}.
                     * @param <A> the annotation type
                     * @param adaptations the adaptations that should be applied to the annotation values
                     * @param finisher the finisher function for the new {#link MultiValueMap}
                     * @return a {#link Collector} which collects and synthesizes the
                     *  annotations into a {@link LinkedMultiValueMap}
                     * @see #toMultiValueMap(MergedAnnotation.Adapt...)
                     */
                    // @ts-ignore
                    toMultiValueMap<A extends java.lang.annotation.Annotation>(finisher: java.util.function.Function<org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>, org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>> | java.util.function$.Function<org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>, org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>>, ...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): java.util.stream.Collector<org.springframework.core.annotation.MergedAnnotation<A>, ?, org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>>
                }
            }
        }
    }
}
