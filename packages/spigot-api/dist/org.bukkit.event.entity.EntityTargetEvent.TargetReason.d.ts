declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityTargetEvent {
                    /**
                     * An enum to specify the reason for the targeting
                     */
                    // @ts-ignore
                    class TargetReason extends java.lang.Enum<org.bukkit.event.entity.EntityTargetEvent.TargetReason> {
                        /**
                         * When the entity's target has died, and so it no longer targets it
                         */
                        // @ts-ignore
                        readonly TARGET_DIED: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the entity doesn't have a target, so it attacks the nearest
                         * player
                         */
                        // @ts-ignore
                        readonly CLOSEST_PLAYER: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the target attacks the entity, so entity targets it
                         */
                        // @ts-ignore
                        readonly TARGET_ATTACKED_ENTITY: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the target attacks a fellow pig zombie, so the whole group
                         * will target him with this reason.
                         * @deprecated obsoleted by {#link #TARGET_ATTACKED_NEARBY_ENTITY}
                         */
                        // @ts-ignore
                        readonly PIG_ZOMBIE_TARGET: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the target is forgotten for whatever reason.
                         */
                        // @ts-ignore
                        readonly FORGOT_TARGET: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the target attacks the owner of the entity, so the entity
                         * targets it.
                         */
                        // @ts-ignore
                        readonly TARGET_ATTACKED_OWNER: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the owner of the entity attacks the target attacks, so the
                         * entity targets it.
                         */
                        // @ts-ignore
                        readonly OWNER_ATTACKED_TARGET: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the entity has no target, so the entity randomly chooses one.
                         */
                        // @ts-ignore
                        readonly RANDOM_TARGET: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When an entity selects a target while defending a village.
                         */
                        // @ts-ignore
                        readonly DEFEND_VILLAGE: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the target attacks a nearby entity of the same type, so the entity targets it
                         */
                        // @ts-ignore
                        readonly TARGET_ATTACKED_NEARBY_ENTITY: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When a zombie targeting an entity summons reinforcements, so the reinforcements target the same entity
                         */
                        // @ts-ignore
                        readonly REINFORCEMENT_TARGET: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When an entity targets another entity after colliding with it.
                         */
                        // @ts-ignore
                        readonly COLLISION: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * For custom calls to the event.
                         */
                        // @ts-ignore
                        readonly CUSTOM: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When the entity doesn't have a target, so it attacks the nearest
                         * entity
                         */
                        // @ts-ignore
                        readonly CLOSEST_ENTITY: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When a raiding entity selects the same target as one of its compatriots.
                         */
                        // @ts-ignore
                        readonly FOLLOW_LEADER: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * When another entity tempts this entity by having a desired item such
                         * as wheat in it's hand.
                         */
                        // @ts-ignore
                        readonly TEMPT: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        /**
                         * A currently unknown reason for the entity changing target.
                         */
                        // @ts-ignore
                        readonly UNKNOWN: org.bukkit.event.entity.EntityTargetEvent.TargetReason
                        // @ts-ignore
                        values(): org.bukkit.event.entity.EntityTargetEvent.TargetReason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityTargetEvent.TargetReason
                    }
                }
            }
        }
    }
}
