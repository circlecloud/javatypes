declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Bat
             */
            // @ts-ignore
            interface Bat extends org.bukkit.entity.Ambient {
                /**
                 * Checks the current waking state of this bat.
                 * <p>
                 * This does not imply any persistence of state past the method call.
                 * @return true if the bat is awake or false if it is currently hanging
                 *      from a block
                 */
                // @ts-ignore
                isAwake(): boolean
                /**
                 * This method modifies the current waking state of this bat.
                 * <p>
                 * This does not prevent a bat from spontaneously awaking itself, or from
                 * reattaching itself to a block.
                 * @param state the new state
                 */
                // @ts-ignore
                setAwake(state: boolean): void
            }
        }
    }
}
