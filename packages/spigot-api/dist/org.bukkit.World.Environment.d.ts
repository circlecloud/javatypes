declare namespace org {
    namespace bukkit {
        namespace World {
            /**
             * Represents various map environment types that a world may be
             */
            // @ts-ignore
            class Environment extends java.lang.Enum<org.bukkit.World.Environment> {
                /**
                 * Represents the "normal"/"surface world" map
                 */
                // @ts-ignore
                readonly NORMAL: org.bukkit.World.Environment
                /**
                 * Represents a nether based map ("hell")
                 */
                // @ts-ignore
                readonly NETHER: org.bukkit.World.Environment
                /**
                 * Represents the "end" map
                 */
                // @ts-ignore
                readonly THE_END: org.bukkit.World.Environment
                // @ts-ignore
                values(): org.bukkit.World.Environment[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.World.Environment
                /**
                 * Gets the dimension ID of this environment
                 * @return dimension ID
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getId(): number /*int*/
                /**
                 * Get an environment by ID
                 * @param id The ID of the environment
                 * @return The environment
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getEnvironment(id: number /*int*/): org.bukkit.World.Environment
            }
        }
    }
}
