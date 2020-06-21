declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace bcel {
                    namespace classfile {
                        /**
                         * Abstract superclass for classes to represent the different constant types
                         * in the constant pool of a class file. The classes keep closely to
                         * the JVM specification.
                         * @author <A HREF="mailto:m.dahm#gmx.de">M. Dahm</A>
                         */
                        // @ts-ignore
                        abstract class Constant extends java.lang.Object {
                            // @ts-ignore
                            readonly tag: number /*byte*/
                            /**
                             * @return Tag of constant, i.e., its type. No setTag() method to avoid
                             *  confusion.
                             */
                            // @ts-ignore
                            public getTag(): number /*byte*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
