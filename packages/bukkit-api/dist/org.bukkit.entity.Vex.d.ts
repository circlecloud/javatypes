declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Vex.
             */
            // @ts-ignore
            interface Vex extends org.bukkit.entity.Monster {
                /**
                 * Gets the charging state of this entity.
                 * When this entity is charging it will having a glowing red texture.
                 * @return charging state
                 */
                // @ts-ignore
                isCharging(): boolean
                /**
                 * Sets the charging state of this entity.
                 * When this entity is charging it will having a glowing red texture.
                 * @param charging new state
                 */
                // @ts-ignore
                setCharging(charging: boolean): void
            }
        }
    }
}
