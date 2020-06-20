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
            constructor(fileObject: F extends javax.tools.FileObject)
            /**
             * The file object which all methods are delegated to.
             */
            // @ts-ignore
            readonly fileObject: F extends javax.tools.FileObject
            // @ts-ignore
            toUri(): java.net.URI
            // @ts-ignore
            getName(): java.lang.String
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            openInputStream(): java.io.InputStream
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            openOutputStream(): java.io.OutputStream
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            openReader(ignoreEncodingErrors: boolean): java.io.Reader
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            getCharContent(ignoreEncodingErrors: boolean): java.lang.CharSequence
            /**
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            openWriter(): java.io.Writer
            // @ts-ignore
            getLastModified(): long
            // @ts-ignore
            delete(): boolean
        }
    }
}
