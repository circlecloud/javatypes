declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of connection unblock events.
             * Prefer it over {@link BlockedListener} for a lambda-oriented syntax.
             * @see BlockedListener
             * @see BlockedCallback
             */
            // @ts-ignore
            interface UnblockedCallback {
                // @ts-ignore
                handle(): void
            }
        }
    }
}
