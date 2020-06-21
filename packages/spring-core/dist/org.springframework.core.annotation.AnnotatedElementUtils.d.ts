declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * General utility methods for finding annotations, meta-annotations, and
                 * repeatable annotations on {@link AnnotatedElement AnnotatedElements}.
                 * <p>{@code AnnotatedElementUtils} defines the public API for Spring's
                 * meta-annotation programming model with support for <em>annotation attribute
                 * overrides</em>. If you do not need support for annotation attribute
                 * overrides, consider using {@link AnnotationUtils} instead.
                 * <p>Note that the features of this class are not provided by the JDK's
                 * introspection facilities themselves.
                 * <h3>Annotation Attribute Overrides</h3>
                 * <p>Support for meta-annotations with <em>attribute overrides</em> in
                 * <em>composed annotations</em> is provided by all variants of the
                 * {@code getMergedAnnotationAttributes()}, {@code getMergedAnnotation()},
                 * {@code getAllMergedAnnotations()}, {@code getMergedRepeatableAnnotations()},
                 * {@code findMergedAnnotationAttributes()}, {@code findMergedAnnotation()},
                 * {@code findAllMergedAnnotations()}, and {@code findMergedRepeatableAnnotations()}
                 * methods.
                 * <h3>Find vs. Get Semantics</h3>
                 * <p>The search algorithms used by methods in this class follow either
                 * <em>find</em> or <em>get</em> semantics. Consult the javadocs for each
                 * individual method for details on which search algorithm is used.
                 * <p><strong>Get semantics</strong> are limited to searching for annotations
                 * that are either <em>present</em> on an {@code AnnotatedElement} (i.e. declared
                 * locally or {@linkplain java.lang.annotation.Inherited inherited}) or declared
                 * within the annotation hierarchy <em>above</em> the {@code AnnotatedElement}.
                 * <p><strong>Find semantics</strong> are much more exhaustive, providing
                 * <em>get semantics</em> plus support for the following:
                 * <ul>
                 * <li>Searching on interfaces, if the annotated element is a class
                 * <li>Searching on superclasses, if the annotated element is a class
                 * <li>Resolving bridged methods, if the annotated element is a method
                 * <li>Searching on methods in interfaces, if the annotated element is a method
                 * <li>Searching on methods in superclasses, if the annotated element is a method
                 * </ul>
                 * <h3>Support for {@code @Inherited}</h3>
                 * <p>Methods following <em>get semantics</em> will honor the contract of Java's
                 * {@link java.lang.annotation.Inherited @Inherited} annotation except that locally
                 * declared annotations (including custom composed annotations) will be favored over
                 * inherited annotations. In contrast, methods following <em>find semantics</em>
                 * will completely ignore the presence of {@code @Inherited} since the <em>find</em>
                 * search algorithm manually traverses type and method hierarchies and thereby
                 * implicitly supports annotation inheritance without a need for {@code @Inherited}.
                 * @author Phillip Webb
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 4.0
                 * @see AliasFor
                 * @see AnnotationAttributes
                 * @see AnnotationUtils
                 * @see BridgeMethodResolver
                 */
                // @ts-ignore
                abstract class AnnotatedElementUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Build an adapted {@link AnnotatedElement} for the given annotations,
                     * typically for use with other methods on {@link AnnotatedElementUtils}.
                     * @param annotations the annotations to expose through the {#code AnnotatedElement}
                     * @since 4.3
                     */
                    // @ts-ignore
                    public static forAnnotations(...annotations: java.lang.annotation.Annotation[]): java.lang.reflect.AnnotatedElement
                    /**
                     * Get the fully qualified class names of all meta-annotation types
                     * <em>present</em> on the annotation (of the specified {@code annotationType})
                     * on the supplied {@link AnnotatedElement}.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationType the annotation type on which to find meta-annotations
                     * @return the names of all meta-annotations present on the annotation,
                     *  or an empty set if not found
                     * @since 4.2
                     * @see #getMetaAnnotationTypes(AnnotatedElement, String)
                     * @see #hasMetaAnnotationTypes
                     */
                    // @ts-ignore
                    public static getMetaAnnotationTypes(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<any>): Array<java.lang.String | string>
                    /**
                     * Get the fully qualified class names of all meta-annotation
                     * types <em>present</em> on the annotation (of the specified
                     * {@code annotationName}) on the supplied {@link AnnotatedElement}.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation
                     *  type on which to find meta-annotations
                     * @return the names of all meta-annotations present on the annotation,
                     *  or an empty set if none found
                     * @see #getMetaAnnotationTypes(AnnotatedElement, Class)
                     * @see #hasMetaAnnotationTypes
                     */
                    // @ts-ignore
                    public static getMetaAnnotationTypes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string): Array<java.lang.String | string>
                    /**
                     * Determine if the supplied {@link AnnotatedElement} is annotated with
                     * a <em>composed annotation</em> that is meta-annotated with an
                     * annotation of the specified {@code annotationType}.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationType the meta-annotation type to find
                     * @return {#code true} if a matching meta-annotation is present
                     * @since 4.2.3
                     * @see #getMetaAnnotationTypes
                     */
                    // @ts-ignore
                    public static hasMetaAnnotationTypes(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<any>): boolean
                    /**
                     * Determine if the supplied {@link AnnotatedElement} is annotated with a
                     * <em>composed annotation</em> that is meta-annotated with an annotation
                     * of the specified {@code annotationName}.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the
                     *  meta-annotation type to find
                     * @return {#code true} if a matching meta-annotation is present
                     * @see #getMetaAnnotationTypes
                     */
                    // @ts-ignore
                    public static hasMetaAnnotationTypes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string): boolean
                    /**
                     * Determine if an annotation of the specified {@code annotationType}
                     * is <em>present</em> on the supplied {@link AnnotatedElement} or
                     * within the annotation hierarchy <em>above</em> the specified element.
                     * <p>If this method returns {@code true}, then {@link #getMergedAnnotationAttributes}
                     * will return a non-null value.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationType the annotation type to find
                     * @return {#code true} if a matching annotation is present
                     * @since 4.2.3
                     * @see #hasAnnotation(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static isAnnotated(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<any>): boolean
                    /**
                     * Determine if an annotation of the specified {@code annotationName} is
                     * <em>present</em> on the supplied {@link AnnotatedElement} or within the
                     * annotation hierarchy <em>above</em> the specified element.
                     * <p>If this method returns {@code true}, then {@link #getMergedAnnotationAttributes}
                     * will return a non-null value.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation type to find
                     * @return {#code true} if a matching annotation is present
                     */
                    // @ts-ignore
                    public static isAnnotated(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string): boolean
                    /**
                     * Get the first annotation of the specified {@code annotationType} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element} and
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both
                     * within a single annotation and within the annotation hierarchy.
                     * <p>This method delegates to {@link #getMergedAnnotationAttributes(AnnotatedElement, String)}.
                     * @param element the annotated element
                     * @param annotationType the annotation type to find
                     * @return the merged {#code AnnotationAttributes}, or {@code null} if not found
                     * @since 4.2
                     * @see #getMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     * @see #findMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     * @see #getMergedAnnotation(AnnotatedElement, Class)
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static getMergedAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<any>): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Get the first annotation of the specified {@code annotationName} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element} and
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both
                     * within a single annotation and within the annotation hierarchy.
                     * <p>This method delegates to {@link #getMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)},
                     * supplying {@code false} for {@code classValuesAsString} and {@code nestedAnnotationsAsMap}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation type to find
                     * @return the merged {#code AnnotationAttributes}, or {@code null} if not found
                     * @since 4.2
                     * @see #getMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     * @see #findMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #getAllAnnotationAttributes(AnnotatedElement, String)
                     */
                    // @ts-ignore
                    public static getMergedAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Get the first annotation of the specified {@code annotationName} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element} and
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy.
                     * <p>Attributes from lower levels in the annotation hierarchy override attributes
                     * of the same name from higher levels, and {@link AliasFor @AliasFor} semantics are
                     * fully supported, both within a single annotation and within the annotation hierarchy.
                     * <p>In contrast to {@link #getAllAnnotationAttributes}, the search algorithm used by
                     * this method will stop searching the annotation hierarchy once the first annotation
                     * of the specified {@code annotationName} has been found. As a consequence,
                     * additional annotations of the specified {@code annotationName} will be ignored.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation type to find
                     * @param classValuesAsString whether to convert Class references into Strings or to
                     *  preserve them as Class references
                     * @param nestedAnnotationsAsMap whether to convert nested Annotation instances
                     *  into {#code AnnotationAttributes} maps or to preserve them as Annotation instances
                     * @return the merged {#code AnnotationAttributes}, or {@code null} if not found
                     * @since 4.2
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #findMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     * @see #getAllAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     */
                    // @ts-ignore
                    public static getMergedAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string, classValuesAsString: boolean, nestedAnnotationsAsMap: boolean): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Get the first annotation of the specified {@code annotationType} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element},
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy, and synthesize
                     * the result back into an annotation of the specified {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both
                     * within a single annotation and within the annotation hierarchy.
                     * @param element the annotated element
                     * @param annotationType the annotation type to find
                     * @return the merged, synthesized {#code Annotation}, or {@code null} if not found
                     * @since 4.2
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static getMergedAnnotation<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): A
                    /**
                     * Get <strong>all</strong> annotations of the specified {@code annotationType}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the annotation
                     * hierarchy and synthesize the results back into an annotation of the specified
                     * {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationType the annotation type to find (never {#code null})
                     * @return the set of all merged, synthesized {#code Annotations} found,
                     *  or an empty set if none were found
                     * @since 4.3
                     * @see #getMergedAnnotation(AnnotatedElement, Class)
                     * @see #getAllAnnotationAttributes(AnnotatedElement, String)
                     * @see #findAllMergedAnnotations(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static getAllMergedAnnotations<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): Array<A>
                    /**
                     * Get <strong>all</strong> annotations of the specified {@code annotationTypes}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the
                     * annotation hierarchy and synthesize the results back into an annotation
                     * of the corresponding {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationTypes the annotation types to find
                     * @return the set of all merged, synthesized {#code Annotations} found,
                     *  or an empty set if none were found
                     * @since 5.1
                     * @see #getAllMergedAnnotations(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static getAllMergedAnnotations(element: java.lang.reflect.AnnotatedElement, annotationTypes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): Array<java.lang.annotation.Annotation>
                    /**
                     * Get all <em>repeatable annotations</em> of the specified {@code annotationType}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the annotation
                     * hierarchy and synthesize the results back into an annotation of the specified
                     * {@code annotationType}.
                     * <p>The container type that holds the repeatable annotations will be looked up
                     * via {@link java.lang.annotation.Repeatable}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationType the annotation type to find (never {#code null})
                     * @return the set of all merged repeatable {#code Annotations} found,
                     *  or an empty set if none were found
                     * @throws IllegalArgumentException if the {#code element} or {@code annotationType}
                     *  is {@code null}, or if the container type cannot be resolved
                     * @since 4.3
                     * @see #getMergedAnnotation(AnnotatedElement, Class)
                     * @see #getAllMergedAnnotations(AnnotatedElement, Class)
                     * @see #getMergedRepeatableAnnotations(AnnotatedElement, Class, Class)
                     */
                    // @ts-ignore
                    public static getMergedRepeatableAnnotations<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): Array<A>
                    /**
                     * Get all <em>repeatable annotations</em> of the specified {@code annotationType}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the annotation
                     * hierarchy and synthesize the results back into an annotation of the specified
                     * {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationType the annotation type to find (never {#code null})
                     * @param containerType the type of the container that holds the annotations;
                     *  may be {#code null} if the container type should be looked up via
                     *  {@link java.lang.annotation.Repeatable}
                     * @return the set of all merged repeatable {#code Annotations} found,
                     *  or an empty set if none were found
                     * @throws IllegalArgumentException if the {#code element} or {@code annotationType}
                     *  is {@code null}, or if the container type cannot be resolved
                     * @throws AnnotationConfigurationException if the supplied {#code containerType}
                     *  is not a valid container annotation for the supplied {@code annotationType}
                     * @since 4.3
                     * @see #getMergedAnnotation(AnnotatedElement, Class)
                     * @see #getAllMergedAnnotations(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static getMergedRepeatableAnnotations<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>, containerType: java.lang.Class<any>): Array<A>
                    /**
                     * Get the annotation attributes of <strong>all</strong> annotations of the specified
                     * {@code annotationName} in the annotation hierarchy above the supplied
                     * {@link AnnotatedElement} and store the results in a {@link MultiValueMap}.
                     * <p>Note: in contrast to {@link #getMergedAnnotationAttributes(AnnotatedElement, String)},
                     * this method does <em>not</em> support attribute overrides.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation type to find
                     * @return a {#link MultiValueMap} keyed by attribute name, containing the annotation
                     *  attributes from all annotations found, or {@code null} if not found
                     * @see #getAllAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     */
                    // @ts-ignore
                    public static getAllAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Get the annotation attributes of <strong>all</strong> annotations of
                     * the specified {@code annotationName} in the annotation hierarchy above
                     * the supplied {@link AnnotatedElement} and store the results in a
                     * {@link MultiValueMap}.
                     * <p>Note: in contrast to {@link #getMergedAnnotationAttributes(AnnotatedElement, String)},
                     * this method does <em>not</em> support attribute overrides.
                     * <p>This method follows <em>get semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation type to find
                     * @param classValuesAsString whether to convert Class references into Strings or to
                     *  preserve them as Class references
                     * @param nestedAnnotationsAsMap whether to convert nested Annotation instances into
                     *  {#code AnnotationAttributes} maps or to preserve them as Annotation instances
                     * @return a {#link MultiValueMap} keyed by attribute name, containing the annotation
                     *  attributes from all annotations found, or {@code null} if not found
                     */
                    // @ts-ignore
                    public static getAllAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string, classValuesAsString: boolean, nestedAnnotationsAsMap: boolean): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Determine if an annotation of the specified {@code annotationType}
                     * is <em>available</em> on the supplied {@link AnnotatedElement} or
                     * within the annotation hierarchy <em>above</em> the specified element.
                     * <p>If this method returns {@code true}, then {@link #findMergedAnnotationAttributes}
                     * will return a non-null value.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationType the annotation type to find
                     * @return {#code true} if a matching annotation is present
                     * @since 4.3
                     * @see #isAnnotated(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static hasAnnotation(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<any>): boolean
                    /**
                     * Find the first annotation of the specified {@code annotationType} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element} and
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy.
                     * <p>Attributes from lower levels in the annotation hierarchy override
                     * attributes of the same name from higher levels, and
                     * {@link AliasFor @AliasFor} semantics are fully supported, both
                     * within a single annotation and within the annotation hierarchy.
                     * <p>In contrast to {@link #getAllAnnotationAttributes}, the search algorithm
                     * used by this method will stop searching the annotation hierarchy once the
                     * first annotation of the specified {@code annotationType} has been found.
                     * As a consequence, additional annotations of the specified
                     * {@code annotationType} will be ignored.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationType the annotation type to find
                     * @param classValuesAsString whether to convert Class references into
                     *  Strings or to preserve them as Class references
                     * @param nestedAnnotationsAsMap whether to convert nested Annotation instances into
                     *  {#code AnnotationAttributes} maps or to preserve them as Annotation instances
                     * @return the merged {#code AnnotationAttributes}, or {@code null} if not found
                     * @since 4.2
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #getMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     */
                    // @ts-ignore
                    public static findMergedAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<any>, classValuesAsString: boolean, nestedAnnotationsAsMap: boolean): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Find the first annotation of the specified {@code annotationName} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element} and
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy.
                     * <p>Attributes from lower levels in the annotation hierarchy override
                     * attributes of the same name from higher levels, and
                     * {@link AliasFor @AliasFor} semantics are fully supported, both
                     * within a single annotation and within the annotation hierarchy.
                     * <p>In contrast to {@link #getAllAnnotationAttributes}, the search
                     * algorithm used by this method will stop searching the annotation
                     * hierarchy once the first annotation of the specified
                     * {@code annotationName} has been found. As a consequence, additional
                     * annotations of the specified {@code annotationName} will be ignored.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationName the fully qualified class name of the annotation type to find
                     * @param classValuesAsString whether to convert Class references into Strings or to
                     *  preserve them as Class references
                     * @param nestedAnnotationsAsMap whether to convert nested Annotation instances into
                     *  {#code AnnotationAttributes} maps or to preserve them as Annotation instances
                     * @return the merged {#code AnnotationAttributes}, or {@code null} if not found
                     * @since 4.2
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #getMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     */
                    // @ts-ignore
                    public static findMergedAnnotationAttributes(element: java.lang.reflect.AnnotatedElement, annotationName: java.lang.String | string, classValuesAsString: boolean, nestedAnnotationsAsMap: boolean): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Find the first annotation of the specified {@code annotationType} within
                     * the annotation hierarchy <em>above</em> the supplied {@code element},
                     * merge that annotation's attributes with <em>matching</em> attributes from
                     * annotations in lower levels of the annotation hierarchy, and synthesize
                     * the result back into an annotation of the specified {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both
                     * within a single annotation and within the annotation hierarchy.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element
                     * @param annotationType the annotation type to find
                     * @return the merged, synthesized {#code Annotation}, or {@code null} if not found
                     * @since 4.2
                     * @see #findAllMergedAnnotations(AnnotatedElement, Class)
                     * @see #findMergedAnnotationAttributes(AnnotatedElement, String, boolean, boolean)
                     * @see #getMergedAnnotationAttributes(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static findMergedAnnotation<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): A
                    /**
                     * Find <strong>all</strong> annotations of the specified {@code annotationType}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the annotation
                     * hierarchy and synthesize the results back into an annotation of the specified
                     * {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationType the annotation type to find (never {#code null})
                     * @return the set of all merged, synthesized {#code Annotations} found,
                     *  or an empty set if none were found
                     * @since 4.3
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #getAllMergedAnnotations(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static findAllMergedAnnotations<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): Array<A>
                    /**
                     * Find <strong>all</strong> annotations of the specified {@code annotationTypes}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the
                     * annotation hierarchy and synthesize the results back into an annotation
                     * of the corresponding {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationTypes the annotation types to find
                     * @return the set of all merged, synthesized {#code Annotations} found,
                     *  or an empty set if none were found
                     * @since 5.1
                     * @see #findAllMergedAnnotations(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static findAllMergedAnnotations(element: java.lang.reflect.AnnotatedElement, annotationTypes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): Array<java.lang.annotation.Annotation>
                    /**
                     * Find all <em>repeatable annotations</em> of the specified {@code annotationType}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the annotation
                     * hierarchy and synthesize the results back into an annotation of the specified
                     * {@code annotationType}.
                     * <p>The container type that holds the repeatable annotations will be looked up
                     * via {@link java.lang.annotation.Repeatable}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationType the annotation type to find (never {#code null})
                     * @return the set of all merged repeatable {#code Annotations} found,
                     *  or an empty set if none were found
                     * @throws IllegalArgumentException if the {#code element} or {@code annotationType}
                     *  is {@code null}, or if the container type cannot be resolved
                     * @since 4.3
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #findAllMergedAnnotations(AnnotatedElement, Class)
                     * @see #findMergedRepeatableAnnotations(AnnotatedElement, Class, Class)
                     */
                    // @ts-ignore
                    public static findMergedRepeatableAnnotations<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): Array<A>
                    /**
                     * Find all <em>repeatable annotations</em> of the specified {@code annotationType}
                     * within the annotation hierarchy <em>above</em> the supplied {@code element};
                     * and for each annotation found, merge that annotation's attributes with
                     * <em>matching</em> attributes from annotations in lower levels of the annotation
                     * hierarchy and synthesize the results back into an annotation of the specified
                     * {@code annotationType}.
                     * <p>{@link AliasFor @AliasFor} semantics are fully supported, both within a
                     * single annotation and within annotation hierarchies.
                     * <p>This method follows <em>find semantics</em> as described in the
                     * {@linkplain AnnotatedElementUtils class-level javadoc}.
                     * @param element the annotated element (never {#code null})
                     * @param annotationType the annotation type to find (never {#code null})
                     * @param containerType the type of the container that holds the annotations;
                     *  may be {#code null} if the container type should be looked up via
                     *  {@link java.lang.annotation.Repeatable}
                     * @return the set of all merged repeatable {#code Annotations} found,
                     *  or an empty set if none were found
                     * @throws IllegalArgumentException if the {#code element} or {@code annotationType}
                     *  is {@code null}, or if the container type cannot be resolved
                     * @throws AnnotationConfigurationException if the supplied {#code containerType}
                     *  is not a valid container annotation for the supplied {@code annotationType}
                     * @since 4.3
                     * @see #findMergedAnnotation(AnnotatedElement, Class)
                     * @see #findAllMergedAnnotations(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    public static findMergedRepeatableAnnotations<A extends java.lang.annotation.Annotation>(element: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>, containerType: java.lang.Class<any>): Array<A>
                }
            }
        }
    }
}
