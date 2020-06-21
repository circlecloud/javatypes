declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a map that can be scalable.
                 */
                // @ts-ignore
                interface MapMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for existence of a map ID number.
                     * @return true if this has a map ID number.
                     * @deprecated These methods are poor API: They rely on the caller to pass
                     *  in an only an integer property, and have poorly defined implementation
                     *  behavior if that integer is not a valid map (the current implementation
                     *  for example will generate a new map with a different ID). The xxxMapView
                     *  family of methods should be used instead.
                     * @see #hasMapView()
                     */
                    // @ts-ignore
                    hasMapId(): boolean
                    /**
                     * Gets the map ID that is set. This is used to determine what map is
                     * displayed.
                     * <p>
                     * Plugins should check that hasMapId() returns <code>true</code> before
                     * calling this method.
                     * @return the map ID that is set
                     * @deprecated These methods are poor API: They rely on the caller to pass
                     *  in an only an integer property, and have poorly defined implementation
                     *  behavior if that integer is not a valid map (the current implementation
                     *  for example will generate a new map with a different ID). The xxxMapView
                     *  family of methods should be used instead.
                     * @see #getMapView()
                     */
                    // @ts-ignore
                    getMapId(): number /*int*/
                    /**
                     * Sets the map ID. This is used to determine what map is displayed.
                     * @param id the map id to set
                     * @deprecated These methods are poor API: They rely on the caller to pass
                     *  in an only an integer property, and have poorly defined implementation
                     *  behavior if that integer is not a valid map (the current implementation
                     *  for example will generate a new map with a different ID). The xxxMapView
                     *  family of methods should be used instead.
                     * @see #setMapView(org.bukkit.map.MapView)
                     */
                    // @ts-ignore
                    setMapId(id: number /*int*/): void
                    /**
                     * Checks for existence of an associated map.
                     * @return true if this item has an associated map
                     */
                    // @ts-ignore
                    hasMapView(): boolean
                    /**
                     * Gets the map view that is associated with this map item.
                     * <p>
                     * Plugins should check that hasMapView() returns <code>true</code> before
                     * calling this method.
                     * @return the map view, or null if the item hasMapView(), but this map does
                     *  not exist on the server
                     */
                    // @ts-ignore
                    getMapView(): org.bukkit.map.MapView
                    /**
                     * Sets the associated map. This is used to determine what map is displayed.
                     * <p>
                     * The implementation <b>may</b> allow null to clear the associated map, but
                     * this is not required and is liable to generate a new (undefined) map when
                     * the item is first used.
                     * @param map the map to set
                     */
                    // @ts-ignore
                    setMapView(map: org.bukkit.map.MapView): void
                    /**
                     * Checks to see if this map is scaling.
                     * @return true if this map is scaling
                     */
                    // @ts-ignore
                    isScaling(): boolean
                    /**
                     * Sets if this map is scaling or not.
                     * @param value true to scale
                     */
                    // @ts-ignore
                    setScaling(value: boolean): void
                    /**
                     * Checks for existence of a location name.
                     * @return true if this has a location name
                     */
                    // @ts-ignore
                    hasLocationName(): boolean
                    /**
                     * Gets the location name that is set.
                     * <p>
                     * Plugins should check that hasLocationName() returns <code>true</code>
                     * before calling this method.
                     * @return the location name that is set
                     */
                    // @ts-ignore
                    getLocationName(): string
                    /**
                     * Sets the location name. A custom map color will alter the display of the
                     * map in an inventory slot.
                     * @param name the name to set
                     */
                    // @ts-ignore
                    setLocationName(name: java.lang.String | string): void
                    /**
                     * Checks for existence of a map color.
                     * @return true if this has a custom map color
                     */
                    // @ts-ignore
                    hasColor(): boolean
                    /**
                     * Gets the map color that is set. A custom map color will alter the display
                     * of the map in an inventory slot.
                     * <p>
                     * Plugins should check that hasColor() returns <code>true</code> before
                     * calling this method.
                     * @return the map color that is set
                     */
                    // @ts-ignore
                    getColor(): org.bukkit.Color
                    /**
                     * Sets the map color. A custom map color will alter the display of the map
                     * in an inventory slot.
                     * @param color the color to set
                     */
                    // @ts-ignore
                    setColor(color: org.bukkit.Color): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.MapMeta
                }
            }
        }
    }
}
