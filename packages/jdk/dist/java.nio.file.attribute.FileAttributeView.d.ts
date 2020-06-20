declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * An attribute view that is a read-only or updatable view of non-opaque
                 * values associated with a file in a filesystem. This interface is extended or
                 * implemented by specific file attribute views that define methods to read
                 * and/or update the attributes of a file.
                 * @since 1.7
                 * @see java.nio.file.Files#getFileAttributeView(Path,Class,java.nio.file.LinkOption[])
                 */
                // @ts-ignore
                interface FileAttributeView extends java.nio.file.attribute.AttributeView {
                }
            }
        }
    }
}
