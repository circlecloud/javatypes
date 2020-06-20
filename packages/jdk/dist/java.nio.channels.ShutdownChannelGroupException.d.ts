declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * Unchecked exception thrown when an attempt is made to construct a channel in
             * a group that is shutdown or the completion handler for an I/O operation
             * cannot be invoked because the channel group has terminated.
             * @since 1.7
             */
            // @ts-ignore
            class ShutdownChannelGroupException extends java.lang.IllegalStateException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
