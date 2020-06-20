declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        /**
                         * A User is the data usually associated with a Player that is persisted
                         * across server restarts. This is in contrast to Player which represents
                         * the in-game entity associated with an online User.
                         */
                        // @ts-ignore
                        interface User extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.entity.ArmorEquipable, org.spongepowered.api.entity.Tamer, org.spongepowered.api.service.permission.Subject {
                            /**
                             * Gets the associated {@link GameProfile} of this player.
                             * @return The user's profile
                             */
                            // @ts-ignore
                            getProfile(): org.spongepowered.api.profile.GameProfile
                            /**
                             * Gets the player's last known username.
                             * @return The player's last known username
                             */
                            // @ts-ignore
                            getName(): java.lang.String
                            /**
                             * Checks if this user is online or not.
                             * @return True if the corresponding player is online
                             */
                            // @ts-ignore
                            isOnline(): boolean
                            /**
                             * Gets the related online {@link Player} if the player is
                             * in fact online.
                             * @return The associated online Player, if available
                             */
                            // @ts-ignore
                            getPlayer(): java.util.Optional<org.spongepowered.api.entity.living.player.Player>
                            /**
                             * Gets the position of this User
                             * @return The position of this User
                             */
                            // @ts-ignore
                            getPosition(): Vector3d
                            /**
                             * Gets the World UUID of this User.
                             * <p>May return empty when the world the player is in does not exist anymore</p>
                             * @return The World UUID of this User if found
                             */
                            // @ts-ignore
                            getWorldUniqueId(): java.util.Optional<java.util.UUID>
                            /**
                             * Sets the position and world of this User.
                             * <p>The UUID must belong to an existing world.</p>
                             * <p>When the User {@link #isOnline()} this redirects to {@link Entity#setLocation(Location)}</p>
                             * @param position The position to set
                             * @param world The world UUID to set
                             * @throws IllegalArgumentException When the UUID does not belong to an existing world.
                             */
                            // @ts-ignore
                            setLocation(position: Vector3d, world: java.util.UUID): boolean
                            /**
                             * Sets the rotation of this entity.
                             * <p>The format of the rotation is represented by:</p>
                             * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                             * @param rotation The rotation to set the entity to
                             */
                            // @ts-ignore
                            setRotation(rotation: Vector3d): void
                            /**
                             * Gets the rotation.
                             * <p>The format of the rotation is represented by:</p>
                             * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                             * @return The rotation
                             */
                            // @ts-ignore
                            getRotation(): Vector3d
                            /**
                             * Gets a copy of the {@link StatisticData} for this user.
                             * @return A copy of the statistic data
                             */
                            // @ts-ignore
                            getStatisticData(): org.spongepowered.api.data.manipulator.mutable.entity.StatisticData
                            /**
                             * Gets the {@link Inventory} available for this Player's shared {@link EnderChest}
                             * contents.
                             * @return The ender chest inventory
                             */
                            // @ts-ignore
                            getEnderChestInventory(): org.spongepowered.api.item.inventory.Inventory
                        }
                    }
                }
            }
        }
    }
}
