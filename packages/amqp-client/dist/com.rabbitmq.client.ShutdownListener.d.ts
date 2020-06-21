declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * A ShutdownListener receives information about the shutdown of connections and
             * channels. Note that when a connection is shut down, its associated channels are also
             * considered shut down and their ShutdownListeners will be notified (with the same cause).
             * Because of this, and the fact that channel ShutdownListeners execute in the connection's
             * thread, attempting to make blocking calls on a connection inside the listener will
             * lead to deadlock.
             * @see ShutdownNotifier
             * @see ShutdownSignalException
             */
            // @ts-ignore
            interface ShutdownListener extends java.util.EventListener {
                // @ts-ignore
                shutdownCompleted(cause: com.rabbitmq.client.ShutdownSignalException): void
            }
        }
    }
}
