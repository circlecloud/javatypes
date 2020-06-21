declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of connection block and
             * unblock events.
             * For a lambda-oriented syntax, use {@link BlockedCallback} and
             * {@link UnblockedCallback}.
             */
            // @ts-ignore
            interface BlockedListener {
                // @ts-ignore
                handleBlocked(reason: java.lang.String | string): void
                // @ts-ignore
                handleUnblocked(): void
            }
        }
    }
}
