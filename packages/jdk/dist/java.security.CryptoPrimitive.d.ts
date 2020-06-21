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
            readonly MESSAGE_DIGEST: java.security.CryptoPrimitive
            /**
             * Cryptographic random number generator
             */
            // @ts-ignore
            readonly SECURE_RANDOM: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: block cipher
             */
            // @ts-ignore
            readonly BLOCK_CIPHER: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: stream cipher
             */
            // @ts-ignore
            readonly STREAM_CIPHER: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: message authentication code
             */
            // @ts-ignore
            readonly MAC: java.security.CryptoPrimitive
            /**
             * Symmetric primitive: key wrap
             */
            // @ts-ignore
            readonly KEY_WRAP: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: public key encryption
             */
            // @ts-ignore
            readonly PUBLIC_KEY_ENCRYPTION: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: signature scheme
             */
            // @ts-ignore
            readonly SIGNATURE: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: key encapsulation mechanism
             */
            // @ts-ignore
            readonly KEY_ENCAPSULATION: java.security.CryptoPrimitive
            /**
             * Asymmetric primitive: key agreement and key distribution
             */
            // @ts-ignore
            readonly KEY_AGREEMENT: java.security.CryptoPrimitive
            // @ts-ignore
            values(): java.security.CryptoPrimitive[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): java.security.CryptoPrimitive
        }
    }
}
