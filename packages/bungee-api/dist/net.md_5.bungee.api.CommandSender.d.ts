declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                interface CommandSender {
                    /**
                     * Get the unique name of this command sender.
                     * @return the senders username
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Send a message to this sender.
                     * @param message the message to send
                     */
                    // @ts-ignore
                    sendMessage(message: java.lang.String | string): void
                    /**
                     * Send several messages to this sender. Each message will be sent
                     * separately.
                     * @param messages the messages to send
                     */
                    // @ts-ignore
                    sendMessages(...messages: java.lang.String[] | string[]): void
                    /**
                     * Send a message to this sender.
                     * @param message the message to send
                     */
                    // @ts-ignore
                    sendMessage(...message: BaseComponent[]): void
                    /**
                     * Send a message to this sender.
                     * @param message the message to send
                     */
                    // @ts-ignore
                    sendMessage(message: BaseComponent): void
                    /**
                     * Get all groups this user is part of. This returns an unmodifiable
                     * collection.
                     * @return the users groups
                     */
                    // @ts-ignore
                    getGroups(): Array<java.lang.String | string>
                    /**
                     * Adds groups to a this user for the current session only.
                     * @param groups the groups to add
                     */
                    // @ts-ignore
                    addGroups(...groups: java.lang.String[] | string[]): void
                    /**
                     * Remove groups from this user for the current session only.
                     * @param groups the groups to remove
                     */
                    // @ts-ignore
                    removeGroups(...groups: java.lang.String[] | string[]): void
                    /**
                     * Checks if this user has the specified permission node.
                     * @param permission the node to check
                     * @return whether they have this node
                     */
                    // @ts-ignore
                    hasPermission(permission: java.lang.String | string): boolean
                    /**
                     * Set a permission node for this user.
                     * @param permission the node to set
                     * @param value the value of the node
                     */
                    // @ts-ignore
                    setPermission(permission: java.lang.String | string, value: boolean): void
                    /**
                     * Get all Permissions which this CommandSender has
                     * @return a unmodifiable Collection of Strings which represent their
                     *  permissions
                     */
                    // @ts-ignore
                    getPermissions(): Array<java.lang.String | string>
                }
            }
        }
    }
}
