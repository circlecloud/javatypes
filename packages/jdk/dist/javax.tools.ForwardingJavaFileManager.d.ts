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
            constructor(fileManager: M extends javax.tools.JavaFileManager)
            /**
             * The file manager which all methods are delegated to.
             */
            // @ts-ignore
            readonly fileManager: M extends javax.tools.JavaFileManager
            /**
             * @throws SecurityException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            getClassLoader(location: javax.tools.JavaFileManager.Location): java.lang.ClassLoader
            /**
             * @throws IOException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            list(location: javax.tools.JavaFileManager.Location, packageName: string, kinds: Array<javax.tools.JavaFileObject.Kind>, recurse: boolean): java.lang.Iterable<javax.tools.JavaFileObject>
            /**
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            inferBinaryName(location: javax.tools.JavaFileManager.Location, file: javax.tools.JavaFileObject): java.lang.String
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            isSameFile(a: javax.tools.FileObject, b: javax.tools.FileObject): boolean
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            handleOption(current: string, remaining: java.util.Iterator<java.lang.String>): boolean
            // @ts-ignore
            hasLocation(location: javax.tools.JavaFileManager.Location): boolean
            // @ts-ignore
            isSupportedOption(option: string): int
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            getJavaFileForInput(location: javax.tools.JavaFileManager.Location, className: string, kind: javax.tools.JavaFileObject.Kind): javax.tools.JavaFileObject
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            getJavaFileForOutput(location: javax.tools.JavaFileManager.Location, className: string, kind: javax.tools.JavaFileObject.Kind, sibling: javax.tools.FileObject): javax.tools.JavaFileObject
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            getFileForInput(location: javax.tools.JavaFileManager.Location, packageName: string, relativeName: string): javax.tools.FileObject
            /**
             * @throws IllegalArgumentException {#inheritDoc}
             * @throws IllegalStateException {#inheritDoc}
             */
            // @ts-ignore
            getFileForOutput(location: javax.tools.JavaFileManager.Location, packageName: string, relativeName: string, sibling: javax.tools.FileObject): javax.tools.FileObject
            // @ts-ignore
            flush(): void
            // @ts-ignore
            close(): void
        }
    }
}
