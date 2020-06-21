declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace bcel {
                    namespace classfile {
                        /**
                         * This class represents the constant pool, i.e., a table of constants, of
                         * a parsed classfile. It may contain null references, due to the JVM
                         * specification that skips an entry after an 8-byte constant (double,
                         * long) entry.  Those interested in generating constant pools
                         * programatically should see <a href="../generic/ConstantPoolGen.html">
                         * ConstantPoolGen</a>.
                         * @see Constant
                         */
                        // @ts-ignore
                        class ConstantPool extends java.lang.Object {
                            /**
                             * Get constant from constant pool.
                             * @param index Index in constant pool
                             * @return Constant value
                             * @see Constant
                             */
                            // @ts-ignore
                            public getConstant(index: number /*int*/): org.apache.tomcat.util.bcel.classfile.Constant
                            /**
                             * Get constant from constant pool and check whether it has the
                             * expected type.
                             * @param index Index in constant pool
                             * @param tag Tag of expected constant, i.e., its type
                             * @return Constant value
                             * @see Constant
                             * @throws ClassFormatException If the constant is not of the expected type
                             */
                            // @ts-ignore
                            public getConstant(index: number /*int*/, tag: number /*byte*/): org.apache.tomcat.util.bcel.classfile.Constant
                        }
                    }
                }
            }
        }
    }
}
