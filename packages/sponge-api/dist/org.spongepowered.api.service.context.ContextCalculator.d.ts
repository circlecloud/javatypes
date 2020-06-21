declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    /**
                     * Calculates the {@link Context}s applicable for a {@link Contextual}.
                     * <p>Implementations of this interface should satisfy the following
                     * requirements:</p>
                     * <ul>
                     * <li>Context lookups should be <i>fast</i>: lookup methods are likely to
                     * be invoked frequently, and should therefore be fast to execute. If
                     * determining the current contexts involves a particularly time consuming
                     * lookup (database queries, network requests, etc), then such results
                     * should be cached ahead of time.</li>
                     * <li>Context lookups should be <i>thread-safe</i>: lookups will sometimes
                     * be performed from "async" threads, and therefore should not access any
                     * part of the server only safe for access from a sync context. If
                     * necessary, such results should be determined ahead of time and stored in
                     * a thread-safe collection for retrieval later.</li>
                     * <li>Context lookups should <i>not query active contexts</i>: doing so is
                     * likely to result in a stack overflow, or thread deadlock. Care should be
                     * taken to avoid (indirect) calls to
                     * {@link Contextual#getActiveContexts()}.</li>
                     * </ul>
                     * <p></p>
                     * <p>Calculators should be registered with the corresponding
                     * {@link ContextualService} using
                     * {@link ContextualService#registerContextCalculator(ContextCalculator)}.</p>
                     * <p>Context lookups for instances provided by the platform,
                     * (e.g. {@link Player}) are delegated to the active {@link PermissionService}.
                     * Plugins wishing to provide contexts for these instances should register
                     * calculators here.</p>
                     * <p>When the provider of a {@link ContextualService} changes, calculators must
                     * be registered again. Plugins should listen to the
                     * {@link ChangeServiceProviderEvent} to ensure their calculators are registered
                     * with any replacement providers.</p>
                     */
                    // @ts-ignore
                    interface ContextCalculator<T extends org.spongepowered.api.service.context.Contextual> {
                        /**
                         * Creates a new {@link ContextCalculator} that provides a single context.
                         * @param key The key of the context provided by the calculator
                         * @param valueFunction The function used to compute the corresponding value
                         *                       for each query. A context will not be "accumulated"
                         *                       if the value returned is null.
                         * @param <T> The contextual type
                         * @return The resultant calculator
                         */
                        // @ts-ignore
                        forSingleContext<T extends org.spongepowered.api.service.context.Contextual>(key: java.lang.String | string, valueFunction: java.util.function$.Function<T, java.lang.String | string>): org.spongepowered.api.service.context.ContextCalculator<T>
                        /**
                         * Adds any {@link Context}s this calculator determines to be applicable to
                         * the {@code target} contextual.
                         * <p>Care should be taken to ensure implementations of this method meet the
                         * general requirements for {@link ContextCalculator}, defined in the class
                         * doc.</p>
                         * <p>Calculators should not rely on the state of {@code accumulator} during
                         * this call, and also shouldn't make calls to remove contexts added by
                         * other calculators.</p>
                         * @param target the target {#link Contextual} for this operation
                         * @param accumulator a {#link Set} of {@link Context}s this operation
                         *                     will accumulate to.
                         */
                        // @ts-ignore
                        accumulateContexts(target: T, accumulator: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): void
                        /**
                         * Checks if a {@link Context} is currently applicable to a
                         * {@link Contextual}.
                         * <p>If this calculator does not handle the given type of context, this
                         * method should return false.</p>
                         * <p>For the given set of contexts which would be accumulated using
                         * {@link #accumulateContexts(Contextual, Set)}, this method should return
                         * true if the given context would be included in the accumulated set.</p>
                         * @param context the {#link Context} being checked
                         * @param target the {#link Contextual} that is being checked against
                         * @return True if the given {#link Context} is handled by this calculator
                         *          and is applicable to the given {@link Contextual}. Otherwise
                         *          false.
                         */
                        // @ts-ignore
                        matches(context: org.spongepowered.api.service.context.Context, target: T): boolean
                    }
                }
            }
        }
    }
}
