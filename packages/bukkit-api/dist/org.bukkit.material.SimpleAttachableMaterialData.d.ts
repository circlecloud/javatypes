declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Simple utility class for attachable MaterialData subclasses
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            abstract class SimpleAttachableMaterialData extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                // @ts-ignore
                constructor(type: org.bukkit.Material, direction: org.bukkit.block.BlockFace)
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
                public getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.SimpleAttachableMaterialData
            }
        }
    }
}
