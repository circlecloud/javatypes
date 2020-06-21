declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace bcel {
                    /**
                     * Constants for the project, mostly defined in the JVM specification.
                     */
                    // @ts-ignore
                    class Const extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * One of the access flags for fields, methods, or classes.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.5">
                         *   Flag definitions for Fields in the Java Virtual Machine Specification (Java SE 8 Edition).</a>
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.6">
                         *   Flag definitions for Methods in the Java Virtual Machine Specification (Java SE 8 Edition).</a>
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.6-300-D.1-D.1">
                         *   Flag definitions for Classes in the Java Virtual Machine Specification (Java SE 8 Edition).</a>
                         */
                        // @ts-ignore
                        public static readonly ACC_FINAL: number /*short*/
                        /**
                         * One of the access flags for fields, methods, or classes.
                         */
                        // @ts-ignore
                        public static readonly ACC_INTERFACE: number /*short*/
                        /**
                         * One of the access flags for fields, methods, or classes.
                         */
                        // @ts-ignore
                        public static readonly ACC_ABSTRACT: number /*short*/
                        /**
                         * One of the access flags for fields, methods, or classes.
                         */
                        // @ts-ignore
                        public static readonly ACC_ANNOTATION: number /*short*/
                        /**
                         * Marks a constant pool entry as type UTF-8.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.7">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Utf8: number /*byte*/
                        /**
                         * Marks a constant pool entry as type Integer.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.4">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Integer: number /*byte*/
                        /**
                         * Marks a constant pool entry as type Float.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.4">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Float: number /*byte*/
                        /**
                         * Marks a constant pool entry as type Long.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.5">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Long: number /*byte*/
                        /**
                         * Marks a constant pool entry as type Double.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.5">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Double: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Class
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.1">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Class: number /*byte*/
                        /**
                         * Marks a constant pool entry as type String
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.3">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_String: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Field Reference.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.2">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Fieldref: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Method Reference.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.2">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Methodref: number /*byte*/
                        /**
                         * Marks a constant pool entry as an Interface Method Reference.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.2">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_InterfaceMethodref: number /*byte*/
                        /**
                         * Marks a constant pool entry as a name and type.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.6">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_NameAndType: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Method Handle.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.8">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_MethodHandle: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Method Type.
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.9">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_MethodType: number /*byte*/
                        /**
                         * Marks a constant pool entry as dynamically computed.
                         * @see <a href="https://bugs.openjdk.java.net/secure/attachment/74618/constant-dynamic.html">
                         *  Change request for JEP 309</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Dynamic: number /*byte*/
                        /**
                         * Marks a constant pool entry as an Invoke Dynamic
                         * @see <a href="http://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.10">
                         *  The Constant Pool in The Java Virtual Machine Specification</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_InvokeDynamic: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Module Reference.
                         * <p>Note: Early access Java 9 support- currently subject to change</p>
                         * @see <a href="http://cr.openjdk.java.net/~mr/jigsaw/spec/lang-vm.html#jigsaw-2.6">
                         *  JPMS: Modules in the Java Language and JVM</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Module: number /*byte*/
                        /**
                         * Marks a constant pool entry as a Package Reference.
                         * <p>Note: Early access Java 9 support- currently subject to change</p>
                         * @see <a href="http://cr.openjdk.java.net/~mr/jigsaw/spec/lang-vm.html#jigsaw-2.6">
                         *  JPMS: Modules in the Java Language and JVM</a>
                         */
                        // @ts-ignore
                        public static readonly CONSTANT_Package: number /*byte*/
                        // @ts-ignore
                        public static getConstantName(index: number /*int*/): string
                    }
                }
            }
        }
    }
}
