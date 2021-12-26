declare namespace io {
    namespace lumine {
        namespace utils {
            namespace reflection {
                namespace Reflector {
                    // @ts-ignore
                    class DataType extends java.lang.Enum<io.lumine.utils.reflection.Reflector.DataType> {
                        // @ts-ignore
                        public static readonly BYTE: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly SHORT: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly INTEGER: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly LONG: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly CHARACTER: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly FLOAT: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly DOUBLE: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static readonly BOOLEAN: io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static values(): io.lumine.utils.reflection.Reflector.DataType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public getPrimitive(): java.lang.Class<any>
                        // @ts-ignore
                        public getReference(): java.lang.Class<any>
                        // @ts-ignore
                        public static fromClass(clazz: java.lang.Class<any>): io.lumine.utils.reflection.Reflector.DataType
                        // @ts-ignore
                        public static getPrimitive(clazz: java.lang.Class<any>): java.lang.Class<any>
                        // @ts-ignore
                        public static getReference(clazz: java.lang.Class<any>): java.lang.Class<any>
                        // @ts-ignore
                        public static getPrimitive(classes: java.lang.Class<any>[]): java.lang.Class<any>[]
                        // @ts-ignore
                        public static getReference(classes: java.lang.Class<any>[]): java.lang.Class<any>[]
                        // @ts-ignore
                        public static getPrimitive(objects: java.lang.Object[] | any[]): java.lang.Class<any>[]
                        // @ts-ignore
                        public static getReference(objects: java.lang.Object[] | any[]): java.lang.Class<any>[]
                        // @ts-ignore
                        public static compare(primary: java.lang.Class<any>[], secondary: java.lang.Class<any>[]): boolean
                    }
                }
            }
        }
    }
}
