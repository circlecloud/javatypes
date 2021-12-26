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
                public static readonly STANDING: org.bukkit.entity.Pose
                /**
                 * Entity is gliding.
                 */
                // @ts-ignore
                public static readonly FALL_FLYING: org.bukkit.entity.Pose
                /**
                 * Entity is sleeping.
                 */
                // @ts-ignore
                public static readonly SLEEPING: org.bukkit.entity.Pose
                /**
                 * Entity is swimming.
                 */
                // @ts-ignore
                public static readonly SWIMMING: org.bukkit.entity.Pose
                /**
                 * Entity is riptiding with a trident.
                 */
                // @ts-ignore
                public static readonly SPIN_ATTACK: org.bukkit.entity.Pose
                /**
                 * Entity is sneaking.
                 */
                // @ts-ignore
                public static readonly SNEAKING: org.bukkit.entity.Pose
                /**
                 * Entity is dead.
                 */
                // @ts-ignore
                public static readonly DYING: org.bukkit.entity.Pose
                // @ts-ignore
                public static values(): org.bukkit.entity.Pose[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.entity.Pose
            }
        }
    }
}
