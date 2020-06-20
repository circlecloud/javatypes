declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                /**
                 * An enumeration of vanilla {@link CollisionRule}s.
                 * <p>The behavior of these values can be somewhat counter-intuitive. Since {@link CollisionRule}s
                 * are used on the client, this behavior cannot be changed by Sponge.</p>
                 * <p>The following truth table shows whether or not two entities will collide,
                 * given the collision rules for their respective teams.</p>
                 * <p>For example, two entities on different teams will not collide if one team's {@link CollisionRule}
                 * is set to {@link #ALWAYS} and the other is set to {@link #PUSH_OWN_TEAM}.</p>
                 * <p>Same team - {@link #ALWAYS} - Yes
                 * Same team - {@link #PUSH_OWN_TEAM} - Yes
                 * Same team - {@link #PUSH_OTHER_TEAMS} - No
                 * Same team - {@link #NEVER} - No</p>
                 * <p>Different teams - {@link #NEVER} - *any* - No</p>
                 * <p>Different teams - {@link #ALWAYS} - {@link #PUSH_OWN_TEAM} - No
                 * Different teams - {@link #ALWAYS} - {@link #PUSH_OTHER_TEAMS} - Yes
                 * Different teams - {@link #ALWAYS} - {@link #ALWAYS} - Yes
                 * Different teams - {@link #PUSH_OWN_TEAM} - {@link #PUSH_OTHER_TEAMS} - No
                 * Different teams - {@link #PUSH_OWN_TEAM} - {@link #PUSH_OWN_TEAM} - No
                 * Different teams - {@link #PUSH_OTHER_TEAMS} - {@link #PUSH_OTHER_TEAMS} - Yes</p>
                 */
                // @ts-ignore
                class CollisionRules extends java.lang.Object {
                    /**
                     * Members will always collide with other entities.
                     * <p>This is the default value.</p>
                     */
                    // @ts-ignore
                    readonly ALWAYS: org.spongepowered.api.scoreboard.CollisionRule
                    /**
                     * Members will never collide.
                     */
                    // @ts-ignore
                    readonly NEVER: org.spongepowered.api.scoreboard.CollisionRule
                    /**
                     * Members will only push members on opposing teams.
                     */
                    // @ts-ignore
                    readonly PUSH_OTHER_TEAMS: org.spongepowered.api.scoreboard.CollisionRule
                    /**
                     * Members will only push other members on their team and mobs.
                     */
                    // @ts-ignore
                    readonly PUSH_OWN_TEAM: org.spongepowered.api.scoreboard.CollisionRule
                }
            }
        }
    }
}
