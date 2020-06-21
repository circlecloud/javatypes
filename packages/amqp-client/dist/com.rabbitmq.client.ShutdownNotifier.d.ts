declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Interface for components that are shutdown capable and
             * that allow listeners to be added for shutdown signals
             * @see ShutdownListener
             * @see ShutdownSignalException
             */
            // @ts-ignore
            interface ShutdownNotifier {
                /**
                 * Add shutdown listener.
                 * If the component is already closed, handler is fired immediately
                 * @param listener {#link ShutdownListener} to the component
                 */
                // @ts-ignore
                addShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                /**
                 * Remove shutdown listener for the component.
                 * @param listener {#link ShutdownListener} to be removed
                 */
                // @ts-ignore
                removeShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                /**
                 * Get the shutdown reason object
                 * @return ShutdownSignalException if component is closed, null otherwise
                 */
                // @ts-ignore
                getCloseReason(): com.rabbitmq.client.ShutdownSignalException
                /**
                 * Protected API - notify the listeners attached to the component
                 * @see com.rabbitmq.client.ShutdownListener
                 */
                // @ts-ignore
                notifyListeners(): void
                /**
                 * Determine whether the component is currently open.
                 * Will return false if we are currently closing.
                 * Checking this method should be only for information,
                 * because of the race conditions - state can change after the call.
                 * Instead just execute and try to catch ShutdownSignalException
                 * and IOException
                 * @return true when component is open, false otherwise
                 */
                // @ts-ignore
                isOpen(): boolean
            }
        }
    }
}
