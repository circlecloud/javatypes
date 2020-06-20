declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * Checked exception received by a thread when another thread interrupts it
             * while it is waiting to acquire a file lock.  Before this exception is thrown
             * the interrupt status of the previously-blocked thread will have been set.
             * @since 1.4
             */
            // @ts-ignore
            class FileLockInterruptionException extends java.io.IOException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
