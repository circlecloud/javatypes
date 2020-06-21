declare namespace javax {
    namespace tools {
        /**
         * Forwards calls to a given file manager.  Subclasses of this class
         * might override some of these methods and might also provide
         * additional fields and methods.
         * @param <M> the kind of file manager forwarded to by this object
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class ForwardingJavaFileManager<M extends javax.tools.JavaFileManager> extends java.lang.Object implements javax.tools.JavaFileManager {
            /**
             * Creates a new instance of ForwardingJavaFileManager.
             * @param fileManager delegate to this file manager
             */
            // @ts-ignore
            constructor(fileManager: M)
            /**
             * The file manager which all methods are delegated to.
             */
            // @ts-ignore
            readonly fileManager: M
            /**
             * @throws SecurityException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public getClassLoader(location: javax.tools.JavaFileManager.Location): java.lang.ClassLoader
            /**
             * @throws IOException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public list(location: javax.tools.JavaFileManager.Location, packageName: java.lang.String | string, kinds: java.util.Set<javax.tools.JavaFileObject.Kind> | Array<javax.tools.JavaFileObject.Kind>, recurse: boolean): java.lang.Iterable<javax.tools.JavaFileObject>
            /**
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public inferBinaryName(location: javax.tools.JavaFileManager.Location, file: javax.tools.JavaFileObject): string
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            public isSameFile(a: javax.tools.FileObject, b: javax.tools.FileObject): boolean
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public handleOption(current: java.lang.String | string, remaining: java.util.Iterator<java.lang.String | string>): boolean
            // @ts-ignore
            public hasLocation(location: javax.tools.JavaFileManager.Location): boolean
            // @ts-ignore
            public isSupportedOption(option: java.lang.String | string): number /*int*/
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public getJavaFileForInput(location: javax.tools.JavaFileManager.Location, className: java.lang.String | string, kind: javax.tools.JavaFileObject.Kind): javax.tools.JavaFileObject
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public getJavaFileForOutput(location: javax.tools.JavaFileManager.Location, className: java.lang.String | string, kind: javax.tools.JavaFileObject.Kind, sibling: javax.tools.FileObject): javax.tools.JavaFileObject
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public getFileForInput(location: javax.tools.JavaFileManager.Location, packageName: java.lang.String | string, relativeName: java.lang.String | string): javax.tools.FileObject
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            public getFileForOutput(location: javax.tools.JavaFileManager.Location, packageName: java.lang.String | string, relativeName: java.lang.String | string, sibling: javax.tools.FileObject): javax.tools.FileObject
            // @ts-ignore
            public flush(): void
            // @ts-ignore
            public close(): void
        }
    }
}
