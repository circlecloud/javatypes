declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * A strategy to generate names.
                 * @author Gary Russell
                 * @since 2.1
                 */
                // @ts-ignore
                interface NamingStrategy {
                    // @ts-ignore
                    generateName(): java.lang.String
                }
            }
        }
    }
}
