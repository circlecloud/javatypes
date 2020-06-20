declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * A simple filter for matching a fully-qualified class name with a regex {@link Pattern}.
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class RegexPatternTypeFilter extends org.springframework.core.type.filter.AbstractClassTestingTypeFilter {
                        // @ts-ignore
                        constructor(pattern: java.util.regex.Pattern)
                        // @ts-ignore
                        match(metadata: org.springframework.core.type.ClassMetadata): boolean
                    }
                }
            }
        }
    }
}
