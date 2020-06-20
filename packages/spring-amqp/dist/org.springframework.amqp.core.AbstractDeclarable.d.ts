declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Base class for {@link Declarable} classes.
                 * @author Gary Russell
                 * @since 1.2
                 */
                // @ts-ignore
                class AbstractDeclarable extends java.lang.Object implements org.springframework.amqp.core.Declarable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    shouldDeclare(): boolean
                    /**
                     * Whether or not this object should be automatically declared
                     * by any {@code AmqpAdmin}. Default is {@code true}.
                     * @param shouldDeclare true or false.
                     */
                    // @ts-ignore
                    setShouldDeclare(shouldDeclare: boolean): void
                    // @ts-ignore
                    getDeclaringAdmins(): java.util.Collection<?>
                    // @ts-ignore
                    isIgnoreDeclarationExceptions(): boolean
                    /**
                     * Set to true to ignore exceptions such as mismatched properties when declaring.
                     * @param ignoreDeclarationExceptions the ignoreDeclarationExceptions.
                     * @since 1.6
                     */
                    // @ts-ignore
                    setIgnoreDeclarationExceptions(ignoreDeclarationExceptions: boolean): void
                    /**
                     * The {@code AmqpAdmin}s that should declare this object; default is
                     * all admins.
                     * <br><br>A null argument, or an array/varArg with a single null argument, clears the collection
                     * ({@code setAdminsThatShouldDeclare((AmqpAdmin) null)} or
                     * {@code setAdminsThatShouldDeclare((AmqpAdmin[]) null)}). Clearing the collection resets
                     * the behavior such that all admins will declare the object.
                     * @param adminArgs The admins.
                     */
                    // @ts-ignore
                    setAdminsThatShouldDeclare(...adminArgs: any[]): void
                }
            }
        }
    }
}
