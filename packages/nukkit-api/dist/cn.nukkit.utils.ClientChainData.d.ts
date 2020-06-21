declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * ClientChainData is a container of chain data sent from clients.
             * <p>
             * Device information such as client UUID, xuid and serverAddress, can be
             * read from instances of this object.
             * <p>
             * To get chain data, you can use player.getLoginChainData() or read(loginPacket)
             * <p>
             * ===============
             * author: boybook
             * Nukkit Project
             * ===============
             */
            // @ts-ignore
            class ClientChainData extends java.lang.Object implements cn.nukkit.utils.LoginChainData {
                // @ts-ignore
                public static readonly UI_PROFILE_CLASSIC: number /*int*/
                // @ts-ignore
                public static readonly UI_PROFILE_POCKET: number /*int*/
                // @ts-ignore
                public static of(buffer: number /*byte*/[]): cn.nukkit.utils.ClientChainData
                // @ts-ignore
                public static read(pk: cn.nukkit.network.protocol.LoginPacket): cn.nukkit.utils.ClientChainData
                // @ts-ignore
                public getUsername(): string
                // @ts-ignore
                public getClientUUID(): java.util.UUID
                // @ts-ignore
                public getIdentityPublicKey(): string
                // @ts-ignore
                public getClientId(): number /*long*/
                // @ts-ignore
                public getServerAddress(): string
                // @ts-ignore
                public getDeviceModel(): string
                // @ts-ignore
                public getDeviceOS(): number /*int*/
                // @ts-ignore
                public getDeviceId(): string
                // @ts-ignore
                public getGameVersion(): string
                // @ts-ignore
                public getGuiScale(): number /*int*/
                // @ts-ignore
                public getLanguageCode(): string
                // @ts-ignore
                public getXUID(): string
                // @ts-ignore
                public getCurrentInputMode(): number /*int*/
                // @ts-ignore
                public getDefaultInputMode(): number /*int*/
                // @ts-ignore
                public getCapeData(): string
                // @ts-ignore
                public getUIProfile(): number /*int*/
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public isXboxAuthed(): boolean
            }
        }
    }
}
