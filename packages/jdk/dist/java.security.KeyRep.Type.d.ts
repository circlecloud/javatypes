declare namespace java {
    namespace security {
        namespace KeyRep {
            /**
             * Key type.
             * @since 1.5
             */
            // @ts-ignore
            class Type extends java.lang.Enum<java.security.KeyRep.Type> {
                /**
                 * Type for secret keys.
                 */
                // @ts-ignore
                public static readonly SECRET: java.security.KeyRep.Type
                /**
                 * Type for public keys.
                 */
                // @ts-ignore
                public static readonly PUBLIC: java.security.KeyRep.Type
                /**
                 * Type for private keys.
                 */
                // @ts-ignore
                public static readonly PRIVATE: java.security.KeyRep.Type
                // @ts-ignore
                public static values(): java.security.KeyRep.Type[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.security.KeyRep.Type
            }
        }
    }
}
