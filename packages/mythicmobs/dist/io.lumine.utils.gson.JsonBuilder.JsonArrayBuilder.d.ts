declare namespace io {
    namespace lumine {
        namespace utils {
            namespace gson {
                namespace JsonBuilder {
                    // @ts-ignore
                    interface JsonArrayBuilder extends java.util.function.Consumer<JsonElement> {
                        // @ts-ignore
                        accept(value: JsonElement): void
                        // @ts-ignore
                        add(p0: JsonElement, p1: boolean): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        add(value: JsonElement): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(iterable: java.lang.Iterable<T>, copy: boolean): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(iterable: java.lang.Iterable<T>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(stream: java.util.stream.Stream<T>, copy: boolean): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addAll<T extends JsonElement>(stream: java.util.stream.Stream<T>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addSerializables<T extends io.lumine.utils.gson.GsonSerializable>(iterable: java.lang.Iterable<T>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addStrings(iterable: java.lang.Iterable<java.lang.String | string>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addNumbers<T extends java.lang.Number>(iterable: java.lang.Iterable<T>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addBooleans(iterable: java.lang.Iterable<java.lang.Boolean>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        addCharacters(iterable: java.lang.Iterable<java.lang.Character>): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                        // @ts-ignore
                        build(): JsonArray
                    }
                }
            }
        }
    }
}
