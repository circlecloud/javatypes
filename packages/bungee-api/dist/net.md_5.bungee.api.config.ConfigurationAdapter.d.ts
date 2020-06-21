declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace config {
                    /**
                     * This class allows plugins to set their own configuration adapter to load
                     * settings from a different place.
                     */
                    // @ts-ignore
                    interface ConfigurationAdapter {
                        /**
                         * Reload all the possible values, and if necessary cache them for
                         * individual getting.
                         */
                        // @ts-ignore
                        load(): void
                        /**
                         * Gets an integer from the specified path.
                         * @param path the path to retrieve the integer from
                         * @param def the default value
                         * @return the retrieved integer
                         */
                        // @ts-ignore
                        getInt(path: java.lang.String | string, def: number /*int*/): number /*int*/
                        /**
                         * Gets a string from the specified path.
                         * @param path the path to retrieve the string from.
                         * @param def the default value
                         * @return the retrieved string
                         */
                        // @ts-ignore
                        getString(path: java.lang.String | string, def: java.lang.String | string): string
                        /**
                         * Gets a boolean from the specified path.
                         * @param path the path to retrieve the boolean form.
                         * @param def the default value
                         * @return the retrieved boolean
                         */
                        // @ts-ignore
                        getBoolean(path: java.lang.String | string, def: boolean): boolean
                        /**
                         * Get a list from the specified path.
                         * @param path the path to retrieve the list form.
                         * @param def the default value
                         * @return the retrieved list
                         */
                        // @ts-ignore
                        getList(path: java.lang.String | string, def: java.util.Collection<any> | Array<any>): Array<any>
                        /**
                         * Get the configuration all servers which may be accessible via the proxy.
                         * @return all accessible servers, keyed by name
                         */
                        // @ts-ignore
                        getServers(): java.util.Map<java.lang.String | string, net.md_5.bungee.api.config.ServerInfo>
                        /**
                         * Get information about all hosts to bind the proxy to.
                         * @return a list of all hosts to bind to
                         */
                        // @ts-ignore
                        getListeners(): Array<net.md_5.bungee.api.config.ListenerInfo>
                        /**
                         * Get all groups this player is in.
                         * @param player the player to check
                         * @return all the player's groups.
                         */
                        // @ts-ignore
                        getGroups(player: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Get all permission corresponding to the specified group. The result of
                         * this method may or may not be cached, depending on the implementation.
                         * @param group the group to check
                         * @return all true permissions for this group
                         */
                        // @ts-ignore
                        getPermissions(group: java.lang.String | string): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
