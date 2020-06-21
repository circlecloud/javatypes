declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an entity body pose.
             */
            // @ts-ignore
            class Pose extends java.lang.Enum<org.bukkit.entity.Pose> {
                /**
                 * Entity is standing normally.
                 */
                // @ts-ignore
                readonly STANDING: org.bukkit.entity.Pose
                /**
                 * Entity is gliding.
                 */
                // @ts-ignore
                readonly FALL_FLYING: org.bukkit.entity.Pose
                /**
                 * Entity is sleeping.
                 */
                // @ts-ignore
                readonly SLEEPING: org.bukkit.entity.Pose
                /**
                 * Entity is swimming.
                 */
                // @ts-ignore
                readonly SWIMMING: org.bukkit.entity.Pose
                /**
                 * Entity is riptiding with a trident.
                 */
                // @ts-ignore
                readonly SPIN_ATTACK: org.bukkit.entity.Pose
                /**
                 * Entity is sneaking.
                 */
                // @ts-ignore
                readonly SNEAKING: org.bukkit.entity.Pose
                /**
                 * Entity is dead.
                 */
                // @ts-ignore
                readonly DYING: org.bukkit.entity.Pose
                // @ts-ignore
                values(): org.bukkit.entity.Pose[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.entity.Pose
            }
        }
    }
}
