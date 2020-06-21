declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Subclass of PropertyPlaceholderConfigurer that supports JDK 1.4's
                     * Preferences API ({@code java.util.prefs}).
                     * <p>Tries to resolve placeholders as keys first in the user preferences,
                     * then in the system preferences, then in this configurer's properties.
                     * Thus, behaves like PropertyPlaceholderConfigurer if no corresponding
                     * preferences defined.
                     * <p>Supports custom paths for the system and user preferences trees. Also
                     * supports custom paths specified in placeholders ("myPath/myPlaceholderKey").
                     * Uses the respective root node if not specified.
                     * @author Juergen Hoeller
                     * @since 16.02.2004
                     * @see #setSystemTreePath
                     * @see #setUserTreePath
                     * @see java.util.prefs.Preferences
                     * @deprecated as of 5.2, along with {#link PropertyPlaceholderConfigurer}
                     */
                    // @ts-ignore
                    class PreferencesPlaceholderConfigurer extends org.springframework.beans.factory.config.PropertyPlaceholderConfigurer implements org.springframework.beans.factory.InitializingBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the path in the system preferences tree to use for resolving
                         * placeholders. Default is the root node.
                         */
                        // @ts-ignore
                        public setSystemTreePath(systemTreePath: java.lang.String | string): void
                        /**
                         * Set the path in the system preferences tree to use for resolving
                         * placeholders. Default is the root node.
                         */
                        // @ts-ignore
                        public setUserTreePath(userTreePath: java.lang.String | string): void
                        /**
                         * This implementation eagerly fetches the Preferences instances
                         * for the required system and user tree nodes.
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * This implementation tries to resolve placeholders as keys first
                         * in the user preferences, then in the system preferences, then in
                         * the passed-in properties.
                         */
                        // @ts-ignore
                        resolvePlaceholder(placeholder: java.lang.String | string, props: java.util.Properties): string
                        /**
                         * Resolve the given path and key against the given Preferences.
                         * @param path the preferences path (placeholder part before '/')
                         * @param key the preferences key (placeholder part after '/')
                         * @param preferences the Preferences to resolve against
                         * @return the value for the placeholder, or {#code null} if none found
                         */
                        // @ts-ignore
                        resolvePlaceholder(path: java.lang.String | string, key: java.lang.String | string, preferences: java.util.prefs.Preferences): string
                    }
                }
            }
        }
    }
}
