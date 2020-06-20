declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Provides access to a collection of merged annotations, usually obtained
                 * from a source such as a {@link Class} or {@link Method}.
                 * <p>Each merged annotation represents a view where the attribute values may be
                 * "merged" from different source values, typically:
                 * <ul>
                 * <li>Explicit and Implicit {@link AliasFor @AliasFor} declarations on one or
                 * more attributes within the annotation</li>
                 * <li>Explicit {@link AliasFor @AliasFor} declarations for a meta-annotation</li>
                 * <li>Convention based attribute aliases for a meta-annotation</li>
                 * <li>From a meta-annotation declaration</li>
                 * </ul>
                 * <p>For example, a {@code @PostMapping} annotation might be defined as follows:
                 * <pre class="code">
                 * &#064;Retention(RetentionPolicy.RUNTIME)
                 * &#064;RequestMapping(method = RequestMethod.POST)
                 * public &#064;interface PostMapping {
                 * &#064;AliasFor(attribute = "path")
                 * String[] value() default {};
                 * &#064;AliasFor(attribute = "value")
                 * String[] path() default {};
                 * }
                 * </pre>
                 * <p>If a method is annotated with {@code @PostMapping("/home")} it will contain
                 * merged annotations for both {@code @PostMapping} and the meta-annotation
                 * {@code @RequestMapping}. The merged view of the {@code @RequestMapping}
                 * annotation will contain the following attributes:
                 * <p><table border="1">
                 * <tr>
                 * <th>Name</th>
                 * <th>Value</th>
                 * <th>Source</th>
                 * </tr>
                 * <tr>
                 * <td>value</td>
                 * <td>"/home"</td>
                 * <td>Declared in {@code @PostMapping}</td>
                 * </tr>
                 * <tr>
                 * <td>path</td>
                 * <td>"/home"</td>
                 * <td>Explicit {@code @AliasFor}</td>
                 * </tr>
                 * <tr>
                 * <td>method</td>
                 * <td>RequestMethod.POST</td>
                 * <td>Declared in meta-annotation</td>
                 * </tr>
                 * </table>
                 * <p>{@link MergedAnnotations} can be obtained {@linkplain #from(AnnotatedElement)
                 * from} any Java {@link AnnotatedElement}. They may also be used for sources that
                 * don't use reflection (such as those that directly parse bytecode).
                 * <p>Different {@linkplain SearchStrategy search strategies} can be used to locate
                 * related source elements that contain the annotations to be aggregated. For
                 * example, {@link SearchStrategy#TYPE_HIERARCHY} will search both superclasses and
                 * implemented interfaces.
                 * <p>From a {@link MergedAnnotations} instance you can either
                 * {@linkplain #get(String) get} a single annotation, or {@linkplain #stream()
                 * stream all annotations} or just those that match {@linkplain #stream(String)
                 * a specific type}. You can also quickly tell if an annotation
                 * {@linkplain #isPresent(String) is present}.
                 * <p>Here are some typical examples:
                 * <pre class="code">
                 * // is an annotation present or meta-present?
                 * mergedAnnotations.isPresent(ExampleAnnotation.class);
                 * // get the merged "value" attribute of ExampleAnnotation (either directly or
                 * // meta-present)
                 * mergedAnnotations.get(ExampleAnnotation.class).getString("value");
                 * // get all meta-annotations but no directly present annotations
                 * mergedAnnotations.stream().filter(MergedAnnotation::isMetaPresent);
                 * // get all ExampleAnnotation declarations (including any meta-annotations) and
                 * // print the merged "value" attributes
                 * mergedAnnotations.stream(ExampleAnnotation.class)
                 * .map(mergedAnnotation -&gt; mergedAnnotation.getString("value"))
                 * .forEach(System.out::println);
                 * </pre>
                 * <p><b>NOTE: The {@code MergedAnnotations} API and its underlying model have
                 * been designed for composable annotations in Spring's common component model,
                 * with a focus on attribute aliasing and meta-annotation relationships.</b>
                 * There is no support for retrieving plain Java annotations with this API;
                 * please use standard Java reflection or Spring's {@link AnnotationUtils}
                 * for simple annotation retrieval purposes.
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @since 5.2
                 * @see MergedAnnotation
                 * @see MergedAnnotationCollectors
                 * @see MergedAnnotationPredicates
                 * @see MergedAnnotationSelectors
                 */
                // @ts-ignore
                interface MergedAnnotations extends java.lang.Iterable<org.springframework.core.annotation.MergedAnnotation<java.lang.annotation.Annotation>> {
                    /**
                     * Determine if the specified annotation is either directly present or
                     * meta-present.
                     * <p>Equivalent to calling {@code get(annotationType).isPresent()}.
                     * @param annotationType the annotation type to check
                     * @return {#code true} if the annotation is present
                     */
                    // @ts-ignore
                    isPresent<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): boolean
                    /**
                     * Determine if the specified annotation is either directly present or
                     * meta-present.
                     * <p>Equivalent to calling {@code get(annotationType).isPresent()}.
                     * @param annotationType the fully qualified class name of the annotation type
                     *  to check
                     * @return {#code true} if the annotation is present
                     */
                    // @ts-ignore
                    isPresent(annotationType: string): boolean
                    /**
                     * Determine if the specified annotation is directly present.
                     * <p>Equivalent to calling {@code get(annotationType).isDirectlyPresent()}.
                     * @param annotationType the annotation type to check
                     * @return {#code true} if the annotation is directly present
                     */
                    // @ts-ignore
                    isDirectlyPresent<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): boolean
                    /**
                     * Determine if the specified annotation is directly present.
                     * <p>Equivalent to calling {@code get(annotationType).isDirectlyPresent()}.
                     * @param annotationType the fully qualified class name of the annotation type
                     *  to check
                     * @return {#code true} if the annotation is directly present
                     */
                    // @ts-ignore
                    isDirectlyPresent(annotationType: string): boolean
                    /**
                     * Get the {@linkplain MergedAnnotationSelectors#nearest() nearest} matching
                     * annotation or meta-annotation of the specified type, or
                     * {@link MergedAnnotation#missing()} if none is present.
                     * @param annotationType the annotation type to get
                     * @return a {#link MergedAnnotation} instance
                     */
                    // @ts-ignore
                    get<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Get the {@linkplain MergedAnnotationSelectors#nearest() nearest} matching
                     * annotation or meta-annotation of the specified type, or
                     * {@link MergedAnnotation#missing()} if none is present.
                     * @param annotationType the annotation type to get
                     * @param predicate a predicate that must match, or {#code null} if only
                     *  type matching is required
                     * @return a {#link MergedAnnotation} instance
                     * @see MergedAnnotationPredicates
                     */
                    // @ts-ignore
                    get<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>, predicate: java.util.function.Predicate<any super org.springframework.core.annotation.MergedAnnotation<A>> | java.util.function$.Predicate<? super org.springframework.core.annotation.MergedAnnotation<A>>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Get a matching annotation or meta-annotation of the specified type, or
                     * {@link MergedAnnotation#missing()} if none is present.
                     * @param annotationType the annotation type to get
                     * @param predicate a predicate that must match, or {#code null} if only
                     *  type matching is required
                     * @param selector a selector used to choose the most appropriate annotation
                     *  within an aggregate, or {#code null} to select the
                     *  {@linkplain MergedAnnotationSelectors#nearest() nearest}
                     * @return a {#link MergedAnnotation} instance
                     * @see MergedAnnotationPredicates
                     * @see MergedAnnotationSelectors
                     */
                    // @ts-ignore
                    get<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>, predicate: java.util.function.Predicate<any super org.springframework.core.annotation.MergedAnnotation<A>> | java.util.function$.Predicate<? super org.springframework.core.annotation.MergedAnnotation<A>>, selector: org.springframework.core.annotation.MergedAnnotationSelector<A>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Get the {@linkplain MergedAnnotationSelectors#nearest() nearest} matching
                     * annotation or meta-annotation of the specified type, or
                     * {@link MergedAnnotation#missing()} if none is present.
                     * @param annotationType the fully qualified class name of the annotation type
                     *  to get
                     * @return a {#link MergedAnnotation} instance
                     */
                    // @ts-ignore
                    get<A extends java.lang.annotation.Annotation>(annotationType: string): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Get the {@linkplain MergedAnnotationSelectors#nearest() nearest} matching
                     * annotation or meta-annotation of the specified type, or
                     * {@link MergedAnnotation#missing()} if none is present.
                     * @param annotationType the fully qualified class name of the annotation type
                     *  to get
                     * @param predicate a predicate that must match, or {#code null} if only
                     *  type matching is required
                     * @return a {#link MergedAnnotation} instance
                     * @see MergedAnnotationPredicates
                     */
                    // @ts-ignore
                    get<A extends java.lang.annotation.Annotation>(annotationType: string, predicate: java.util.function.Predicate<any super org.springframework.core.annotation.MergedAnnotation<A>> | java.util.function$.Predicate<? super org.springframework.core.annotation.MergedAnnotation<A>>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Get a matching annotation or meta-annotation of the specified type, or
                     * {@link MergedAnnotation#missing()} if none is present.
                     * @param annotationType the fully qualified class name of the annotation type
                     *  to get
                     * @param predicate a predicate that must match, or {#code null} if only
                     *  type matching is required
                     * @param selector a selector used to choose the most appropriate annotation
                     *  within an aggregate, or {#code null} to select the
                     *  {@linkplain MergedAnnotationSelectors#nearest() nearest}
                     * @return a {#link MergedAnnotation} instance
                     * @see MergedAnnotationPredicates
                     * @see MergedAnnotationSelectors
                     */
                    // @ts-ignore
                    get<A extends java.lang.annotation.Annotation>(annotationType: string, predicate: java.util.function.Predicate<any super org.springframework.core.annotation.MergedAnnotation<A>> | java.util.function$.Predicate<? super org.springframework.core.annotation.MergedAnnotation<A>>, selector: org.springframework.core.annotation.MergedAnnotationSelector<A>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Stream all annotations and meta-annotations that match the specified
                     * type. The resulting stream follows the same ordering rules as
                     * {@link #stream()}.
                     * @param annotationType the annotation type to match
                     * @return a stream of matching annotations
                     */
                    // @ts-ignore
                    stream<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): java.util.stream.Stream<org.springframework.core.annotation.MergedAnnotation<A>>
                    /**
                     * Stream all annotations and meta-annotations that match the specified
                     * type. The resulting stream follows the same ordering rules as
                     * {@link #stream()}.
                     * @param annotationType the fully qualified class name of the annotation type
                     *  to match
                     * @return a stream of matching annotations
                     */
                    // @ts-ignore
                    stream<A extends java.lang.annotation.Annotation>(annotationType: string): java.util.stream.Stream<org.springframework.core.annotation.MergedAnnotation<A>>
                    /**
                     * Stream all annotations and meta-annotations contained in this collection.
                     * The resulting stream is ordered first by the
                     * {@linkplain MergedAnnotation#getAggregateIndex() aggregate index} and then
                     * by the annotation distance (with the closest annotations first). This ordering
                     * means that, for most use-cases, the most suitable annotations appear
                     * earliest in the stream.
                     * @return a stream of annotations
                     */
                    // @ts-ignore
                    stream(): java.util.stream.Stream<org.springframework.core.annotation.MergedAnnotation<java.lang.annotation.Annotation>>
                    /**
                     * Create a new {@link MergedAnnotations} instance containing all
                     * annotations and meta-annotations from the specified element. The
                     * resulting instance will not include any inherited annotations. If you
                     * want to include those as well you should use
                     * {@link #from(AnnotatedElement, SearchStrategy)} with an appropriate
                     * {@link SearchStrategy}.
                     * @param element the source element
                     * @return a {#link MergedAnnotations} instance containing the element's
                     *  annotations
                     */
                    // @ts-ignore
                    from(element: java.lang.reflect.AnnotatedElement): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance containing all
                     * annotations and meta-annotations from the specified element and,
                     * depending on the {@link SearchStrategy}, related inherited elements.
                     * @param element the source element
                     * @param searchStrategy the search strategy to use
                     * @return a {#link MergedAnnotations} instance containing the merged
                     *  element annotations
                     */
                    // @ts-ignore
                    from(element: java.lang.reflect.AnnotatedElement, searchStrategy: org.springframework.core.annotation.MergedAnnotations.SearchStrategy): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance containing all
                     * annotations and meta-annotations from the specified element and,
                     * depending on the {@link SearchStrategy}, related inherited elements.
                     * @param element the source element
                     * @param searchStrategy the search strategy to use
                     * @param repeatableContainers the repeatable containers that may be used by
                     *  the element annotations or the meta-annotations
                     * @return a {#link MergedAnnotations} instance containing the merged
                     *  element annotations
                     */
                    // @ts-ignore
                    from(element: java.lang.reflect.AnnotatedElement, searchStrategy: org.springframework.core.annotation.MergedAnnotations.SearchStrategy, repeatableContainers: org.springframework.core.annotation.RepeatableContainers): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance containing all
                     * annotations and meta-annotations from the specified element and,
                     * depending on the {@link SearchStrategy}, related inherited elements.
                     * @param element the source element
                     * @param searchStrategy the search strategy to use
                     * @param repeatableContainers the repeatable containers that may be used by
                     *  the element annotations or the meta-annotations
                     * @param annotationFilter an annotation filter used to restrict the
                     *  annotations considered
                     * @return a {#link MergedAnnotations} instance containing the merged
                     *  element annotations
                     */
                    // @ts-ignore
                    from(element: java.lang.reflect.AnnotatedElement, searchStrategy: org.springframework.core.annotation.MergedAnnotations.SearchStrategy, repeatableContainers: org.springframework.core.annotation.RepeatableContainers, annotationFilter: org.springframework.core.annotation.AnnotationFilter): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance from the specified
                     * annotations.
                     * @param annotations the annotations to include
                     * @return a {#link MergedAnnotations} instance containing the annotations
                     * @see #from(Object, Annotation...)
                     */
                    // @ts-ignore
                    from(...annotations: java.lang.annotation.Annotation[]): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance from the specified
                     * annotations.
                     * @param source the source for the annotations. This source is used only
                     *  for information and logging. It does not need to <em>actually</em>
                     *  contain the specified annotations, and it will not be searched.
                     * @param annotations the annotations to include
                     * @return a {#link MergedAnnotations} instance containing the annotations
                     * @see #from(Annotation...)
                     * @see #from(AnnotatedElement)
                     */
                    // @ts-ignore
                    from(source: any, ...annotations: java.lang.annotation.Annotation[]): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance from the specified
                     * annotations.
                     * @param source the source for the annotations. This source is used only
                     *  for information and logging. It does not need to <em>actually</em>
                     *  contain the specified annotations, and it will not be searched.
                     * @param annotations the annotations to include
                     * @param repeatableContainers the repeatable containers that may be used by
                     *  meta-annotations
                     * @return a {#link MergedAnnotations} instance containing the annotations
                     */
                    // @ts-ignore
                    from(source: any, annotations: java.lang.annotation.Annotation[], repeatableContainers: org.springframework.core.annotation.RepeatableContainers): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance from the specified
                     * annotations.
                     * @param source the source for the annotations. This source is used only
                     *  for information and logging. It does not need to <em>actually</em>
                     *  contain the specified annotations, and it will not be searched.
                     * @param annotations the annotations to include
                     * @param repeatableContainers the repeatable containers that may be used by
                     *  meta-annotations
                     * @param annotationFilter an annotation filter used to restrict the
                     *  annotations considered
                     * @return a {#link MergedAnnotations} instance containing the annotations
                     */
                    // @ts-ignore
                    from(source: any, annotations: java.lang.annotation.Annotation[], repeatableContainers: org.springframework.core.annotation.RepeatableContainers, annotationFilter: org.springframework.core.annotation.AnnotationFilter): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Create a new {@link MergedAnnotations} instance from the specified
                     * collection of directly present annotations. This method allows a
                     * {@link MergedAnnotations} instance to be created from annotations that
                     * are not necessarily loaded using reflection. The provided annotations
                     * must all be {@link MergedAnnotation#isDirectlyPresent() directly present}
                     * and must have a {@link MergedAnnotation#getAggregateIndex() aggregate
                     * index} of {@code 0}.
                     * <p>
                     * The resulting {@link MergedAnnotations} instance will contain both the
                     * specified annotations, and any meta-annotations that can be read using
                     * reflection.
                     * @param annotations the annotations to include
                     * @return a {#link MergedAnnotations} instance containing the annotations
                     * @see MergedAnnotation#of(ClassLoader, Object, Class, java.util.Map)
                     */
                    // @ts-ignore
                    of(annotations: Array<org.springframework.core.annotation.MergedAnnotation<any>>): org.springframework.core.annotation.MergedAnnotations
                }
            }
        }
    }
}
