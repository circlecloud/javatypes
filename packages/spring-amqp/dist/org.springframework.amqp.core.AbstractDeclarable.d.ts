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
                abstract class AbstractDeclarable extends java.lang.Object implements org.springframework.amqp.core.Declarable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public shouldDeclare(): boolean
                    /**
                     * Whether or not this object should be automatically declared
                     * by any {@code AmqpAdmin}. Default is {@code true}.
                     * @param shouldDeclare true or false.
                     */
                    // @ts-ignore
                    public setShouldDeclare(shouldDeclare: boolean): void
                    // @ts-ignore
                    public getDeclaringAdmins(): Array<any>
                    // @ts-ignore
                    public isIgnoreDeclarationExceptions(): boolean
                    /**
                     * Set to true to ignore exceptions such as mismatched properties when declaring.
                     * @param ignoreDeclarationExceptions the ignoreDeclarationExceptions.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public setIgnoreDeclarationExceptions(ignoreDeclarationExceptions: boolean): void
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
                    public setAdminsThatShouldDeclare(...adminArgs: java.lang.Object[] | any[]): void
                }
            }
        }
    }
}
