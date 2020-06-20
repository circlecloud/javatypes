declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a hopper in an active or deactivated state and facing in a
             * specific direction.
             * @see Material#HOPPER
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Hopper extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a hopper facing the default direction (down) and initially
                 * active.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a hopper facing the specified direction and initially active.
                 * @param facingDirection the direction the hopper is facing
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a hopper facing the specified direction and either active or
                 * not.
                 * @param facingDirection the direction the hopper is facing
                 * @param isActive True if the hopper is initially active, false if
                 *  deactivated
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, isActive: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                readonly DEFAULT_DIRECTION: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly DEFAULT_ACTIVE: boolean
                /**
                 * Sets whether the hopper is active or not.
                 * @param isActive True if the hopper is active, false if deactivated as if
                 *  powered by redstone
                 */
                // @ts-ignore
                setActive(isActive: boolean): void
                /**
                 * Checks whether the hopper is active or not.
                 * @return True if the hopper is active, false if deactivated
                 */
                // @ts-ignore
                isActive(): boolean
                /**
                 * Sets the direction this hopper is facing
                 * @param face The direction to set this hopper to
                 * @see BlockFace
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * Gets the direction this hopper is facing
                 * @return The direction this hopper is facing
                 * @see BlockFace
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Hopper
                /**
                 * Checks if the hopper is powered.
                 * @return true if the hopper is powered
                 */
                // @ts-ignore
                isPowered(): boolean
            }
        }
    }
}
