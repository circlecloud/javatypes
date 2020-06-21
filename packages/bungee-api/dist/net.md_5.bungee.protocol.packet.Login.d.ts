declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class Login extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(entityId: number /*int*/, gameMode: number /*short*/, dimension: number /*int*/, seed: number /*long*/, difficulty: number /*short*/, maxPlayers: number /*short*/, levelType: java.lang.String | string, viewDistance: number /*int*/, reducedDebugInfo: boolean, normalRespawn: boolean)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getEntityId(): number /*int*/
                        // @ts-ignore
                        public getGameMode(): number /*short*/
                        // @ts-ignore
                        public getDimension(): number /*int*/
                        // @ts-ignore
                        public getSeed(): number /*long*/
                        // @ts-ignore
                        public getDifficulty(): number /*short*/
                        // @ts-ignore
                        public getMaxPlayers(): number /*short*/
                        // @ts-ignore
                        public getLevelType(): string
                        // @ts-ignore
                        public getViewDistance(): number /*int*/
                        // @ts-ignore
                        public isReducedDebugInfo(): boolean
                        // @ts-ignore
                        public isNormalRespawn(): boolean
                        // @ts-ignore
                        public setEntityId(entityId: number /*int*/): void
                        // @ts-ignore
                        public setGameMode(gameMode: number /*short*/): void
                        // @ts-ignore
                        public setDimension(dimension: number /*int*/): void
                        // @ts-ignore
                        public setSeed(seed: number /*long*/): void
                        // @ts-ignore
                        public setDifficulty(difficulty: number /*short*/): void
                        // @ts-ignore
                        public setMaxPlayers(maxPlayers: number /*short*/): void
                        // @ts-ignore
                        public setLevelType(levelType: java.lang.String | string): void
                        // @ts-ignore
                        public setViewDistance(viewDistance: number /*int*/): void
                        // @ts-ignore
                        public setReducedDebugInfo(reducedDebugInfo: boolean): void
                        // @ts-ignore
                        public setNormalRespawn(normalRespawn: boolean): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
