declare namespace org {
    namespace bukkit {
        namespace map {
            namespace MapView {
                /**
                 * An enum representing all possible scales a map can be set to.
                 */
                // @ts-ignore
                class Scale extends java.lang.Enum<org.bukkit.map.MapView.Scale> {
                    // @ts-ignore
                    public static readonly CLOSEST: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    public static readonly CLOSE: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    public static readonly NORMAL: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    public static readonly FAR: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    public static readonly FARTHEST: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    public static values(): org.bukkit.map.MapView.Scale[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.map.MapView.Scale
                    /**
                     * Get the scale given the raw value.
                     * @param value The raw scale
                     * @return The enum scale, or null for an invalid input
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    public static valueOf(value: number /*byte*/): org.bukkit.map.MapView.Scale
                    /**
                     * Get the raw value of this scale level.
                     * @return The scale value
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    public getValue(): number /*byte*/
                }
            }
        }
    }
}
