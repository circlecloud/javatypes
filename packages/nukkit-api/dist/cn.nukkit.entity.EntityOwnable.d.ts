declare namespace cn {
    namespace nukkit {
        namespace entity {
            /**
             * Author: BeYkeRYkt
             * Nukkit Project
             */
            // @ts-ignore
            interface EntityOwnable {
                // @ts-ignore
                getOwnerName(): string
                // @ts-ignore
                setOwnerName(playerName: java.lang.String | string): void
                // @ts-ignore
                getOwner(): cn.nukkit.Player
            }
        }
    }
}
