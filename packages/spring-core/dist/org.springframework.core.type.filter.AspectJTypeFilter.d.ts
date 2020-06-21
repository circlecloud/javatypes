declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * Type filter that uses AspectJ type pattern for matching.
                     * <p>A critical implementation details of this type filter is that it does not
                     * load the class being examined to match with a type pattern.
                     * @author Ramnivas Laddad
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class AspectJTypeFilter extends java.lang.Object implements org.springframework.core.type.filter.TypeFilter {
                        // @ts-ignore
                        constructor(typePatternExpression: java.lang.String | string, classLoader: java.lang.ClassLoader)
                        // @ts-ignore
                        public match(metadataReader: org.springframework.core.type.classreading.MetadataReader, metadataReaderFactory: org.springframework.core.type.classreading.MetadataReaderFactory): boolean
                    }
                }
            }
        }
    }
}
