declare namespace java {
    namespace io {
        /**
         * Instances of the file descriptor class serve as an opaque handle
         * to the underlying machine-specific structure representing an
         * open file, an open socket, or another source or sink of bytes.
         * The main practical use for a file descriptor is to create a
         * {@link FileInputStream} or {@link FileOutputStream} to contain it.
         * <p>Applications should not create their own file descriptors.
         * @author Pavani Diwanji
         * @since JDK1.0
         */
        // @ts-ignore
        class FileDescriptor extends java.lang.Object {
            /**
             * Constructs an (invalid) FileDescriptor
             * object.
             */
            // @ts-ignore
            constructor()
            /**
             * A handle to the standard input stream. Usually, this file
             * descriptor is not used directly, but rather via the input stream
             * known as {@code System.in}.
             * @see java.lang.System#in
             */
            // @ts-ignore
            readonly in: java.io.FileDescriptor
            /**
             * A handle to the standard output stream. Usually, this file
             * descriptor is not used directly, but rather via the output stream
             * known as {@code System.out}.
             * @see java.lang.System#out
             */
            // @ts-ignore
            readonly out: java.io.FileDescriptor
            /**
             * A handle to the standard error stream. Usually, this file
             * descriptor is not used directly, but rather via the output stream
             * known as {@code System.err}.
             * @see java.lang.System#err
             */
            // @ts-ignore
            readonly err: java.io.FileDescriptor
            /**
             * Tests if this file descriptor object is valid.
             * @return {#code true} if the file descriptor object represents a
             *           valid, open file, socket, or other active I/O connection;
             *           {@code false} otherwise.
             */
            // @ts-ignore
            valid(): boolean
            /**
             * Force all system buffers to synchronize with the underlying
             * device.  This method returns after all modified data and
             * attributes of this FileDescriptor have been written to the
             * relevant device(s).  In particular, if this FileDescriptor
             * refers to a physical storage medium, such as a file in a file
             * system, sync will not return until all in-memory modified copies
             * of buffers associated with this FileDesecriptor have been
             * written to the physical medium.
             * sync is meant to be used by code that requires physical
             * storage (such as a file) to be in a known state  For
             * example, a class that provided a simple transaction facility
             * might use sync to ensure that all changes to a file caused
             * by a given transaction were recorded on a storage medium.
             * sync only affects buffers downstream of this FileDescriptor.  If
             * any in-memory buffering is being done by the application (for
             * example, by a BufferedOutputStream object), those buffers must
             * be flushed into the FileDescriptor (for example, by invoking
             * OutputStream.flush) before that data will be affected by sync.
             * @exception SyncFailedException
             *         Thrown when the buffers cannot be flushed,
             *         or because the system cannot guarantee that all the
             *         buffers have been synchronized with physical media.
             * @since JDK1.1
             */
            // @ts-ignore
            sync(): void
        }
    }
}
