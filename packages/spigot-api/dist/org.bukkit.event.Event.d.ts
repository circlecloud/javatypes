declare namespace org {
    namespace bukkit {
        namespace event {
            /**
             * Represents an event.
             * All events require a static method named getHandlerList() which returns the same {@link HandlerList} as {@link #getHandlers()}.
             * @see PluginManager#callEvent(Event)
             * @see PluginManager#registerEvents(Listener,Plugin)
             */
            // @ts-ignore
            abstract class Event extends java.lang.Object {
                /**
                 * The default constructor is defined for cleaner code. This constructor
                 * assumes the event is synchronous.
                 */
                // @ts-ignore
                constructor()
                /**
                 * This constructor is used to explicitly declare an event as synchronous
                 * or asynchronous.
                 * @param isAsync true indicates the event will fire asynchronously, false
                 *      by default from default constructor
                 */
                // @ts-ignore
                constructor(isAsync: boolean)
                /**
                 * Convenience method for providing a user-friendly identifier. By
                 * default, it is the event's class's {@linkplain Class#getSimpleName()
                 * simple name}.
                 * @return name of this event
                 */
                // @ts-ignore
                public getEventName(): string
                // @ts-ignore
                public abstract getHandlers(): org.bukkit.event.HandlerList
                /**
                 * Any custom event that should not by synchronized with other events must
                 * use the specific constructor. These are the caveats of using an
                 * asynchronous event:
                 * <ul>
                 * <li>The event is never fired from inside code triggered by a
                 * synchronous event. Attempting to do so results in an {@link
                 * java.lang.IllegalStateException}.
                 * <li>However, asynchronous event handlers may fire synchronous or
                 * asynchronous events
                 * <li>The event may be fired multiple times simultaneously and in any
                 * order.
                 * <li>Any newly registered or unregistered handler is ignored after an
                 * event starts execution.
                 * <li>The handlers for this event may block for any length of time.
                 * <li>Some implementations may selectively declare a specific event use
                 * as asynchronous. This behavior should be clearly defined.
                 * <li>Asynchronous calls are not calculated in the plugin timing system.
                 * </ul>
                 * @return false by default, true if the event fires asynchronously
                 */
                // @ts-ignore
                public isAsynchronous(): boolean
            }
        }
    }
}
