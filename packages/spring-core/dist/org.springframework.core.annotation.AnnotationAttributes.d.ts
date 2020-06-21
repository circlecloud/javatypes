declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * {@link LinkedHashMap} subclass representing annotation attribute
                 * <em>key-value</em> pairs as read by {@link AnnotationUtils},
                 * {@link AnnotatedElementUtils}, and Spring's reflection- and ASM-based
                 * {@link org.springframework.core.type.AnnotationMetadata} implementations.
                 * <p>Provides 'pseudo-reification' to avoid noisy Map generics in the calling
                 * code as well as convenience methods for looking up annotation attributes
                 * in a type-safe fashion.
                 * @author Chris Beams
                 * @author Sam Brannen
                 * @author Juergen Hoeller
                 * @since 3.1.1
                 * @see AnnotationUtils#getAnnotationAttributes
                 * @see AnnotatedElementUtils
                 */
                // @ts-ignore
                class AnnotationAttributes extends java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any> {
                    /**
                     * Create a new, empty {@link AnnotationAttributes} instance.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new, empty {@link AnnotationAttributes} instance with the
                     * given initial capacity to optimize performance.
                     * @param initialCapacity initial size of the underlying map
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/)
                    /**
                     * Create a new {@link AnnotationAttributes} instance, wrapping the provided
                     * map and all its <em>key-value</em> pairs.
                     * @param map original source of annotation attribute <em>key-value</em> pairs
                     * @see #fromMap(Map)
                     */
                    // @ts-ignore
                    constructor(map: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    /**
                     * Create a new {@link AnnotationAttributes} instance, wrapping the provided
                     * map and all its <em>key-value</em> pairs.
                     * @param other original source of annotation attribute <em>key-value</em> pairs
                     * @see #fromMap(Map)
                     */
                    // @ts-ignore
                    constructor(other: org.springframework.core.annotation.AnnotationAttributes)
                    /**
                     * Create a new, empty {@link AnnotationAttributes} instance for the
                     * specified {@code annotationType}.
                     * @param annotationType the type of annotation represented by this
                     *  {#code AnnotationAttributes} instance; never {@code null}
                     * @since 4.2
                     */
                    // @ts-ignore
                    constructor(annotationType: java.lang.Class<any>)
                    /**
                     * Create a new, empty {@link AnnotationAttributes} instance for the
                     * specified {@code annotationType}.
                     * @param annotationType the annotation type name represented by this
                     *  {#code AnnotationAttributes} instance; never {@code null}
                     * @param classLoader the ClassLoader to try to load the annotation type on,
                     *  or {#code null} to just store the annotation type name
                     * @since 4.3.2
                     */
                    // @ts-ignore
                    constructor(annotationType: java.lang.String | string, classLoader: java.lang.ClassLoader)
                    /**
                     * Get the type of annotation represented by this {@code AnnotationAttributes}.
                     * @return the annotation type, or {#code null} if unknown
                     * @since 4.2
                     */
                    // @ts-ignore
                    public annotationType(): java.lang.Class<any>
                    /**
                     * Get the value stored under the specified {@code attributeName} as a string.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getString(attributeName: java.lang.String | string): string
                    /**
                     * Get the value stored under the specified {@code attributeName} as an
                     * array of strings.
                     * <p>If the value stored under the specified {@code attributeName} is
                     * a string, it will be wrapped in a single-element array before
                     * returning it.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getStringArray(attributeName: java.lang.String | string): string[]
                    /**
                     * Get the value stored under the specified {@code attributeName} as a boolean.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getBoolean(attributeName: java.lang.String | string): boolean
                    /**
                     * Get the value stored under the specified {@code attributeName} as a number.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getNumber<N extends java.lang.Number>(attributeName: java.lang.String | string): N
                    /**
                     * Get the value stored under the specified {@code attributeName} as an enum.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getEnum<E extends java.lang.Enum<?>>(attributeName: java.lang.String | string): E
                    /**
                     * Get the value stored under the specified {@code attributeName} as a class.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getClass<T>(attributeName: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Get the value stored under the specified {@code attributeName} as an
                     * array of classes.
                     * <p>If the value stored under the specified {@code attributeName} is a class,
                     * it will be wrapped in a single-element array before returning it.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the value
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getClassArray(attributeName: java.lang.String | string): java.lang.Class<any>[]
                    /**
                     * Get the {@link AnnotationAttributes} stored under the specified
                     * {@code attributeName}.
                     * <p>Note: if you expect an actual annotation, invoke
                     * {@link #getAnnotation(String, Class)} instead.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the {#code AnnotationAttributes}
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getAnnotation(attributeName: java.lang.String | string): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Get the annotation of type {@code annotationType} stored under the
                     * specified {@code attributeName}.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @param annotationType the expected annotation type; never {#code null}
                     * @return the annotation
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getAnnotation<A extends java.lang.annotation.Annotation>(attributeName: java.lang.String | string, annotationType: java.lang.Class<A>): A
                    /**
                     * Get the array of {@link AnnotationAttributes} stored under the specified
                     * {@code attributeName}.
                     * <p>If the value stored under the specified {@code attributeName} is
                     * an instance of {@code AnnotationAttributes}, it will be wrapped in
                     * a single-element array before returning it.
                     * <p>Note: if you expect an actual array of annotations, invoke
                     * {@link #getAnnotationArray(String, Class)} instead.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @return the array of {#code AnnotationAttributes}
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     */
                    // @ts-ignore
                    public getAnnotationArray(attributeName: java.lang.String | string): org.springframework.core.annotation.AnnotationAttributes[]
                    /**
                     * Get the array of type {@code annotationType} stored under the specified
                     * {@code attributeName}.
                     * <p>If the value stored under the specified {@code attributeName} is
                     * an {@code Annotation}, it will be wrapped in a single-element array
                     * before returning it.
                     * @param attributeName the name of the attribute to get;
                     *  never {#code null} or empty
                     * @param annotationType the expected annotation type; never {#code null}
                     * @return the annotation array
                     * @throws IllegalArgumentException if the attribute does not exist or
                     *  if it is not of the expected type
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getAnnotationArray<A extends java.lang.annotation.Annotation>(attributeName: java.lang.String | string, annotationType: java.lang.Class<A>): A
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Return an {@link AnnotationAttributes} instance based on the given map.
                     * <p>If the map is already an {@code AnnotationAttributes} instance, it
                     * will be cast and returned immediately without creating a new instance.
                     * Otherwise a new instance will be created by passing the supplied map
                     * to the {@link #AnnotationAttributes(Map)} constructor.
                     * @param map original source of annotation attribute <em>key-value</em> pairs
                     */
                    // @ts-ignore
                    public static fromMap(map: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.core.annotation.AnnotationAttributes
                }
            }
        }
    }
}
