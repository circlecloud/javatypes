declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a skull block.
             */
            // @ts-ignore
            interface Skull extends org.bukkit.block.TileState {
                /**
                 * Checks to see if the skull has an owner
                 * @return true if the skull has an owner
                 */
                // @ts-ignore
                hasOwner(): boolean
                /**
                 * Gets the owner of the skull, if one exists
                 * @return the owner of the skull or null if the skull does not have an owner
                 * @deprecated See {#link #getOwningPlayer()}.
                 */
                // @ts-ignore
                getOwner(): java.lang.String
                /**
                 * Sets the owner of the skull
                 * <p>
                 * Involves a potentially blocking web request to acquire the profile data for
                 * the provided name.
                 * @param name the new owner of the skull
                 * @return true if the owner was successfully set
                 * @deprecated see {#link #setOwningPlayer(org.bukkit.OfflinePlayer)}.
                 */
                // @ts-ignore
                setOwner(name: string): boolean
                /**
                 * Get the player which owns the skull. This player may appear as the
                 * texture depending on skull type.
                 * @return owning player
                 */
                // @ts-ignore
                getOwningPlayer(): org.bukkit.OfflinePlayer
                /**
                 * Set the player which owns the skull. This player may appear as the
                 * texture depending on skull type.
                 * @param player the owning player
                 */
                // @ts-ignore
                setOwningPlayer(player: org.bukkit.OfflinePlayer): void
                /**
                 * Gets the rotation of the skull in the world (or facing direction if this
                 * is a wall mounted skull).
                 * @return the rotation of the skull
                 * @deprecated use {#link BlockData}
                 */
                // @ts-ignore
                getRotation(): org.bukkit.block.BlockFace
                /**
                 * Sets the rotation of the skull in the world (or facing direction if this
                 * is a wall mounted skull).
                 * @param rotation the rotation of the skull
                 * @deprecated use {#link BlockData}
                 */
                // @ts-ignore
                setRotation(rotation: org.bukkit.block.BlockFace): void
                /**
                 * Gets the type of skull
                 * @return the type of skull
                 * @deprecated check {#link Material} instead
                 */
                // @ts-ignore
                getSkullType(): org.bukkit.SkullType
                /**
                 * Sets the type of skull
                 * @param skullType the type of skull
                 * @deprecated check {#link Material} instead
                 */
                // @ts-ignore
                setSkullType(skullType: org.bukkit.SkullType): void
            }
        }
    }
}
