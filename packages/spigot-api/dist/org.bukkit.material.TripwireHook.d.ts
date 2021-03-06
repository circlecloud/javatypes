declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the tripwire hook
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class TripwireHook extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                constructor(dir: org.bukkit.block.BlockFace)
                /**
                 * Test if tripwire is connected
                 * @return true if connected, false if not
                 */
                // @ts-ignore
                public isConnected(): boolean
                /**
                 * Set tripwire connection state
                 * @param connected - true if connected, false if not
                 */
                // @ts-ignore
                public setConnected(connected: boolean): void
                /**
                 * Test if hook is currently activated
                 * @return true if activated, false if not
                 */
                // @ts-ignore
                public isActivated(): boolean
                /**
                 * Set hook activated state
                 * @param act - true if activated, false if not
                 */
                // @ts-ignore
                public setActivated(act: boolean): void
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace
                // @ts-ignore
                public isPowered(): boolean
                // @ts-ignore
                public clone(): org.bukkit.material.TripwireHook
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
