declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents the directional axis is either
                 * positive, zero, or negative.
                 */
                // @ts-ignore
                class AxisDirection extends java.lang.Enum<org.spongepowered.api.util.AxisDirection> {
                    // @ts-ignore
                    public static readonly PLUS: org.spongepowered.api.util.AxisDirection
                    // @ts-ignore
                    public static readonly ZERO: org.spongepowered.api.util.AxisDirection
                    // @ts-ignore
                    public static readonly MINUS: org.spongepowered.api.util.AxisDirection
                    // @ts-ignore
                    public static values(): org.spongepowered.api.util.AxisDirection[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.spongepowered.api.util.AxisDirection
                    /**
                     * Gets the signum for this direction.
                     * <p>
                     * A positive direction has a value of 1, negative direction -1 and 0 for no
                     * direction.
                     * </p>
                     * @return The signum
                     */
                    // @ts-ignore
                    public getSignum(): number /*int*/
                }
            }
        }
    }
}
