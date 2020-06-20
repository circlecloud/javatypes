declare namespace javax {
    namespace tools {
        /**
         * File abstraction for tools operating on Java&trade; programming language
         * source and class files.
         * <p>All methods in this interface might throw a SecurityException if
         * a security exception occurs.
         * <p>Unless explicitly allowed, all methods in this interface might
         * throw a NullPointerException if given a {@code null} argument.
         * @author Peter von der Ah&eacute;
         * @author Jonathan Gibbons
         * @see JavaFileManager
         * @since 1.6
         */
        // @ts-ignore
        interface JavaFileObject extends javax.tools.FileObject {
            /**
             * Gets the kind of this file object.
             * @return the kind
             */
            // @ts-ignore
            getKind(): javax.tools.JavaFileObject.Kind
            /**
             * Checks if this file object is compatible with the specified
             * simple name and kind.  A simple name is a single identifier
             * (not qualified) as defined in
             * <cite>The Java&trade; Language Specification</cite>,
             * section 6.2 "Names and Identifiers".
             * @param simpleName a simple name of a class
             * @param kind a kind
             * @return {#code true} if this file object is compatible; false
             *  otherwise
             */
            // @ts-ignore
            isNameCompatible(simpleName: string, kind: javax.tools.JavaFileObject.Kind): boolean
            /**
             * Provides a hint about the nesting level of the class
             * represented by this file object.  This method may return
             * {@link NestingKind#MEMBER} to mean
             * {@link NestingKind#LOCAL} or {@link NestingKind#ANONYMOUS}.
             * If the nesting level is not known or this file object does not
             * represent a class file this method returns {@code null}.
             * @return the nesting kind, or {#code null} if the nesting kind
             *  is not known
             */
            // @ts-ignore
            getNestingKind(): javax.lang.model.element.NestingKind
            /**
             * Provides a hint about the access level of the class represented
             * by this file object.  If the access level is not known or if
             * this file object does not represent a class file this method
             * returns {@code null}.
             * @return the access level
             */
            // @ts-ignore
            getAccessLevel(): javax.lang.model.element.Modifier
        }
    }
}
