declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * A generic composite servlet {@link Filter} that just delegates its behavior
                 * to a chain (list) of user-supplied filters, achieving the functionality of a
                 * {@link FilterChain}, but conveniently using only {@link Filter} instances.
                 * <p>This is useful for filters that require dependency injection, and can
                 * therefore be set up in a Spring application context. Typically, this
                 * composite would be used in conjunction with {@link DelegatingFilterProxy},
                 * so that it can be declared in Spring but applied to a servlet context.
                 * @author Dave Syer
                 * @since 3.1
                 */
                // @ts-ignore
                class CompositeFilter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setFilters(filters: Array<Filter>): void
                    /**
                     * Initialize all the filters, calling each one's init method in turn in the order supplied.
                     * @see Filter#init(FilterConfig)
                     */
                    // @ts-ignore
                    init(config: FilterConfig): void
                    /**
                     * Forms a temporary chain from the list of delegate filters supplied ({@link #setFilters})
                     * and executes them in order. Each filter delegates to the next one in the list, achieving
                     * the normal behavior of a {@link FilterChain}, despite the fact that this is a {@link Filter}.
                     * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
                     */
                    // @ts-ignore
                    doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain): void
                    /**
                     * Clean up all the filters supplied, calling each one's destroy method in turn, but in reverse order.
                     * @see Filter#init(FilterConfig)
                     */
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
