declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Exception thrown when a thread tries to wait upon a barrier that is
             * in a broken state, or which enters the broken state while the thread
             * is waiting.
             * @see CyclicBarrier
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class BrokenBarrierException extends java.lang.Exception {
                /**
                 * Constructs a {@code BrokenBarrierException} with no specified detail
                 * message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code BrokenBarrierException} with the specified
                 * detail message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}
