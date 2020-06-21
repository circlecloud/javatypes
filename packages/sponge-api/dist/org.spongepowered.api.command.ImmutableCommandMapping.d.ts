declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * An immutable command mapping instance that returns the same objects that
                 * this instance is constructed with.
                 */
                // @ts-ignore
                class ImmutableCommandMapping extends java.lang.Object implements org.spongepowered.api.command.CommandMapping {
                    /**
                     * Create a new instance.
                     * @param callable The command callable
                     * @param primary The primary alias
                     * @param alias A list of all aliases
                     * @throws IllegalArgumentException Thrown if aliases are duplicated
                     */
                    // @ts-ignore
                    constructor(callable: org.spongepowered.api.command.CommandCallable, primary: java.lang.String | string, ...alias: java.lang.String[] | string[])
                    /**
                     * Create a new instance.
                     * @param callable The command callable
                     * @param primary The primary alias
                     * @param aliases A collection of all aliases
                     * @throws IllegalArgumentException Thrown if aliases are duplicated
                     */
                    // @ts-ignore
                    constructor(callable: org.spongepowered.api.command.CommandCallable, primary: java.lang.String | string, aliases: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                    // @ts-ignore
                    public getPrimaryAlias(): string
                    // @ts-ignore
                    public getAllAliases(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getCallable(): org.spongepowered.api.command.CommandCallable
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
