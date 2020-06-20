declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * Checked exception received by a thread when another thread interrupts it
             * while it is blocked in an I/O operation upon a channel.  Before this
             * exception is thrown the channel will have been closed and the interrupt
             * status of the previously-blocked thread will have been set.
             * @since 1.4
             */
            // @ts-ignore
            class ClosedByInterruptException extends java.nio.channels.AsynchronousCloseException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
