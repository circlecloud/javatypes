declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of connection block events.
             * Prefer it over {@link BlockedListener} for a lambda-oriented syntax.
             * @see BlockedListener
             * @see UnblockedCallback
             */
            // @ts-ignore
            interface BlockedCallback {
                // @ts-ignore
                handle(reason: java.lang.String | string): void
            }
        }
    }
}
