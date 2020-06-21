declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents a simple tristate.
                 */
                // @ts-ignore
                class Tristate extends java.lang.Enum<org.spongepowered.api.util.Tristate> {
                    // @ts-ignore
                    readonly TRUE: org.spongepowered.api.util.Tristate
                    // @ts-ignore
                    readonly FALSE: org.spongepowered.api.util.Tristate
                    // @ts-ignore
                    readonly UNDEFINED: org.spongepowered.api.util.Tristate
                    // @ts-ignore
                    values(): org.spongepowered.api.util.Tristate[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.spongepowered.api.util.Tristate
                    /**
                     * Return the appropriate tristate for a given boolean value.
                     * @param val The boolean value
                     * @return The appropriate tristate
                     */
                    // @ts-ignore
                    fromBoolean(val: boolean): org.spongepowered.api.util.Tristate
                    /**
                     * ANDs this tristate with another tristate.
                     * @param other The tristate to AND with
                     * @return The result
                     */
                    // @ts-ignore
                    and(other: org.spongepowered.api.util.Tristate): org.spongepowered.api.util.Tristate
                    /**
                     * ORs this tristate with another tristate.
                     * @param other The tristate to OR with
                     * @return The result
                     */
                    // @ts-ignore
                    or(other: org.spongepowered.api.util.Tristate): org.spongepowered.api.util.Tristate
                    /**
                     * Returns the boolean representation of this tristate.
                     * @return The boolean tristate representation
                     */
                    // @ts-ignore
                    asBoolean(): boolean
                }
            }
        }
    }
}
