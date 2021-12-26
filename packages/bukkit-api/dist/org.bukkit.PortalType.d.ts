declare namespace org {
    namespace bukkit {
        /**
         * Represents various types of portals that can be made in a world.
         */
        // @ts-ignore
        class PortalType extends java.lang.Enum<org.bukkit.PortalType> {
            /**
             * This is a Nether portal, made of obsidian.
             */
            // @ts-ignore
            public static readonly NETHER: org.bukkit.PortalType
            /**
             * This is an Ender portal.
             */
            // @ts-ignore
            public static readonly ENDER: org.bukkit.PortalType
            /**
             * This is a custom Plugin portal.
             */
            // @ts-ignore
            public static readonly CUSTOM: org.bukkit.PortalType
            // @ts-ignore
            public static values(): org.bukkit.PortalType[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.PortalType
        }
    }
}
