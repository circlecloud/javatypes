declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Thrown when a plugin attempts to interact with the server when it is not
             * enabled
             */
            // @ts-ignore
            class IllegalPluginAccessException extends java.lang.RuntimeException {
                /**
                 * Creates a new instance of <code>IllegalPluginAccessException</code>
                 * without detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an instance of <code>IllegalPluginAccessException</code>
                 * with the specified detail message.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
