declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                namespace MergedAnnotations {
                    /**
                     * Search strategies supported by
                     * {@link MergedAnnotations#from(AnnotatedElement, SearchStrategy)}.
                     * <p>Each strategy creates a different set of aggregates that will be
                     * combined to create the final {@link MergedAnnotations}.
                     */
                    // @ts-ignore
                    class SearchStrategy extends java.lang.Enum<org.springframework.core.annotation.MergedAnnotations.SearchStrategy> {
                        /**
                         * Find only directly declared annotations, without considering
                         * {@link Inherited @Inherited} annotations and without searching
                         * superclasses or implemented interfaces.
                         */
                        // @ts-ignore
                        readonly DIRECT: org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                        /**
                         * Find all directly declared annotations as well as any
                         * {@link Inherited @Inherited} superclass annotations. This strategy
                         * is only really useful when used with {@link Class} types since the
                         * {@link Inherited @Inherited} annotation is ignored for all other
                         * {@linkplain AnnotatedElement annotated elements}. This strategy does
                         * not search implemented interfaces.
                         */
                        // @ts-ignore
                        readonly INHERITED_ANNOTATIONS: org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                        /**
                         * Find all directly declared and superclass annotations. This strategy
                         * is similar to {@link #INHERITED_ANNOTATIONS} except the annotations
                         * do not need to be meta-annotated with {@link Inherited @Inherited}.
                         * This strategy does not search implemented interfaces.
                         */
                        // @ts-ignore
                        readonly SUPERCLASS: org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                        /**
                         * Perform a full search of the entire type hierarchy, including
                         * superclasses and implemented interfaces. Superclass annotations do
                         * not need to be meta-annotated with {@link Inherited @Inherited}.
                         */
                        // @ts-ignore
                        readonly TYPE_HIERARCHY: org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                        /**
                         * Perform a full search of the entire type hierarchy on the source
                         * <em>and</em> any enclosing classes. This strategy is similar to
                         * {@link #TYPE_HIERARCHY} except that {@linkplain Class#getEnclosingClass()
                         * enclosing classes} are also searched. Superclass annotations do not
                         * need to be meta-annotated with {@link Inherited @Inherited}. When
                         * searching a {@link Method} source, this strategy is identical to
                         * {@link #TYPE_HIERARCHY}.
                         */
                        // @ts-ignore
                        readonly TYPE_HIERARCHY_AND_ENCLOSING_CLASSES: org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                        // @ts-ignore
                        values(): org.springframework.core.annotation.MergedAnnotations.SearchStrategy[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                    }
                }
            }
        }
    }
}
