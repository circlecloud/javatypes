declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            interface LoginChainData {
                // @ts-ignore
                getUsername(): string
                // @ts-ignore
                getClientUUID(): java.util.UUID
                // @ts-ignore
                getIdentityPublicKey(): string
                // @ts-ignore
                getClientId(): number /*long*/
                // @ts-ignore
                getServerAddress(): string
                // @ts-ignore
                getDeviceModel(): string
                // @ts-ignore
                getDeviceOS(): number /*int*/
                // @ts-ignore
                getDeviceId(): string
                // @ts-ignore
                getGameVersion(): string
                // @ts-ignore
                getGuiScale(): number /*int*/
                // @ts-ignore
                getLanguageCode(): string
                // @ts-ignore
                getXUID(): string
                // @ts-ignore
                isXboxAuthed(): boolean
                // @ts-ignore
                getCurrentInputMode(): number /*int*/
                // @ts-ignore
                getDefaultInputMode(): number /*int*/
                // @ts-ignore
                getCapeData(): string
                // @ts-ignore
                getUIProfile(): number /*int*/
            }
        }
    }
}
