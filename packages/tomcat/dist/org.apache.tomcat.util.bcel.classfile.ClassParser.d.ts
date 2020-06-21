declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace bcel {
                    namespace classfile {
                        /**
                         * Wrapper class that parses a given Java .class file. The method <A
                         * href ="#parse">parse</A> returns a <A href ="JavaClass.html">
                         * JavaClass</A> object on success. When an I/O error or an
                         * inconsistency occurs an appropriate exception is propagated back to
                         * the caller.
                         * The structure and the names comply, except for a few conveniences,
                         * exactly with the <A href="http://docs.oracle.com/javase/specs/">
                         * JVM specification 1.0</a>. See this paper for
                         * further details about the structure of a bytecode file.
                         */
                        // @ts-ignore
                        class ClassParser extends java.lang.Object {
                            /**
                             * Parse class from the given stream.
                             * @param inputStream Input stream
                             */
                            // @ts-ignore
                            constructor(inputStream: java.io.InputStream)
                            /**
                             * Parse the given Java class file and return an object that represents
                             * the contained data, i.e., constants, methods, fields and commands.
                             * A <em>ClassFormatException</em> is raised, if the file is not a valid
                             * .class file. (This does not include verification of the byte code as it
                             * is performed by the java interpreter).
                             * @return Class object representing the parsed class file
                             * @throws IOException If an I/O occurs reading the byte code
                             * @throws ClassFormatException If the byte code is invalid
                             */
                            // @ts-ignore
                            public parse(): org.apache.tomcat.util.bcel.classfile.JavaClass
                        }
                    }
                }
            }
        }
    }
}
