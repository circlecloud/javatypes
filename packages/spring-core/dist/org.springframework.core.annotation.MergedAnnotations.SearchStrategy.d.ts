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
                        // @ts-ignore
                        values(): org.springframework.core.annotation.MergedAnnotations.SearchStrategy[]
                        // @ts-ignore
                        valueOf(name: string): org.springframework.core.annotation.MergedAnnotations.SearchStrategy
                    }
                }
            }
        }
    }
}
