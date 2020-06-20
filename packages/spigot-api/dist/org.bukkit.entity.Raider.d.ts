declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Raider extends org.bukkit.entity.Monster {
                /**
                 * Gets the block the raider is targeting to patrol.
                 * @return target block or null
                 */
                // @ts-ignore
                getPatrolTarget(): org.bukkit.block.Block
                /**
                 * Sets the block the raider is targeting to patrol.
                 * @param block target block or null. Must be in same world as the entity
                 */
                // @ts-ignore
                setPatrolTarget(block: org.bukkit.block.Block): void
                /**
                 * Gets whether this entity is a patrol leader.
                 * @return patrol leader status
                 */
                // @ts-ignore
                isPatrolLeader(): boolean
                /**
                 * Sets whether this entity is a patrol leader.
                 * @param leader patrol leader status
                 */
                // @ts-ignore
                setPatrolLeader(leader: boolean): void
                /**
                 * Gets whether this mob can join an active raid.
                 * @return CanJoinRaid status
                 */
                // @ts-ignore
                isCanJoinRaid(): boolean
                /**
                 * Sets whether this mob can join an active raid.
                 * @param join CanJoinRaid status
                 */
                // @ts-ignore
                setCanJoinRaid(join: boolean): void
            }
        }
    }
}
