declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
            interface Cancellable {
                /**
                 * Gets the cancellation state of this event. A cancelled event will not
                 * be executed in the server, but will still pass to other plugins
                 * @return true if this event is cancelled
                 */
                // @ts-ignore
                isCancelled(): boolean
                /**
                 * Sets the cancellation state of this event. A cancelled event will not
                 * be executed in the server, but will still pass to other plugins.
                 * @param cancel true if you wish to cancel this event
                 */
                // @ts-ignore
                setCancelled(cancel: boolean): void
            }
        }
    }
}
