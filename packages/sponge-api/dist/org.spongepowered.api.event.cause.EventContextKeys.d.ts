declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    /**
                     * Standard keys for use within {@link EventContext}s.
                     */
                    // @ts-ignore
                    class EventContextKeys extends java.lang.Object {
                        /**
                         * Used to queue a block event to be processed in a {@link World}.
                         * For example, a piston will queue retract/extend movements using this
                         * event.
                         * Note: This represents vanilla's block event.
                         */
                        // @ts-ignore
                        readonly BLOCK_EVENT_QUEUE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.LocatableBlock>
                        /**
                         * Used when a {@link World} block event is being processed.
                         * For example, a piston head retracting and extending.
                         * Note: This represents vanilla's block event.
                         * Note: This occurs at the end of a world tick after
                         * {@link #BLOCK_EVENT_QUEUE}.
                         */
                        // @ts-ignore
                        readonly BLOCK_EVENT_PROCESS: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.LocatableBlock>
                        /**
                         * Used when an {@link Entity} interacts with a block.
                         */
                        // @ts-ignore
                        readonly BLOCK_HIT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.block.BlockSnapshot>
                        /**
                         * Used for {@link org.spongepowered.api.event.block.ChangeBlockEvent.Post} to provide
                         * the block event without relying on existing in the {@link Cause} stack.
                         */
                        // @ts-ignore
                        readonly BREAK_EVENT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.block.ChangeBlockEvent.Break>
                        /**
                         * Used for {@link org.spongepowered.api.event.block.ChangeBlockEvent.Post} to provide
                         * the block event without relying on existing in the {@link Cause} stack.
                         */
                        // @ts-ignore
                        readonly PLACE_EVENT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.block.ChangeBlockEvent.Place>
                        /**
                         * Used for {@link org.spongepowered.api.event.block.ChangeBlockEvent.Post} to provide
                         * the block event without relying on existing in the {@link Cause} stack.
                         */
                        // @ts-ignore
                        readonly MODIFY_EVENT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.block.ChangeBlockEvent.Modify>
                        /**
                         * Used for {@link org.spongepowered.api.event.block.ChangeBlockEvent.Post} to provide
                         * the block event without relying on existing in the {@link Cause} stack.
                         */
                        // @ts-ignore
                        readonly DECAY_EVENT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.block.ChangeBlockEvent.Decay>
                        /**
                         * Used for {@link org.spongepowered.api.event.block.ChangeBlockEvent.Post} to provide
                         * the block event without relying on existing in the {@link Cause} stack.
                         */
                        // @ts-ignore
                        readonly GROW_EVENT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.block.ChangeBlockEvent.Grow>
                        /**
                         * Used for {@link org.spongepowered.api.event.block.ChangeBlockEvent.Grow} to provide
                         * the origin {@link BlockSnapshot} that is doing the "growing".
                         */
                        // @ts-ignore
                        readonly GROWTH_ORIGIN: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.block.BlockSnapshot>
                        /**
                         * Represents the creator of an {@link Entity}.
                         */
                        // @ts-ignore
                        readonly CREATOR: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.living.player.User>
                        /**
                         * Represents the {@link DamageType} to an entity.
                         */
                        // @ts-ignore
                        readonly DAMAGE_TYPE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.cause.entity.damage.DamageType>
                        /**
                         * Used when a {@link Player} dismounts from an {@link Entity}.
                         */
                        // @ts-ignore
                        readonly DISMOUNT_TYPE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.cause.entity.dismount.DismountType>
                        /**
                         * Represents the target {@link Entity}.
                         * Used when an entity, such as a Player, targets an entity via an
                         * interaction.
                         */
                        // @ts-ignore
                        readonly ENTITY_HIT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.Entity>
                        /**
                         * Represents a fake player responsible for an action.
                         * Note: This is normally only used with mods.
                         */
                        // @ts-ignore
                        readonly FAKE_PLAYER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.living.player.Player>
                        /**
                         * Used when fire spreads to other blocks.
                         */
                        // @ts-ignore
                        readonly FIRE_SPREAD: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Used when an {@link Entity} ignites causing an {@link Explosion}.
                         */
                        // @ts-ignore
                        readonly IGNITER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.living.Living>
                        /**
                         * Represents the last {@link DamageSource} to an {@link Entity}.
                         */
                        // @ts-ignore
                        readonly LAST_DAMAGE_SOURCE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.cause.entity.damage.source.DamageSource>
                        /**
                         * Used when leaves decay.
                         */
                        // @ts-ignore
                        readonly LEAVES_DECAY: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Used when flowing liquid causing another block to break.
                         */
                        // @ts-ignore
                        readonly LIQUID_BREAK: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Used when flowing liquid moves to another location.
                         */
                        // @ts-ignore
                        readonly LIQUID_FLOW: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Used when liquid changes state.
                         */
                        // @ts-ignore
                        readonly LIQUID_MIX: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Represents the source {@link BlockSnapshot} of a block notification.
                         */
                        // @ts-ignore
                        readonly NEIGHBOR_NOTIFY_SOURCE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.block.BlockSnapshot>
                        /**
                         * Represents the {@link User} that notified a block.
                         */
                        // @ts-ignore
                        readonly NOTIFIER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.living.player.User>
                        /**
                         * Represents the {@link User} that owns a block.
                         */
                        // @ts-ignore
                        readonly OWNER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.living.player.User>
                        /**
                         * Used when a {@link BlockTypes#PISTON_HEAD} extends.
                         */
                        // @ts-ignore
                        readonly PISTON_EXTEND: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Used when a {@link BlockTypes#PISTON_HEAD} retracts.
                         */
                        // @ts-ignore
                        readonly PISTON_RETRACT: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Represents a {@link Player}.
                         */
                        // @ts-ignore
                        readonly PLAYER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.living.player.Player>
                        /**
                         * Used when a {@link Player} breaks a block.
                         */
                        // @ts-ignore
                        readonly PLAYER_BREAK: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Used when a {@link Player} places a block.
                         */
                        // @ts-ignore
                        readonly PLAYER_PLACE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.world.World>
                        /**
                         * Represents a simulated {@link Player}.
                         */
                        // @ts-ignore
                        readonly PLAYER_SIMULATED: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.profile.GameProfile>
                        /**
                         * Represents a {@link PluginContainer}.
                         */
                        // @ts-ignore
                        readonly PLUGIN: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.plugin.PluginContainer>
                        /**
                         * Represents a {@link ProjectileSource}.
                         */
                        // @ts-ignore
                        readonly PROJECTILE_SOURCE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.projectile.source.ProjectileSource>
                        /**
                         * Represents the {@link ServiceManager}.
                         */
                        // @ts-ignore
                        readonly SERVICE_MANAGER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.service.ServiceManager>
                        /**
                         * Represents the {@link SpawnType} of an entity spawn.
                         */
                        // @ts-ignore
                        readonly SPAWN_TYPE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.cause.entity.spawn.SpawnType>
                        /**
                         * Represents the {@link TeleportType} when an entity teleports.
                         */
                        // @ts-ignore
                        readonly TELEPORT_TYPE: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.event.cause.entity.teleport.TeleportType>
                        /**
                         * @deprecated this key is a duplicate of {#link #PROJECTILE_SOURCE} and
                         *              will be removed in API 8. See <a
                         *              href="https://github.com/SpongePowered/SpongeAPI/issues/1774">this
                         *              issue on SpongeAPI</a>, Use {@link #PROJECTILE_SOURCE}
                         *              instead.
                         */
                        // @ts-ignore
                        readonly THROWER: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.entity.projectile.source.ProjectileSource>
                        /**
                         * Represents an {@link ItemStackSnapshot} of used item.
                         */
                        // @ts-ignore
                        readonly USED_ITEM: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        /**
                         * Represents a {@link HandType}.
                         */
                        // @ts-ignore
                        readonly USED_HAND: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.data.type.HandType>
                        /**
                         * Represents an {@link ItemStackSnapshot} of a weapon.
                         */
                        // @ts-ignore
                        readonly WEAPON: org.spongepowered.api.event.cause.EventContextKey<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                    }
                }
            }
        }
    }
}
