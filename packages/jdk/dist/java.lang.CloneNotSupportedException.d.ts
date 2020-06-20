declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that the <code>clone</code> method in class
         * <code>Object</code> has been called to clone an object, but that
         * the object's class does not implement the <code>Cloneable</code>
         * interface.
         * <p>
         * Applications that override the <code>clone</code> method can also
         * throw this exception to indicate that an object could not or
         * should not be cloned.
         * @author unascribed
         * @see java.lang.Cloneable
         * @see java.lang.Object#clone()
         * @since JDK1.0
         */
        // @ts-ignore
        class CloneNotSupportedException extends java.lang.Exception {
            /**
             * Constructs a <code>CloneNotSupportedException</code> with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>CloneNotSupportedException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
