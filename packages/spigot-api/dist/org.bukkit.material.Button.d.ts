declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a button
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Button extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Redstone {
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
                public isPowered(): boolean
                /**
                 * Sets the current state of this button
                 * @param bool
                 *             whether or not the button is powered
                 */
                // @ts-ignore
                public setPowered(bool: boolean): void
                /**
                 * Gets the face that this block is attached on
                 * @return BlockFace attached to
                 */
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace
                /**
                 * Sets the direction this button is pointing toward
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Button
            }
        }
    }
}
