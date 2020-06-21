declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                /**
                 * Represents a player's skin settings. These settings can be changed by the
                 * player under Skin Configuration in the Options menu.
                 */
                // @ts-ignore
                interface SkinConfiguration {
                    // @ts-ignore
                    hasCape(): boolean
                    // @ts-ignore
                    hasJacket(): boolean
                    // @ts-ignore
                    hasLeftSleeve(): boolean
                    // @ts-ignore
                    hasRightSleeve(): boolean
                    // @ts-ignore
                    hasLeftPants(): boolean
                    // @ts-ignore
                    hasRightPants(): boolean
                    // @ts-ignore
                    hasHat(): boolean
                }
            }
        }
    }
}
