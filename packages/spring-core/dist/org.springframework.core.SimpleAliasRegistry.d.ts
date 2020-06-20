declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Simple implementation of the {@link AliasRegistry} interface.
             * <p>Serves as base class for
             * {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}
             * implementations.
             * @author Juergen Hoeller
             * @author Qimiao Chen
             * @since 2.5.2
             */
            // @ts-ignore
            class SimpleAliasRegistry extends java.lang.Object implements org.springframework.core.AliasRegistry {
                // @ts-ignore
                constructor()
                /**
                 * Logger available to subclasses.
                 */
                // @ts-ignore
                readonly logger: Log
                // @ts-ignore
                registerAlias(name: string, alias: string): void
                /**
                 * Determine whether alias overriding is allowed.
                 * <p>Default is {@code true}.
                 */
                // @ts-ignore
                allowAliasOverriding(): boolean
                /**
                 * Determine whether the given name has the given alias registered.
                 * @param name the name to check
                 * @param alias the alias to look for
                 * @since 4.2.1
                 */
                // @ts-ignore
                hasAlias(name: string, alias: string): boolean
                // @ts-ignore
                removeAlias(alias: string): void
                // @ts-ignore
                isAlias(name: string): boolean
                // @ts-ignore
                getAliases(name: string): java.lang.String[]
                /**
                 * Resolve all alias target names and aliases registered in this
                 * registry, applying the given {@link StringValueResolver} to them.
                 * <p>The value resolver may for example resolve placeholders
                 * in target bean names and even in alias names.
                 * @param valueResolver the StringValueResolver to apply
                 */
                // @ts-ignore
                resolveAliases(valueResolver: org.springframework.util.StringValueResolver): void
                /**
                 * Check whether the given name points back to the given alias as an alias
                 * in the other direction already, catching a circular reference upfront
                 * and throwing a corresponding IllegalStateException.
                 * @param name the candidate name
                 * @param alias the candidate alias
                 * @see #registerAlias
                 * @see #hasAlias
                 */
                // @ts-ignore
                checkForAliasCircle(name: string, alias: string): void
                /**
                 * Determine the raw name, resolving aliases to canonical names.
                 * @param name the user-specified name
                 * @return the transformed name
                 */
                // @ts-ignore
                canonicalName(name: string): java.lang.String
            }
        }
    }
}
