declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a bed.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Bed extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                /**
                 * Default constructor for a bed.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Instantiate a bed facing in a particular direction.
                 * @param direction the direction the bed's head is facing
                 */
                // @ts-ignore
                constructor(direction: org.bukkit.block.BlockFace)
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
                 * Determine if this block represents the head of the bed
                 * @return true if this is the head of the bed, false if it is the foot
                 */
                // @ts-ignore
                public isHeadOfBed(): boolean
                /**
                 * Configure this to be either the head or the foot of the bed
                 * @param isHeadOfBed True to make it the head.
                 */
                // @ts-ignore
                public setHeadOfBed(isHeadOfBed: boolean): void
                /**
                 * Set which direction the head of the bed is facing. Note that this will
                 * only affect one of the two blocks the bed is made of.
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * Get the direction that this bed's head is facing toward
                 * @return the direction the head of the bed is facing
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Bed
            }
        }
    }
}
