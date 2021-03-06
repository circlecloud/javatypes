declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Defines the standard copy options.
             * @since 1.7
             */
            // @ts-ignore
            class StandardCopyOption extends java.lang.Enum<java.nio.file.StandardCopyOption> implements java.nio.file.CopyOption {
                /**
                 * Replace an existing file if it exists.
                 */
                // @ts-ignore
                public static readonly REPLACE_EXISTING: java.nio.file.StandardCopyOption
                /**
                 * Copy attributes to the new file.
                 */
                // @ts-ignore
                public static readonly COPY_ATTRIBUTES: java.nio.file.StandardCopyOption
                /**
                 * Move the file as an atomic file system operation.
                 */
                // @ts-ignore
                public static readonly ATOMIC_MOVE: java.nio.file.StandardCopyOption
                // @ts-ignore
                public static values(): java.nio.file.StandardCopyOption[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.nio.file.StandardCopyOption
            }
        }
    }
}
