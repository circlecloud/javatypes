declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * Unchecked exception thrown when an attempt is made to acquire a lock on a
             * region of a file that overlaps a region already locked by the same Java
             * virtual machine, or when another thread is already waiting to lock an
             * overlapping region of the same file.
             * @since 1.4
             */
            // @ts-ignore
            class OverlappingFileLockException extends java.lang.IllegalStateException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
