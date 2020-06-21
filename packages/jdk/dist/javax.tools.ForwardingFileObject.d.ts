declare namespace javax {
    namespace tools {
        /**
         * Forwards calls to a given file object.  Subclasses of this class
         * might override some of these methods and might also provide
         * additional fields and methods.
         * @param <F> the kind of file object forwarded to by this object
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class ForwardingFileObject<F extends javax.tools.FileObject> extends java.lang.Object implements javax.tools.FileObject {
            /**
             * Creates a new instance of ForwardingFileObject.
             * @param fileObject delegate to this file object
             */
            // @ts-ignore
            constructor(fileObject: F)
            /**
             * The file object which all methods are delegated to.
             */
            // @ts-ignore
            readonly fileObject: F
            // @ts-ignore
            public toUri(): java.net.URI
            // @ts-ignore
            public getName(): string
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public openInputStream(): java.io.InputStream
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public openOutputStream(): java.io.OutputStream
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public openReader(ignoreEncodingErrors: boolean): java.io.Reader
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public getCharContent(ignoreEncodingErrors: boolean): java.lang.CharSequence
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public openWriter(): java.io.Writer
            // @ts-ignore
            public getLastModified(): number /*long*/
            // @ts-ignore
            public delete(): boolean
        }
    }
}
