declare namespace java {
    namespace security {
        /**
         * An enumeration of cryptographic primitives.
         * @since 1.7
         */
        // @ts-ignore
        class CryptoPrimitive extends java.lang.Enum<java.security.CryptoPrimitive> {
            /**
             * Hash function
             */
            // @ts-ignore
            public static readonly MESSAGE_DIGEST: java.security.CryptoPrimitive
            /**
             * Cryptographic random number generator
             */
            // @ts-ignore
            public static readonly SECURE_RANDOM: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: block cipher
             */
            // @ts-ignore
            public static readonly BLOCK_CIPHER: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: stream cipher
             */
            // @ts-ignore
            public static readonly STREAM_CIPHER: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: message authentication code
             */
            // @ts-ignore
            public static readonly MAC: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: key wrap
             */
            // @ts-ignore
            public static readonly KEY_WRAP: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: public key encryption
             */
            // @ts-ignore
            public static readonly PUBLIC_KEY_ENCRYPTION: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: signature scheme
             */
            // @ts-ignore
            public static readonly SIGNATURE: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: key encapsulation mechanism
             */
            // @ts-ignore
            public static readonly KEY_ENCAPSULATION: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: key agreement and key distribution
             */
            // @ts-ignore
            public static readonly KEY_AGREEMENT: java.security.CryptoPrimitive
            // @ts-ignore
            public static values(): java.security.CryptoPrimitive[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): java.security.CryptoPrimitive
        }
    }
}
