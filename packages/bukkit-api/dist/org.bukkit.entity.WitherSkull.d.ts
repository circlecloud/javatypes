declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a wither skull {@link Fireball}.
             */
            // @ts-ignore
            interface WitherSkull extends org.bukkit.entity.Fireball {
                /**
                 * Sets the charged status of the wither skull.
                 * @param charged whether it should be charged
                 */
                // @ts-ignore
                setCharged(charged: boolean): void
                /**
                 * Gets whether or not the wither skull is charged.
                 * @return whether the wither skull is charged
                 */
                // @ts-ignore
                isCharged(): boolean
            }
        }
    }
}
