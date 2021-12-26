declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents an observer.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Observer extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
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
                public isPowered(): boolean
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Observer
            }
        }
    }
}
