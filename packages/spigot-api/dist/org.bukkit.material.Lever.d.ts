declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a lever
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Lever extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 * @return true if powered, otherwise false
                 */
                // @ts-ignore
                isPowered(): boolean
                /**
                 * Set this lever to be powered or not.
                 * @param isPowered whether the lever should be powered or not
                 */
                // @ts-ignore
                setPowered(isPowered: boolean): void
                /**
                 * Gets the face that this block is attached on
                 * @return BlockFace attached to
                 */
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
                /**
                 * Sets the direction this lever is pointing in
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Lever
            }
        }
    }
}
