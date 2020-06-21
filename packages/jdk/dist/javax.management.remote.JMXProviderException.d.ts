declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>Exception thrown by {@link JMXConnectorFactory} and
             * {@link JMXConnectorServerFactory} when a provider exists for
             * the required protocol but cannot be used for some reason.</p>
             * @see JMXConnectorFactory#newJMXConnector
             * @see JMXConnectorServerFactory#newJMXConnectorServer
             * @since 1.5
             */
            // @ts-ignore
            class JMXProviderException extends java.io.IOException {
                /**
                 * <p>Constructs a <code>JMXProviderException</code> with no
                 * specified detail message.</p>
                 */
                // @ts-ignore
                constructor()
                /**
                 * <p>Constructs a <code>JMXProviderException</code> with the
                 * specified detail message.</p>
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * <p>Constructs a <code>JMXProviderException</code> with the
                 * specified detail message and nested exception.</p>
                 * @param message the detail message
                 * @param cause the nested exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                // @ts-ignore
                getCause(): Error
            }
        }
    }
}
