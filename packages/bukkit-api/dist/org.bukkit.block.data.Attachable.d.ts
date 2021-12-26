declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'attached' denotes whether a tripwire hook or string forms a complete
                 * tripwire circuit and is ready to trigger.
                 * <br>
                 * Updating the property on a tripwire hook will change the texture to indicate
                 * a connected string, but will not have any effect when used on the tripwire
                 * string itself. It may however still be used to check whether the string forms
                 * a circuit.
                 */
                // @ts-ignore
                interface Attachable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'attached' property.
                     * @return the 'attached' value
                     */
                    // @ts-ignore
                    isAttached(): boolean
                    /**
                     * Sets the value of the 'attached' property.
                     * @param attached the new 'attached' value
                     */
                    // @ts-ignore
                    setAttached(attached: boolean): void
                }
            }
        }
    }
}
