declare namespace org {
    namespace bukkit {
        namespace BanList {
            /**
             * Represents a ban-type that a {@link BanList} may track.
             */
            // @ts-ignore
            class Type extends java.lang.Enum<org.bukkit.BanList.Type> {
                /**
                 * Banned player names
                 */
                // @ts-ignore
                readonly NAME: org.bukkit.BanList.Type
                /**
                 * Banned player IP addresses
                 */
                // @ts-ignore
                readonly IP: org.bukkit.BanList.Type
                // @ts-ignore
                values(): org.bukkit.BanList.Type[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.BanList.Type
            }
        }
    }
}
