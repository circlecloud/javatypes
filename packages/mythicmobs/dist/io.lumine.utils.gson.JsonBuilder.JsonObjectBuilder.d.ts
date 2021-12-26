declare namespace io {
    namespace lumine {
        namespace utils {
            namespace gson {
                namespace JsonBuilder {
                    // @ts-ignore
                    interface JsonObjectBuilder extends java.util.function.BiConsumer<java.lang.String | string, JsonElement>, java.util.function.Consumer<java.util.Map.Entry<java.lang.String | string, JsonElement>> {
                        // @ts-ignore
                        accept(entry: java.util.Map.Entry<java.lang.String | string, JsonElement>): void
                        // @ts-ignore
                        accept(property: java.lang.String | string, value: JsonElement): void
                        // @ts-ignore
                        add(p0: java.lang.String | string, p1: JsonElement, p2: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        add(property: java.lang.String | string, value: JsonElement): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addIfAbsent(p0: java.lang.String | string, p1: JsonElement, p2: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addIfAbsent(property: java.lang.String | string, value: JsonElement): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>, deepCopy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(stream: java.util.stream.Stream<java.util.Map.Entry<java.lang.String | string, T>>, deepCopy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(stream: java.util.stream.Stream<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAll(object: JsonObject, deepCopy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAll(object: JsonObject): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllSerializables<T extends io.lumine.utils.gson.GsonSerializable>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllStrings(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.String | string>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllNumbers<T extends java.lang.Number>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllBooleans(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.Boolean>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllCharacters(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.Character>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllIfAbsent<T extends JsonElement>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>, deepCopy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllIfAbsent<T extends JsonElement>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllIfAbsent<T extends JsonElement>(stream: java.util.stream.Stream<java.util.Map.Entry<java.lang.String | string, T>>, deepCopy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllIfAbsent<T extends JsonElement>(stream: java.util.stream.Stream<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllIfAbsent(object: JsonObject, deepCopy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllIfAbsent(object: JsonObject): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllSerializablesIfAbsent<T extends io.lumine.utils.gson.GsonSerializable>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllStringsIfAbsent(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.String | string>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllNumbersIfAbsent<T extends java.lang.Number>(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, T>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllBooleansIfAbsent(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.Boolean>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        addAllCharactersIfAbsent(iterable: java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.Character>>): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                        // @ts-ignore
                        build(): JsonObject
                    }
                }
            }
        }
    }
}
