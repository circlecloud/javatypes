declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * Provides an interface into the system managing the cause and contextual
                 * information for events being thrown. This allows plugins to attach more
                 * contextual information to events which may be triggered from their api
                 * interactions.
                 * <p>For example a plugin may wish to push a player into the cause stack before
                 * spawning an entity to expose to any plugin listening for SpawnEntityEvents
                 * that the player is the reason that the entity was spawned.</p>
                 * <p>This system will automatically handle associating a plugin with actions
                 * performed inside of event listeners, command executors, and scheduled
                 * tasks.</p>
                 */
                // @ts-ignore
                interface CauseStackManager {
                    /**
                     * Gets the current {@link Cause} object from the current cause stack.
                     * @return A cause of the current stack.
                     */
                    // @ts-ignore
                    getCurrentCause(): org.spongepowered.api.event.cause.Cause
                    /**
                     * Gets an {@link EventContext} object on the current contextual
                     * information.
                     * @return The current event context
                     */
                    // @ts-ignore
                    getCurrentContext(): org.spongepowered.api.event.cause.EventContext
                    /**
                     * Pushes an object to the current cause stack which will associate it with
                     * all events through from api actions until it is popped off again.
                     * @param obj The object to push to the stack
                     * @return The cause stack manager, for chaining
                     */
                    // @ts-ignore
                    pushCause(obj: any): org.spongepowered.api.event.CauseStackManager
                    /**
                     * Pops the most recently pushed cause object off of the stack and returns
                     * it.
                     * @return The last pushed object
                     */
                    // @ts-ignore
                    popCause(): java.lang.Object
                    /**
                     * Pops the most recently <b>n</b> pushed cause objects off of the stack.
                     * @param n The number of causes to pop
                     */
                    // @ts-ignore
                    popCauses(n: number /*int*/): void
                    /**
                     * Retrieves but does not remove the most recently pushed cause object.
                     * @return The last pushed object
                     */
                    // @ts-ignore
                    peekCause(): java.lang.Object
                    /**
                     * Pushes a frame of the current cause stack and context state.
                     * @return A handle for the frame which must be passed back to pop the frame
                     *          from the stack
                     */
                    // @ts-ignore
                    pushCauseFrame(): org.spongepowered.api.event.CauseStackManager.StackFrame
                    /**
                     * Replaces the current cause stack and context with the cause frame at the
                     * top of the frame stack.
                     * <p>The frame handle is required to ensure that frames are popped of in
                     * order and are not left in the stack. If an attempt is made to pop a frame
                     * which is not the head of the frame stack then an error will be thrown as
                     * this indicates that a frame was not popped properly.</p>
                     * @param handle The frame handle to pop
                     */
                    // @ts-ignore
                    popCauseFrame(handle: org.spongepowered.api.event.CauseStackManager.StackFrame): void
                    /**
                     * Adds the given object to the current context under the given key.
                     * @param key The context key
                     * @param value The object
                     * @param <T> The type of the value stored with the event context key
                     * @return The cause stack manager, for chaining
                     * @see EventContextKeys
                     */
                    // @ts-ignore
                    addContext<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>, value: T): org.spongepowered.api.event.CauseStackManager
                    /**
                     * Gets the context value with the given key.
                     * @param key The context key
                     * @param <T> The type of the value stored with the event context key
                     * @return The context object, if present
                     */
                    // @ts-ignore
                    getContext<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): java.util.Optional<T>
                    /**
                     * Gets the context value with the given key.
                     * <p>If the key is not available, {@link NoSuchElementException} will be
                     * thrown.</p>
                     * @param key The context key
                     * @param <T> The type of the value stored with the event context key
                     * @return The context object, if present
                     */
                    // @ts-ignore
                    requireContext<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): T
                    /**
                     * Removes the given context key from the current context.
                     * @param key The key to clear
                     * @param <T> The type of the value stored with the event context key
                     * @return The existing context value, if it was present
                     * @see EventContextKeys
                     */
                    // @ts-ignore
                    removeContext<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): java.util.Optional<T>
                }
            }
        }
    }
}
