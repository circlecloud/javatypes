declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Central helper that manages resources per thread to be used by resource management
                     * code.
                     * <p>
                     * {@link #bind(Object, Object)} supports one resource per key without overwriting, that
                     * is, a resource needs to be removed before a new one can be set for the same key. But
                     * see {@link #push(Object, Object)} and {@link #pop(Object)}.
                     * <p>
                     * Resource management code should check for thread-bound resources via
                     * {@link #has(Object)}.
                     * <p>
                     * This helper isn't designed for transaction synchronization cases. Use
                     * {@code TransactionSynchronizationManager} and {@code ResourceHolder} instead.
                     * @author Artem Bilan
                     * @author Gary Russell
                     * @since 1.3
                     */
                    // @ts-ignore
                    class SimpleResourceHolder extends java.lang.Object {
                        /**
                         * Return all resources that are bound to the current thread.
                         * <p>Mainly for debugging purposes. Resource managers should always invoke
                         * <code>hasResource</code> for a specific resource key that they are interested in.
                         * @return a Map with resource keys (usually the resource factory) and resource
                         *  values (usually the active resource object), or an empty Map if there are
                         *  currently no resources bound
                         * @see #has
                         */
                        // @ts-ignore
                        public static getResources(): java.util.Map<java.lang.Object | any, java.lang.Object | any>
                        /**
                         * Check if there is a resource for the given key bound to the current thread.
                         * @param key the key to check (usually the resource factory)
                         * @return if there is a value bound to the current thread
                         */
                        // @ts-ignore
                        public static has(key: java.lang.Object | any): boolean
                        /**
                         * Retrieve a resource for the given key that is bound to the current thread.
                         * @param key the key to check (usually the resource factory)
                         * @return a value bound to the current thread (usually the active
                         *  resource object), or <code>null</code> if none
                         */
                        // @ts-ignore
                        public static get(key: java.lang.Object | any): any
                        /**
                         * Bind the given resource for the given key to the current thread.
                         * @param key the key to bind the value to (usually the resource factory)
                         * @param value the value to bind (usually the active resource object)
                         * @throws IllegalStateException if there is already a value bound to the thread
                         */
                        // @ts-ignore
                        public static bind(key: java.lang.Object | any, value: java.lang.Object | any): void
                        /**
                         * Set the value for this key and push any existing value onto a stack.
                         * @param key the key.
                         * @param value the value.
                         * @since 2.1.11
                         */
                        // @ts-ignore
                        public static push(key: java.lang.Object | any, value: java.lang.Object | any): void
                        /**
                         * Unbind the current value and bind the head of the stack if present.
                         * @param key the key.
                         * @return the popped value.
                         * @since 2.1.11
                         */
                        // @ts-ignore
                        public static pop(key: java.lang.Object | any): any
                        /**
                         * Unbind a resource for the given key from the current thread.
                         * @param key the key to unbind (usually the resource factory)
                         * @return the previously bound value (usually the active resource object)
                         * @throws IllegalStateException if there is no value bound to the thread
                         */
                        // @ts-ignore
                        public static unbind(key: java.lang.Object | any): any
                        /**
                         * Unbind a resource for the given key from the current thread.
                         * @param key the key to unbind (usually the resource factory)
                         * @return the previously bound value, or <code>null</code> if none bound
                         */
                        // @ts-ignore
                        public static unbindIfPossible(key: java.lang.Object | any): any
                        /**
                         * Clear resources for the current thread.
                         */
                        // @ts-ignore
                        public static clear(): void
                    }
                }
            }
        }
    }
}
