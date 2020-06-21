declare namespace cn {
    namespace nukkit {
        /**
         * Created by CreeperFace on 9. 11. 2016.
         */
        // @ts-ignore
        class Achievement extends java.lang.Object {
            // @ts-ignore
            constructor(message: java.lang.String | string, ...requires: java.lang.String[] | string[])
            // @ts-ignore
            public static readonly achievements: java.util.HashMap<java.lang.String | string, cn.nukkit.Achievement>
            // @ts-ignore
            public readonly message: java.lang.String | string
            // @ts-ignore
            public readonly requires: java.lang.String[] | string[]
            // @ts-ignore
            public static broadcast(player: cn.nukkit.Player, achievementId: java.lang.String | string): boolean
            // @ts-ignore
            public static add(name: java.lang.String | string, achievement: cn.nukkit.Achievement): boolean
            // @ts-ignore
            public getMessage(): string
            // @ts-ignore
            public broadcast(player: cn.nukkit.Player): void
        }
    }
}
