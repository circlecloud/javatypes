declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            /**
             * Controls the way in which an {@link Objective} is rendered client side.
             */
            // @ts-ignore
            class RenderType extends java.lang.Enum<org.bukkit.scoreboard.RenderType> {
                /**
                 * Display integer value.
                 */
                // @ts-ignore
                readonly INTEGER: org.bukkit.scoreboard.RenderType
                /**
                 * Display number of hearts corresponding to value.
                 */
                // @ts-ignore
                readonly HEARTS: org.bukkit.scoreboard.RenderType
                // @ts-ignore
                values(): org.bukkit.scoreboard.RenderType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.scoreboard.RenderType
            }
        }
    }
}
