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
                    // @ts-ignore
                    values(): org.springframework.context.annotation.FilterType[]
                    // @ts-ignore
                    valueOf(name: string): org.springframework.context.annotation.FilterType
                }
            }
        }
    }
}
