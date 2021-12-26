declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a skull that can have an owner.
                 */
                // @ts-ignore
                interface SkullMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Gets the owner of the skull.
                     * @return the owner if the skull
                     * @deprecated see {#link #setOwningPlayer(org.bukkit.OfflinePlayer)}.
                     */
                    // @ts-ignore
                    getOwner(): string
                    /**
                     * Checks to see if the skull has an owner.
                     * @return true if the skull has an owner
                     */
                    // @ts-ignore
                    hasOwner(): boolean
                    /**
                     * Sets the owner of the skull.
                     * @param owner the new owner of the skull
                     * @return true if the owner was successfully set
                     * @deprecated see {#link #setOwningPlayer(org.bukkit.OfflinePlayer)}.
                     */
                    // @ts-ignore
                    setOwner(owner: java.lang.String | string): boolean
                    /**
                     * Gets the owner of the skull.
                     * @return the owner if the skull
                     */
                    // @ts-ignore
                    getOwningPlayer(): org.bukkit.OfflinePlayer
                    /**
                     * Sets the owner of the skull.
                     * <p>
                     * Plugins should check that hasOwner() returns true before calling this
                     * plugin.
                     * @param owner the new owner of the skull
                     * @return true if the owner was successfully set
                     */
                    // @ts-ignore
                    setOwningPlayer(owner: org.bukkit.OfflinePlayer): boolean
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.SkullMeta
                }
            }
        }
    }
}
