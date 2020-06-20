declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the tripwire
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Tripwire extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Test if tripwire is currently activated
                 * @return true if activated, false if not
                 */
                // @ts-ignore
                isActivated(): boolean
                /**
                 * Set tripwire activated state
                 * @param act - true if activated, false if not
                 */
                // @ts-ignore
                setActivated(act: boolean): void
                /**
                 * Test if object triggering this tripwire directly
                 * @return true if object activating tripwire, false if not
                 */
                // @ts-ignore
                isObjectTriggering(): boolean
                /**
                 * Set object triggering state for this tripwire
                 * @param trig - true if object activating tripwire, false if not
                 */
                // @ts-ignore
                setObjectTriggering(trig: boolean): void
                // @ts-ignore
                clone(): org.bukkit.material.Tripwire
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
