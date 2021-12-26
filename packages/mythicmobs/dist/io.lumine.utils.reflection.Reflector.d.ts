declare namespace io {
    namespace lumine {
        namespace utils {
            namespace reflection {
                // @ts-ignore
                class Reflector<E> extends java.lang.Object {
                    // @ts-ignore
                    constructor(type: java.lang.Class<any>, ...fields: java.lang.String[] | string[])
                    // @ts-ignore
                    public getInt(object: E, field: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public setInt(object: E, field: java.lang.String | string, val: number /*int*/): void
                    // @ts-ignore
                    public getByte(object: E, field: java.lang.String | string): number /*byte*/
                    // @ts-ignore
                    public setByte(object: E, field: java.lang.String | string, val: number /*byte*/): void
                    // @ts-ignore
                    public getString(object: E, field: java.lang.String | string): string
                    // @ts-ignore
                    public setString(object: E, field: java.lang.String | string, val: java.lang.String | string): void
                    // @ts-ignore
                    public get(object: E, field: java.lang.String | string): any
                    // @ts-ignore
                    public set(object: E, field: java.lang.String | string, val: java.lang.Object | any): void
                    // @ts-ignore
                    public static getConstructor(clazz: java.lang.Class<any>, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>
                    // @ts-ignore
                    public static getConstructor(className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>
                    // @ts-ignore
                    public static instantiateObject(clazz: java.lang.Class<any>, ...arguments: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static instantiateObject(className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, ...arguments: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static getMethod(clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                    // @ts-ignore
                    public static getMethod(className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, methodName: java.lang.String | string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                    // @ts-ignore
                    public static invokeMethod(instance: java.lang.Object | any, methodName: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static invokeMethod(instance: java.lang.Object | any, clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static invokeMethod(instance: java.lang.Object | any, className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, methodName: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static getField(clazz: java.lang.Class<any>, declared: boolean, fieldName: java.lang.String | string): java.lang.reflect.Field
                    // @ts-ignore
                    public static getField(className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, declared: boolean, fieldName: java.lang.String | string): java.lang.reflect.Field
                    // @ts-ignore
                    public static getValue(instance: java.lang.Object | any, clazz: java.lang.Class<any>, declared: boolean, fieldName: java.lang.String | string): any
                    // @ts-ignore
                    public static getValue(instance: java.lang.Object | any, className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, declared: boolean, fieldName: java.lang.String | string): any
                    // @ts-ignore
                    public static getValue(instance: java.lang.Object | any, declared: boolean, fieldName: java.lang.String | string): any
                    // @ts-ignore
                    public static setValue(instance: java.lang.Object | any, clazz: java.lang.Class<any>, declared: boolean, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public static setValue(instance: java.lang.Object | any, className: java.lang.String | string, packageType: io.lumine.utils.reflection.Reflector.PackageType, declared: boolean, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public static setValue(instance: java.lang.Object | any, declared: boolean, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                }
            }
        }
    }
}
