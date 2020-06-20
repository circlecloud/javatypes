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
        class ForwardingJavaFileObject<F extends javax.tools.JavaFileObject> extends javax.tools.ForwardingFileObject<F> implements javax.tools.JavaFileObject {
            /**
             * Creates a new instance of ForwardingJavaFileObject.
             * @param fileObject delegate to this file object
             */
            // @ts-ignore
            constructor(fileObject: F extends javax.tools.JavaFileObject)
            // @ts-ignore
            getKind(): javax.tools.JavaFileObject.Kind
            // @ts-ignore
            isNameCompatible(simpleName: string, kind: javax.tools.JavaFileObject.Kind): boolean
            // @ts-ignore
            getNestingKind(): javax.lang.model.element.NestingKind
            // @ts-ignore
            getAccessLevel(): javax.lang.model.element.Modifier
        }
    }
}
