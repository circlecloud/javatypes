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
            readonly NETHER: org.bukkit.PortalType
            /**
             * This is an Ender portal.
             */
            // @ts-ignore
            readonly ENDER: org.bukkit.PortalType
            /**
             * This is a custom Plugin portal.
             */
            // @ts-ignore
            readonly CUSTOM: org.bukkit.PortalType
            // @ts-ignore
            values(): org.bukkit.PortalType[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.PortalType
        }
    }
}
