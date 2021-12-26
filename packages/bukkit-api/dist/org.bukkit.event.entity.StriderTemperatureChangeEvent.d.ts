declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a {@link Strider}'s temperature has changed as a result of
                 * entering or existing blocks it considers warm.
                 */
                // @ts-ignore
                class StriderTemperatureChangeEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Strider, shivering: boolean)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Strider
                    /**
                     * Get the Strider's new shivering state.
                     * @return the new shivering state
                     */
                    // @ts-ignore
                    public isShivering(): boolean
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
