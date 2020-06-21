declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Enumeration of the type filters that may be used in conjunction with
                 * {@link ComponentScan @ComponentScan}.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 2.5
                 * @see ComponentScan
                 * @see ComponentScan#includeFilters()
                 * @see ComponentScan#excludeFilters()
                 * @see org.springframework.core.type.filter.TypeFilter
                 */
                // @ts-ignore
                class FilterType extends java.lang.Enum<org.springframework.context.annotation.FilterType> {
                    /**
                     * Filter candidates marked with a given annotation.
                     * @see org.springframework.core.type.filter.AnnotationTypeFilter
                     */
                    // @ts-ignore
                    readonly ANNOTATION: org.springframework.context.annotation.FilterType
                    /**
                     * Filter candidates assignable to a given type.
                     * @see org.springframework.core.type.filter.AssignableTypeFilter
                     */
                    // @ts-ignore
                    readonly ASSIGNABLE_TYPE: org.springframework.context.annotation.FilterType
                    /**
                     * Filter candidates matching a given AspectJ type pattern expression.
                     * @see org.springframework.core.type.filter.AspectJTypeFilter
                     */
                    // @ts-ignore
                    readonly ASPECTJ: org.springframework.context.annotation.FilterType
                    /**
                     * Filter candidates matching a given regex pattern.
                     * @see org.springframework.core.type.filter.RegexPatternTypeFilter
                     */
                    // @ts-ignore
                    readonly REGEX: org.springframework.context.annotation.FilterType
                    /**
                     * Filter candidates using a given custom
                     * {@link org.springframework.core.type.filter.TypeFilter} implementation.
                     */
                    // @ts-ignore
                    readonly CUSTOM: org.springframework.context.annotation.FilterType
                    // @ts-ignore
                    values(): org.springframework.context.annotation.FilterType[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.springframework.context.annotation.FilterType
                }
            }
        }
    }
}
