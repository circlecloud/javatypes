declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * A registry of adapters to adapt Reactive Streams {@link Publisher} to/from
             * various async/reactive types such as {@code CompletableFuture}, RxJava
             * {@code Observable}, and others.
             * <p>By default, depending on classpath availability, adapters are registered
             * for Reactor, RxJava 1, RxJava 2 types, {@link CompletableFuture}, Java 9+
             * {@code Flow.Publisher} and Kotlin Coroutines {@code Deferred} and {@code Flow}.
             * @author Rossen Stoyanchev
             * @author Sebastien Deleuze
             * @since 5.0
             */
            // @ts-ignore
            class ReactiveAdapterRegistry extends java.lang.Object {
                /**
                 * Create a registry and auto-register default adapters.
                 * @see #getSharedInstance()
                 */
                // @ts-ignore
                constructor()
                /**
                 * Whether the registry has any adapters which would be the case if any of
                 * Reactor, RxJava 2, or RxJava 1 (+ RxJava Reactive Streams bridge) are
                 * present on the classpath.
                 */
                // @ts-ignore
                public hasAdapters(): boolean
                /**
                 * Register a reactive type along with functions to adapt to and from a
                 * Reactive Streams {@link Publisher}. The function arguments assume that
                 * their input is neither {@code null} nor {@link Optional}.
                 */
                // @ts-ignore
                public registerReactiveType(descriptor: org.springframework.core.ReactiveTypeDescriptor, toAdapter: java.util.function$.Function<java.lang.Object | any, object>, fromAdapter: java.util.function$.Function<object, java.lang.Object | any>): void
                /**
                 * Get the adapter for the given reactive type.
                 * @return the corresponding adapter, or {#code null} if none available
                 */
                // @ts-ignore
                public getAdapter(reactiveType: java.lang.Class<any>): org.springframework.core.ReactiveAdapter
                /**
                 * Get the adapter for the given reactive type. Or if a "source" object is
                 * provided, its actual type is used instead.
                 * @param reactiveType the reactive type
                 *  (may be {#code null} if a concrete source object is given)
                 * @param source an instance of the reactive type
                 *  (i.e. to adapt from; may be {#code null} if the reactive type is specified)
                 * @return the corresponding adapter, or {#code null} if none available
                 */
                // @ts-ignore
                public getAdapter(reactiveType: java.lang.Class<any>, source: java.lang.Object | any): org.springframework.core.ReactiveAdapter
                /**
                 * Return a shared default {@code ReactiveAdapterRegistry} instance,
                 * lazily building it once needed.
                 * <p><b>NOTE:</b> We highly recommend passing a long-lived, pre-configured
                 * {@code ReactiveAdapterRegistry} instance for customization purposes.
                 * This accessor is only meant as a fallback for code paths that want to
                 * fall back on a default instance if one isn't provided.
                 * @return the shared {#code ReactiveAdapterRegistry} instance
                 * @since 5.0.2
                 */
                // @ts-ignore
                public static getSharedInstance(): org.springframework.core.ReactiveAdapterRegistry
            }
        }
    }
}
