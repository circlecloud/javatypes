declare namespace net {
    namespace md_5 {
        namespace bungee {
            /**
             * Class containing all encryption related methods for the proxy.
             */
            // @ts-ignore
            class EncryptionUtil extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly keys: java.security.KeyPair
                // @ts-ignore
                public static readonly nativeFactory: object
                // @ts-ignore
                public static encryptRequest(): EncryptionRequest
                // @ts-ignore
                public static getSecret(resp: EncryptionResponse, request: EncryptionRequest): javax.crypto.SecretKey
                // @ts-ignore
                public static getCipher(forEncryption: boolean, shared: javax.crypto.SecretKey): BungeeCipher
                // @ts-ignore
                public static getPubkey(request: EncryptionRequest): java.security.PublicKey
                // @ts-ignore
                public static encrypt(key: java.security.Key, b: number /*byte*/[]): number /*byte*/[]
                // @ts-ignore
                public static getSecret(): javax.crypto.SecretKey
            }
        }
    }
}
