declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * Thrown when an unhandled exception occurs during the execution of a Command
             */
            // @ts-ignore
            class CommandException extends java.lang.RuntimeException {
                /**
                 * Creates a new instance of <code>CommandException</code> without detail
                 * message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an instance of <code>CommandException</code> with the
                 * specified detail message.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
