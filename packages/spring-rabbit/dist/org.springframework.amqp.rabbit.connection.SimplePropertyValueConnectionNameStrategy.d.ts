declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A {@link ConnectionNameStrategy} that returns the value of a (required) property. If
                     * the property does not exist, the connection will be given the name of the property.
                     * @author Gary Russell
                     * @since 2.1
                     */
                    // @ts-ignore
                    class SimplePropertyValueConnectionNameStrategy extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionNameStrategy {
                        // @ts-ignore
                        constructor(propertyName: java.lang.String | string)
                        // @ts-ignore
                        public setEnvironment(environment: Environment): void
                        // @ts-ignore
                        public obtainNewConnectionName(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): string
                    }
                }
            }
        }
    }
}
