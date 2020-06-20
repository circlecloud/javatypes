declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * Manages the registration of event listeners and the dispatching of events.
                 */
                // @ts-ignore
                interface EventManager {
                    /**
                     * Registers {@link Event} methods annotated with @{@link Listener} in the
                     * specified object.
                     * <p>Only methods that are public will be registered and the class must be
                     * public as well.</p>
                     * @param plugin The plugin instance
                     * @param obj The object
                     * @throws IllegalArgumentException Thrown if {#code plugin} is not a plugin
                     *          instance
                     */
                    // @ts-ignore
                    registerListeners(plugin: any, obj: any): void
                    /**
                     * Registers an event listener for a specific event class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     * @param plugin The plugin instance
                     * @param eventClass The event to listen to
                     * @param listener The listener to receive the events
                     * @param <T> The type of the event
                     */
                    // @ts-ignore
                    registerListener<T extends org.spongepowered.api.event.Event>(plugin: any, eventClass: java.lang.Class<T>, listener: org.spongepowered.api.event.EventListener<any super T>): void
                    /**
                     * Registers an event listener for a specific event {@link TypeToken}.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     * @param plugin The plugin instance
                     * @param eventType The event to listen to
                     * @param listener The listener to receive the events
                     * @param <T> The type of the event
                     */
                    // @ts-ignore
                    registerListener<T extends org.spongepowered.api.event.Event>(plugin: any, eventType: object, listener: org.spongepowered.api.event.EventListener<any super T>): void
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     * @param plugin The plugin instance
                     * @param eventClass The event to listen to
                     * @param order The order the listener will get called at
                     * @param listener The listener to receive the events
                     * @param <T> The type of the event
                     */
                    // @ts-ignore
                    registerListener<T extends org.spongepowered.api.event.Event>(plugin: any, eventClass: java.lang.Class<T>, order: org.spongepowered.api.event.Order, listener: org.spongepowered.api.event.EventListener<any super T>): void
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * {@link TypeToken}.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     * @param plugin The plugin instance
                     * @param eventType The event to listen to
                     * @param order The order the listener will get called at
                     * @param listener The listener to receive the events
                     * @param <T> The type of the event
                     */
                    // @ts-ignore
                    registerListener<T extends org.spongepowered.api.event.Event>(plugin: any, eventType: object, order: org.spongepowered.api.event.Order, listener: org.spongepowered.api.event.EventListener<any super T>): void
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     * @param plugin The plugin instance
                     * @param eventClass The event to listen to
                     * @param order The order the listener will get called at
                     * @param beforeModifications Whether to call the listener before other
                     *       server modifications
                     * @param listener The listener to receive the events
                     * @param <T> The type of the event
                     */
                    // @ts-ignore
                    registerListener<T extends org.spongepowered.api.event.Event>(plugin: any, eventClass: java.lang.Class<T>, order: org.spongepowered.api.event.Order, beforeModifications: boolean, listener: org.spongepowered.api.event.EventListener<any super T>): void
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     * @param plugin The plugin instance
                     * @param eventType The event to listen to
                     * @param order The order the listener will get called at
                     * @param beforeModifications Whether to call the listener before other
                     *       server modifications
                     * @param listener The listener to receive the events
                     * @param <T> The type of the event
                     */
                    // @ts-ignore
                    registerListener<T extends org.spongepowered.api.event.Event>(plugin: any, eventType: object, order: org.spongepowered.api.event.Order, beforeModifications: boolean, listener: org.spongepowered.api.event.EventListener<any super T>): void
                    /**
                     * Un-registers an object from receiving {@link Event}s.
                     * @param obj The object
                     */
                    // @ts-ignore
                    unregisterListeners(obj: any): void
                    /**
                     * Un-registers all event listeners of a plugin.
                     * @param plugin The plugin instance
                     */
                    // @ts-ignore
                    unregisterPluginListeners(plugin: any): void
                    /**
                     * Calls a {@link Event} to all listeners that listen to it.
                     * @param event The event
                     * @return True if cancelled, false if not
                     */
                    // @ts-ignore
                    post(event: org.spongepowered.api.event.Event): boolean
                }
            }
        }
    }
}
