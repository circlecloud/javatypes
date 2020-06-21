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
                    readonly CLOSEST: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    readonly CLOSE: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    readonly NORMAL: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    readonly FAR: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    readonly FARTHEST: org.bukkit.map.MapView.Scale
                    // @ts-ignore
                    values(): org.bukkit.map.MapView.Scale[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.map.MapView.Scale
                    /**
                     * Get the scale given the raw value.
                     * @param value The raw scale
                     * @return The enum scale, or null for an invalid input
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    valueOf(value: number /*byte*/): org.bukkit.map.MapView.Scale
                    /**
                     * Get the raw value of this scale level.
                     * @return The scale value
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getValue(): number /*byte*/
                }
            }
        }
    }
}
