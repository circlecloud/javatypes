declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a pumpkin.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Pumpkin extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                // @ts-ignore
                constructor()
                /**
                 * Instantiate a pumpkin facing in a particular direction.
                 * @param direction the direction the pumkin's face is facing
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
                // @ts-ignore
                public isLit(): boolean
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Pumpkin
            }
        }
    }
}
