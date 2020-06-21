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
                public registerAlias(name: java.lang.String | string, alias: java.lang.String | string): void
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
                public hasAlias(name: java.lang.String | string, alias: java.lang.String | string): boolean
                // @ts-ignore
                public removeAlias(alias: java.lang.String | string): void
                // @ts-ignore
                public isAlias(name: java.lang.String | string): boolean
                // @ts-ignore
                public getAliases(name: java.lang.String | string): string[]
                /**
                 * Resolve all alias target names and aliases registered in this
                 * registry, applying the given {@link StringValueResolver} to them.
                 * <p>The value resolver may for example resolve placeholders
                 * in target bean names and even in alias names.
                 * @param valueResolver the StringValueResolver to apply
                 */
                // @ts-ignore
                public resolveAliases(valueResolver: org.springframework.util.StringValueResolver): void
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
                checkForAliasCircle(name: java.lang.String | string, alias: java.lang.String | string): void
                /**
                 * Determine the raw name, resolving aliases to canonical names.
                 * @param name the user-specified name
                 * @return the transformed name
                 */
                // @ts-ignore
                public canonicalName(name: java.lang.String | string): string
            }
        }
    }
}
