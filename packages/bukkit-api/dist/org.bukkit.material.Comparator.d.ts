declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a comparator in the on or off state, in normal or subtraction mode and facing in a specific direction.
             * @see Material#LEGACY_REDSTONE_COMPARATOR_OFF
             * @see Material#LEGACY_REDSTONE_COMPARATOR_ON
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Comparator extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a comparator switched off, with the default mode (normal) and facing the default direction (north).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a comparator switched off, with the default mode (normal) and facing the specified direction.
                 * @param facingDirection the direction the comparator is facing
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a comparator switched off, with the specified mode and facing the specified direction.
                 * @param facingDirection the direction the comparator is facing
                 * @param isSubtraction True if the comparator is in subtraction mode, false for normal comparator operation
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, isSubtraction: boolean)
                /**
                 * Constructs a comparator switched on or off, with the specified mode and facing the specified direction.
                 * @param facingDirection the direction the comparator is facing
                 * @param isSubtraction True if the comparator is in subtraction mode, false for normal comparator operation
                 * @param state True if the comparator is in the on state
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, isSubtraction: boolean, state: boolean)
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
                static readonly DEFAULT_DIRECTION: org.bukkit.block.BlockFace
                // @ts-ignore
                static readonly DEFAULT_SUBTRACTION_MODE: boolean
                // @ts-ignore
                static readonly DEFAULT_STATE: boolean
                /**
                 * Sets whether the comparator is in subtraction mode.
                 * @param isSubtraction True if the comparator is in subtraction mode, false for normal comparator operation
                 */
                // @ts-ignore
                public setSubtractionMode(isSubtraction: boolean): void
                /**
                 * Checks whether the comparator is in subtraction mode
                 * @return True if the comparator is in subtraction mode, false if normal comparator operation
                 */
                // @ts-ignore
                public isSubtractionMode(): boolean
                /**
                 * Sets the direction this comparator is facing
                 * @param face The direction to set this comparator to
                 * @see BlockFace
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * Gets the direction this comparator is facing
                 * @return The direction this comparator is facing
                 * @see BlockFace
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Comparator
                /**
                 * Checks if the comparator is powered
                 * @return true if the comparator is powered
                 */
                // @ts-ignore
                public isPowered(): boolean
                /**
                 * Checks if the comparator is being powered
                 * @return true if the comparator is being powered
                 */
                // @ts-ignore
                public isBeingPowered(): boolean
            }
        }
    }
}
