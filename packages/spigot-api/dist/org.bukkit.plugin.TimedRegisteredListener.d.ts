declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Extends RegisteredListener to include timing information
             */
            // @ts-ignore
            class TimedRegisteredListener extends org.bukkit.plugin.RegisteredListener {
                // @ts-ignore
                constructor(pluginListener: org.bukkit.event.Listener, eventExecutor: org.bukkit.plugin.EventExecutor, eventPriority: org.bukkit.event.EventPriority, registeredPlugin: org.bukkit.plugin.Plugin, listenCancelled: boolean)
                // @ts-ignore
                callEvent(event: org.bukkit.event.Event): void
                /**
                 * Resets the call count and total time for this listener
                 */
                // @ts-ignore
                reset(): void
                /**
                 * Gets the total times this listener has been called
                 * @return Times this listener has been called
                 */
                // @ts-ignore
                getCount(): int
                /**
                 * Gets the total time calls to this listener have taken
                 * @return Total time for all calls of this listener
                 */
                // @ts-ignore
                getTotalTime(): long
                /**
                 * Gets the class of the events this listener handled. If it handled
                 * multiple classes of event, the closest shared superclass will be
                 * returned, such that for any event this listener has handled,
                 * <code>this.getEventClass().isAssignableFrom(event.getClass())</code>
                 * and no class <code>this.getEventClass().isAssignableFrom(clazz)
                 * {@literal && this.getEventClass() != clazz &&}
                 * event.getClass().isAssignableFrom(clazz)</code> for all handled events.
                 * @return the event class handled by this RegisteredListener
                 */
                // @ts-ignore
                getEventClass(): java.lang.Class<? extends org.bukkit.event.Event>
                /**
                 * Gets whether this listener has handled multiple events, such that for
                 * some two events, <code>eventA.getClass() != eventB.getClass()</code>.
                 * @return true if this listener has handled multiple events
                 */
                // @ts-ignore
                hasMultiple(): boolean
            }
        }
    }
}
