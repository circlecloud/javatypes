declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Sheep.
             */
            // @ts-ignore
            interface Sheep extends org.bukkit.entity.Animals, org.bukkit.material.Colorable {
                /**
                 * @return Whether the sheep is sheared.
                 */
                // @ts-ignore
                isSheared(): boolean
                /**
                 * @param flag Whether to shear the sheep
                 */
                // @ts-ignore
                setSheared(flag: boolean): void
            }
        }
    }
}
