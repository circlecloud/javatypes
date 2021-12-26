declare namespace io {
    namespace lumine {
        namespace utils {
            namespace gson {
                // @ts-ignore
                class JsonBuilder extends java.lang.Object {
                    // @ts-ignore
                    public static object(object: JsonObject, copy: boolean): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                    // @ts-ignore
                    public static object(object: JsonObject): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                    // @ts-ignore
                    public static object(): io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder
                    // @ts-ignore
                    public static array(array: JsonArray, copy: boolean): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                    // @ts-ignore
                    public static array(array: JsonArray): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                    // @ts-ignore
                    public static array(): io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder
                    // @ts-ignore
                    public static primitive(value: java.lang.String | string): JsonElement
                    // @ts-ignore
                    public static primitive(value: java.lang.Number): JsonElement
                    // @ts-ignore
                    public static primitive(value: java.lang.Boolean): JsonElement
                    // @ts-ignore
                    public static primitive(value: java.lang.Character): JsonElement
                    // @ts-ignore
                    public static nullValue(): JsonNull
                    // @ts-ignore
                    public static primitiveNonNull(value: java.lang.String | string): JsonPrimitive
                    // @ts-ignore
                    public static primitiveNonNull(value: java.lang.Number): JsonPrimitive
                    // @ts-ignore
                    public static primitiveNonNull(value: java.lang.Boolean): JsonPrimitive
                    // @ts-ignore
                    public static primitiveNonNull(value: java.lang.Character): JsonPrimitive
                    // @ts-ignore
                    public static collectToObject<T>(keyMapper: java.util.function$.Function<any, java.lang.String | string>, valueMapper: java.util.function$.Function<any, JsonElement>): java.util.stream.Collector<T, io.lumine.utils.gson.JsonBuilder.JsonObjectBuilder, JsonObject>
                    // @ts-ignore
                    public static collectToArray<T>(valueMapper: java.util.function$.Function<any, JsonElement>): java.util.stream.Collector<T, io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder, JsonArray>
                    // @ts-ignore
                    public static collectToArray(): java.util.stream.Collector<JsonElement, io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder, JsonArray>
                    // @ts-ignore
                    public static collectSerializablesToArray(): java.util.stream.Collector<io.lumine.utils.gson.GsonSerializable, io.lumine.utils.gson.JsonBuilder.JsonArrayBuilder, JsonArray>
                }
            }
        }
    }
}
