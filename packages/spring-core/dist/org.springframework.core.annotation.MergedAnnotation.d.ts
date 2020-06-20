declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * A single merged annotation returned from a {@link MergedAnnotations}
                 * collection. Presents a view onto an annotation where attribute values may
                 * have been "merged" from different source values.
                 * <p>Attribute values may be accessed using the various {@code get} methods.
                 * For example, to access an {@code int} attribute the {@link #getInt(String)}
                 * method would be used.
                 * <p>Note that attribute values are <b>not</b> converted when accessed.
                 * For example, it is not possible to call {@link #getString(String)} if the
                 * underlying attribute is an {@code int}. The only exception to this rule is
                 * {@code Class} and {@code Class[]} values which may be accessed as
                 * {@code String} and {@code String[]} respectively to prevent potential early
                 * class initialization.
                 * <p>If necessary, a {@code MergedAnnotation} can be {@linkplain #synthesize()
                 * synthesized} back into an actual {@link java.lang.annotation.Annotation}.
                 * @author Phillip Webb
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 5.2
                 * @param <A> the annotation type
                 * @see MergedAnnotations
                 * @see MergedAnnotationPredicates
                 */
                // @ts-ignore
                interface MergedAnnotation<A extends java.lang.annotation.Annotation> {
                    /**
                     * The attribute name for annotations with a single element.
                     */
                    // @ts-ignore
                    
                    /**
                     * Get the {@code Class} reference for the actual annotation type.
                     * @return the annotation type
                     */
                    // @ts-ignore
                    getType(): java.lang.Class<A>
                    /**
                     * Determine if the annotation is present on the source. Considers
                     * {@linkplain #isDirectlyPresent() directly present} and
                     * {@linkplain #isMetaPresent() meta-present} annotations within the context
                     * of the {@link SearchStrategy} used.
                     * @return {#code true} if the annotation is present
                     */
                    // @ts-ignore
                    isPresent(): boolean
                    /**
                     * Determine if the annotation is directly present on the source.
                     * <p>A directly present annotation is one that the user has explicitly
                     * declared and not one that is {@linkplain #isMetaPresent() meta-present}
                     * or {@link Inherited @Inherited}.
                     * @return {#code true} if the annotation is directly present
                     */
                    // @ts-ignore
                    isDirectlyPresent(): boolean
                    /**
                     * Determine if the annotation is meta-present on the source.
                     * <p>A meta-present annotation is an annotation that the user hasn't
                     * explicitly declared, but has been used as a meta-annotation somewhere in
                     * the annotation hierarchy.
                     * @return {#code true} if the annotation is meta-present
                     */
                    // @ts-ignore
                    isMetaPresent(): boolean
                    /**
                     * Get the distance of this annotation related to its use as a
                     * meta-annotation.
                     * <p>A directly declared annotation has a distance of {@code 0}, a
                     * meta-annotation has a distance of {@code 1}, a meta-annotation on a
                     * meta-annotation has a distance of {@code 2}, etc. A {@linkplain #missing()
                     * missing} annotation will always return a distance of {@code -1}.
                     * @return the annotation distance or {#code -1} if the annotation is missing
                     */
                    // @ts-ignore
                    getDistance(): int
                    /**
                     * Get the index of the aggregate collection containing this annotation.
                     * <p>Can be used to reorder a stream of annotations, for example, to give a
                     * higher priority to annotations declared on a superclass or interface. A
                     * {@linkplain #missing() missing} annotation will always return an aggregate
                     * index of {@code -1}.
                     * @return the aggregate index (starting at {#code 0}) or {@code -1} if the
                     *  annotation is missing
                     */
                    // @ts-ignore
                    getAggregateIndex(): int
                    /**
                     * Get the source that ultimately declared the root annotation, or
                     * {@code null} if the source is not known.
                     * <p>If this merged annotation was created
                     * {@link MergedAnnotations#from(AnnotatedElement) from} an
                     * {@link AnnotatedElement} then this source will be an element of the same
                     * type. If the annotation was loaded without using reflection, the source
                     * can be of any type, but should have a sensible {@code toString()}.
                     * Meta-annotations will always return the same source as the
                     * {@link #getRoot() root}.
                     * @return the source, or {#code null}
                     */
                    // @ts-ignore
                    getSource(): java.lang.Object
                    /**
                     * Get the source of the meta-annotation, or {@code null} if the
                     * annotation is not {@linkplain #isMetaPresent() meta-present}.
                     * <p>The meta-source is the annotation that was meta-annotated with this
                     * annotation.
                     * @return the meta-annotation source or {#code null}
                     * @see #getRoot()
                     */
                    // @ts-ignore
                    getMetaSource(): org.springframework.core.annotation.MergedAnnotation<?>
                    /**
                     * Get the root annotation, i.e. the {@link #getDistance() distance} {@code 0}
                     * annotation as directly declared on the source.
                     * @return the root annotation
                     * @see #getMetaSource()
                     */
                    // @ts-ignore
                    getRoot(): org.springframework.core.annotation.MergedAnnotation<?>
                    /**
                     * Get the complete list of annotation types within the annotation hierarchy
                     * from this annotation to the {@link #getRoot() root}.
                     * <p>Provides a useful way to uniquely identify a merged annotation instance.
                     * @return the meta types for the annotation
                     * @see MergedAnnotationPredicates#unique(Function)
                     * @see #getRoot()
                     * @see #getMetaSource()
                     */
                    // @ts-ignore
                    getMetaTypes(): java.util.List<java.lang.Class<? extends java.lang.annotation.Annotation>>
                    /**
                     * Determine if the specified attribute name has a non-default value when
                     * compared to the annotation declaration.
                     * @param attributeName the attribute name
                     * @return {#code true} if the attribute value is different from the default
                     *  value
                     */
                    // @ts-ignore
                    hasNonDefaultValue(attributeName: string): boolean
                    /**
                     * Determine if the specified attribute name has a default value when compared
                     * to the annotation declaration.
                     * @param attributeName the attribute name
                     * @return {#code true} if the attribute value is the same as the default
                     *  value
                     */
                    // @ts-ignore
                    hasDefaultValue(attributeName: string): boolean
                    /**
                     * Get a required byte attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a byte
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getByte(attributeName: string): byte
                    /**
                     * Get a required byte array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a byte array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getByteArray(attributeName: string): byte[]
                    /**
                     * Get a required boolean attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a boolean
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getBoolean(attributeName: string): boolean
                    /**
                     * Get a required boolean array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a boolean array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getBooleanArray(attributeName: string): boolean[]
                    /**
                     * Get a required char attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a char
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getChar(attributeName: string): char
                    /**
                     * Get a required char array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a char array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getCharArray(attributeName: string): char[]
                    /**
                     * Get a required short attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a short
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getShort(attributeName: string): short
                    /**
                     * Get a required short array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a short array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getShortArray(attributeName: string): short[]
                    /**
                     * Get a required int attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as an int
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getInt(attributeName: string): int
                    /**
                     * Get a required int array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as an int array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getIntArray(attributeName: string): int[]
                    /**
                     * Get a required long attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a long
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getLong(attributeName: string): long
                    /**
                     * Get a required long array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a long array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getLongArray(attributeName: string): long[]
                    /**
                     * Get a required double attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a double
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getDouble(attributeName: string): double
                    /**
                     * Get a required double array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a double array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getDoubleArray(attributeName: string): double[]
                    /**
                     * Get a required float attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a float
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getFloat(attributeName: string): float
                    /**
                     * Get a required float array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a float array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getFloatArray(attributeName: string): float[]
                    /**
                     * Get a required string attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a string
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getString(attributeName: string): java.lang.String
                    /**
                     * Get a required string array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a string array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getStringArray(attributeName: string): java.lang.String[]
                    /**
                     * Get a required class attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a class
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getClass(attributeName: string): java.lang.Class<?>
                    /**
                     * Get a required class array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return the value as a class array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getClassArray(attributeName: string): java.lang.Class[]
                    /**
                     * Get a required enum attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @param type the enum type
                     * @return the value as a enum
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getEnum<E extends java.lang.Enum<E>>(attributeName: string, type: java.lang.Class<E>): E
                    /**
                     * Get a required enum array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @param type the enum type
                     * @return the value as a enum array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getEnumArray<E extends java.lang.Enum<E>>(attributeName: string, type: java.lang.Class<E>): E
                    /**
                     * Get a required annotation attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @param type the annotation type
                     * @return the value as a {#link MergedAnnotation}
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getAnnotation<T extends java.lang.annotation.Annotation>(attributeName: string, type: java.lang.Class<T>): org.springframework.core.annotation.MergedAnnotation<T>
                    /**
                     * Get a required annotation array attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @param type the annotation type
                     * @return the value as a {#link MergedAnnotation} array
                     * @throws NoSuchElementException if there is no matching attribute
                     */
                    // @ts-ignore
                    getAnnotationArray<T extends java.lang.annotation.Annotation>(attributeName: string, type: java.lang.Class<T>): org.springframework.core.annotation.MergedAnnotation[]
                    /**
                     * Get an optional attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @return an optional value or {#link Optional#empty()} if there is no
                     *  matching attribute
                     */
                    // @ts-ignore
                    getValue(attributeName: string): java.util.Optional<java.lang.Object>
                    /**
                     * Get an optional attribute value from the annotation.
                     * @param attributeName the attribute name
                     * @param type the attribute type. Must be compatible with the underlying
                     *  attribute type or {#code Object.class}.
                     * @return an optional value or {#link Optional#empty()} if there is no
                     *  matching attribute
                     */
                    // @ts-ignore
                    getValue<T>(attributeName: string, type: java.lang.Class<T>): java.util.Optional<T>
                    /**
                     * Get the default attribute value from the annotation as specified in
                     * the annotation declaration.
                     * @param attributeName the attribute name
                     * @return an optional of the default value or {#link Optional#empty()} if
                     *  there is no matching attribute or no defined default
                     */
                    // @ts-ignore
                    getDefaultValue(attributeName: string): java.util.Optional<java.lang.Object>
                    /**
                     * Get the default attribute value from the annotation as specified in
                     * the annotation declaration.
                     * @param attributeName the attribute name
                     * @param type the attribute type. Must be compatible with the underlying
                     *  attribute type or {#code Object.class}.
                     * @return an optional of the default value or {#link Optional#empty()} if
                     *  there is no matching attribute or no defined default
                     */
                    // @ts-ignore
                    getDefaultValue<T>(attributeName: string, type: java.lang.Class<T>): java.util.Optional<T>
                    /**
                     * Create a new view of the annotation with all attributes that have default
                     * values removed.
                     * @return a filtered view of the annotation without any attributes that
                     *  have a default value
                     * @see #filterAttributes(Predicate)
                     */
                    // @ts-ignore
                    filterDefaultValues(): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new view of the annotation with only attributes that match the
                     * given predicate.
                     * @param predicate a predicate used to filter attribute names
                     * @return a filtered view of the annotation
                     * @see #filterDefaultValues()
                     * @see MergedAnnotationPredicates
                     */
                    // @ts-ignore
                    filterAttributes(predicate: java.util.function.Predicate<java.lang.String> | java.util.function$.Predicate<java.lang.String>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new view of the annotation that exposes non-merged attribute values.
                     * <p>Methods from this view will return attribute values with only alias mirroring
                     * rules applied. Aliases to {@link #getMetaSource() meta-source} attributes will
                     * not be applied.
                     * @return a non-merged view of the annotation
                     */
                    // @ts-ignore
                    withNonMergedAttributes(): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new mutable {@link AnnotationAttributes} instance from this
                     * merged annotation.
                     * <p>The {@link Adapt adaptations} may be used to change the way that values
                     * are added.
                     * @param adaptations the adaptations that should be applied to the annotation values
                     * @return an immutable map containing the attributes and values
                     */
                    // @ts-ignore
                    asAnnotationAttributes(...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Get an immutable {@link Map} that contains all the annotation attributes.
                     * <p>The {@link Adapt adaptations} may be used to change the way that values are added.
                     * @param adaptations the adaptations that should be applied to the annotation values
                     * @return an immutable map containing the attributes and values
                     */
                    // @ts-ignore
                    asMap(...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Create a new {@link Map} instance of the given type that contains all the annotation
                     * attributes.
                     * <p>The {@link Adapt adaptations} may be used to change the way that values are added.
                     * @param factory a map factory
                     * @param adaptations the adaptations that should be applied to the annotation values
                     * @return a map containing the attributes and values
                     */
                    // @ts-ignore
                    asMap<T extends java.util.Map<java.lang.String, java.lang.Object>>(factory: java.util.function.Function<org.springframework.core.annotation.MergedAnnotation<any>, T> | java.util.function$.Function<org.springframework.core.annotation.MergedAnnotation<?>, T>, ...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): T
                    /**
                     * Create a type-safe synthesized version of this merged annotation that can
                     * be used directly in code.
                     * <p>The result is synthesized using a JDK {@link Proxy} and as a result may
                     * incur a computational cost when first invoked.
                     * <p>If this merged annotation was created {@linkplain #from(Annotation) from}
                     * an annotation instance, that annotation will be returned unmodified if it is
                     * not <em>synthesizable</em>. An annotation is considered synthesizable if
                     * one of the following is true.
                     * <ul>
                     * <li>The annotation declares attributes annotated with {@link AliasFor @AliasFor}.</li>
                     * <li>The annotation is a composed annotation that relies on convention-based
                     * annotation attribute overrides in meta-annotations.</li>
                     * <li>The annotation declares attributes that are annotations or arrays of
                     * annotations that are themselves synthesizable.</li>
                     * </ul>
                     * @return a synthesized version of the annotation or the original annotation
                     *  unmodified
                     * @throws NoSuchElementException on a missing annotation
                     */
                    // @ts-ignore
                    synthesize(): A
                    /**
                     * Optionally create a type-safe synthesized version of this annotation based
                     * on a condition predicate.
                     * <p>The result is synthesized using a JDK {@link Proxy} and as a result may
                     * incur a computational cost when first invoked.
                     * <p>Consult the documentation for {@link #synthesize()} for an explanation
                     * of what is considered synthesizable.
                     * @param condition the test to determine if the annotation can be synthesized
                     * @return an optional containing the synthesized version of the annotation or
                     *  an empty optional if the condition doesn't match
                     * @throws NoSuchElementException on a missing annotation
                     * @see MergedAnnotationPredicates
                     */
                    // @ts-ignore
                    synthesize(condition: java.util.function.Predicate<any super org.springframework.core.annotation.MergedAnnotation<A>> | java.util.function$.Predicate<? super org.springframework.core.annotation.MergedAnnotation<A>>): java.util.Optional<A>
                    /**
                     * Create a {@link MergedAnnotation} that represents a missing annotation
                     * (i.e. one that is not present).
                     * @return an instance representing a missing annotation
                     */
                    // @ts-ignore
                    missing<A extends java.lang.annotation.Annotation>(): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new {@link MergedAnnotation} instance from the specified
                     * annotation.
                     * @param annotation the annotation to include
                     * @return a {#link MergedAnnotation} instance containing the annotation
                     */
                    // @ts-ignore
                    from<A extends java.lang.annotation.Annotation>(annotation: A extends java.lang.annotation.Annotation): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new {@link MergedAnnotation} instance from the specified
                     * annotation.
                     * @param source the source for the annotation. This source is used only for
                     *  information and logging. It does not need to <em>actually</em> contain
                     *  the specified annotations, and it will not be searched.
                     * @param annotation the annotation to include
                     * @return a {#link MergedAnnotation} instance for the annotation
                     */
                    // @ts-ignore
                    from<A extends java.lang.annotation.Annotation>(source: any, annotation: A extends java.lang.annotation.Annotation): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new {@link MergedAnnotation} instance of the specified
                     * annotation type. The resulting annotation will not have any attribute
                     * values but may still be used to query default values.
                     * @param annotationType the annotation type
                     * @return a {#link MergedAnnotation} instance for the annotation
                     */
                    // @ts-ignore
                    of<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new {@link MergedAnnotation} instance of the specified
                     * annotation type with attribute values supplied by a map.
                     * @param annotationType the annotation type
                     * @param attributes the annotation attributes or {#code null} if just default
                     *  values should be used
                     * @return a {#link MergedAnnotation} instance for the annotation and attributes
                     * @see #of(AnnotatedElement, Class, Map)
                     */
                    // @ts-ignore
                    of<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>, attributes: java.util.Map<java.lang.String, any>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new {@link MergedAnnotation} instance of the specified
                     * annotation type with attribute values supplied by a map.
                     * @param source the source for the annotation. This source is used only for
                     *  information and logging. It does not need to <em>actually</em> contain
                     *  the specified annotations and it will not be searched.
                     * @param annotationType the annotation type
                     * @param attributes the annotation attributes or {#code null} if just default
                     *  values should be used
                     * @return a {#link MergedAnnotation} instance for the annotation and attributes
                     */
                    // @ts-ignore
                    of<A extends java.lang.annotation.Annotation>(source: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>, attributes: java.util.Map<java.lang.String, any>): org.springframework.core.annotation.MergedAnnotation<A>
                    /**
                     * Create a new {@link MergedAnnotation} instance of the specified
                     * annotation type with attribute values supplied by a map.
                     * @param classLoader the class loader used to resolve class attributes
                     * @param source the source for the annotation. This source is used only for
                     *  information and logging. It does not need to <em>actually</em> contain
                     *  the specified annotations and it will not be searched.
                     * @param annotationType the annotation type
                     * @param attributes the annotation attributes or {#code null} if just default
                     *  values should be used
                     * @return a {#link MergedAnnotation} instance for the annotation and attributes
                     */
                    // @ts-ignore
                    of<A extends java.lang.annotation.Annotation>(classLoader: java.lang.ClassLoader, source: any, annotationType: java.lang.Class<A>, attributes: java.util.Map<java.lang.String, any>): org.springframework.core.annotation.MergedAnnotation<A>
                }
            }
        }
    }
}
