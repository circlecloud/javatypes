declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * A collection of {@link Declarable} objects; used to declare multiple objects on the
                 * broker using a single bean declaration for the collection.
                 * @author Gary Russell
                 * @since 2.1
                 */
                // @ts-ignore
                class Declarables extends java.lang.Object {
                    // @ts-ignore
                    constructor(...declarables: org.springframework.amqp.core.Declarable[])
                    // @ts-ignore
                    constructor(declarables: java.util.Collection<org.springframework.amqp.core.Declarable> | Array<org.springframework.amqp.core.Declarable>)
                    // @ts-ignore
                    public getDeclarables(): Array<org.springframework.amqp.core.Declarable>
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
