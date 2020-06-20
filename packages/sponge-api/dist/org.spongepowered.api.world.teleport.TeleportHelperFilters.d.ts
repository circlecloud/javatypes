declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace teleport {
                    // @ts-ignore
                    class TeleportHelperFilters extends java.lang.Object {
                        /**
                         * Designed to be combined with other filters, this filter determines if a
                         * block is in the config blacklist and returns the appropriate result.
                         */
                        // @ts-ignore
                        readonly CONFIG: org.spongepowered.api.world.teleport.TeleportHelperFilter
                        /**
                         * The default behavior for safe teleportation.
                         * <p>This filter attempts to find a location to teleport to that has
                         * the following characteristics:</p>
                         * <ul>
                         * <li>The two blocks that the player would occupy (the target and the
                         * block above) are passable.</li>
                         * <li>The floor is a non-passable or liquid block which is not known
                         * to harm the player.</li>
                         * <li>The block in question is not blacklisted in the config for the
                         * floor or body (see {@link #CONFIG}).</li>
                         * </ul>
                         */
                        // @ts-ignore
                        readonly DEFAULT: org.spongepowered.api.world.teleport.TeleportHelperFilter
                        /**
                         * The flying safe teleportation behavior.
                         * <p>This filter attempts to find the following:</p>
                         * <ul>
                         * <li>A block that is air or a liquid which is not known by Sponge
                         * to harm the player.</li>
                         * <li>A similar block one block above the target.</li>
                         * <li>That floor blocks are not cacti (and thus, hurt).</li>
                         * </ul>
                         */
                        // @ts-ignore
                        readonly FLYING: org.spongepowered.api.world.teleport.TeleportHelperFilter
                        /**
                         * This filter is the same as the {@link #DEFAULT} kernel, except that
                         * portals are not valid targets.
                         */
                        // @ts-ignore
                        readonly NO_PORTAL: org.spongepowered.api.world.teleport.TeleportHelperFilter
                        /**
                         * This filter is the same as the {@link #DEFAULT} kernel, except that
                         * only targets that can see the sky are considered.
                         */
                        // @ts-ignore
                        readonly SURFACE_ONLY: org.spongepowered.api.world.teleport.TeleportHelperFilter
                    }
                }
            }
        }
    }
}
