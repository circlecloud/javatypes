declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity changes its pose.
                 * @see Entity#getPose()
                 */
                // @ts-ignore
                class EntityPoseChangeEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Entity, pose: org.bukkit.entity.Pose)
                    /**
                     * Gets the entity's new pose.
                     * @return the new pose
                     */
                    // @ts-ignore
                    public getPose(): org.bukkit.entity.Pose
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
