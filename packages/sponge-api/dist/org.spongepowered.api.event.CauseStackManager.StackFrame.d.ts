declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace CauseStackManager {
                    // @ts-ignore
                    interface StackFrame extends java.lang.AutoCloseable {
                        /**
                         * Gets the current {@link Cause} object from the current cause stack.
                         * @return A cause of the current stack.
                         * @see CauseStackManager#getCurrentCause()
                         */
                        // @ts-ignore
                        getCurrentCause(): org.spongepowered.api.event.cause.Cause
                        /**
                         * Gets an {@link EventContext} object on the current contextual
                         * information.
                         * @return The current event context
                         * @see CauseStackManager#getCurrentContext()
                         */
                        // @ts-ignore
                        getCurrentContext(): org.spongepowered.api.event.cause.EventContext
                        /**
                         * Pushes an object to the current cause stack which will associate
                         * it with all events through from api actions until it is
                         * popped off again.
                         * @param obj The object to push to the stack
                         * @return The stack frame, for chaining
                         * @see CauseStackManager#pushCause(Object)
                         */
                        // @ts-ignore
                        pushCause(obj: java.lang.Object | any): org.spongepowered.api.event.CauseStackManager.StackFrame
                        /**
                         * Pops the most recently pushed cause object off of the stack and
                         * returns it.
                         * @return The last pushed object
                         * @see CauseStackManager#popCause()
                         */
                        // @ts-ignore
                        popCause(): any
                        /**
                         * Adds the given object to the current context under the given key.
                         * @param key The context key
                         * @param value The object
                         * @return The stack frame, for chaining
                         * @see EventContextKeys
                         * @see CauseStackManager#addContext(EventContextKey, Object)
                         */
                        // @ts-ignore
                        addContext<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>, value: T): org.spongepowered.api.event.CauseStackManager.StackFrame
                        /**
                         * Removes the given context key from the current context.
                         * @param key The key to clear
                         * @return The existing context value, if it was present
                         * @see EventContextKeys
                         * @see CauseStackManager#removeContext(EventContextKey)
                         */
                        // @ts-ignore
                        removeContext<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): java.util.Optional<T>
                        // @ts-ignore
                        close(): void
                    }
                }
            }
        }
    }
}
