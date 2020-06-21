declare namespace cn {
    namespace nukkit {
        /**
         * 描述一个不在线的玩家的类。<br>
         * Describes an offline player.
         * @author MagicDroidX(code) # Nukkit Project
         * @author 粉鞋大妈(javadoc) # Nukkit Project
         * @see cn.nukkit.Player
         * @since Nukkit 1.0 | Nukkit API 1.0.0
         */
        // @ts-ignore
        class OfflinePlayer extends java.lang.Object implements cn.nukkit.IPlayer {
            /**
             * 初始化这个{@code OfflinePlayer}对象。<br>
             * Initializes the object {@code OfflinePlayer}.
             * @param server 这个玩家所在服务器的{#code Server}对象。<br>
             *                The server this player is in, as a {@code Server} object.
             * @param uuid   这个玩家的UUID。<br>
             *                UUID of this player.
             * @since Nukkit 1.0 | Nukkit API 1.0.0
             */
            // @ts-ignore
            constructor(server: cn.nukkit.Server, uuid: java.util.UUID)
            // @ts-ignore
            constructor(server: cn.nukkit.Server, name: java.lang.String | string)
            // @ts-ignore
            constructor(server: cn.nukkit.Server, uuid: java.util.UUID, name: java.lang.String | string)
            // @ts-ignore
            public isOnline(): boolean
            // @ts-ignore
            public getName(): string
            // @ts-ignore
            public getUniqueId(): java.util.UUID
            // @ts-ignore
            public getServer(): cn.nukkit.Server
            // @ts-ignore
            public isOp(): boolean
            // @ts-ignore
            public setOp(value: boolean): void
            // @ts-ignore
            public isBanned(): boolean
            // @ts-ignore
            public setBanned(value: boolean): void
            // @ts-ignore
            public isWhitelisted(): boolean
            // @ts-ignore
            public setWhitelisted(value: boolean): void
            // @ts-ignore
            public getPlayer(): cn.nukkit.Player
            // @ts-ignore
            public getFirstPlayed(): number
            // @ts-ignore
            public getLastPlayed(): number
            // @ts-ignore
            public hasPlayedBefore(): boolean
            // @ts-ignore
            public setMetadata(metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
            // @ts-ignore
            public getMetadata(metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
            // @ts-ignore
            public hasMetadata(metadataKey: java.lang.String | string): boolean
            // @ts-ignore
            public removeMetadata(metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
        }
    }
}
