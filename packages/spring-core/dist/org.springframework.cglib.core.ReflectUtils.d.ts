declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                /**
                 * @version $Id: ReflectUtils.java,v 1.30 2009/01/11 19:47:49 herbyderby Exp $
                 */
                // @ts-ignore
                class ReflectUtils extends java.lang.Object {
                    // @ts-ignore
                    public static getProtectionDomain(source: java.lang.Class<any>): java.security.ProtectionDomain
                    // @ts-ignore
                    public static getExceptionTypes(member: java.lang.reflect.Member): org.springframework.asm.Type[]
                    // @ts-ignore
                    public static getSignature(member: java.lang.reflect.Member): Signature
                    // @ts-ignore
                    public static findConstructor(desc: java.lang.String | string): java.lang.reflect.Constructor<any>
                    // @ts-ignore
                    public static findConstructor(desc: java.lang.String | string, loader: java.lang.ClassLoader): java.lang.reflect.Constructor<any>
                    // @ts-ignore
                    public static findMethod(desc: java.lang.String | string): java.lang.reflect.Method
                    // @ts-ignore
                    public static findMethod(desc: java.lang.String | string, loader: java.lang.ClassLoader): java.lang.reflect.Method
                    // @ts-ignore
                    public static newInstance(type: java.lang.Class<any>): any
                    // @ts-ignore
                    public static newInstance(type: java.lang.Class<any>, parameterTypes: java.lang.Class<any>[], args: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static newInstance(cstruct: java.lang.reflect.Constructor<any>, args: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public static getConstructor(type: java.lang.Class<any>, parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>
                    // @ts-ignore
                    public static getNames(classes: java.lang.Class<any>[]): string[]
                    // @ts-ignore
                    public static getClasses(objects: java.lang.Object[] | any[]): java.lang.Class<any>[]
                    // @ts-ignore
                    public static findNewInstance(iface: java.lang.Class<any>): java.lang.reflect.Method
                    // @ts-ignore
                    public static getPropertyMethods(properties: java.beans.PropertyDescriptor[], read: boolean, write: boolean): java.lang.reflect.Method[]
                    // @ts-ignore
                    public static getBeanProperties(type: java.lang.Class<any>): java.beans.PropertyDescriptor[]
                    // @ts-ignore
                    public static getBeanGetters(type: java.lang.Class<any>): java.beans.PropertyDescriptor[]
                    // @ts-ignore
                    public static getBeanSetters(type: java.lang.Class<any>): java.beans.PropertyDescriptor[]
                    // @ts-ignore
                    public static findDeclaredMethod(type: java.lang.Class<any>, methodName: java.lang.String | string, parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                    // @ts-ignore
                    public static addAllMethods(type: java.lang.Class<any>, list: java.util.List<any> | Array<any>): Array<any>
                    // @ts-ignore
                    public static addAllInterfaces(type: java.lang.Class<any>, list: java.util.List<any> | Array<any>): Array<any>
                    // @ts-ignore
                    public static findInterfaceMethod(iface: java.lang.Class<any>): java.lang.reflect.Method
                    // @ts-ignore
                    public static defineClass(className: java.lang.String | string, b: number /*byte*/[], loader: java.lang.ClassLoader): java.lang.Class<any>
                    // @ts-ignore
                    public static defineClass(className: java.lang.String | string, b: number /*byte*/[], loader: java.lang.ClassLoader, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>
                    // @ts-ignore
                    public static defineClass(className: java.lang.String | string, b: number /*byte*/[], loader: java.lang.ClassLoader, protectionDomain: java.security.ProtectionDomain, contextClass: java.lang.Class<any>): java.lang.Class<any>
                    // @ts-ignore
                    public static findPackageProtected(classes: java.lang.Class<any>[]): number /*int*/
                    // @ts-ignore
                    public static getMethodInfo(member: java.lang.reflect.Member, modifiers: number /*int*/): MethodInfo
                    // @ts-ignore
                    public static getMethodInfo(member: java.lang.reflect.Member): MethodInfo
                    // @ts-ignore
                    public static getClassInfo(clazz: java.lang.Class<any>): ClassInfo
                    // @ts-ignore
                    public static findMethods(namesAndDescriptors: java.lang.String[] | string[], methods: java.lang.reflect.Method[]): java.lang.reflect.Method[]
                }
            }
        }
    }
}
