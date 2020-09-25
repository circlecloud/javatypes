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

function writeFile(path: string, content: string) {
    let paths = Packages.java.nio.file.Paths.get(dist, path)
    paths.toFile().getParentFile().mkdirs()
    Packages.java.nio.file.Files.write(paths, new JavaString(content).getBytes("UTF-8"))
}

let dist = 'javadoc'

//@ts-ignore
function start(root: com.sun.javadoc.RootDoc) {
    console.log('start generate java d.ts...')
    let options = root.options()
    for (const index in options) {
        let option = options[index]
        if (option[0] == "-d") {
            dist = option[1]
            console.log('set ouput dir: ' + dist)
        }
    }
    let rootClasses = root.classes()
    for (const classes of rootClasses) {
        parseClass(classes)
    }
    let indexString = ''
    for (const name of Java.from(Packages.java.nio.file.Paths.get(dist).toFile().list((_dir: any, name: string) => name.endsWith('.d.ts') && name != "index.d.ts")).sort()) {
        indexString += `/// <reference path="./${name}" />\n`
    }
    writeFile('index.d.ts', indexString)
    return true
}

interface Options {
    content: string
    brackets: number
    members: { [key: string]: any }
    printBrackets: (str?: string) => string
    printAndAdd: (str: string) => string
    printTsIgnore: () => string
}

function parseClass(classes: com.sun.javadoc.ClassDoc) {
    let options: Options = {
        content: '',
        brackets: 1,
        members: {},
        printBrackets: (str: string = '') => {
            return '    '.repeat(options.brackets) + str
        },
        printAndAdd: (str) => {
            str = options.printBrackets() + str
            options.brackets++
            return str
        },
        printTsIgnore: () => {
            return options.printBrackets() + '// @ts-ignore'
        }
    }
    let classTypeFile = `${buildClassHeader(classes, options)}${buildClassBody(classes, options)}${buildClassFooter(classes, options)}`
    let fileName = `${classes.qualifiedName()}.d.ts`
    writeFile(fileName, classTypeFile)
    return fileName
}

function buildClassHeader(classes: com.sun.javadoc.ClassDoc, options: Options) {
    let qnas: string[] = classes.qualifiedName().split(".")
    qnas = qnas.slice(0, qnas.length - 1)
    return `${buildNamespace(qnas, options)}${formatDoc(classes, options.brackets)}${buildClassName(classes, options)}\n`
}

