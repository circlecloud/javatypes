declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * Represents a {@link TypeSerializer} for {@link TextTemplate}s. TextTemplates
                     * are serialized in two parts.
                     * <p>First, the template's arguments as defined by
                     * {@link TextTemplate#getArguments()} are serialized to the "arguments" node.
                     * This is where the argument definitions are kept.</p>
                     * <p>Second, the template's text representation as defined by
                     * {@link TextTemplate#toText()} is serialized to the "content" node.</p>
                     * <p>Deserialization is a bit more complicated. We start by loading the
                     * "content" Text and check the root Text element as well as it's children. If
                     * a {@link LiteralText} value is found that is wrapped in curly braces we
                     * check to see if the value inside the braces is defined as an argument in the
                     * "arguments" nodes. If so, we use the name and format from the original
                     * LiteralText and obtain whether the argument is optional from the definition.
                     * This is repeated until there are no more Text children to check and we
                     * return a TextTemplate of the elements we have collected.</p>
                     */
                    // @ts-ignore
                    class TextTemplateConfigSerializer extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public deserialize(type: object, value: ConfigurationNode): org.spongepowered.api.text.TextTemplate
                        // @ts-ignore
                        public serialize(type: object, obj: org.spongepowered.api.text.TextTemplate, value: ConfigurationNode): void
                    }
                }
            }
        }
    }
}
