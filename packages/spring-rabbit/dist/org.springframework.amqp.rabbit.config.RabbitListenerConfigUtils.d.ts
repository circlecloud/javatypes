declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * Configuration constants for internal sharing across subpackages.
                     * @author Juergen Hoeller
                     * @since 1.4
                     */
                    // @ts-ignore
                    abstract class RabbitListenerConfigUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * The bean name of the internally managed Rabbit listener annotation processor.
                         */
                        // @ts-ignore
                        public static readonly RABBIT_LISTENER_ANNOTATION_PROCESSOR_BEAN_NAME: java.lang.String | string
                        /**
                         * The bean name of the internally managed Rabbit listener endpoint registry.
                         */
                        // @ts-ignore
                        public static readonly RABBIT_LISTENER_ENDPOINT_REGISTRY_BEAN_NAME: java.lang.String | string
                    }
                }
            }
        }
    }
}
