declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * Defines access to the annotations of a specific type ({@link AnnotationMetadata class}
                 * or {@link MethodMetadata method}), in a form that does not necessarily require the
                 * class-loading.
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @author Mark Pollack
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @since 4.0
                 * @see AnnotationMetadata
                 * @see MethodMetadata
                 */
                // @ts-ignore
                interface AnnotatedTypeMetadata {
                    /**
                     * Return annotation details based on the direct annotations of the
                     * underlying element.
                     * @return merged annotations based on the direct annotations
                     * @since 5.2
                     */
                    // @ts-ignore
                    getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                    /**
                     * Determine whether the underlying element has an annotation or meta-annotation
                     * of the given type defined.
                     * <p>If this method returns {@code true}, then
                     * {@link #getAnnotationAttributes} will return a non-null Map.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @return whether a matching annotation is defined
                     */
                    // @ts-ignore
                    isAnnotated(annotationName: java.lang.String | string): boolean
                    /**
                     * Retrieve the attributes of the annotation of the given type, if any (i.e. if
                     * defined on the underlying element, as direct annotation or meta-annotation),
                     * also taking attribute overrides on composed annotations into account.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @return a Map of attributes, with the attribute name as key (e.g. "value")
                     *  and the defined attribute value as Map value. This return value will be
                     *  {#code null} if no matching annotation is defined.
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotationName: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Retrieve the attributes of the annotation of the given type, if any (i.e. if
                     * defined on the underlying element, as direct annotation or meta-annotation),
                     * also taking attribute overrides on composed annotations into account.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @param classValuesAsString whether to convert class references to String
                     *  class names for exposure as values in the returned Map, instead of Class
                     *  references which might potentially have to be loaded first
                     * @return a Map of attributes, with the attribute name as key (e.g. "value")
                     *  and the defined attribute value as Map value. This return value will be
                     *  {#code null} if no matching annotation is defined.
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Retrieve all attributes of all annotations of the given type, if any (i.e. if
                     * defined on the underlying element, as direct annotation or meta-annotation).
                     * Note that this variant does <i>not</i> take attribute overrides into account.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @return a MultiMap of attributes, with the attribute name as key (e.g. "value")
                     *  and a list of the defined attribute values as Map value. This return value will
                     *  be {#code null} if no matching annotation is defined.
                     * @see #getAllAnnotationAttributes(String, boolean)
                     */
                    // @ts-ignore
                    getAllAnnotationAttributes(annotationName: java.lang.String | string): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Retrieve all attributes of all annotations of the given type, if any (i.e. if
                     * defined on the underlying element, as direct annotation or meta-annotation).
                     * Note that this variant does <i>not</i> take attribute overrides into account.
                     * @param annotationName the fully qualified class name of the annotation
                     *  type to look for
                     * @param classValuesAsString  whether to convert class references to String
                     * @return a MultiMap of attributes, with the attribute name as key (e.g. "value")
                     *  and a list of the defined attribute values as Map value. This return value will
                     *  be {#code null} if no matching annotation is defined.
                     * @see #getAllAnnotationAttributes(String)
                     */
                    // @ts-ignore
                    getAllAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