function buildNamespace(nms: string[], options: Options) {
    return `declare namespace ${mappingNamespace(nms[0])} {
${nms.slice(1, nms.length).map((nm) => options.printAndAdd(`namespace ${mappingNamespace(nm)} {`)).join('\n')}\n`
}

function buildClassName(classes: com.sun.javadoc.ClassDoc, options: Options) {
    return `${options.printTsIgnore()}
${classes.isInterface() ? buildInterfaceName(classes, options) : buildClassesName(classes, options)}`
}

function buildBaiscClassName(classes: com.sun.javadoc.ClassDoc) {
    let className = classes.toString()
    let classTypeName = className.startsWith(classes.qualifiedTypeName()) ? className.substring(classes.qualifiedTypeName().lastIndexOf('.') + 1, className.length) : classes.simpleTypeName()
    return classTypeName.replace('extends <any>', 'extends object')
}

function buildInterfaceName(classes: com.sun.javadoc.ClassDoc, options: Options) {
    return options.printAndAdd(`interface ${buildBaiscClassName(classes)}${buildInterface(classes, classes.interfaceTypes())} {`)
}

// if (classes.isInterface()) {
//     return `${options.printTsIgnore()}
// ${}`
// } else {
//     let superclass = classes.superclassType()
//     return `${options.printTsIgnore()}
// ${options.printAndAdd(`${classes.isAbstract() ? 'abstract ' : ''}class ${className}${superclass ?  : ''}${buildInterface(classes, interfaces)} {`)}`
// }

function buildClassesName(classes: com.sun.javadoc.ClassDoc, options: Options) {
    let modifiers = ''
    if (classes.isAbstract()) {
        modifiers += 'abstract '
    }
    return options.printAndAdd(`${modifiers}class ${buildBaiscClassName(classes)}${buildExtendsClass(classes, options)}${buildInterface(classes, classes.interfaceTypes())} {`)
}

function buildExtendsClass(classes: com.sun.javadoc.ClassDoc, options: Options) {
    let superclassType = classes.superclassType()
    if (!superclassType) return ''
    return ` extends ${buildParentClassName(superclassType)}`
}

function buildInterface(classes: com.sun.javadoc.ClassDoc, interfaces: com.sun.javadoc.Type[]) {
    if (!interfaces || !interfaces.length) return ''
    let linkKeywork = classes.isInterface() ? ' extends ' : ' implements '
    return `${linkKeywork}${Java.from(interfaces).map(inter => buildParentClassName(inter)).join(', ')}`
}

function buildParentClassName(type: com.sun.javadoc.Type) {
    let parameterizedType = type.asParameterizedType()
    return `${type.qualifiedTypeName() == "<any>" ? "java.lang.Object" : type.qualifiedTypeName()}${parameterizedType ? `<${Java.from(parameterizedType.typeArguments()).map(t => mappingType(t)).join(', ') || 'any'}>` : ''}`
}

function buildClassBody(classes: com.sun.javadoc.ClassDoc, options: Options) {
    let body = ''
    if (classes.constructors().length) {
        body += buildConstructor(classes, options) + '\n'
    }
    let methods = ''
    if (classes.methods().length) {
        methods += buildMethods(classes, options) + '\n'
    }
    if (classes.enumConstants().length) {
        body += buildFields(classes, Java.from(classes.enumConstants()), options) + '\n'
    }
    if (classes.fields().length) {
        body += buildFields(classes, Java.from(classes.fields()), options) + '\n'
    }
    body += methods
    return body
}

function buildConstructor(classes: com.sun.javadoc.ClassDoc, options: Options) {
    return Java.from(classes.constructors()).map((constructor) => `${formatDoc(constructor, options.brackets)}${options.printTsIgnore()}
${options.printBrackets(`constructor(${formatParameters(constructor)})`)}`).join('\n')
}

function buildFields(classes: com.sun.javadoc.ClassDoc, fields: com.sun.javadoc.FieldDoc[], options: Options) {
    return fields.filter(field => !options.members[field.name()])
        .map(field => `${formatDoc(field, options.brackets)}${options.printTsIgnore()}
${buildField(classes, field, options)}`).join('\n')
}

function buildField(classes: com.sun.javadoc.ClassDoc, field: com.sun.javadoc.FieldDoc, options: Options) {
    return `${buildFieldModifier(classes, field, options)}${field.name()}: ${mappingType(field.type())}`
}

function buildBasicModifier(classes: com.sun.javadoc.ClassDoc, modifier: com.sun.javadoc.FieldDoc | com.sun.javadoc.MethodDoc, options: Options) {
    let modifiers = ''
    if (!classes.isOrdinaryClass() && !classes.isEnum()) { return options.printBrackets() }
    // public | private | static => method | field | enum
    if (modifier.isMethod() || modifier.isField() || modifier.isEnumConstant()) {
        if (modifier.isPublic()) {
            modifiers += 'public '
        } else if (modifier.isPrivate()) {
            modifiers += 'private '
        }
        if (modifier.isStatic()) {
            modifiers += 'static '
        }
    }
    return options.printBrackets(modifiers)
}

function buildFieldModifier(classes: com.sun.javadoc.ClassDoc, modifier: com.sun.javadoc.FieldDoc, options: Options) {
    let modifiers = buildBasicModifier(classes, modifier, options)
    if (modifier.isFinal()) {
        modifiers += 'readonly '
    }
    return modifiers
}

function buildMethodModifier(classes: com.sun.javadoc.ClassDoc, modifier: com.sun.javadoc.MethodDoc, options: Options) {
    let modifiers = buildBasicModifier(classes, modifier, options)
    // abstract => abstract class | abstract method
    if (modifier.isAbstract() && classes.isAbstract() && !classes.isInterface()) {
        modifiers += 'abstract '
    }
    return modifiers
}

function buildMethods(classes: com.sun.javadoc.ClassDoc, options: Options) {
    return Java.from(classes.methods()).map((method) => {
        options.members[method.name()] = method
        return `${formatDoc(method, options.brackets)}${options.printTsIgnore()}
${buildMethodModifier(classes, method, options)}${method.name()}${buildTypeParameters(method)}(${formatParameters(method)}): ${mappingReturnType(method)}`
    }).join('\n')
}

function buildTypeParameters(executableMemberDoc: com.sun.javadoc.ExecutableMemberDoc) {
    return executableMemberDoc.typeParameters().length ? `<${Java.from(executableMemberDoc.typeParameters()).map(t => t.toString().replace(/<.* super [A-Z].*>/ig, '').replace("<any>", "java.lang.Object")).join(', ')}>` : ''
}

function buildClassFooter(_classes: com.sun.javadoc.ClassDoc, options: Options) {
    let footer = ''
    for (let index = 0; index < options.brackets; index++) {
        footer += `${'    '.repeat(options.brackets - index - 1)}}\n`
    }
    return footer
}

const nameMap = {}
nameMap['function'] = 'func'
nameMap['in'] = 'input'
nameMap['var'] = 'variable'
nameMap['enum'] = 'enumerate'
nameMap['export'] = 'exporter'
nameMap['is'] = 'jis'
nameMap['with'] = 'jwith'

function mappingNamespace(name: string) {
    return typeof nameMap[name] == "string" ? name + '$' : name || ''
}

function mappingName(name: string) {
    return typeof nameMap[name] == "string" ? nameMap[name] : name || ''
}

const typeMap = []
typeMap['int'] = 'number /*int*/'
typeMap['java.lang.Integer'] = "number"
typeMap['byte'] = 'number /*byte*/'
typeMap['java.lang.Byte'] = "number"
typeMap['double'] = 'number /*double*/'
typeMap['java.lang.Double'] = "number"
typeMap['short'] = 'number /*short*/'
typeMap['java.lang.Short'] = "number"
typeMap['float'] = 'number /*float*/'
typeMap['java.lang.Float'] = "number"
typeMap['long'] = 'number /*long*/'
typeMap['java.lang.Long'] = "number"
typeMap['<any>'] = 'any'
typeMap['char'] = 'string'
typeMap['java.lang.String'] = "string"
typeMap['java.lang.Object'] = "any"
typeMap['java.util.List'] = "Array"
typeMap['java.util.Set'] = "Array"
typeMap['java.util.Collection'] = "Array"
typeMap['java.lang.Throwable'] = "Error"
// typeMap['java.util.Date'] = 'any /*java.util.Date*/'
// typeMap['java.util.List'] = 'any[] /*java.util.List*/'
// typeMap['java.util.Set'] = 'any[] /*java.util.Set*/'
// typeMap['java.util.Collection'] = 'any[] /*java.util.Collection*/'
// typeMap['java.util.Map'] = 'Map<any, any> /*java.util.Map*/'

type JavaType = {
    qualifiedName: string,
    name: string,
    type: string
}

function mappingType(type: com.sun.javadoc.Type, isParam: boolean = true, keepOrogin = false): string {
    if (!type || !type.toString()) { return 'any' }
    let parameterizedType = type.asParameterizedType()
    let outType = typeMap[type.qualifiedTypeName()] || type.qualifiedTypeName() || 'any'
    let javaType = mappingClassName(type) + `${parameterizedType ? `<${Java.from(parameterizedType.typeArguments()).map(t => mappingType(t)).join(', ') || 'any'}>` : ''}`
    let tsType = keepOrogin ? type.qualifiedTypeName() : javaType.replace(type.qualifiedTypeName(), outType).replace('function', 'function$')
    let result = javaType.indexOf('function.') == -1 && javaType !== tsType && (type.toString() as any).contains('.') && isParam ? `${javaType}${type.dimension()} | ${tsType}${type.dimension()}` : `${tsType}${type.dimension()}`
    return result.replace(/\? extends /ig, '').replace(/\? super /ig, '').replace('?', 'any')
}

function mappingClassName(type: com.sun.javadoc.Type, isReturn: boolean = false) {
    return type.qualifiedTypeName() == "<any>" ? "object" : type.qualifiedTypeName()
}

function formatDoc(doc: com.sun.javadoc.Doc, closeBuk: number) {
    if (!doc) return ''
    let middleDoc = ''
    for (const line of doc.commentText().split('\n')) {
        if (line.trim().length != 0) {
            middleDoc += `${'    '.repeat(closeBuk)} * ${line.trim()}\n`
        }
    }
    let tags = doc.tags()
    for (const index in tags) {
        let tag = tags[index]
        let tagTexts = tag.text().replace('@', '#').split('\n')
        middleDoc += `${'    '.repeat(closeBuk)} * ${tag.name()} ${tagTexts.shift()}\n`
        for (const line of tagTexts) {
            middleDoc += `${'    '.repeat(closeBuk)} * ${line}\n`
        }
    }
    return middleDoc.length > 0 ? `${'    '.repeat(closeBuk)}/**\n${middleDoc}${'    '.repeat(closeBuk)} */\n` : ''
}

function formatParameters(method: com.sun.javadoc.ExecutableMemberDoc) {
    let params = method.parameters()
    if (!params.length) return ''
    let tempParam = ''
    for (let i = 0; i < params.length - 1; i++) {
        const p = params[i]
        tempParam += `${mappingName(p.name())}: ${mappingType(p.type())}, `
    }
    let lastParam = params[params.length - 1]
    tempParam += `${`${method.signature()}`.indexOf("...") != -1 ? "..." : ""}${mappingName(lastParam.name())}: ${mappingType(lastParam.type())}`
    return tempParam
}

function mappingReturnType(method: com.sun.javadoc.MethodDoc) {
    let type = method.returnType()
    return type.asTypeVariable() ? type.qualifiedTypeName() : mappingType(type, false)
}
