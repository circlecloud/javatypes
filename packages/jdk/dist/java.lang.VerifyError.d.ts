declare namespace java {
    namespace lang {
        /**
         * Thrown when the "verifier" detects that a class file,
         * though well formed, contains some sort of internal inconsistency
         * or security problem.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class VerifyError extends java.lang.LinkageError {
            /**
             * Constructs an <code>VerifyError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>VerifyError</code> with the specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
