/// <reference path="./typings/index.d.ts" />

String.prototype.repeat = function (count) {
    var str = this, result
    count = Number(count)
    if (count < 0) throw new RangeError("Count must be >= 0")
    if (!isFinite(count)) throw new RangeError("Count must be < ∞")

    result = ""
    while (count) {
        if (count % 2) result += str
        if (count > 1) str += str
        // eslint-disable-next-line no-bitwise
        count >>= 1
    }
    return result
}

interface JavaAdapter {
    type(clazz: string): any
    from<T>(javaObj: T[]): T[]
    to(array: any[], type?: any): any
    extend(...parentTypes: any[]): any
    synchronized(func: () => void, lock: any): Function
    asJSONCompatible<T>(obj: T): T
    //@ts-ignore
    // function super(type: any);
}

// @ts-ignore
let Packages: any
// @ts-ignore
let Java: JavaAdapter
// @ts-ignore
const JavaString = Java.type('java.lang.String')
console = {} as any
console['log'] = (...args: any[]) => {
    Packages.java.lang.System.out.println(JavaString.format('%s '.repeat(args.length), args))
}

// @ts-ignore
function start(root: com.sun.javadoc.RootDoc) {
    console.log('start generate java d.ts...')
    for (const classes of root.classes()) {
        console.log('================================================')
        console.log('====== com.sun.javadoc.ClassDoc Info Table =====')
        console.log('================================================')
        console.log('qualifiedName:', classes.qualifiedName())
        printType(classes, 'classes')
        for (const value of classes.typeParameters()) {
            printTypeVariable(value, 'typeParameters')
        }
        for (const inter of classes.interfaceTypes()) {
            printType(inter, 'interfaceTypes')
        }
        printType(classes.superclassType(), 'superclassType')
        for (const enumField of classes.enumConstants()) {
            printField(enumField, 'enumField ' + enumField.name())
        }
        for (const field of classes.fields()) {
            printField(field, 'field ' + field.name())
        }
        for (const method of classes.methods()) {
            printMethod(method, 'method ' + method.name())
        }
    }
    return true
}

function printMethod(method: com.sun.javadoc.MethodDoc, prefix: string = "") {
    console.log(prefix, '===== com.sun.javadoc.MethodDoc Info Table =====')
    console.log(prefix, 'toString:', method)
    console.log(prefix, 'modifiers:', method.modifiers())
    console.log(prefix, 'commentText:', method.commentText())
    console.log(prefix, 'name:', method.name())
    console.log(prefix, 'signature:', method.signature())
    console.log(prefix, 'qualifiedName:', method.qualifiedName())
    printType(method.receiverType(), prefix + ' receiverType')
    for (const param of method.parameters()) {
        printParam(param, prefix + ' param')
    }
    for (const typeParam of method.typeParameters()) {
        printTypeVariable(typeParam, prefix + ' typeParameters')
    }
    printType(method.returnType(), prefix + ' returnType')
}

function printParam(param: com.sun.javadoc.Parameter, prefix: string = "") {
    console.log(prefix, '===== com.sun.javadoc.Parameter Info Table =====')
    console.log(prefix, 'toString:', param)
    console.log(prefix, 'name:', param.name())
    console.log(prefix, 'typeName:', param.typeName())
    printType(param.type(), prefix + ' type')
}

function printField(field: com.sun.javadoc.FieldDoc, prefix: string = "") {
    console.log(prefix, '===== com.sun.javadoc.FieldDoc Info Table =====')
    console.log(prefix, 'toString:', field)
    console.log(prefix, 'modifiers:', field.modifiers())
    console.log(prefix, 'isPublic:', field.isPublic())
    console.log(prefix, 'isStatic:', field.isStatic())
    console.log(prefix, 'commentText:', field.commentText())
    console.log(prefix, 'constantValue:', field.constantValue())
    console.log(prefix, 'constantValueExpression:', field.constantValueExpression())
    printType(field.type(), prefix + ' type')
}

function printType(type: com.sun.javadoc.Type, prefix: string = '') {
    if (!type) { return }
    console.log(prefix, '===== com.sun.javadoc.Type Info Table =====')
    console.log(prefix, 'toString:', type.toString())
    //@ts-ignore
    console.log(prefix, 'isOrdinaryClass:', type.isOrdinaryClass && type.isOrdinaryClass())
    console.log(prefix, 'typeName:', type.typeName())
    console.log(prefix, 'simpleTypeName:', type.simpleTypeName())
    console.log(prefix, 'qualifiedTypeName:', type.qualifiedTypeName())
    console.log(prefix, 'dimension:', type.dimension())
    console.log(prefix, 'getElementType:', type.getElementType())
    let typeVariable = type.asTypeVariable()
    typeVariable && printTypeVariable(typeVariable, prefix + ' typeVariable')
    let parameterizedType = type.asParameterizedType()
    parameterizedType && printParameterizedType(parameterizedType, prefix + ' parameterizedType')
}

function printParameterizedType(parameterizedType: com.sun.javadoc.ParameterizedType, prefix: string = '') {
    console.log(prefix, '====== com.sun.javadoc.ParameterizedType Info Table =====')
    for (const paramType of parameterizedType.typeArguments()) {
        printType(paramType, prefix + ' typeArguments')
    }
}

function printTypeVariable(typeVariable: com.sun.javadoc.TypeVariable, prefix: string = '') {
    console.log(prefix, '====== com.sun.javadoc.TypeVariable Info Table =====')
    console.log(prefix, 'toString:', typeVariable.toString())
    let bounds = typeVariable.bounds()
    for (const bound of bounds) {
        printType(bound, prefix + ' bound')
    }
    printDoc(typeVariable.owner(), prefix + ' owner')
}

function printDoc(doc: com.sun.javadoc.ProgramElementDoc, prefix: string = '') {
    console.log(prefix, '===== com.sun.javadoc.ProgramElementDoc =====')
    console.log(prefix, 'toString:', doc)
    console.log(prefix, 'commentText:', doc.commentText())
    console.log(prefix, 'name:', doc.name())
    console.log(prefix, 'inlineTags:', doc.inlineTags())
    console.log(prefix, 'qualifiedName:', doc.qualifiedName())
    console.log(prefix, 'modifiers:', doc.modifiers())
    console.log(prefix, 'modifierSpecifier:', doc.modifierSpecifier())
    for (const tag of doc.tags()) {
        printTag(tag, prefix + ' tags')
    }
}

function printTag(tag: com.sun.javadoc.Tag, prefix: string = '') {
    console.log(prefix, '===== com.sun.javadoc.Tag =====')
    console.log(prefix, 'name:', tag.name())
    console.log(prefix, 'text:', tag.text())
    console.log(prefix, 'holder:', tag.holder())
}