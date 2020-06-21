declare namespace java {
    namespace lang {
        /**
         * This class is a placeholder for environments which
         * explicitely manage the action of a "Just In Time"
         * compiler.
         * @author OTI
         * @version initial
         * @see Cloneable
         */
        // @ts-ignore
        class Compiler extends java.lang.Object {
            /**
             * Low level interface to the JIT compiler. Can return
             * any object, or null if no JIT compiler is available.
             * @author OTI
             * @version initial
             * @return Object
             * 					result of executing command
             * @param cmd Object
             * 					a command for the JIT compiler
             */
            // @ts-ignore
            public static command(cmd: java.lang.Object | any): any
            /**
             * Compiles the class using the JIT compiler. Answers
             * true if the compilation was successful, or false if
             * it failed or there was no JIT compiler available.
             * @return boolean
             * 					indicating compilation success
             * @param classToCompile java.lang.Class
             * 					the class to JIT compile
             */
            // @ts-ignore
            public static compileClass(classToCompile: java.lang.Class<any>): boolean
            /**
             * Compiles all classes whose name matches the argument
             * using the JIT compiler. Answers true if the compilation
             * was successful, or false if it failed or there was no
             * JIT compiler available.
             * @return boolean
             * 					indicating compilation success
             * @param nameRoot String
             * 					the string to match against class names
             */
            // @ts-ignore
            public static compileClasses(nameRoot: java.lang.String | string): boolean
            /**
             * Disable the JIT compiler
             */
            // @ts-ignore
            public static disable(): void
            /**
             * Enable the JIT compiler
             */
            // @ts-ignore
            public static enable(): void
        }
    }
}
