declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * Checked exception thrown when an attempt is made to invoke or complete an
             * I/O operation upon channel that is closed, or at least closed to that
             * operation.  That this exception is thrown does not necessarily imply that
             * the channel is completely closed.  A socket channel whose write half has
             * been shut down, for example, may still be open for reading.
             * @since 1.4
             */
            // @ts-ignore
            class ClosedChannelException extends java.io.IOException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
