declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Common interface for managing aliases. Serves as a super-interface for
             * {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}.
             * @author Juergen Hoeller
             * @since 2.5.2
             */
            // @ts-ignore
            interface AliasRegistry {
                /**
                 * Given a name, register an alias for it.
                 * @param name the canonical name
                 * @param alias the alias to be registered
                 * @throws IllegalStateException if the alias is already in use
                 *  and may not be overridden
                 */
                // @ts-ignore
                registerAlias(name: string, alias: string): void
                /**
                 * Remove the specified alias from this registry.
                 * @param alias the alias to remove
                 * @throws IllegalStateException if no such alias was found
                 */
                // @ts-ignore
                removeAlias(alias: string): void
                /**
                 * Determine whether the given name is defined as an alias
                 * (as opposed to the name of an actually registered component).
                 * @param name the name to check
                 * @return whether the given name is an alias
                 */
                // @ts-ignore
                isAlias(name: string): boolean
                /**
                 * Return the aliases for the given name, if defined.
                 * @param name the name to check for aliases
                 * @return the aliases, or an empty array if none
                 */
                // @ts-ignore
                getAliases(name: string): java.lang.String[]
            }
        }
    }
}
