declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Checked exception thrown when a file cannot be moved as an atomic file system
             * operation.
             * @since 1.7
             */
            // @ts-ignore
            class AtomicMoveNotSupportedException extends java.nio.file.FileSystemException {
                /**
                 * Constructs an instance of this class.
                 * @param source
                 *           a string identifying the source file or {#code null} if not known
                 * @param target
                 *           a string identifying the target file or {#code null} if not known
                 * @param reason
                 *           a reason message with additional information
                 */
                // @ts-ignore
                constructor(source: string, target: string, reason: string)
            }
        }
    }
}
