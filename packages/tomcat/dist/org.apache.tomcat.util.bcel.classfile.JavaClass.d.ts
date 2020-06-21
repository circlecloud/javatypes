declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace bcel {
                    namespace classfile {
                        /**
                         * Represents a Java class, i.e., the data structures, constant pool,
                         * fields, methods and commands contained in a Java .class file.
                         * See <a href="http://docs.oracle.com/javase/specs/">JVM specification</a> for details.
                         * The intent of this class is to represent a parsed or otherwise existing
                         * class file.  Those interested in programatically generating classes
                         * should see the <a href="../generic/ClassGen.html">ClassGen</a> class.
                         */
                        // @ts-ignore
                        class JavaClass extends java.lang.Object {
                            /**
                             * @return Access flags of the object aka. "modifiers".
                             */
                            // @ts-ignore
                            public getAccessFlags(): number /*int*/
                            /**
                             * Return annotations entries from "RuntimeVisibleAnnotations" attribute on
                             * the class, if there is any.
                             * @return An array of entries or {#code null}
                             */
                            // @ts-ignore
                            public getAnnotationEntries(): org.apache.tomcat.util.bcel.classfile.AnnotationEntry[]
                            /**
                             * @return Class name.
                             */
                            // @ts-ignore
                            public getClassName(): string
                            /**
                             * @return Names of implemented interfaces.
                             */
                            // @ts-ignore
                            public getInterfaceNames(): string[]
                            /**
                             * returns the super class name of this class. In the case that this class is
                             * java.lang.Object, it will return itself (java.lang.Object). This is probably incorrect
                             * but isn't fixed at this time to not break existing clients.
                             * @return Superclass name.
                             */
                            // @ts-ignore
                            public getSuperclassName(): string
                        }
                    }
                }
            }
        }
    }
}
