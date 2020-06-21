declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace bcel {
                    namespace classfile {
                        // @ts-ignore
                        abstract class ElementValue extends java.lang.Object {
                            // @ts-ignore
                            public static readonly STRING: number /*byte*/
                            // @ts-ignore
                            public static readonly ENUM_CONSTANT: number /*byte*/
                            // @ts-ignore
                            public static readonly CLASS: number /*byte*/
                            // @ts-ignore
                            public static readonly ANNOTATION: number /*byte*/
                            // @ts-ignore
                            public static readonly ARRAY: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_INT: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_BYTE: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_CHAR: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_DOUBLE: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_FLOAT: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_LONG: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_SHORT: number /*byte*/
                            // @ts-ignore
                            public static readonly PRIMITIVE_BOOLEAN: number /*byte*/
                            // @ts-ignore
                            public abstract stringifyValue(): string
                            // @ts-ignore
                            public static readElementValue(input: java.io.DataInput, cpool: org.apache.tomcat.util.bcel.classfile.ConstantPool): org.apache.tomcat.util.bcel.classfile.ElementValue
                        }
                    }
                }
            }
        }
    }
}
