declare namespace org {
    namespace bukkit {
        namespace map {
            /**
             * Represents a renderer for a map.
             */
            // @ts-ignore
            class MapRenderer extends java.lang.Object {
                /**
                 * Initialize the map renderer base to be non-contextual. See {@link
                 * #isContextual()}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Initialize the map renderer base with the given contextual status.
                 * @param contextual Whether the renderer is contextual. See {#link
                 *      #isContextual()}.
                 */
                // @ts-ignore
                constructor(contextual: boolean)
                /**
                 * Get whether the renderer is contextual, i.e. has different canvases for
                 * different players.
                 * @return True if contextual, false otherwise.
                 */
                // @ts-ignore
                isContextual(): boolean
                /**
                 * Initialize this MapRenderer for the given map.
                 * @param map The MapView being initialized.
                 */
                // @ts-ignore
                initialize(map: org.bukkit.map.MapView): void
                /**
                 * Render to the given map.
                 * @param map The MapView being rendered to.
                 * @param canvas The canvas to use for rendering.
                 * @param player The player who triggered the rendering.
                 */
                // @ts-ignore
                abstract render(map: org.bukkit.map.MapView, canvas: org.bukkit.map.MapCanvas, player: org.bukkit.entity.Player): void
            }
        }
    }
}
