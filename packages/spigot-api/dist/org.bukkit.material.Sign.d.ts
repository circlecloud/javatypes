declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * MaterialData for signs
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Sign extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the raw type id
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Check if this sign is attached to a wall
                 * @return true if this sign is attached to a wall, false if set on top of
                 *      a block
                 */
                // @ts-ignore
                isWallSign(): boolean
                /**
                 * Gets the face that this block is attached on
                 * @return BlockFace attached to
                 */
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
                /**
                 * Gets the direction that this sign is currently facing
                 * @return BlockFace indicating where this sign is facing
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Sign
            }
        }
    }
}
