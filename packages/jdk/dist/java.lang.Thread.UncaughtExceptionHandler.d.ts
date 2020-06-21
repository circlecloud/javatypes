declare namespace java {
    namespace lang {
        namespace Thread {
            /**
             * A handler which is invoked when an uncaught exception occurs in a Thread.
             */
            // @ts-ignore
            interface UncaughtExceptionHandler {
                /**
                 * The method invoked when an uncaught exception occurs in a Thread.
                 * @param thread the Thread where the uncaught exception occurred
                 * @param throwable the uncaught exception
                 */
                // @ts-ignore
                uncaughtException(thread: java.lang.Thread, throwable: java.lang.Throwable | Error): void
            }
        }
    }
}
