declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Defines the file tree traversal options.
             * @since 1.7
             * @see Files#walkFileTree
             */
            // @ts-ignore
            class FileVisitOption extends java.lang.Enum<java.nio.file.FileVisitOption> {
                /**
                 * Follow symbolic links.
                 */
                // @ts-ignore
                readonly FOLLOW_LINKS: java.nio.file.FileVisitOption
                // @ts-ignore
                values(): java.nio.file.FileVisitOption[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.nio.file.FileVisitOption
            }
        }
    }
}
