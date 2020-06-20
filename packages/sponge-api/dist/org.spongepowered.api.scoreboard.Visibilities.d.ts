declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                /**
                 * Visibility names which cause nametags or death messages to be displayed
                 * differently to players on a team.
                 */
                // @ts-ignore
                class Visibilities extends java.lang.Object {
                    /**
                     * Death messages or nametags are always visible.
                     * <p>This is the default value.</p>
                     */
                    // @ts-ignore
                    readonly ALWAYS: org.spongepowered.api.scoreboard.Visibility
                    /**
                     * Death messages or nametags for members of other teams will not be
                     * visible, but death messages or nametags for members of the same team
                     * will be visible.
                     */
                    // @ts-ignore
                    readonly HIDE_FOR_OTHER_TEAMS: org.spongepowered.api.scoreboard.Visibility
                    /**
                     * Death messages or nametags for members of other teams will be
                     * visible, but death messages or nametags for members of the same team
                     * will not be visible.
                     */
                    // @ts-ignore
                    readonly HIDE_FOR_OWN_TEAM: org.spongepowered.api.scoreboard.Visibility
                    /**
                     * Death messages or nametags are never visible.
                     */
                    // @ts-ignore
                    readonly NEVER: org.spongepowered.api.scoreboard.Visibility
                }
            }
        }
    }
}
