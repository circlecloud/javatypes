declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * DummyBossBar
             * ===============
             * author: boybook
             * Nukkit Project
             * ===============
             */
            // @ts-ignore
            class DummyBossBar extends java.lang.Object {
                // @ts-ignore
                public getPlayer(): cn.nukkit.Player
                // @ts-ignore
                public getBossBarId(): number /*long*/
                // @ts-ignore
                public getText(): string
                // @ts-ignore
                public setText(text: java.lang.String | string): void
                // @ts-ignore
                public getLength(): number /*float*/
                // @ts-ignore
                public setLength(length: number /*float*/): void
                /**
                 * Color is not working in the current version. We are keep waiting for client support.
                 * @param color the boss bar color
                 */
                // @ts-ignore
                public setColor(color: cn.nukkit.utils.BlockColor): void
                // @ts-ignore
                public setColor(red: number /*int*/, green: number /*int*/, blue: number /*int*/): void
                // @ts-ignore
                public getMixedColor(): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                /**
                 * Don't let the entity go too far from the player, or the BossBar will disappear.
                 * Update boss entity's position when teleport and each 5s.
                 */
                // @ts-ignore
                public updateBossEntityPosition(): void
                // @ts-ignore
                public create(): void
                /**
                 * Once the player has teleported, resend Show BossBar
                 */
                // @ts-ignore
                public reshow(): void
                // @ts-ignore
                public destroy(): void
            }
        }
    }
}
