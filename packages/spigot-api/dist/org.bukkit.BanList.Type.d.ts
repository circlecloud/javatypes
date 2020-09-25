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
                public static readonly NAME: org.bukkit.BanList.Type
                /**
                 * Banned player IP addresses
                 */
                // @ts-ignore
                public static readonly IP: org.bukkit.BanList.Type
                // @ts-ignore
                public static values(): org.bukkit.BanList.Type[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.BanList.Type
            }
        }
    }
}
