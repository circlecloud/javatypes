declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * A simple {@link TypeFilter} which matches classes with a given annotation,
                     * checking inherited annotations as well.
                     * <p>By default, the matching logic mirrors that of
                     * {@link AnnotationUtils#getAnnotation(java.lang.reflect.AnnotatedElement, Class)},
                     * supporting annotations that are <em>present</em> or <em>meta-present</em> for a
                     * single level of meta-annotations. The search for meta-annotations my be disabled.
                     * Similarly, the search for annotations on interfaces may optionally be enabled.
                     * Consult the various constructors in this class for details.
                     * @author Mark Fisher
                     * @author Ramnivas Laddad
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 2.5
                     */
                    // @ts-ignore
                    class AnnotationTypeFilter extends org.springframework.core.type.filter.AbstractTypeHierarchyTraversingFilter {
                        /**
                         * Create a new {@code AnnotationTypeFilter} for the given annotation type.
                         * <p>The filter will also match meta-annotations. To disable the
                         * meta-annotation matching, use the constructor that accepts a
                         * '{@code considerMetaAnnotations}' argument.
                         * <p>The filter will not match interfaces.
                         * @param annotationType the annotation type to match
                         */
                        // @ts-ignore
                        constructor(annotationType: java.lang.Class<any>)
                        /**
                         * Create a new {@code AnnotationTypeFilter} for the given annotation type.
                         * <p>The filter will not match interfaces.
                         * @param annotationType the annotation type to match
                         * @param considerMetaAnnotations whether to also match on meta-annotations
                         */
                        // @ts-ignore
                        constructor(annotationType: java.lang.Class<any>, considerMetaAnnotations: boolean)
                        /**
                         * Create a new {@code AnnotationTypeFilter} for the given annotation type.
                         * @param annotationType the annotation type to match
                         * @param considerMetaAnnotations whether to also match on meta-annotations
                         * @param considerInterfaces whether to also match interfaces
                         */
                        // @ts-ignore
                        constructor(annotationType: java.lang.Class<any>, considerMetaAnnotations: boolean, considerInterfaces: boolean)
                        /**
                         * Return the {@link Annotation} that this instance is using to filter
                         * candidates.
                         * @since 5.0
                         */
                        // @ts-ignore
                        public getAnnotationType(): java.lang.Class<any>
                        // @ts-ignore
                        matchSelf(metadataReader: org.springframework.core.type.classreading.MetadataReader): boolean
                        // @ts-ignore
                        matchSuperClass(superClassName: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        matchInterface(interfaceName: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        hasAnnotation(typeName: java.lang.String | string): java.lang.Boolean
                    }
                }
            }
        }
    }
}
