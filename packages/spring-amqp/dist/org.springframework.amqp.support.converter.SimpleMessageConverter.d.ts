declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Implementation of {@link MessageConverter} that can work with Strings, Serializable
                     * instances, or byte arrays. The {@link #toMessage(Object, MessageProperties)} method
                     * simply checks the type of the provided instance while the {@link #fromMessage(Message)}
                     * method relies upon the {@link MessageProperties#getContentType() content-type} of the
                     * provided Message.
                     * @author Mark Fisher
                     * @author Oleg Zhurakousky
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class SimpleMessageConverter extends org.springframework.amqp.support.converter.WhiteListDeserializingMessageConverter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly DEFAULT_CHARSET: string
                        // @ts-ignore
                        setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        /**
                         * Set the codebase URL to download classes from if not found locally. Can consists of multiple URLs, separated by
                         * spaces.
                         * <p>
                         * Follows RMI's codebase conventions for dynamic class download.
                         * @param codebaseUrl The codebase URL.
                         * @see org.springframework.remoting.rmi.CodebaseAwareObjectInputStream
                         * @see java.rmi.server.RMIClassLoader
                         */
                        // @ts-ignore
                        setCodebaseUrl(codebaseUrl: string): void
                        /**
                         * Specify the default charset to use when converting to or from text-based
                         * Message body content. If not specified, the charset will be "UTF-8".
                         * @param defaultCharset The default charset.
                         */
                        // @ts-ignore
                        setDefaultCharset(defaultCharset: string): void
                        /**
                         * Converts from a AMQP Message to an Object.
                         */
                        // @ts-ignore
                        fromMessage(message: org.springframework.amqp.core.Message): java.lang.Object
                        /**
                         * Creates an AMQP Message from the provided Object.
                         */
                        // @ts-ignore
                        createMessage(object: any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        /**
                         * Create an ObjectInputStream for the given InputStream and codebase. The default implementation creates a
                         * CodebaseAwareObjectInputStream.
                         * @param is the InputStream to read from
                         * @param codebaseUrl the codebase URL to load classes from if not found locally (can be <code>null</code>)
                         * @return the new ObjectInputStream instance to use
                         * @throws IOException if creation of the ObjectInputStream failed
                         * @see org.springframework.remoting.rmi.CodebaseAwareObjectInputStream
                         */
                        // @ts-ignore
                        createObjectInputStream(jis: java.io.InputStream, codebaseUrl: string): java.io.ObjectInputStream
                    }
                }
            }
        }
    }
}
