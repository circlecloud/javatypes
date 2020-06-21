declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Classes implementing this interface can be auto-declared
                 * with the broker during context initialization by an {@code AmqpAdmin}.
                 * Registration can be limited to specific {@code AmqpAdmin}s.
                 * @author Gary Russell
                 * @since 1.2
                 */
                // @ts-ignore
                interface Declarable {
                    /**
                     * Whether or not this object should be automatically declared
                     * by any {@code AmqpAdmin}.
                     * @return true if the object should be declared.
                     */
                    // @ts-ignore
                    shouldDeclare(): boolean
                    /**
                     * The collection of {@code AmqpAdmin}s that should declare this
                     * object; if empty, all admins should declare.
                     * @return the collection.
                     */
                    // @ts-ignore
                    getDeclaringAdmins(): Array<any>
                    /**
                     * Should ignore exceptions (such as mismatched args) when declaring.
                     * @return true if should ignore.
                     * @since 1.6
                     */
                    // @ts-ignore
                    isIgnoreDeclarationExceptions(): boolean
                }
            }
        }
    }
}
