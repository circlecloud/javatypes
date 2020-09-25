declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Defines access modes used to test the accessibility of a file.
             * @since 1.7
             */
            // @ts-ignore
            class AccessMode extends java.lang.Enum<java.nio.file.AccessMode> {
                /**
                 * Test read access.
                 */
                // @ts-ignore
                public static readonly READ: java.nio.file.AccessMode
                /**
                 * Test write access.
                 */
                // @ts-ignore
                public static readonly WRITE: java.nio.file.AccessMode
                /**
                 * Test execute access.
                 */
                // @ts-ignore
                public static readonly EXECUTE: java.nio.file.AccessMode
                // @ts-ignore
                public static values(): java.nio.file.AccessMode[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.nio.file.AccessMode
            }
        }
    }
}
