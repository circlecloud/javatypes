declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Support class for throttling concurrent access to a specific resource.
             * <p>Designed for use as a base class, with the subclass invoking
             * the {@link #beforeAccess()} and {@link #afterAccess()} methods at
             * appropriate points of its workflow. Note that {@code afterAccess}
             * should usually be called in a finally block!
             * <p>The default concurrency limit of this support class is -1
             * ("unbounded concurrency"). Subclasses may override this default;
             * check the javadoc of the concrete class that you're using.
             * @author Juergen Hoeller
             * @since 1.2.5
             * @see #setConcurrencyLimit
             * @see #beforeAccess()
             * @see #afterAccess()
             * @see org.springframework.aop.interceptor.ConcurrencyThrottleInterceptor
             * @see java.io.Serializable
             */
            // @ts-ignore
            class ConcurrencyThrottleSupport extends java.lang.Object implements java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * Permit any number of concurrent invocations: that is, don't throttle concurrency.
                 */
                // @ts-ignore
                readonly UNBOUNDED_CONCURRENCY: number /*int*/
                /**
                 * Switch concurrency 'off': that is, don't allow any concurrent invocations.
                 */
                // @ts-ignore
                readonly NO_CONCURRENCY: number /*int*/
                /**
                 * Transient to optimize serialization.
                 */
                // @ts-ignore
                logger: Log
                /**
                 * Set the maximum number of concurrent access attempts allowed.
                 * -1 indicates unbounded concurrency.
                 * <p>In principle, this limit can be changed at runtime,
                 * although it is generally designed as a config time setting.
                 * <p>NOTE: Do not switch between -1 and any concrete limit at runtime,
                 * as this will lead to inconsistent concurrency counts: A limit
                 * of -1 effectively turns off concurrency counting completely.
                 */
                // @ts-ignore
                setConcurrencyLimit(concurrencyLimit: number /*int*/): void
                /**
                 * Return the maximum number of concurrent access attempts allowed.
                 */
                // @ts-ignore
                getConcurrencyLimit(): int
                /**
                 * Return whether this throttle is currently active.
                 * @return {#code true} if the concurrency limit for this instance is active
                 * @see #getConcurrencyLimit()
                 */
                // @ts-ignore
                isThrottleActive(): boolean
                /**
                 * To be invoked before the main execution logic of concrete subclasses.
                 * <p>This implementation applies the concurrency throttle.
                 * @see #afterAccess()
                 */
                // @ts-ignore
                beforeAccess(): void
                /**
                 * To be invoked after the main execution logic of concrete subclasses.
                 * @see #beforeAccess()
                 */
                // @ts-ignore
                afterAccess(): void
            }
        }
    }
}
