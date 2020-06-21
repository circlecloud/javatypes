declare namespace javax {
    namespace tools {
        /**
         * Provides simple implementations for most methods in JavaFileObject.
         * This class is designed to be subclassed and used as a basis for
         * JavaFileObject implementations.  Subclasses can override the
         * implementation and specification of any method of this class as
         * long as the general contract of JavaFileObject is obeyed.
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class SimpleJavaFileObject extends java.lang.Object implements javax.tools.JavaFileObject {
            /**
             * Construct a SimpleJavaFileObject of the given kind and with the
             * given URI.
             * @param uri  the URI for this file object
             * @param kind the kind of this file object
             */
            // @ts-ignore
            constructor(uri: java.net.URI, kind: javax.tools.JavaFileObject.Kind)
            /**
             * A URI for this file object.
             */
            // @ts-ignore
            readonly uri: java.net.URI
            /**
             * The kind of this file object.
             */
            // @ts-ignore
            readonly kind: javax.tools.JavaFileObject.Kind
            // @ts-ignore
            public toUri(): java.net.URI
            // @ts-ignore
            public getName(): string
            /**
             * This implementation always throws {@linkplain
             * UnsupportedOperationException}.  Subclasses can change this
             * behavior as long as the contract of {@link FileObject} is
             * obeyed.
             */
            // @ts-ignore
            public openInputStream(): java.io.InputStream
            /**
             * This implementation always throws {@linkplain
             * UnsupportedOperationException}.  Subclasses can change this
             * behavior as long as the contract of {@link FileObject} is
             * obeyed.
             */
            // @ts-ignore
            public openOutputStream(): java.io.OutputStream
            /**
             * Wraps the result of {@linkplain #getCharContent} in a Reader.
             * Subclasses can change this behavior as long as the contract of
             * {@link FileObject} is obeyed.
             * @param ignoreEncodingErrors {#inheritDoc}
             * @return a Reader wrapping the result of getCharContent
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public openReader(ignoreEncodingErrors: boolean): java.io.Reader
            /**
             * This implementation always throws {@linkplain
             * UnsupportedOperationException}.  Subclasses can change this
             * behavior as long as the contract of {@link FileObject} is
             * obeyed.
             */
            // @ts-ignore
            public getCharContent(ignoreEncodingErrors: boolean): java.lang.CharSequence
            /**
             * Wraps the result of openOutputStream in a Writer.  Subclasses
             * can change this behavior as long as the contract of {@link
             * FileObject} is obeyed.
             * @return a Writer wrapping the result of openOutputStream
             * @throws IllegalStateException {#inheritDoc}
             * @throws UnsupportedOperationException {#inheritDoc}
             * @throws IOException {#inheritDoc}
             */
            // @ts-ignore
            public openWriter(): java.io.Writer
            /**
             * This implementation returns {@code 0L}.  Subclasses can change
             * this behavior as long as the contract of {@link FileObject} is
             * obeyed.
             * @return {#code 0L}
             */
            // @ts-ignore
            public getLastModified(): number /*long*/
            /**
             * This implementation does nothing.  Subclasses can change this
             * behavior as long as the contract of {@link FileObject} is
             * obeyed.
             * @return {#code false}
             */
            // @ts-ignore
            public delete(): boolean
            /**
             * @return {#code this.kind}
             */
            // @ts-ignore
            public getKind(): javax.tools.JavaFileObject.Kind
            /**
             * This implementation compares the path of its URI to the given
             * simple name.  This method returns true if the given kind is
             * equal to the kind of this object, and if the path is equal to
             * {@code simpleName + kind.extension} or if it ends with {@code
             * "/" + simpleName + kind.extension}.
             * <p>This method calls {@link #getKind} and {@link #toUri} and
             * does not access the fields {@link #uri} and {@link #kind}
             * directly.
             * <p>Subclasses can change this behavior as long as the contract
             * of {@link JavaFileObject} is obeyed.
             */
            // @ts-ignore
            public isNameCompatible(simpleName: java.lang.String | string, kind: javax.tools.JavaFileObject.Kind): boolean
            /**
             * This implementation returns {@code null}.  Subclasses can
             * change this behavior as long as the contract of
             * {@link JavaFileObject} is obeyed.
             */
            // @ts-ignore
            public getNestingKind(): javax.lang.model.element.NestingKind
            /**
             * This implementation returns {@code null}.  Subclasses can
             * change this behavior as long as the contract of
             * {@link JavaFileObject} is obeyed.
             */
            // @ts-ignore
            public getAccessLevel(): javax.lang.model.element.Modifier
            // @ts-ignore
            public toString(): string
        }
    }
}
