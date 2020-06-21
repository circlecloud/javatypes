declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Defines the options as to how symbolic links are handled.
             * @since 1.7
             */
            // @ts-ignore
            class LinkOption extends java.lang.Enum<java.nio.file.LinkOption> implements java.nio.file.OpenOption, java.nio.file.CopyOption {
                /**
                 * Do not follow symbolic links.
                 * @see Files#getFileAttributeView(Path,Class,LinkOption[])
                 * @see Files#copy
                 * @see SecureDirectoryStream#newByteChannel
                 */
                // @ts-ignore
                readonly NOFOLLOW_LINKS: java.nio.file.LinkOption
                // @ts-ignore
                values(): java.nio.file.LinkOption[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.nio.file.LinkOption
            }
        }
    }
}
