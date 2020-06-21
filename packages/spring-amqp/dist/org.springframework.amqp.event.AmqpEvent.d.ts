declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace event {
                /**
                 * Base class for events.
                 * @author Gary Russell
                 * @since 1.5
                 */
                // @ts-ignore
                abstract class AmqpEvent extends ApplicationEvent {
                    // @ts-ignore
                    constructor(source: java.lang.Object | any)
                }
            }
        }
    }
}
