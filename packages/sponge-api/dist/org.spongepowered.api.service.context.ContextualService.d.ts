declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    /**
                     * A common interface for services which provide a means to store and query
                     * data for {@link Contextual}s, according to given or calculated
                     * {@link Context} state.
                     * <p>When functionality is provided to query data based upon a given
                     * {@link Set} of {@link Context}s, the querying code must consider which of the
                     * underlying data is "applicable" to the contexts specified in the query
                     * request. It is expected that implementations will deem entries of underlying
                     * data to be applicable if the {@link Set} of contexts defined in the query
                     * contain all of the {@link Context}s required by the data entry.
                     * Mathematically, an underlying data entry is "applicable" if
                     * [the context of the entry] is a subset of [the context provided in the
                     * query], or programmatically if [the context provided in the query]
                     * {@link Set#containsAll(Collection)} of [the context of the entry].</p>
                     * @param <T> the contextual type
                     */
                    // @ts-ignore
                    interface ContextualService<T extends org.spongepowered.api.service.context.Contextual> {
                        /**
                         * Registers a {@link ContextCalculator} for use by this service.
                         * <p>It is not guaranteed that the calculator will be used by the service,
                         * as some implementations may not support contexts.</p>
                         * @param calculator The context calculator to register
                         */
                        // @ts-ignore
                        registerContextCalculator(calculator: org.spongepowered.api.service.context.ContextCalculator<T>): void
                    }
                }
            }
        }
    }
}
